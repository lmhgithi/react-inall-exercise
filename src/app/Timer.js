import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Timer.less'

class Timer extends Component {
    state = {
        inputSecond: 0,
        seconds: 'Start',
    }

    timerRun;

    componentWillUnmount() {
        clearInterval(this.timerRun)
    }
    handleUpdateTimer = () => {
        if (this.state.seconds > 1) {
            this.setState({
                seconds: this.state.seconds - 1,
            })
        }
        else {
            this.setState({
                seconds: "End",
            })
            clearInterval(this.timerRun)
        }
    }

    handleChange = () => {
        this.setState({
            inputSecond: event.target.value,
        })
    }

    handleStartTimer = () => {
        console.log(this.state.inputSecond);
        this.setState({
            seconds: parseInt(this.state.inputSecond),
        })
        this.timerRun = setInterval(this.handleUpdateTimer, 1000);
    }

    render() {
        return (
            <div className="timer">
                <h1>在线倒计时器</h1>
                <div className='timerInside'>
                    <div className='timerInput'>
                        <label>设置时间</label>
                        <input className="inputSeconds"
                            type="text"
                            value={this.state.inputSecond}
                            onChange={this.handleChange}
                        />
                        <button className='startButton'
                            onClick={this.handleStartTimer}
                            disabled={this.state.seconds > 0 
                                && this.state.seconds != 'Start' 
                                && this.state.seconds != 'End' }
                        >Start
                        </button>
                    </div>

                    <input className="timerScreen"
                        type="text" readOnly={true}
                        value={this.state.seconds}
                    />
                </div>
                <Link className='homeLinkInCal' to="/">回到主页</Link>
            </div>
        )
    };
}

export default Timer;