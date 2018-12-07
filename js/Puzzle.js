class Puzzle {
  constructor(round) {
    this.currentPuzzle = this.generatePuzzle(round);
    this.puzzleCompleted = false;

    //the wheel can be a 'child' of the puzzle, with the understanding that each Round has it's own wheel
    //this.wheel = new Wheel;

    // only if the wheel shares at least 1 function with the puzzle
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
    } else if (round === 3) {
      let roundThreeData = data.puzzles.three_word_answers.puzzle_bank
      let randomIndex = Math.floor(Math.random() * roundThreeData.length)
      let roundThreeRandomPuzzle = roundThreeData[randomIndex]
      return roundThreeRandomPuzzle;
    } else if (round === 4) {
      let roundFourData = data.puzzles.four_word_answers.puzzle_bank
      let randomIndex = Math.floor(Math.random() * roundFourData.length)
      let roundFourRandomPuzzle = roundFourData[randomIndex]
      return roundFourRandomPuzzle;
    } else if (round === 5) {
      let roundBonusData = data.puzzles.four_word_answers.puzzle_bank
      let randomIndex = Math.floor(Math.random() * roundBonusData.length)
      let roundBonusRandomPuzzle = roundBonusData[randomIndex]
      return roundBonusRandomPuzzle;
    } 
  };

  generateBonusPuzzle() {

  }

  checkAnswer() {

  }
}

if (typeof module !== 'undefined') {
  module.exports = Puzzle;
}