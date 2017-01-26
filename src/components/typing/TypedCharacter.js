import React, { Component } from 'react';
import './TypedCharacter.sass';

/**
 * A component to render a character to type, with different style
 * according to the typing status of the character.
 * See '../constants/TYPING_STATUS.js' for typing status.
*/
export default class TypedCharacter extends Component {
  className() {
    let props = ['rtypist__exercise-manager__typing-tracker__text__line__typed-character'];
    props.push(`char-${this.props.status}`);

    if(this.props.character === ' '){
      props.push('char-space');
    }
    if(this.props.character === '\n'){
      props.push('char-cr');
    }
    return props.join(' ');
  }
  character(){
    return this.props.character;
  }
  render() {
    return (
      <div className={this.className()}>
        {this.character()}
      </div>
    );
  }
}
