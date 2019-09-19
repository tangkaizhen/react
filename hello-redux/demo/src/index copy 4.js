import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './reducers';
import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger';
import { Provider } from "react-redux";


var store=createStore(reducer,applyMiddleware(logger))

ReactDOM.render(
        <Provider store={store}>
                <App />
        </Provider>, document.getElementById('root'));
serviceWorker.unregister();
