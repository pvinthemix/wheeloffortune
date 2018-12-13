class BonusWheel extends Wheel {
  constructor() {
    super();
    this.bonusPlayer = null;
    this.spinValues = this.generateSpinValues(500);
    this.currentSpinValue = this.generateCurrentSpinValue();
  }

//   generateSpinValues() {
//     // let wheelValues = data.wheel;
//     // let newWheelValues = [];
//     // for (let i = 0; i < 6; i++) {
//     //   let randomSpinValue = wheelValues[Math.floor(Math.random() * (data.wheel).length)];
//     //   newWheelValues.push(randomSpinValue * 500)
//     // }
//     // // newWheelValues.forEach((value) => {
//     // //   if (value === 'BANKRUPT' || 'LOSE A TURN') {
//     // //     value = 600;
//     // //   }
//     // // })
//     // return newWheelValues;
//   }

  generateCurrentSpinValue() {
      debugger
    const randomIndex = Math.floor(Math.random() * 6);
    this.currentSpinValue = this.spinValues[randomIndex];
    return this.currentSpinValue
  }
}

if (typeof module !== 'undefined') {
  module.exports = BonusWheel;
}