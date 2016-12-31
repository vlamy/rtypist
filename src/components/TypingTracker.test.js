import React from 'react';
import ReactDOM from 'react-dom';
import TypingTracker from './TypingTracker';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TypingTracker />, div);
});
