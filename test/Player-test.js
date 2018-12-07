const chai = require('chai');
const expect = chai.expect;
const Player = require('../js/Player.js');


describe('Player', function () {
  var player = new Player('Lee');
  it('it should have a name', function () {
    expect(player.name).to.equal('Lee');
  });
});