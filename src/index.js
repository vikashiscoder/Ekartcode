import 'babel-polyfill';
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ContentApp from './component/content/contentapp';
import Persistlocalstorage from './Middleware/persistlocalstorage'
//import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './Reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import Contentheader from './component/content/contentheader';
import ReduxStore from './ReduxStore'

//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();


//const theStore = createStore(rootReducer,composeWithDevTools(applyMiddleware(Persistlocalstorage)) );

ReactDOM.render((
  <Provider store={ReduxStore}>
         <BrowserRouter>
         <div>
            <Contentheader />
            <ContentApp />
         </div>
        </BrowserRouter>
  </Provider>
), document.getElementById('root'))


