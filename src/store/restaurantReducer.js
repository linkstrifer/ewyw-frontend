const CHANGE_NAME = 'CHANGE_NAME'
const CHANGE_DIRECTION = 'CHANGE_DIRECTION'
const CHANGE_PHONE = 'CHANGE_PHONE'
const CHANGE_FOODTYPE = 'CHANGE_FOODTYPE'
const CHANGE_FOODNAME = 'CHANGE_FOODNAME'
const CHANGE_FOODCUT = 'CHANGE_FOODCUT'
const CHANGE_FOODPREPARATION = 'CHANGE_FOODPREPARATION'
const CHANGE_FOODQUANTITY = 'CHANGE_FOODQUANTITY'
const CHANGE_FOODPRICE = 'CHANGE_FOODPRICE'
const CHANGE_ERROR = 'CHANGE_ERROR'


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

export function changeFoodType(value){
  return {
    type: CHANGE_FOODTYPE,
    payload: value,
  }
}

export function changeFoodName(value){
  return {
    type: CHANGE_FOODNAME,
    payload: value,
  }
}

export function changeFoodCut(value){
  return {
    type: CHANGE_FOODCUT,
    payload: value,
  }
}

export function changeFoodPreparation(value){
  return {
    type: CHANGE_FOODPREPARATION,
    payload: value,
  }
}

export function changeFoodQuantity(value){
  return {
    type: CHANGE_FOODQUANTITY,
    payload: value,
  }
}

export function changeFoodPrice(value){
  return {
    type: CHANGE_FOODPRICE,
    payload: value,
  }
}

export function changeError(value){
  return {
    type: CHANGE_ERROR,
    payload: value,
  }
}


const initialState = {
  name: '',
  direction: '',
  phone: '',
  foodType: '',
  foodName: '',
  foodCut: '',
  foodPreparation: '',
  foodQuantity: '',
  foodPrice: '',
  error: '',
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
    case CHANGE_FOODTYPE:
      return {
        ...state,
        foodType: action.payload,
      }
    case CHANGE_FOODNAME:
      return {
        ...state,
        foodName: action.payload,
      }
    case CHANGE_FOODCUT:
      return {
        ...state,
        foodCut: action.payload,
      }
    case CHANGE_FOODPREPARATION:
    return {
      ...state,
      foodPreparation: action.payload,
    }
  case CHANGE_FOODQUANTITY:
    return {
      ...state,
      foodQuantity: action.payload,
    }
  case CHANGE_FOODPRICE:
    return {
      ...state,
      foodPrice: action.payload,
    }
  case CHANGE_ERROR:
  return {
    ...state,
    error: action.payload,
  }
    default:
      return state
  }
}