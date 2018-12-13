const spies = require('chai-spies');
const chai = require('chai');
const expect = chai.expect;
chai.use(spies);
const Game = require('../js/Game.js');

global.Player = require('../js/Player.js');
global.Puzzle = require('../js/Puzzle.js');
global.Wheel = require('../js/Wheel.js');
global.data = require('../js/dataset.js');
global.BonusWheel = require('../js/BonusWheel.js');
global.document = {
  querySelector: () => { 
    return {
      addEventListener: () => { 
        'this is crazy '
      }
    }
  },
  getElementsByClassName: () => {
    'bye'
  },
};
global.domUpdates = require('../js/Domupdates.js')

describe('Game', function () {
  var game;
  beforeEach(() => {
    chai.spy.on(global.domUpdates, 'showPlayersTurn', () => true);
    game = new Game();
  });

  afterEach(() => {
    chai.spy.restore(global.domUpdates)
  })

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
    expect(game.round).to.equal(0);
  });

  it('should not be a bonus round upon first instantiation', function () {
    expect(game.bonusRound).to.equal(false);
  });

  it('should start with player 1, which is playerIndex of 0', function () {
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
    expect(domUpdates.showPlayersTurn).to.have.been.called(1)
    expect(game.currentPlayer).to.deep.equal(expectedPlayer2);
  });

  it('should generate a new wheel upon invocation', function () {
    game.generateWheel();
    expect(game.wheel).to.be.an.instanceOf(Array);
    expect(game.wheel[0]).to.be.an.instanceOf(Wheel);
  });

  it('should generate 5 new random puzzles upon invocation', function () {
    game.generateFivePuzzles();
    expect(game.fivePuzzles.length).to.equal(5);
  });

  it('should generate 3 new players upon invocation', function () {
    game.createPlayers();
    expect(game.players.length).to.equal(3);
  });

  it('will generate bonus wheel', function () {
    let bonusWheel = new BonusWheel();
    game.generateBonusWheel();
    expect(bonusWheel).to.be.an.instanceOf(BonusWheel);
  });

  it('will check for correct guess in puzzle', function () {
    let letter = 't';
    game.correctGuess(letter);
    expect(game.getCurrentPuzzle().answer.includes(letter)).to.equal(false);
  })

  it('will return the player with the highest score', function () {
    game.findBonusRoundPlayerIndex()
    expect(game.bonusRoundPlayerIndex).to.equal(0);
  })
});