class Puzzle {
  constructor() {
    this.currentPuzzle = this.generatePuzzle();
    this.puzzleCompleted = false;
  }
  
  generatePuzzle() {
    debugger
    let roundOneData = data.puzzle.one_word_answers.puzzle_bank
    let randomIndex = Math.floor(Math.random() * roundOneData.length)
    let roundOneRandomPuzzle = roundOneData[randomIndex]
    this.currentPuzzle = roundOneRandomPuzzle
  }

  generateBonusPuzzle() {

  }

  checkAnswer() {

  }
}

if (typeof module !== 'undefined') {
  module.exports = Puzzle;
}