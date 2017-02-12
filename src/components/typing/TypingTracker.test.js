import React from 'react';
import ReactDOM from 'react-dom';
import TypingTracker from './TypingTracker';
import ReactTestUtils from 'react-addons-test-utils';
import Exercise from '../../models/Exercise';

const divClassName = 'rtypist__exercise-manager__typing-tracker';
const data = {
  exercise: {
    title: 'Basic exercise',
    tags: ['fr', 'easy'],
    desription: 'A good exercise for testing the typist',
    text: 'Il était une fois'
  }
};
const exercise = new Exercise(data);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TypingTracker exercise={exercise}/>, div);
});


it(`renders a div with class ${divClassName} `, () => {
  const renderer = ReactTestUtils.createRenderer();
  renderer.render(<TypingTracker exercise={exercise}/>);
  const result = renderer.getRenderOutput();
  expect(result.type).toBe('div');
  expect(result.props.className).toEqual(divClassName);
});
