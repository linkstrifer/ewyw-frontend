import axios from 'axios'
import { history } from '../utils/history'
const CHANGE_NAME_CLIENT = 'CHANGE_NAME_CLIENT'
const CHANGE_DIRECTION_CLIENT = 'CHANGE_DIRECTION_CLIENT'
const CHANGE_PHONE_CLIENT = 'CHANGE_PHONE_CLIENT'
const CLIENT_LOADING = 'CLIENT_LOADING'
const CLIENT_ERROR = 'CLIENT_ERROR'
const CLIENT_LOADED = 'CLIENT_LOADED'
const CLIENT_FINISHED = 'CLIENT_FINISHED'

export function getClient(){
  return async function(dispatch){
    dispatch({ type: CLIENT_LOADING})
    dispatch({ type: CLIENT_ERROR, payload: ''})
    try {
      const token = localStorage.getItem('token')

      const {data} = await axios({
        method: 'GET',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/clients/client',
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      })
      dispatch({ type: CLIENT_LOADED, payload: data.client})
    } catch (error){
        dispatch({ type: CLIENT_ERROR, payload: error.message })
        if(error.response !== undefined && error.message.request.status === 401){
          localStorage.removeItem('token')
          alert('Su sesión expiró, ingrese nuevamente')
          history.pushState('/landingpage')
        }
    } finally {
        dispatch({ type: CLIENT_FINISHED })
    }
  }
}


export function changeName(value){
  return {
    type: CHANGE_NAME_CLIENT,
    payload: value,
  }
}

export function changeDirection(value){
  return {
    type: CHANGE_DIRECTION_CLIENT,
    payload: value,
  }
}

export function changePhone(value){
  return {
    type: CHANGE_PHONE_CLIENT,
    payload: value,
  }
}

const initialState = {
  name: '',
  direction: '',
  phone: '',
  client: {},
}

export function clientReducer(state = initialState, action){
  switch(action.type){
    case CHANGE_NAME_CLIENT:
      return {
        ...state,
        name: action.payload,
      }
    case CHANGE_DIRECTION_CLIENT:
      return {
        ...state,
        direction: action.payload,
      }
    case CHANGE_PHONE_CLIENT:
      return {
        ...state,
        phone: action.payload,
      }
    case CLIENT_LOADING:
      return {
        ...state,
        loading: action.payload,
      }
    case CLIENT_LOADED:
      return {
        ...state,
        client: action.payload,
      }
    case CLIENT_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    case CLIENT_FINISHED:
      return {
        ...state,
        loading: action.payload,
      }
    default:
      return state
  }
}