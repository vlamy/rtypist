import React from 'react';
import ReactDOM from 'react-dom';
import ExerciseManager from './ExerciseManager';
import ReactTestUtils from 'react-addons-test-utils';

const divClassName = 'rtypist__exercise-manager';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ExerciseManager />, div);
});


it(`renders a div with class ${divClassName} `, () => {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<ExerciseManager />);
    const result = renderer.getRenderOutput();
    expect(result.type).toBe('div');
    expect(result.props.className).toEqual(divClassName);
});
