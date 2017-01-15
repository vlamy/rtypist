import React, { Component } from 'react';
import Exercise from './Exercise';
import './ExerciseChooser.sass';

const data = require('../../../config/exercises/basic.json')
const exercises = [new Exercise(data)];

export default class ExerciseChooser extends Component {
  render() {
    return (
      <div className="ExerciseChooser">
        {
          exercises.map((exercise, index) => {
            return (
            <button
                key={`exo${index}`}
                onClick={() => this.props.handleExerciseChoice(exercises[index])}>
                {exercise.title}
            </button>
            )
          })
        }
      </div>
    );
  }
}
