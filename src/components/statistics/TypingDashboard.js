import React, { Component } from 'react';
import './TypingDashboard.sass';

/**
*/
export default class TypingDashboard extends Component {
    render() {
        return (
            <div className="typing-dashboard">
                <div className="meter">
                    <span style={{ width: `${this.props.statistics.getLiveProgress()}%` }}></span>
                </div>
                <div className="statext">
                    <div className="stats-txt accuracy">
                        <p>Accuracy : {this.props.statistics.getLiveAccuracy()}%</p>
                    </div>
                    <div className="stats-txt errorCount">
                        <p>Errors : {this.props.statistics.getLiveErrorCount()}</p>
                    </div>
                    <div className="stats-txt charactersPerSecond">
                        <p>CPS : {this.props.statistics.getLiveCharacterPerSecondAverage()}</p>
                    </div>
                    <div className="stats-txt wordsPerMinutes">
                        <p>WPM : {this.props.statistics.getLiveWordsPerMinuteAverage()}</p>
                    </div>
                </div>
            </div>
        );
    }
}
