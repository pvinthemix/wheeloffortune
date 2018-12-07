const chai = require('chai');
const expect = chai.expect;
const Game = require('../js/Game.js');

describe('Game', function () {
  it('should have 3 players', function () {
  var game = new Game('Terry', 'Jean', 'Blake')
    expect(game.players).to.equal(['Terry', 'Jean', 'Blake']);
  });

  it('should start on round 1', function () {
  var game = new Game()
    expect(game.round).to.equal(1);
  });

  it('should not be a bonus round upon first instantiation', function () {
  var game = new Game()
    expect(game.bonusRound).to.equal(false);
  });

  it('should start with player 1, which is playerIndex of 0', function () {
  var game = new Game()
    expect(game.playerIndex).to.equal(0);
  });

  // it('should be the turn of the player whos playerIndex it is', function () {
  // var game = new Game();
  // game.changeTurn();
  
  //   expect(game.playerIndex).to.equal(0);
  // });
});