import React,{Component} from 'react';
import './App.css';
/**
 * react-redux:主要提供了两种api
 * connect：
 * Provider：
 */
import { connect } from 'react-redux';
import { increment , incrementAsync } from './actions/counter';
import { get_user } from './actions/user';
class App extends Component{
  render(){
    const { isFetching, error, user } = this.props.user;

    let data;

    if (error) {
      data = error;
    } else if (isFetching) {
      data = "Loading..."
    } else {
      // 這是表示如果user為真，則執行&&後面的語句
      data = user && user.data[0].name
    }

    return (
      <div className="App">
          <p>{this.props.counter}</p>
          <button onClick={this.props.increment}>+</button>
          <br />
          <button onClick={ this.props.incrementAsync }>async +</button>
          <br />
          <button onClick={ this.props.get_user }>Get User</button>
          <br />
          {data}
      </div>
    );
  }
  }
function mapStateToProps(state) {
  return {
    counter:state.counter,
    user:state.users
  };
}
export default connect(mapStateToProps,{increment,incrementAsync,get_user})(App);
