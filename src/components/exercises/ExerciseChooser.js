import React, { Component } from 'react';
import Exercise from '../../models/Exercise';
import './ExerciseChooser.sass';
import * as basics from '../../constants/exercises/basics';
import * as javascript from '../../constants/exercises/javascript';
import * as kaamelott from '../../constants/exercises/kaamelott';
import * as trigrammes from '../../constants/exercises/trigramme-fr';

const exercises = [
  new Exercise(basics.one),
  new Exercise(javascript.one),
  new Exercise(kaamelott.one),
  new Exercise(kaamelott.two),
  new Exercise(kaamelott.three),
  new Exercise(trigrammes.one)
];

const PropTypes = {
  handleExerciseChoice: React.PropTypes.func
};

export default class ExerciseChooser extends Component {
  render() {
    return (
      <div className="rtypist__exercise-manager__exercise-chooser">
        {
          exercises.map((exercise, index) => {
            return (
            <button
                key={`exo${index}`}
                onClick={() => this.props.handleExerciseChoice(exercises[index])}>
                {exercise.getTitle()}
            </button>
            );
          })
        }
      </div>
    );
  }
}

ExerciseChooser.propTypes = PropTypes;
