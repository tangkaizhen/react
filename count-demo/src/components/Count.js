import React, { Component } from 'react'
import count from '../reducer'
import {createStore} from 'redux';

var store=createStore(count)
// 这是主要是给index.js用的，主要为了方便监听render，及时进行组件变更
export {store}

export default class Count extends Component {
    add(){
        store.dispatch({type:'add'})
    }
    render() {
        return (
            <div>
                <button onClick={this.add.bind(this)}>+</button>
                <span>{store.getState()}</span>
            </div>
        )
    }
}
