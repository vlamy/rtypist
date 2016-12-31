import React from 'react';
import ReactDOM from 'react-dom';
import TypedCharacter from './TypedCharacter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TypedCharacter
    key="mockKey"
    character="c"
    status="to-go"
  />, div);
});
