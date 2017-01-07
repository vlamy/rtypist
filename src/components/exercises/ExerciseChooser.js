import React, { Component } from 'react';
import Exercise from './Exercise';

const exercises = [
  new Exercise('basic', 'pom pom pidou !\n Whoo !'),
  new Exercise('code', 'export default class Exercise {\n constructor(title, text) {\n this.title = title;\n this.text = text;\n }\n}')
];

export default class ExerciseChooser extends Component {
  render() {
    return (
      <div className="ExerciseChooser">
        {
          exercises.map((exercise, index) => {
            return <button
              id="index"
              key={`exo${index}`}
              onClick={() => this.props.handleExerciseChoice(exercises[index])}
              >{exercise.title}</button>;
          })
        }
      </div>
    );
  }
}
