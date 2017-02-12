import * as TYPING_STATUS from '../constants/TYPING_STATUS';

/**
 * Manages the state of a character.
 **/
export default class Character {
  constructor(reference) {
    this.reference = reference;
    this.lastTypedValue = null;
    this.isCurrentChar = false;
  }

  getStatus() {
    if (this.isCurrentChar) {
      return TYPING_STATUS.current;
    }
    if (!this.lastTypedValue) {
      return TYPING_STATUS.togo;
    }
    if (this.lastTypedValue === this.reference) {
      return TYPING_STATUS.success;
    }
    return TYPING_STATUS.error;
  }

  getCharToDisplay() {
    return this.reference;
  }

  setLastTypedValue(value) {
    this.lastTypedValue = value;
  }

  setCurrentCharacterFlag() {
    this.isCurrentChar = true;
  }

  unsetCurrentCharacterFlag() {
    this.isCurrentChar = false;
  }
}
