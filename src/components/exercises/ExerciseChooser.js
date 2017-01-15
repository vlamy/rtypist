import React, { Component } from 'react';
import Exercise from './Exercise';
import './ExerciseChooser.sass';

const exercises = [
  new Exercise(
    'basic',
    'pom pom pidou !\n Whoo !'
  ),
  new Exercise(
    'poignant guide',
    'The book is unusual among programming books in that it includes quite a lot of strange humor and narrative side tracks which are sometimes completely unrelated to the topic.'
  ),
  new Exercise(
    'code',
    'export default class Exercise {\n constructor(title, text) {\n this.title = title;\n this.text = text;\n }\n}'
  )
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
                {exercise.title}
            </button>
            )
          })
        }
      </div>
    );
  }
}
