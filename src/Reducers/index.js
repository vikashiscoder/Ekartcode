import loginlogout from './loginlogout'
import cart from './cart'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({loginlogout,cart});

export default rootReducer;