const chai = require('chai');
const expect = chai.expect;
const Player = require('../js/Player.js');


describe('Player', function () {
  it('it should have a name', function () {
    var player = new Player('Lee');
    expect(player.name).to.equal('Lee');
  });

  it('should start with a bank account of zero', function() {
    var player = new Player('Lee');
    expect(player.grandTotal).to.equal(0)
  })

  it('should start off with a wallet of zero', function() {
    var player = new Player('Lee');
    expect(player.score).to.equal(0)
  })
});