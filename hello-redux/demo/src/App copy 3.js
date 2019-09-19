import React from 'react';
import PropTypes from 'prop-types'

import {connect} from 'react-redux';
function App(props) {
  return (
    <div className="container">
      <h1 className='jumbotron-heading text-center'>{props.con}</h1>
      <p className='text-center'>
        <button onClick={()=>props.dispatch({type:'INCREASE'})} className='btn btn-primary mr-2'>Increase</button>
        <button className='btn btn-danger my-2'>Decrease</button>
      </p>
    </div>
  );
}
function mapStateToProps(state) {
  // 下面con和name是一个对象的键，和组件的键一一对应
  return {
    con:state.counter,
    name:state.user
  };
}
App.propTypes={
  con:PropTypes.number.isRequired
}
export default connect(mapStateToProps)(App);
