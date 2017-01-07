import React, { Component } from 'react';
import TypedCharacter from './TypedCharacter';
import TYPING_STATUS from '../../constants/TYPING_STATUS';
import './TypingTracker.css'

export default class TypingTracker extends Component {
  constructor(props) {
    super();

    this.state = {
      lastInputValue: '',
      textCharacters: props.exercise.characters.map((char, index) => {
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
    while(index < newContent.length && index < this.props.exercise.length()) {
      let newKey = newContent.charAt(index);
      let expectedChar = this.props.exercise.charAt(index);
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
      character={this.props.exercise.charAt(index)}
      status={TYPING_STATUS.current}
    />;

    /* updating state */
    this.setState({
      lastInputValue: event.target.value,
      textCharacters: newCharsArray
    });

    if(newContent.length === this.props.exercise.length()) {
      this.props.endCallback();
    }
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
