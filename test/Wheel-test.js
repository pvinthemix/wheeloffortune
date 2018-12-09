const chai = require('chai');
const expect = chai.expect;
const Wheel = require('../js/Wheel.js');

global.data = require('../js/dataset.js');

describe('Wheel', function () {
  it('it should have a spin value of the current spin', function () {
    var wheel = new Wheel();
    expect(wheel.currentSpinValue).to.equal();
  });

  it('it should generate an array of 6 random spin values', function () {
    var wheel = new Wheel();

    wheel.generateSpinValues();
    console.log(wheel.spinValues)
    expect(wheel.spinValues.length).to.equal(6);
  });
});