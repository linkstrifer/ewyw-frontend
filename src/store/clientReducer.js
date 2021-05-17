const CHANGE_NAME_CLIENT = 'CHANGE_NAME_CLIENT'
const CHANGE_DIRECTION_CLIENT = 'CHANGE_DIRECTION_CLIENT'
const CHANGE_PHONE_CLIENT = 'CHANGE_PHONE_CLIENT'

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
    default:
      return state
  }
}