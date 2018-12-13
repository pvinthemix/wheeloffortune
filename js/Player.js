class Player {
  constructor(name) {
    this.name = name;
    this.grandTotal = 0;
    this.score = 0;
  }

  increaseCurrentPlayerScore() {
    if (game.round === 4) {
      this.score += game.bonusWheel.currentSpinValue;
    }
    if (wheel.currentSpinValue === 'BANKRUPT') {
      this.score = 0;
    } else {
      this.score += wheel.currentSpinValue;
    }
  }

  decreaseCurrentPlayerScore() {
    this.score -= 100;
  }

}

if (typeof module !== 'undefined') {
  module.exports = Player;
}