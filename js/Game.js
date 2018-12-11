class Game {
  constructor(player1, player2, player3) {
    this.players = this.createPlayers(player1, player2, player3);
    this.round = 0;
    this.fivePuzzles = this.generateFivePuzzles();
    this.wheel = this.generateWheel();
    this.bonusRound = false;
    this.turn = 0;
    this.currentPlayer = this.players[this.turn];
    this.guessedLetters = [];
  }

  resetGame() {
    // keeps player names
    this.round = 0;
    this.bonusRound = false;
    this.turn = 0;
    this.currentPlayer.score = 0;
    this.currentPlayer.grandTotal = 0;
    this.guessedLetters = [];
    this.wheel[0].currentSpinValue = 0;
  }

  quitGame() {
    this.players = [];
    this.round = 1;
    this.fivePuzzles = [];
    this.wheel = [];
    this.bonusRound = false;
    this.turn = 0;
  }


  handleConsonantGuessed() {
    let letterGuessInput = document.querySelector('.letter-guess-input').value.toUpperCase();
    if (this.getCurrentPuzzle().answer.includes(letterGuessInput)) {
      console.log("You got it!")
      this.currentPlayer.increaseCurrentPlayerScore();
      this.guessedLetters.push(letterGuessInput);
      this.isPuzzleFinished();
      if (this.getCurrentPuzzle().puzzleCompleted) {
        this.changeRound();
      }
      //update DOM with that letter
      //give points value to current player
      //they spin again or solve puzzle
    } else {
      console.log("WRONG!")
      //They dont get any points 
      this.changeTurn();
      //change turn to next player
    }
  }

  getCurrentPuzzle() {
    return this.fivePuzzles[this.round]
  }

  changeRound() {
    this.round++;
    domUpdates.showGrandTotalScore()
    if (this.round === 5) {
      this.quitGame();
    }
  }

  isPuzzleFinished() {
    let numberOfMatchedLetters = this.getCurrentPuzzle().answer.reduce((sum, currentLetter) => {
      if (this.guessedLetters.includes(currentLetter)) {
        sum++
      }
      return sum;
    }, 0)
    if (numberOfMatchedLetters === this.getCurrentPuzzle().answer.length) {
      this.getCurrentPuzzle().puzzleCompleted = true;
      domUpdates.showPuzzleCategory();
    }
  }

  guessPuzzleAnswer() {
    const puzzleGuessInput = document.querySelector('.solvepuzzle-guess-input').value.toUpperCase();
    if (puzzleGuessInput == this.getCurrentPuzzle().currentPuzzle.correct_answer.toUpperCase()) {
      domUpdates.guessPuzzle()
    }
  }

  changeTurn() {
    this.turn++;
    if (this.turn === this.players.length) {
      this.turn = 0;
    }
    this.currentPlayer = this.players[this.turn]
    domUpdates.showPlayersTurn();;
  }

  generateWheel() {
    const wheelOne = new Wheel();
    return [wheelOne]
  }

  generateFivePuzzles() {
    const roundOne = new Puzzle(1);
    const roundTwo = new Puzzle(2);
    const roundThree = new Puzzle(3);
    const roundFour = new Puzzle(4);
    const roundBonus = new Puzzle(5);
    return [roundOne, roundTwo, roundThree, roundFour, roundBonus]
  }

  createPlayers(player1, player2, player3) {
    const playerOne = new Player(player1);
    const playerTwo = new Player(player2);
    const playerThree = new Player(player3);
    return [playerOne, playerTwo, playerThree];
  }
}

if (typeof module !== 'undefined') {
  module.exports = Game;
}
