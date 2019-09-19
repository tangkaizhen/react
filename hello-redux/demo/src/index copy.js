import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {increase} from './actions';
import * as serviceWorker from './serviceWorker';
import reducer from './reducers/count';
import {createStore} from 'redux'
var store=createStore(reducer)


store.dispatch({
    type:'INCREASE'
})

var render=()=>{
    ReactDOM.render(
        <App 
            value={store.getState()} 
            increase={()=>store.dispatch(increase())} 
            reduce={()=>store.dispatch({type:'REDUCE'})}/>, document.getElementById('root'));
}
render()
store.subscribe(render)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
