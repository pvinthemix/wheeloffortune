class BonusWheel extends Wheel {
  constructor() {
    super();
    this.bonusPlayer = null;
    this.bonusWheelValue = null;
  }
}

if (typeof module !== 'undefined') {
  module.exports = BonusWheel;
}