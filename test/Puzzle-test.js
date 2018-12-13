const spies = require('chai-spies');
const chai = require('chai');
const expect = chai.expect;
chai.use(spies);
const Puzzle = require('../js/Puzzle.js');



describe('Puzzle', function () {

  beforeEach(() => {
    chai.spy.on(global.domUpdates, 'showPuzzleCategory', () => true);

  })

  afterEach(() => {
    chai.spy.restore(global.domUpdates)
  })

  it('should check to see if the puzzle has been completed', function () {
    var puzzle = new Puzzle(1);
    expect(puzzle.puzzleCompleted).to.equal(false);
  });
  

  it('should assign a puzzle randomly upon instantiation', function() {
    var puzzle = new Puzzle(1);
    expect(puzzle.currentPuzzle).to.not.equal(null);
  })

  it('should have certain properties after puzzle is assigned', function() {
    var puzzle = new Puzzle(1);
    expect(puzzle.currentPuzzle).to.have.property("category");
    expect(puzzle.currentPuzzle.category).a('string');
    expect(puzzle.currentPuzzle).to.have.property("correct_answer");
    expect(puzzle.currentPuzzle.correct_answer).a('string');
    expect(puzzle.currentPuzzle).to.have.property("description");
    expect(puzzle.currentPuzzle.description).a('string');
    expect(puzzle.currentPuzzle).to.have.property("first_word");
    expect(puzzle.currentPuzzle.first_word).a('number');
    expect(puzzle.currentPuzzle).to.have.property("number_of_words");
    expect(puzzle.currentPuzzle.number_of_words).a('number');
    expect(puzzle.currentPuzzle).to.have.property("total_number_of_letters");
    expect(puzzle.currentPuzzle.total_number_of_letters).a('number');
  })

  it('can check submitted answer against current puzzle', function() {
    var puzzle = new Puzzle(1);
    var correctAnswer = puzzle.currentPuzzle.correct_answer;
    var wrongAnswer = 'wrong answer';
    expect(puzzle.checkAnswer(correctAnswer)).to.equal(true);
    expect(puzzle.checkAnswer(wrongAnswer)).to.equal(false);
  })
});
