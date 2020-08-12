import React from 'react';
import './home.less';
import backGroundURL from '../images/hero-image.png'
import calculatorURL from '../images/calculator.png'
import timerURL from '../images/timer.png'

const Home = () => {
  return (
    <div className="home">
      <div className="homeAbove">
        <h1>在线实用工具</h1>
        <img className='backGroundImg' src={backGroundURL} alt='backGroundURL'></img>
      </div>

      <div className="homeBelow">
        <img className='calculatorImg' src={calculatorURL} alt='calculatorURL'></img>
        <img className='timerImg' src={timerURL} alt='timerURL'></img>
      </div>

    </div>);
};

export default Home;