import React, { Component } from 'react';
import './ProgressBar.sass';

/**
*/
export default class ProgressBar extends Component {
  render() {
    return (
      <div className="rtypist__exercise-manager__typing-tracker__progress-bar">
        <span style={{ width: `${this.props.statistics.getLiveProgress()}%` }}></span>
      </div>
      );
  }
}
