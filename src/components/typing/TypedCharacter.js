import React, { Component } from 'react';
import './TypedCharacter.sass';

const PropTypes = {
  character: React.PropTypes.object
};

/**
 * A component to render a character to type, with different style
 * according to the typing status of the character.
 * See '../constants/TYPING_STATUS.js' for typing status.
*/
export default class TypedCharacter extends Component {
  className() {
    const prefix = ['rtypist__manager__tracker__text__line__character'];
    const character = this.props.character.getCharToDisplay();

    if (character === ' ') {
      return `${prefix}__space`;
    }
    if (character === '\n') {
      return `${prefix}__cr`;
    }
    return `${prefix}__regular`;
  }

  render() {
    return (
      <div className={`${this.className()} ${this.className()}--${this.props.character.getStatus()}`}>
        {this.props.character.getCharToDisplay()}
      </div>
    );
  }
}

TypedCharacter.propTypes = PropTypes;
