import React, { Component } from 'react';
import Exercise from './Exercise';
import './ExerciseChooser.sass';

const basic = require('../../../config/exercises/basic.json')
const javascript = require('../../../config/exercises/javascript.json')
const java = require('../../../config/exercises/java.json')
const ruby = require('../../../config/exercises/ruby.json')
const exercises = [
    new Exercise(basic),
    new Exercise(javascript),
    new Exercise(java),
    new Exercise(ruby)
];

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
                {exercise.title()}
            </button>
            )
          })
        }
      </div>
    );
  }
}
