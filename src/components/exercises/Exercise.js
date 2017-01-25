import TYPING_STATUS from '../../constants/TYPING_STATUS';

export default class Exercise {
  constructor(data = {}) {
    Object.assign(this, data)
    this.characters = this.exercise.text.split('')
    this.lines = []
    this.textLength = this.characters.length
    this._linearize()
  }

  title() {
    return this.exercise.title
  }

  length() {
    return this.textLength
  }

  charAt(index){
    return this.characters[index]
  }

  figureOutChanges(input) {
    const changes = [];
    let index = this._commonPrefix(input).length

    while(index < input.length && index < this.textLength) {

      changes.push({
        index: index,
        expectedChar: this.charAt(index),
        actualChar: input.charAt(index),
        status: this._getTypingStatus(input.charAt(index))
      });

      index++;
    }

    changes.push({
      index: index,
      expectedChar: this.charAt(index),
      actualChar: this.charAt(index),
      status: TYPING_STATUS.current
    });

    return changes
  }

  _getTypingStatus(char, index) {
    if (char === this.charAt(index)) {
      return TYPING_STATUS.success
    }
    return TYPING_STATUS.error
  }

  _commonPrefix(input) {
      let i= 0;
      while (i < this.textLength && this.charAt(i) === input.charAt(i) ) i++;
      return this.exercise.text.substring(0, i);
  }

  /**
   * Cuts text so that lines are at most 32 characters long, and populate
   * this.lines with  resulting indexes
   **/
  _linearize() {
    let currentLineChars = []

    for (let i = 0; i < this.characters.length; i++) {
      currentLineChars.push(i)

      if(this.charAt(i) === '\n' || currentLineChars.length > 30) {
        this.lines.push(currentLineChars)
        currentLineChars = []
      }
    }

    if(currentLineChars.length > 0) {
        this.lines.push(currentLineChars)
    }
  }

  _initialCharacterItem(index) {
    return {
      expectedChar: this.charAt(index),
      actualChar: '',
      status: TYPING_STATUS.togo
    }
  }
}
