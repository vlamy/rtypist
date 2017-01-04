import React from 'react';
import ReactDOM from 'react-dom';
import TypingTracker from './TypingTracker';
import ReactTestUtils from 'react-addons-test-utils';

const divClassName = 'rtypist__typing-tracker';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TypingTracker />, div);
});


it(`renders a div with class ${divClassName} `, () => {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<TypingTracker />);
    const result = renderer.getRenderOutput();
    expect(result.type).toBe('div');
    expect(result.props.className).toEqual(divClassName);
});
