class Game {
  constructor(player1, player2, player3) {
    this.players = this.createPlayers(player1, player2, player3);
    this.round = 0;
    this.fivePuzzles = this.generateFivePuzzles();
    this.wheel = this.generateWheel();
    this.bonusWheel = this.generateBonusWheel();
    this.bonusRound = false;
    this.turn = 0;
    this.currentPlayer = this.players[this.turn];
    this.guessedLetters = [];
    this.bonusRoundPlayerIndex = null;
  }
  
  createPlayers(player1, player2, player3) {
    const playerOne = new Player(player1);
    const playerTwo = new Player(player2);
    const playerThree = new Player(player3);
    return [playerOne, playerTwo, playerThree];
  }
  
  generateFivePuzzles() {
    const roundOne = new Puzzle(1);
    const roundTwo = new Puzzle(2);
    const roundThree = new Puzzle(3);
    const roundFour = new Puzzle(4);
    const roundBonus = new Puzzle(5);
    return [roundOne, roundTwo, roundThree, roundFour, roundBonus]
  }

  generateWheel() {
    const wheelOne = new Wheel();
    if (this.round === 4) {
      const bonusWheel = new BonusWheel();
    } else {
      return [wheelOne]
    }
  }
  
  generateBonusWheel() {
    return new BonusWheel();
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
  
  changeRound() {
    this.round++;
    this.players[0].score = 0;
    this.players[1].score = 0;
    this.players[2].score = 0;
    domUpdates.showPlayerScore();
    domUpdates.resetDefaultGreenBoxes();
    domUpdates.showGrandTotalScore();
    this.guessedLetters = [];
    domUpdates.resetGuessedLetters();
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
    domUpdates.showCurrentPuzzle(this.bonusRound);
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
    if (puzzleGuessInput === this.getCurrentPuzzle().currentPuzzle.correct_answer.toUpperCase()) {
      this.players[this.turn].grandTotal += this.players[this.turn].score;
      this.changeRound();
    }
    this.changeTurn(); 
  }
  
  
  findBonusRoundPlayerIndex() {
    const highScore = Math.max(...this.players.map(player => {
      return player.grandTotal;
    }));
    
    this.bonusRoundPlayerIndex = this.players.findIndex((player => {
      return player.grandTotal === highScore;
    }));
  }
  
  resetGame() {
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
    domUpdates.resetDefaultGreenBoxes();
    domUpdates.showRoundNumber();
    domUpdates.resetGuessedLetters();
    domUpdates.showCurrentPuzzle();
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
    domUpdates.resetGuessedLetters();
    domUpdates.showRoundNumber();
    domUpdates.showGrandTotalScore();
    domUpdates.resetDefaultGreenBoxes();
  }
}

if (typeof module !== 'undefined') {
  module.exports = Game;
}
