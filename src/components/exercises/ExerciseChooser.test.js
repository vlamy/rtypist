import React from 'react';
import ReactDOM from 'react-dom';
import ExerciseChooser from './ExerciseChooser';
import ReactTestUtils from 'react-addons-test-utils';

const divClassName = 'ExerciseChooser';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ExerciseChooser />, div);
});


it(`renders a div with class ${divClassName} `, () => {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<ExerciseChooser />);
    const result = renderer.getRenderOutput();
    expect(result.type).toBe('div');
    expect(result.props.className).toEqual(divClassName);
});
