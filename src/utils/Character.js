import TYPING_STATUS from '../constants/TYPING_STATUS';

/**
 * Manages the state of a character.
 **/
export default class Character {
  constructor(reference) {
    this.reference = reference;
    this.lastTypedValue = null;
  }

  getStatus() {
    if (!this.lastTypedValue) {
      return TYPING_STATUS.togo
    }
    if (this.lastTypedValue === this.reference) {
      return TYPING_STATUS.success
    }
    return TYPING_STATUS.error
  }

  getCharToDisplay() {
    return this.lastTypedValue ? this.lastTypedValue : this.reference;
  }

  setLastTypedValue(value) {
    this.lastTypedValue = value;
  }
}
