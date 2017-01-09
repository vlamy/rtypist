import React from 'react';
import ReactDOM from 'react-dom';
import TypingTracker from './TypingTracker';
import ReactTestUtils from 'react-addons-test-utils';
import Exercise from '../exercises/Exercise';

const divClassName = 'rtypist__typing-tracker';
const exercise = new Exercise('stats-test', 'asdflhqueoeuthfaljasuhfue');

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
