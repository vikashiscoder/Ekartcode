import {createStore, applyMiddleware} from 'redux';
import rootReducer from './Reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import Persistlocalstorage from './Middleware/persistlocalstorage'

const ReduxStore = createStore(rootReducer,composeWithDevTools(applyMiddleware(Persistlocalstorage)) );

export default ReduxStore;