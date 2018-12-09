const chai = require('chai');
const expect = chai.expect;
const Game = require('../js/Game.js');
const spies = require('chai-spies');
chai.use(spies);

global.Player = require('../js/Player.js');
global.Puzzle = require('../js/Puzzle.js');
global.Wheel = require('../js/Wheel.js');
global.data = require('../js/dataset.js');

describe('Game', function () {
  it('should have 3 players', function () {
    let game = new Game('Terry', 'Jean', 'Blake');
    const expected = [
      { 
        name: "Terry",
        turn: false,
        bankAccount: 0,
        wallet: 0
      },
      {
        name: "Jean",
        turn: false,
        bankAccount: 0,
        wallet: 0 
      },
      {
        name: "Blake",
        turn: false,
        bankAccount: 0,
        wallet: 0  
      },
    ]
    expect(game.players).to.deep.equal(expected);
    expect(game.players.length).to.equal(3);
    expect(game.players[0]).to.be.an.instanceof(Player);
  });

  it('should start on round 1', function () {
    let game = new Game();
    expect(game.round).to.equal(1);
  });

  it('should not be a bonus round upon first instantiation', function () {
    let game = new Game();
    expect(game.bonusRound).to.equal(false);
  });

  it('should start with player 1, which is playerIndex of 0', function () {
    let game = new Game();
    expect(game.playerIndex).to.equal(0);
  });

   it('should be the turn of the player whose playerIndex it is', function () {
    let game = new Game("Brian", "John");
    const expectedPlayer1 = {
      name: "Brian",
      turn: false,
      bankAccount: 0,
      wallet: 0  
    }
    expect(game.turn).to.deep.equal(expectedPlayer1);
    expect(game.turn).to.be.an.instanceof(Player);

    game.changeTurn();
    const expectedPlayer2 = {
      name: "John",
      turn: false,
      bankAccount: 0,
      wallet: 0
    }
    expect(game.turn).to.deep.equal(expectedPlayer2);
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
    expect(game.fivePuzzles.length).to.deep.equal(5);
  });

  it('should generate 3 new players upon invocation', function () {
    let game = new Game();
    game.createPlayers();
    expect(game.players.length).to.deep.equal(3);
  });
});