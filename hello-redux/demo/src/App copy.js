import React from 'react';
import PropTypes from 'prop-types'
function App(props) {
  return (
    <div className="container">
      <h1 className='jumbotron-heading text-center'>{props.value}</h1>
      <p className='text-center'>
        <button onClick={()=>props.increase()} className='btn btn-primary mr-2'>Increase</button>
        <button onClick={()=>props.reduce()} className='btn btn-danger my-2'>Decrease</button>
      </p>
    </div>
  );
}
App.propsTypes={
  value:PropTypes.number.isRequired,
  increase:PropTypes.func.isRequired,
  reduce:PropTypes.func.isRequired
}

export default App;
