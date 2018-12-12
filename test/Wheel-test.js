const chai = require('chai');
const expect = chai.expect;
const Wheel = require('../js/Wheel.js');

describe('Wheel', function () {
  it('it should have a spin value of the current spin', function () {
    var wheel = new Wheel();
    wheel.currentSpinValue = 600;
    expect(wheel.currentSpinValue).to.equal(600);
  });

  it('it should generate an array of 6 random spin values', function () {
    var wheel = new Wheel();

    wheel.generateSpinValues();
    expect(wheel.spinValues.length).to.equal(6);
  });
});