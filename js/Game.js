class Game {
  constructor() {
    this.players = [];
    this.round =  1;
    this.fivePuzzles = null;
    this.wheel = [];
    this.boundRound = false;
  }

  startGame() {

  }

  resetGame() {

  }

  changePlayer() {

  }

  generateFivePuzzles() {
    //Chooses 5 random puzzles
    //iterate over all of the banks and make them into one large array
    //generate a random number between zero and the length of the indexes 
    // conditional if we run into the same index to generate a new one
    //then generate 5 new puzzle classes based on that
    //pass into puzzle constructor 

  }

  createPlayers() {
    const player1 = new Player();
    const player2 = new Player("player2");
    const player3 = new Player("player3");
    return [player1, player2, player3];
  }
}

if (typeof module !== 'undefined') {
  module.exports = Game;
}