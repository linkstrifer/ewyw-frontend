const CHANGE_NAME = 'CHANGE_NAME'
const CHANGE_DIRECTION = 'CHANGE_DIRECTION'
const CHANGE_PHONE = 'CHANGE_PHONE'

export function changeName(value){
  return {
    type: CHANGE_NAME,
    payload: value,
  }
}

export function changeDirection(value){
  return {
    type: CHANGE_DIRECTION,
    payload: value,
  }
}

export function changePhone(value){
  return {
    type: CHANGE_PHONE,
    payload: value,
  }
}

const initialState = {
  name: '',
  direction: '',
  phone: '',
}

export function restaurantReducer(state = initialState, action){
  switch(action.type){
    case CHANGE_NAME:
      return {
        ...state,
        name: action.payload,
      }
    case CHANGE_DIRECTION:
      return {
        ...state,
        direction: action.payload,
      }
    case CHANGE_PHONE:
      return {
        ...state,
        phone: action.payload,
      }
    default:
      return state
  }
}