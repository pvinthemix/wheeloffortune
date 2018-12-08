class Game {
  constructor(player1, player2, player3) {
    this.players = this.createPlayers(player1, player2, player3);
    this.round = 1;
    this.fivePuzzles = this.generateFivePuzzles();
    this.wheel = this.generateWheel();
    this.bonusRound = false;
    this.playerIndex = 0;
    this.turn = this.players[this.playerIndex];
  }

  // wheel property with 5 wheels
  // Wheel class - method showValueOfWheel
  // 1 random value 
  // game.wheel.showValueOfWheel
  // in DOM set ^ to variable and display number as innerText


  resetGame() {

  }

  changeTurn() {
    this.playerIndex++;
    if(this.playerIndex === 3) {
      this.playerIndex = 0;
    }
    this.turn = this.players[this.playerIndex];
  }

  changePlayer() {
    this.playerIndex++;
    this.changeTurn();
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