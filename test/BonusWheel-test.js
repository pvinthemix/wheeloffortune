const chai = require('chai');
const expect = chai.expect;
global.Wheel = require('../js/Wheel.js');
const BonusWheel = require('../js/BonusWheel.js');
global.Game = require('../js/Game.js');


describe('BonusWheel', function () {

  var bonusWheel;
  var wheel;
  beforeEach(function () {
    wheel = new Wheel();
    bonusWheel = new BonusWheel();
  });

  it('it should start off without a bonus player', function () {
    expect(bonusWheel.bonusPlayer).to.equal(null);
  });

  it('it should have a spin value of the current spin', function () {
    let number = 600;
    bonusWheel.currentSpinValue = (number * 15);
    expect(bonusWheel.currentSpinValue).to.equal(9000);
  });
});