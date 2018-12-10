class Puzzle {
  constructor(round) {
    this.currentPuzzle = this.generatePuzzle(round);
    this.puzzleCompleted = false;
  }

  // keep track of revealed letters already guessed in current puzzle
  // If someone guesses already guessed letter, the player could get points
  
  generatePuzzle(round) {
    switch (round) {
      case 1:
        return this.findPuzzleData(data.puzzles.one_word_answers);
        break;
      case 2:
        return this.findPuzzleData(data.puzzles.two_word_answers);
        break;
      case 3:
        return this.findPuzzleData(data.puzzles.three_word_answers);
        break;
      case 4:
        return this.findPuzzleData(data.puzzles.four_word_answers);
        break;
      case 5:
        return this.findPuzzleData(data.puzzles.four_word_answers);
        break;
    }
  }

  findPuzzleData(puzzleRoundData) {
    let puzzleData = puzzleRoundData.puzzle_bank;
    let randomIndex = Math.floor(Math.random() * puzzleData.length);
    let randomPuzzle = puzzleData[randomIndex];
    return randomPuzzle;
  }

  generateBonusPuzzle() {
      
  }

  checkAnswer(submitedAnswer) {
    return this.currentPuzzle.correct_answer === submitedAnswer; 
  }
}

if (typeof module !== 'undefined') {
  module.exports = Puzzle;
}