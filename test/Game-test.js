// const spies = require('chai-spies');
const chai = require('chai');
const expect = chai.expect;
// chai.use(spies);
const Game = require('../js/Game.js');

global.Player = require('../js/Player.js');
global.Puzzle = require('../js/Puzzle.js');
global.Wheel = require('../js/Wheel.js');
global.data = require('../js/dataset.js');
// global.domUpdates = require('../js/Domupdates.js')

describe('Game', function () {
  it('should have 3 players', function () {
    let game = new Game('Terry', 'Jean', 'Blake');
    const expected = [
      { 
        name: "Terry",
        grandTotal: 0,
        score: 0
      },
      {
        name: "Jean",
        grandTotal: 0,
        score: 0 
      },
      {
        name: "Blake",
        grandTotal: 0,
        score: 0  
      },
    ]
    expect(game.players).to.deep.equal(expected);
    expect(game.players.length).to.equal(3);
    expect(game.players[0]).to.be.an.instanceof(Player);
  });

  it('should start on round 1', function () {
    let game = new Game();
    expect(game.round).to.equal(0);
  });

  it('should not be a bonus round upon first instantiation', function () {
    let game = new Game();
    expect(game.bonusRound).to.equal(false);
  });

  it('should start with player 1, which is playerIndex of 0', function () {
    let game = new Game();
    expect(game.turn).to.equal(0);
  });

   it('should be the turn of the player whose playerIndex it is', function () {
    let game = new Game("Brian", "John");
    const expectedPlayer1 = {
      name: "Brian",
      grandTotal: 0,
      score: 0  
    }
    expect(game.currentPlayer).to.deep.equal(expectedPlayer1);
    expect(game.currentPlayer).to.be.an.instanceof(Player);

    game.changeTurn();
    const expectedPlayer2 = {
      name: "John",
      grandTotal: 0,
      score: 0
    }
    expect(game.currentPlayer).to.deep.equal(expectedPlayer2);
  });

  it('should generate a new wheel upon invocation', function () {
    let game = new Game();
    game.generateWheel();
    expect(game.wheel).to.be.an.instanceOf(Array);
    expect(game.wheel[0]).to.be.an.instanceOf(Wheel);
  });

  it('should generate 5 new random puzzles upon invocation', function () {
    let game = new Game();
    game.generateFivePuzzles();
    expect(game.fivePuzzles.length).to.equal(5);
  });

  it('should generate 3 new players upon invocation', function () {
    let game = new Game();
    game.createPlayers();
    expect(game.players.length).to.equal(3);
  });

  it('will quit game', function () {
    let game = new Game();
    game.quitGame();
    expect(game.players).to.deep.equal([]);
    expect(game.round).to.equal(1);
    expect(game.fivePuzzles).to.deep.equal([]);
    expect(game.wheel).to.deep.equal([]);
    expect(game.bonusRound).to.equal(false);
    expect(game.turn).to.equal(0);
  });
});