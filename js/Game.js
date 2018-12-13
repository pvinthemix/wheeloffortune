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
    this.bonusRoundPlayerIndex = null;
  }

  resetGame() {
    // keeps player names
    this.round = 0;
    this.bonusRound = false;
    this.turn = 0;
    this.players[0].grandTotal = 0;
    this.players[1].grandTotal = 0;
    this.players[2].grandTotal = 0;
    this.players[0].score = 0;
    this.players[1].score = 0;
    this.players[2].score = 0;
    domUpdates.showPlayerScore();
    domUpdates.showGrandTotalScore();
    domUpdates.showRoundNumber();
    this.guessedLetters = [];
    this.wheel[0].currentSpinValue = 0;
  }

  quitGame() {
    this.round = 0;
    this.fivePuzzles = [];
    this.wheel = [];
    this.bonusRound = false;
    this.turn = 0;
    this.players[0].grandTotal = 0;
    this.players[1].grandTotal = 0;
    this.players[2].grandTotal = 0;
    this.players[0].score = 0;
    this.players[1].score = 0;
    this.players[2].score = 0;
    domUpdates.showPlayerScore();
    domUpdates.showRoundNumber();
    domUpdates.showGrandTotalScore();
  }

  correctGuess(letter) {
    return this.getCurrentPuzzle().answer.includes(letter);
  }

  handleConsonantGuessed() {
    let letterGuessInput = document.querySelector('.consonant-guess-input').value.toUpperCase();
    if (this.correctGuess(letterGuessInput)) {
      this.currentPlayer.increaseCurrentPlayerScore();
      this.guessedLetters.push(letterGuessInput);
      this.isPuzzleFinished();
      if (this.getCurrentPuzzle().puzzleCompleted) {
        this.changeRound();
      }
    } else {
      this.changeTurn();
    }
  }

  handleVowelGuessed() {
    let vowelGuessInput = document.querySelector('.vowel-guess-input').value.toUpperCase();
    if (this.correctGuess(vowelGuessInput)) {
      this.currentPlayer.decreaseCurrentPlayerScore();
      this.guessedLetters.push(vowelGuessInput);
      this.isPuzzleFinished();
      if (this.getCurrentPuzzle().puzzleCompleted) {
        this.changeRound();
      }
    } else {
      this.currentPlayer.decreaseCurrentPlayerScore();
      this.changeTurn();
    }
  }

  getCurrentPuzzle() {
    return this.fivePuzzles[this.round]
  }

  changeRound() {
    this.round++;
    this.players[0].score = 0;
    this.players[1].score = 0;
    this.players[2].score = 0;
    domUpdates.showPlayerScore();
    domUpdates.resetDefaultGreenBoxes();
    domUpdates.showGrandTotalScore();
    domUpdates.showCurrentPuzzle();
    if (this.round === 4) {
      this.bonusRound = true;
      this.findBonusRoundPlayerIndex();
      this.generateWheel();
    }
    domUpdates.showRoundNumber();
    if (this.round === 5) {
      this.round = 0;
      this.quitGame();
    }
  }

  findBonusRoundPlayerIndex() {
    const highScore = Math.max(...this.players.map(player => {
      return player.grandTotal;
    }));
     
    this.bonusRoundPlayerIndex = this.players.findIndex((player => {
      return player.grandTotal === highScore;
    }));
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
      this.players[this.turn].grandTotal += this.players[this.turn].score;
      this.changeRound(); 
    }
  }

  changeTurn() {
    this.turn++;
    if (this.turn === this.players.length) {
      this.turn = 0;
    }
    if (this.round === 4) {
      this.turn = this.bonusRoundPlayerIndex;
    }
    this.currentPlayer = this.players[this.turn]
    domUpdates.showPlayersTurn();
  }

  generateWheel() {
    const wheelOne = new Wheel();
    if (this.round === 4) {
      debugger
      const bonusWheel = new BonusWheel();
      game.wheel = [bonusWheel.spinValues];
      wheel.currentSpinValue = game.wheel[0];
      // domUpdates.showSpinValue();
    } else {
      return [wheelOne]
    }
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
