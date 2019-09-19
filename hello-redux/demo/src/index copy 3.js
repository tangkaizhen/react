import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './reducers';
import {createStore,applyMiddleware} from 'redux'

import { Provider } from "react-redux";

var logger=(store)=>(next)=>(action)=>{
        // 如果有下一个中间件，则next会把action交给下一个中间件处理，如果没有，则交给reducer处理
        /**
         * 中间件主要在action和reducer之间执行
         */
        let result=next(action)
        console.log(store.getState())
        return result
}

var store=createStore(reducer,applyMiddleware(logger))

ReactDOM.render(
        <Provider store={store}>
                <App />
        </Provider>, document.getElementById('root'));
serviceWorker.unregister();
