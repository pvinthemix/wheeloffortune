class BonusWheel extends Wheel {
  constructor() {
    super();
    this.bonusSpinValues = ['FERRARI', '$30,000', 'BOAT', 'TESLA', 'TRIP TO HAWAII', '$50,000'];
    this.bonusPlayer = null;
    this.bonusWheelValue = generateCurrentBonusWheelSpinValue();
  }

generateCurrentBonusWheelSpinValue() {
    const randomIndex = Math.floor(Math.random() * 6);
    this.bonusWheelValue = this.bonusSpinValues[randomIndex];
    return this.bonusWheelValue;
  }
}

if (typeof module !== 'undefined') {
  module.exports = BonusWheel;
}