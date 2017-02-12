import React, { Component } from 'react';
import Exercise from '../../models/Exercise';
import './ExerciseChooser.sass';

const basic = require('../../../config/exercises/basic.json');
const javascript = require('../../../config/exercises/javascript.json');
const java = require('../../../config/exercises/java.json');
const ruby = require('../../../config/exercises/ruby.json');
const long = require('../../../config/exercises/long.json');
const kaamelottAnna1 = require('../../../config/exercises/kaamelott-anna1.json');
const kaamelottGoustan1 = require('../../../config/exercises/kaamelott-goustan1.json');
const kaamelottPerceval1 = require('../../../config/exercises/kaamelott-perceval1.json');
const trigramme1 = require('../../../config/exercises/trigramme-fr-1.json');

const exercises = [
  new Exercise(basic),
  new Exercise(javascript),
  new Exercise(java),
  new Exercise(long),
  new Exercise(kaamelottAnna1),
  new Exercise(kaamelottGoustan1),
  new Exercise(kaamelottPerceval1),
  new Exercise(trigramme1),
  new Exercise(ruby)
];

const PropTypes = {
  handleExerciseChoice: React.propTypes.func
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
