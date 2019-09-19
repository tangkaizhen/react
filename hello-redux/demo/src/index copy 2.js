import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './reducers';
import {createStore} from 'redux'
import { Provider } from "react-redux";
var store=createStore(reducer)

ReactDOM.render(
        <Provider store={store}>
                <App />
        </Provider>, document.getElementById('root'));
serviceWorker.unregister();
