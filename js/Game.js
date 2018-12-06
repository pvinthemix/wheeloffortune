class Game {
  constructor(player1, player2, player3) {
    this.players = this.createPlayers(player1, player2, player3);
    this.round =  1;
    this.fivePuzzles = null;
    this.wheel = [];
    this.boundRound = false;
    this.playerIndex = 0;
    // this.turn = this.player[this.playerIndex];
  }

  startGame() {

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

  generateFivePuzzles() {
    //Chooses 5 random puzzles
    //iterate over all of the banks and make them into one large array
    //generate a random number between zero and the length of the indexes 
    // conditional if we run into the same index to generate a new one
    //then generate 5 new puzzle classes based on that
    //pass into puzzle constructor 

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