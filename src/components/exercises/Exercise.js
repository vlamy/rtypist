export default class Exercise {
  constructor(title, text) {
    this.title = title;
    this.characters = text.split('');
  }

  length() {
    return this.characters.length;
  }

  charAt(index){
    return this.characters[index];
  }
}
