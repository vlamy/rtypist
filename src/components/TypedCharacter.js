import React, { Component } from 'react';
import './TypedCharacter.css'

/**
 * A component to render a character to type, with different style
 * according to the typing status of the character.
 * See '../constants/TYPING_STATUS.js' for typing status.
*/
export default class TypedCharacter extends Component {
  className() {
      return "rtypist__typing-tracker__typed-character--"+this.props.status;
  }
  toHtml(){
    const char = this.props.character;
    if(char === ' '){
      return (
        <div className={this.className()}>
          {' '}
        </div>
      );
    }
    if(char === '\n'){
      return (
        <div className={this.className()}>
          {'¬'}
          <br/>
        </div>
      );
    }
    return (
      <div className={this.className()}>
        {char}
      </div>
    );
  }
  render() {
    return this.toHtml();
  }
}
