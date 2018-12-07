class Wheel {
  constructor() {
    this.spinValues = this.generateSpinValues();
    this.currentSpinValue = null;
  }

  generateSpinValues() {
    var wheelValues = data.wheel;
    var newWheelValues = [];
    for (let i = 0; i < 6; i++) {
      var randomSpinValue = wheelValues[Math.floor(Math.random() * (data.wheel).length)];
      newWheelValues.push(randomSpinValue)
    }
    return newWheelValues;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Wheel;
}