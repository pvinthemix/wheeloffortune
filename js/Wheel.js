class Wheel {
  constructor() {
    this.spinValues = [];
    this.currentSpinValue = null;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Wheel;
}