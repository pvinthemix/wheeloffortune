class Wheel {
  constructor(currentSpinValue) {
    // this.spinValues = this.generateSpinValues();
    this.currentSpinValue = currentSpinValue;
  }

  // generateSpinValues() {
  //   debugger
  //   let wheelValues = data.wheel;
  //   let newWheelValues = [];
  //   for (let i = 0; i < 6; i++) {
  //     let randomSpinValue = wheelValues[Math.floor(Math.random() * (data.wheel).length)];
  //     newWheelValues.push(randomSpinValue)
  //   }
  //   return newWheelValues;
  // }
}

if (typeof module !== 'undefined') {
  module.exports = Wheel;
}