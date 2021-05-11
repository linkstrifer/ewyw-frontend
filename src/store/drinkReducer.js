import axios from 'axios'

const DRINKS_LOADING = 'DRINKS_LOADING'
const DRINKS_SUCCESS = 'DRINKS_SUCCESS'
const DRINKS_ERROR = 'DRINKS_ERROR'
const DRINKS_FINISH = 'DRINKS_FINISH'

export function getDrinks(){
  return async function(dispatch){
    dispatch({ type: DRINKS_LOADING })
    try {
      const { data } = await axios({
        method: 'GET',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/drinks'
      })
      dispatch({ type: DRINKS_SUCCESS, payload: data})
    } catch(error){
      dispatch({ type: DRINKS_ERROR, payload: error})
    } finally{
      dispatch({ type: DRINKS_FINISH })
    }
  }
}

const initialState = {
  drinks: [],
  loading: false,
  error: null,
}

export function drinkReducer(state = initialState, action){
  switch(action.type){
    case DRINKS_LOADING:
      return {
        ...state,
        loading: true,
      }
    case DRINKS_SUCCESS:
      return {
        ...state,
        drinks: action.payload,
      }
    case DRINKS_ERROR:
      return {
        ...state,
        drinks: action.payload,
      }
    case DRINKS_FINISH:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}