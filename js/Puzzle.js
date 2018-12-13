class Puzzle {
  constructor(round) {
    this.currentPuzzle = this.generatePuzzle(round);
    this.puzzleCompleted = false;
    this.answer = this.currentPuzzle.correct_answer.toUpperCase().replace(' ', '').split('')
  }


  generatePuzzle(round) {
    switch (round) {
    case 1:
      return this.findPuzzleData(data.puzzles.one_word_answers);
    case 2:
      return this.findPuzzleData(data.puzzles.two_word_answers);
    case 3:
      return this.findPuzzleData(data.puzzles.three_word_answers);
    case 4:
      return this.findPuzzleData(data.puzzles.four_word_answers);
    case 5:
      return this.findPuzzleData(data.puzzles.four_word_answers);
    }
  }

  findPuzzleData(puzzleRoundData) {
    let puzzleData = puzzleRoundData.puzzle_bank;
    let randomIndex = Math.floor(Math.random() * puzzleData.length);
    let randomPuzzle = puzzleData[randomIndex];
    return randomPuzzle;
  }

  checkAnswer(submitedAnswer) {
    return this.answer === submitedAnswer; 
  }
}

if (typeof module !== 'undefined') {
  module.exports = Puzzle;
}