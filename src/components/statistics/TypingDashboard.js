import React, { Component } from 'react';
import './TypingDashboard.sass';

const PropTypes = {
  statistics: React.PropTypes.object
};

/**
*/
export default class TypingDashboard extends Component {
  render() {
    return (
      <div className="rtypist__exercise-manager__typing-tracker__typing-dashboard">
        <div className="rtypist__exercise-manager__typing-tracker__typing-dashboard__statext">
          <div className="stats-txt accuracy">
            <p>Accuracy : {this.props.statistics.getLiveAccuracy()}%</p>
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

TypingDashboard.propTypes = PropTypes;
