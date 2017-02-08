import Character from './Character';

/**
 *data = {
 *  "exercise": {
 *     "title": "Title of the exercise",
 *     "tags": ["tag1", "tag2"],
 *     "locale": "fr",
 *     "description": "Sentence describing the exercise",
 *     "text": "The text to type potentially containing carriage return",
 *     "source": "The text source"
 *     }
 *}
 * */
export default class Exercise {
  constructor(data = {}) {
    Object.assign(this, data);
    this._initialize();
  }

  _initialize() {
    this.lines = [];
    this.characters = [];

    this._prepareText(
      this.exercise.text.split(''),
      this.lines,
      this.characters
    );

    this.textLength = this.characters.length;
  }

  /**
   * Builds lines and characters.
   * Initial text characters are transformed as Characters (See Character.js).
   * Text is split into lines, such that a line is at least 30 character long.
   * Lines respect intended carriage return character. They contains indexes
   * of Characters array (this.characters).
   **/
  _prepareText(characters, lines, charObjects) {
    let currentLineChars = [];

    for (let i = 0; i < characters.length; i++) {
      let character = characters[i];
      charObjects.push(new Character(character));
      currentLineChars.push(i);

      /* time to break line */
      if( character === '\n' || currentLineChars.length > 30) {
        lines.push(currentLineChars);
        currentLineChars = [];
      }
    }

    if(currentLineChars.length > 0) {
        lines.push(currentLineChars);
    }
  }

  getCharacters() {
    return this.characters;
  }

  getLines() {
    return this.lines;
  }

  getDescription() {
    return this.exercise.description || 'No description for this exercise';
  }

  getLength() {
    return this.textLength || 0;
  }

  getLocale() {
    return this.exercise.locale || 'en';
  }

  getSource() {
    return this.exercise.source || '';
  }

  getTags() {
    return this.exercise.tags || [];
  }

  getTitle() {
    return this.exercise.title || 'Exercise';
  }

  hasTag(tag) {
    return this.getTags().includes(tag);
  }

  /**
   * Handle input events such as keeping characters status up to date.
   */
  handleInputEvent(input) {

    /* figure out the common prefix between reference text and textarea input */
    let index = this._commonPrefix(input).length;

    while(index < input.length && index < this.textLength) {
      let newChar = input.charAt(index);
      this.characters[index].setLastTypedValue(newChar);

      index++;
    }

    /* update current character */
    if (this._currentCharacter ) {
      this._currentCharacter.unsetCurrentCharacterFlag();
    }

    if (this.characters[index]) {
      this._currentCharacter = this.characters[index];
      this._currentCharacter.setCurrentCharacterFlag();
    }

    return index;
  }

  _commonPrefix(input) {
      let i= 0;
      while (i < this.textLength && this.characters[i].expectedChar === input.charAt(i) ) i++;
      return this.exercise.text.substring(0, i);
  }
}
