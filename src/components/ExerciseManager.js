import React, { Component } from 'react';
import TypingTracker from './typing/TypingTracker';
import ExerciseChooser from './exercises/ExerciseChooser';

export default class ExerciseManager extends Component {
  constructor() {
    super();
    this.state = {
      currentExercise: null
    };
    this.handleExerciseEnd = this.handleExerciseEnd.bind(this);
    this.conditionnalRender = this.conditionnalRender.bind(this);
    this.handleExerciseChoice = this.handleExerciseChoice.bind(this);
  }

  handleExerciseEnd(){
    this.setState({
      currentExercise: null
    });
  }

  handleExerciseChoice(exercise) {
    this.setState({
      currentExercise: exercise
    });
  }

  conditionnalRender() {
    if(this.state.currentExercise) {
      return <TypingTracker exercise={this.state.currentExercise} endCallback={this.handleExerciseEnd}/>;
    }
    else {
      return <ExerciseChooser handleExerciseChoice={this.handleExerciseChoice}/>;
    }
  }

  render() {
    return (
      <div className="rtypist__exercise-manager">
        {this.conditionnalRender()}
      </div>
    );
  }
}
