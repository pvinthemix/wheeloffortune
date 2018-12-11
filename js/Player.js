class Player {
  constructor(name) {
    this.name = name;
    this.grandTotal = 0;
    this.score = 0;
  }

  increaseCurrentPlayerScore() {
    this.score = wheel.currentSpinValue;
  }

  decreaseCurrentPlayerScore() {

  }

  

  buyVowel() {

  }

  solvePuzzle() {

  }

  spinWheel() {
    
  }
}

if (typeof module !== 'undefined') {
  module.exports = Player;
}