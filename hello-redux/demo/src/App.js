import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import * as actions from './actions'
import User from "./components/user";
function App(props) {
  return (
    <div className="container">
      <h1 className='jumbotron-heading text-center'>{props.con}</h1>
      <p className='text-center'>
        <button onClick={()=>props.dispatch(actions.increase())} className='btn btn-primary mr-2'>Increase</button>
        <button className='btn btn-danger my-2'>Decrease</button>
      </p>
      <User/>
    </div>
  );
}
function mapStateToProps(state) {
  // 注意这里面的counter，和user和combineReducer里面导出的键名一一对应
  return {
    con:state.counter,
    name:state.user
  };
}


App.propTypes={
  con:PropTypes.number.isRequired
}
export default connect(mapStateToProps)(App);
