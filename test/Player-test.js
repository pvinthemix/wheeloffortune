const chai = require('chai');
const expect = chai.expect;
const Player = require('../js/Player.js');
global.Game = require('../js/Game.js');


describe('Player', function () {
  let player;
  beforeEach (function () {
    player = new Player('Lee');
  });

  it('it should have a name', function () {
    expect(player.name).to.equal('Lee');
  });

  it('should start with a bank account of zero', function() {
    expect(player.grandTotal).to.equal(0)
  })

  it('should start off with a wallet of zero', function() {
    expect(player.score).to.equal(0)
  })

  it('should increase the current players score', function() {
    var game = new Game();
    var wheel = new Wheel();
    wheel.currentSpinValue = 100;
    player.increaseCurrentPlayerScore(game, wheel);
    expect(player.score).to.equal(100)
  })

  it('should decreae the current players score', function () {
    var game = new Game();
    player.decreaseCurrentPlayerScore(game);
    expect(player.score).to.equal(-100)
  })
});