import axios from 'axios'

const FOODS_LOADING = 'FOODS_LOADING'
const FOODS_SUCCESS = 'FOODS_SUCCESS'
const FOODS_ERROR = 'FOODS_ERROR'
const FOODS_FINISH = 'FOODS_FINISH'

export function getFoods(restaurantId){
  return async function(dispatch){
    dispatch({ type: FOODS_LOADING })
    try {
      const { data } = await axios({
        method: 'GET',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: `/foods/${restaurantId}`
      })
      dispatch({ type: FOODS_SUCCESS, payload: data})
    } catch(error){
      dispatch({ type: FOODS_ERROR, payload: error})
    } finally{
      dispatch({ type: FOODS_FINISH })
    }
  }
}

const initialState = {
  foods: [],
  loading: false,
  error: null,
}

export function foodReducer(state = initialState, action){
  switch(action.type){
    case FOODS_LOADING:
      return {
        ...state,
        loading: true,
      }
    case FOODS_SUCCESS:
      return {
        ...state,
        foods: action.payload,
      }
    case FOODS_ERROR:
      return {
        ...state,
        foods: action.payload,
      }
    case FOODS_FINISH:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}

