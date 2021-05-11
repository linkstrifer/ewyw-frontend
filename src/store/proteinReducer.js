import axios from 'axios'

const PROTEINS_LOADING = 'PROTEINS_LOADING'
const PROTEINS_SUCCESS = 'PROTEINS_SUCCESS'
const PROTEINS_ERROR = 'PROTEINS_ERROR'
const PROTEINS_FINISH = 'PROTEINS_FINISH'

export function getProteins(){
  return async function(dispatch){
    dispatch({ type: PROTEINS_LOADING })
    try {
      const { data } = await axios({
        method: 'GET',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/proteins'
      })
      dispatch({ type: PROTEINS_SUCCESS, payload: data})
    } catch(error){
      dispatch({ type: PROTEINS_ERROR, payload: error})
    } finally{
      dispatch({ type: PROTEINS_FINISH })
    }
  }
}

const initialState = {
  proteins: [],
  loading: false,
  error: null,
}

export function proteinReducer(state = initialState, action){
  switch(action.type){
    case PROTEINS_LOADING:
      return {
        ...state,
        loading: true,
      }
    case PROTEINS_SUCCESS:
      return {
        ...state,
        proteins: action.payload,
      }
    case PROTEINS_ERROR:
      return {
        ...state,
        proteins: action.payload,
      }
    case PROTEINS_FINISH:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}