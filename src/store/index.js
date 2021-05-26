import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { signUpReducer } from './signUpReducer'
import { signInReducer } from './singInReducer'
import { clientReducer } from './clientReducer'
import { restaurantReducer } from './restaurantReducer'
import { foodReducer } from './foodReducer'


const appReducer = combineReducers({
  signUpReducer,
  signInReducer,
  clientReducer,
  restaurantReducer,
  foodReducer,
})


const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT'){
    state = undefined
  }
  return appReducer(state, action)
}

const middlewares = applyMiddleware(thunk, logger)

export const store = createStore(rootReducer, middlewares)