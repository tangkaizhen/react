import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './reducers';
import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
// 这主要是支持异步用的
import thunk from 'redux-thunk'
import { Provider } from "react-redux";


var store=createStore(reducer,composeWithDevTools(applyMiddleware(logger,thunk)))

ReactDOM.render(
        <Provider store={store}>
                <App />
        </Provider>, document.getElementById('root'));
serviceWorker.unregister();
  