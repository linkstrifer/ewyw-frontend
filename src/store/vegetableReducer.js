import axios from 'axios'

const VEGETABLES_LOADING = 'VEGETABLES_LOADING'
const VEGETABLES_SUCCESS = 'VEGETABLES_SUCCESS'
const VEGETABLES_ERROR = 'VEGETABLES_ERROR'
const VEGETABLES_FINISH = 'VEGETABLES_FINISH'

export function getVegetables(){
  return async function(dispatch){
    dispatch({ type: VEGETABLES_LOADING })
    try {
      const { data } = await axios({
        method: 'GET',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/vegetables'
      })
      dispatch({ type: VEGETABLES_SUCCESS, payload: data})
    } catch(error){
      dispatch({ type: VEGETABLES_ERROR, payload: error})
    } finally{
      dispatch({ type: VEGETABLES_FINISH })
    }
  }
}

const initialState = {
  vegetables: [],
  loading: false,
  error: null,
}

export function vegetableReducer(state = initialState, action){
  switch(action.type){
    case VEGETABLES_LOADING:
      return {
        ...state,
        loading: true,
      }
    case VEGETABLES_SUCCESS:
      return {
        ...state,
        vegetables: action.payload,
      }
    case VEGETABLES_ERROR:
      return {
        ...state,
        vegetables: action.payload,
      }
    case VEGETABLES_FINISH:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}