class Game {
  constructor(player1, player2, player3) {
    this.players = this.createPlayers(player1, player2, player3);
    this.round =  1;
    this.fivePuzzles = this.generateFivePuzzles();
    this.wheel = this.generateWheel();
    this.boundRound = false;
    this.playerIndex = 0;
    // this.turn = this.player[this.playerIndex];
  }


  resetGame() {

  }

  changeTurn() {
    this.turn++
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
    // const roundThree = new Puzzle(3);
    // const roundFour = new Puzzle(4);
    // const roundFive = new Puzzle(5);
    return [roundOne, roundTwo]
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