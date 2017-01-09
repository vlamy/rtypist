import React, { Component } from 'react';

/**
*/
export default class TypingDashboard extends Component {
  render() {
    return (
      <div className="typing-dashboard">
        <div className="progress">
          <p>Progress : {this.props.statistics.getLiveProgress()}%</p>
        </div>
        <div className="accuracy">
          <p>Accuracy : {this.props.statistics.getLiveAccuracy()}%</p>
        </div>
        <div className="errorCount">
          <p>Error : {this.props.statistics.getLiveErrorCount()}</p>
        </div>
        <div className="avgStrokeSpeed">
          <p>Stroke Speed : {this.props.statistics.getLiveAverageStrokeLatency()} ms</p>
        </div>
        <div className="charactersPerSecond">
          <p>Characters per second : {this.props.statistics.getLiveCharacterPerSecondAverage()}</p>
        </div>
        <div className="wordsPerMinutes">
          <p>Words per minutes : {this.props.statistics.getLiveWordsPerMinuteAverage()}</p>
        </div>
      </div>
    );
  }
}
