const spies = require('chai-spies');
const chai = require('chai');
const expect = chai.expect;
chai.use(spies);
const Wheel = require('../js/Wheel.js');
global.domUpdates = require('../js/Domupdates.js')


describe('Wheel', function () {

  beforeEach(() => {
    chai.spy.on(global.domUpdates, 'checkForBankrupt', () => true);
  })

  afterEach(() => {
    chai.spy.restore(global.domUpdates)
  })
  
  it('it should have a spin value of the current spin and bankrupt', function () {
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