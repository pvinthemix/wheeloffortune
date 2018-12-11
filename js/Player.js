class Player {
  constructor(name) {
    this.name = name;
    this.grandTotal = 0;
    this.score = 0;
  }

  increaseCurrentPlayerScore() {
    this.score += wheel.currentSpinValue;
  }

  decreaseCurrentPlayerScore() {
    this.score -= 100;
  }

  // buyVowel() {
  //   console.log('in')
  // }

  spinWheel() {
    
  }
}

if (typeof module !== 'undefined') {
  module.exports = Player;
}