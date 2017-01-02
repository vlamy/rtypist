import React, { Component } from 'react';
import TypedCharacter from './TypedCharacter';
import TYPING_STATUS from '../constants/TYPING_STATUS';
import './TypingTracker.css'

const mockChars = `Il était une fois, dans un pays fort fort lointain une histoire de code :\nfunction iterate(array) {\n  let i=0;\n \n}`.split('');

export default class TypingTracker extends Component {
  constructor() {
    super();

    this.state = {
      lastInputValue: '',
      textCharacters: mockChars.map((char, index) => {
        if(index === 0) {
          return <TypedCharacter
            key={index}
            character={char}
            status={TYPING_STATUS.current}
            />;
        }
        return <TypedCharacter
          key={index}
          character={char}
          status={TYPING_STATUS.togo}
          />;
      }),
    };

    this.handleChange = this.handleChange.bind(this);
    this.commonPrefix = this.commonPrefix.bind(this);
  }

  commonPrefix(stringFoo, stringBar) {
      const maxLength = stringFoo.length;
      let i= 0;
      while(i<maxLength && stringFoo.charAt(i)=== stringBar.charAt(i)) i++;
      return stringFoo.substring(0, i);
  }

  handleChange(event) {
    const newContent = event.target.value;
    const commonPrefix = this.commonPrefix(newContent, this.state.lastInputValue);

    /* Preserve state immutability by copying the array */
    let newCharsArray = this.state.textCharacters.slice();
    let index = commonPrefix.length;

    /* Update what's new on input */
    while(index < newContent.length && index < mockChars.length) {
      let newKey = newContent.charAt(index);
      let expectedChar = mockChars[index];
      let status = expectedChar === newKey ? TYPING_STATUS.success : TYPING_STATUS.error;

      newCharsArray[index] = <TypedCharacter
        key={index}
        character={expectedChar}
        status={status}
      />;
      index++;
    }

    index = newContent.length; //assumes stop condition works
    newCharsArray[index] = <TypedCharacter
      key={index}
      character={mockChars[index]}
      status={TYPING_STATUS.current}
    />;

    /* updating state */
    this.setState({
      lastInputValue: event.target.value,
      textCharacters: newCharsArray
    });
  }

  render() {
    return (
      <div className="rtypist__typing-tracker">
        {this.state.textCharacters}
        <textarea
          ref={textarea => textarea && textarea.focus() }
          type="text"
          autoComplete="off"
          onInput={this.handleChange}
          autoFocus
        />
      </div>
    );
  }
}
