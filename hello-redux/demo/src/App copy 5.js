import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';

function App(props) {
  return (
    <div className="container">
      <h1 className='jumbotron-heading text-center'>{props.con}</h1>
      <p className='text-center'>
        <button onClick={()=>props.coun(9)} className='btn btn-primary mr-2'>Increase</button>
        <button className='btn btn-danger my-2'>Decrease</button>
      </p>
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

function mapDispatchToProps(dispatch) {
  return {
    coun:(num)=>dispatch({type:'INCREASE',num})
  };
}

App.propTypes={
  con:PropTypes.number.isRequired
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
