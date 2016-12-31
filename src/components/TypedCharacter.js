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
  render() {
    return (
      <div className={this.className()}>
        {this.props.character}
      </div>
    );
  }
}
