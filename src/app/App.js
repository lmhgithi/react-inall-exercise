import React, { Component } from 'react';
import './app.less';
import { Route, BrowserRouter, Link, Switch } from "react-router-dom";
import Home from "./Home";
import NotMatch from './NotMatch'
import Calculator from './Calculator';
import Timer from './Timer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div className="header">
            <Link className='calculatorLink' to="/timer">在线倒计时器</Link>
            <Link className='countDowntLink' to='/calculator'>在线计算器</Link>
            <Link className='homeLink' to="/">Home</Link>
          </div>
          <div className="body">
            <Switch>
              <Route exact path='/calculator' component={Calculator} />
              <Route exact path='/timer' component={Timer} />
              <Route exact path='/' component={Home} />
              <Route component={NotMatch} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
