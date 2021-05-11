import axios from 'axios'

const CARBOHYDRATES_LOADING = 'CARBOHYDRATES_LOADING'
const CARBOHYDRATES_SUCCESS = 'CARBOHYDRATES_SUCCESS'
const CARBOHYDRATES_ERROR = 'CARBOHYDRATES_ERROR'
const CARBOHYDRATES_FINISH = 'CARBOHYDRATES_FINISH'

export function getCarbohydrates(){
  return async function(dispatch){
    dispatch({ type: CARBOHYDRATES_LOADING })
    try {
      const { data } = await axios({
        method: 'GET',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/carbohydrates'
      })
      dispatch({ type: CARBOHYDRATES_SUCCESS, payload: data})
    } catch(error){
      dispatch({ type: CARBOHYDRATES_ERROR, payload: error})
    } finally{
      dispatch({ type: CARBOHYDRATES_FINISH })
    }
  }
}

const initialState = {
  carbohydrates: [],
  loading: false,
  error: null,
}

export function carbohydrateReducer(state = initialState, action){
  switch(action.type){
    case CARBOHYDRATES_LOADING:
      return {
        ...state,
        loading: true,
      }
    case CARBOHYDRATES_SUCCESS:
      return {
        ...state,
        carbohydrates: action.payload,
      }
    case CARBOHYDRATES_ERROR:
      return {
        ...state,
        carbohydrates: action.payload,
      }
    case CARBOHYDRATES_FINISH:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}