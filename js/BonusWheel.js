class BonusWheel extends Wheel {
  constructor() {
    super();
    this.bonusSpinValues = this.generateSpinValues();
    this.bonusPlayer = null;
    this.currentBonusSpinValue = this.generateCurrentSpinValue();
  }

  generateSpinValues() {
    let wheelValues = data.wheel;
    let newWheelValues = [];
    for (let i = 0; i < 6; i++) {
      let randomSpinValue = wheelValues[Math.floor(Math.random() * (data.wheel).length)];
      newWheelValues.push(randomSpinValue)
    }
    newWheelValues.forEach((value) => {
      if (value === 'BANKRUPT' || 'LOSE A TURN') {
        value = 600;
      }
    })
    return newWheelValues;
  }

  generateCurrentSpinValue() {
    const randomIndex = Math.floor(Math.random() * 6);
    this.currentBonusSpinValue = this.bonusSpinValues[randomIndex];
    return this.currentBonusSpinValue;
  }
}

if (typeof module !== 'undefined') {
  module.exports = BonusWheel;
}