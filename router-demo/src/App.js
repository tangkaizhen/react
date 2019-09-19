import React ,{Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
/**
 * 以后尽量用类的方法创建组件，因为其具有生命周期方法
 * 如果用方法创建组件，其是没有生命周期的方法
 *  */ 

class Home extends Component{
  // 必须具备render方法才行
  render(){
    return(
      <div>我是主页</div>
    )
  }
}
class Sport extends Component{
  render(){
    // 注意下面这个取值的方法，很简单
    var {match:{
      params:{
        id
      }
    }}=this.props

    return(
      <div>{id}</div>
    )
  }
}
class News extends Component{
  render(){
    /**
     * Router下面只能有一个跟标签，否则容易报错
     */
    return(
      <Router>
        <div>
          <Link to='/news/b'>篮球</Link>
          <Link to='/news/f'>足球</Link>
          <Link to='/news/p'>乒乓球</Link>
          <Link to='/news/y'>羽毛球</Link>
          <Route path='/news/:id' component={Sport}/>
        </div>
      </Router>
    )
  }
}
class About extends Component{
  render(){
    return(
      <div>关于我们</div>
    )
  }
}
/**
 * 尽量少用方法创建组件
 */
function App() {
  return (
    <Router>
      <div>
        <Link to='/home'>Home</Link>
        <Link to='/news'>新闻页</Link>
        <Link to='/about'>关于我们</Link>

        <Route path='/home' component={Home}/>
        <Route path='/news' component={News}/>
        <Route path='/about' component={About}/>
      </div>
    </Router>
  );
}

export default App;
