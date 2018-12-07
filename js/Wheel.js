class Wheel {
  constructor() {
    this.spinValues = this.generateSpinValues();
    this.currentSpinValue = null;
  }

  generateSpinValues() {
    //Refactor for array prototype or for loop and returns the random value
    var wheelValues = data.wheel;
    var randomValue1 = wheelValues[Math.floor(Math.random() * (data.wheel).length)];
    var randomValue2 = wheelValues[Math.floor(Math.random() * (data.wheel).length)];
    var randomValue3 = wheelValues[Math.floor(Math.random() * (data.wheel).length)];
    var randomValue4 = wheelValues[Math.floor(Math.random() * (data.wheel).length)];
    var randomValue5 = wheelValues[Math.floor(Math.random() * (data.wheel).length)];
    var randomValue6 = wheelValues[Math.floor(Math.random() * (data.wheel).length)];
    return [randomValue1, randomValue2, randomValue3, randomValue4, randomValue5, randomValue6];

  }

}

if (typeof module !== 'undefined') {
  module.exports = Wheel;
}