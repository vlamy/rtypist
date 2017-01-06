import React, { Component } from 'react';
import TypingTracker from './typing/TypingTracker'

export default class ExerciseManager extends Component {
  constructor() {
    super();
    this.state = {
      runningExercise: false
    };
    this.handleExerciseEnd = this.handleExerciseEnd.bind(this);
  }

  handleExerciseEnd(){
    console.log("this is the end !");
    this.setState({
      runningExercise: false
    });
  }

  render() {
    return (
      <div className="ExerciseManager">
        <TypingTracker endCallback={this.handleExerciseEnd}/>
      </div>
    );
  }
}
