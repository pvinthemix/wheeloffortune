class Puzzle {
  constructor(round) {
    this.currentPuzzle = this.generatePuzzle(round);
    this.puzzleCompleted = false;

    //the wheel can be a 'child' of the puzzle, with the understanding that each Round has it's own wheel
    //this.wheel = new Wheel;
  }
  
  generatePuzzle(round) {
    if (round === 1) {
      let roundOneData = data.puzzles.one_word_answers.puzzle_bank
      let randomIndex = Math.floor(Math.random() * roundOneData.length)
      let roundOneRandomPuzzle = roundOneData[randomIndex]
      return roundOneRandomPuzzle;
    } else if (round === 2) {
      let roundTwoData = data.puzzles.two_word_answers.puzzle_bank
      let randomIndex = Math.floor(Math.random() * roundTwoData.length)
      let roundTwoRandomPuzzle = roundTwoData[randomIndex]
      return roundTwoRandomPuzzle;
    }
  }

  generateBonusPuzzle() {

  }

  checkAnswer() {

  }
}

if (typeof module !== 'undefined') {
  module.exports = Puzzle;
}