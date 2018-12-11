class Wheel {
  constructor() {
    this.spinValues = this.generateSpinValues();
    this.currentSpinValue = null;
  }

  generateSpinValues() {
    let wheelValues = data.wheel;
    let newWheelValues = [];
    for (let i = 0; i < 6; i++) {
      let randomSpinValue = wheelValues[Math.floor(Math.random() * (data.wheel).length)];
      newWheelValues.push(randomSpinValue)
    }
    return newWheelValues;
  }

  generateCurrentSpinValue() {
    const randomIndex = Math.floor(Math.random() * 6);
    this.currentSpinValue = this.spinValues[randomIndex];
    return this.currentSpinValue;
  }

  checkForBankrupt() {
    if (this.currentSpinValue === 'BANKRUPT') {
      game.currentPlayer.score = 0
      game.changeTurn();
    }
  }

  checkForLoseTurn() {
    if (this.currentSpinValue === 'LOSE A TURN') {
      game.changeTurn();
    }
  }
}


if (typeof module !== 'undefined') {
  module.exports = Wheel;
}