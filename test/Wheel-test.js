const chai = require('chai');
const expect = chai.expect;
const Wheel = require('../js/Wheel.js');
global.Game = require('../js/Game.js');
const spies = require('chai-spies');
chai.use(spies);
global.domUpdates = require('../js/Domupdates.js')

describe('Wheel', function () {
  var wheel;
  beforeEach(function () {
    chai.spy.on(global.domUpdates, ['showPlayersTurn', 'showPlayerScore'], () => true);
    wheel = new Wheel();
  });

  afterEach(() => {
    chai.spy.restore(global.domUpdates)
  })
  it('it should have a spin value of the current spin', function () {
    wheel.currentSpinValue = 600;
    expect(wheel.currentSpinValue).to.equal(600);
  });

  it('it should generate an array of 6 spin values', function () {
    wheel.generateSpinValues();
    expect(wheel.spinValues.length).to.equal(6);
  });

  it('it should check for the spin value of Bankrupt', function () {
    var game = new Game();
    wheel.currentSpinValue = 'BANKRUPT';
    wheel.checkForBankrupt(game);
    expect(wheel.currentSpinValue).to.equal('BANKRUPT');
    expect(domUpdates.showPlayerScore).to.have.been.called(1);
  })

  it('it should check for the spin value of lose turn', function() {
    var game = new Game();
    wheel.currentSpinValue = 'LOSE A TURN';
    wheel.checkForLoseTurn(game);
    expect(wheel.currentSpinValue).to.equal('LOSE A TURN');
    expect(domUpdates.showPlayersTurn).to.have.been.called(1);
  })
});