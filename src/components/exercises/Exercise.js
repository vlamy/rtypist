export default class Exercise {
  constructor(data = {}) {
    Object.assign(this, data)
    this.characters = this.exercise.text.split('')
    this.lines = []
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

  /**
   * Cuts text so that lines are at most 32 characters long, and populate
   * this.lines with the result
   **/
  _linearize() {
    let currentLineChars = []
    currentLineChars.push(this.charAt(0))

    for (let i = 1; i < this.characters.length; i++) {
      const char = this.charAt(i)
      currentLineChars.push(char)

      if(char === '\n' || currentLineChars.length > 30) {
        this.lines.push(currentLineChars)
        currentLineChars = []
      }
    }

    if(currentLineChars.length > 0) {
        this.lines.push(currentLineChars)
    }
  }
}
