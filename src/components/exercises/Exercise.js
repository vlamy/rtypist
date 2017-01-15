export default class Exercise {
  constructor(data = {}) {
    Object.assign(this, data)
    this.characters = this.exercise.text.split('')
  }

  title() {
    return this.exercise.title
  }

  length() {
    return this.characters.length
  }

  charAt(index){
    return this.characters[index]
  }
}
