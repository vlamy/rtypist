import React, { Component } from 'react';
import TypedCharacter from './TypedCharacter';
import TYPING_STATUS from '../../constants/TYPING_STATUS';
import './TypingTracker.sass';
import Statistics from '../statistics/Statistics';
import TypingDashboard from '../statistics/TypingDashboard';

export default class TypingTracker extends Component {
  constructor(props) {
    super();

    this.state = {
      lastInputValue: '',
      lastEventDate: new Date().getTime(),
      statistics: new Statistics(props.exercise),
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
    this._renderLines = this._renderLines.bind(this);
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

    let success;

    /* Update what's new on input */
    while(index < newContent.length && index < this.props.exercise.length()) {
      let newKey = newContent.charAt(index);
      let expectedChar = this.props.exercise.charAt(index);
      success = expectedChar === newKey;
      let status = success ? TYPING_STATUS.success : TYPING_STATUS.error;

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

    /* update statistics */
    const now = new Date().getTime();
    this.state.statistics.addKeyStroke(success, now - this.state.lastEventDate);

    /* updating state */
    this.setState({
      lastInputValue: event.target.value,
      lastEventDate: now,
      textCharacters: newCharsArray
    });

    if(newContent.length === this.props.exercise.length()) {
      this.props.endCallback();
    }
  }
  _renderLines() {
    return this.props.exercise.lines.map((line, lindex) => {
      return (
        <div className="rtypist__typing-tracker__line" key={lindex}>
          {line.map((index) => {
            return this.state.textCharacters[index]
          })}
        </div>
      );
      });
  }

  render() {
    return (
      <div className="rtypist__typing-tracker">
        {this._renderLines()}
        <TypingDashboard statistics={this.state.statistics} />
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
