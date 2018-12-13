class BonusWheel extends Wheel {
  constructor() {
    super();
    this.bonusPlayer = null;
    this.spinValues = this.filterOutNotNumbers(this.generateSpinValues(15));
    this.currentSpinValue = this.generateCurrentSpinValue();
  }

  generateCurrentSpinValue() {
    const randomIndex = Math.floor(Math.random() * this.spinValues.length);
    this.currentSpinValue = this.spinValues[randomIndex];
    return this.currentSpinValue;
  }

  filterOutNotNumbers(collection) {
    return collection.filter((value) => {
      return value > 1;
    })  
  }
}

if (typeof module !== 'undefined') {
  module.exports = BonusWheel;
}