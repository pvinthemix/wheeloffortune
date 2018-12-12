let game;
let puzzle;
let player;
let wheel;


// domUpdates Object
let domUpdates = {
  // NOTE: setting up key-value pairs for querySelectors
  player1Name: document.querySelector('.player1-name'),
  player2Name: document.querySelector('.player2-name'),
  player3Name: document.querySelector('.player3-name'),
  player1Input: document.querySelector('.player1-name-input'),
  player2Input: document.querySelector('.player2-name-input'),
  player3Input: document.querySelector('.player3-name-input'),
  startScreen: document.querySelector('.start-screen'),
  buyVowelScreen: document.querySelector('.buyvowel-screen'),
  solvePuzzleScreen: document.querySelector('.solvepuzzle-screen'),
  guessVowelInput: document.querySelector('.vowel-guess-input'),
  consonantLetterInput: document.querySelector('.consonant-guess-input'),
  vowels: ['a', 'e', 'i', 'o', 'u'],

  startGame() {
    this.startScreen.classList.add('hidden');
    this.showCurrentPuzzle();
    this.showPlayersTurn();
  },

  quitGame() {
    game.quitGame();
    this.player1Name.innerText = 'Player 1';
    this.player2Name.innerText = 'Player 2';
    this.player3Name.innerText = 'Player 3';
    this.player1Input.value = '';
    this.player2Input.value = '';
    this.player3Input.value = '';
    this.buyVowelScreen.classList.add('hidden');
    this.solvePuzzleScreen.classList.add('hidden');
    this.startScreen.classList.remove('hidden');
    let letter = document.getElementsByClassName('letter');
    for(let i=0; i<letter.length; i++) {
      letter[i].classList.remove('green-font');
    }
  },
  
  resetGame() {
    game.resetGame();
    let letter = document.getElementsByClassName('letter');
      for(let i=0; i<letter.length; i++) {
        letter[i].classList.remove('green-font');
      }
    game = new Game(this.player1Name.innerText, this.player2Name.innerText, this.player3Name.innerText);
    this.showPuzzleCategory();
  },

  popupBuyVowelScreen() {
    this.solvePuzzleScreen.classList.add('hidden');
    this.buyVowelScreen.classList.remove('hidden');
  },

  popupSolvePuzzleScreen() {
    this.buyVowelScreen.classList.add('hidden');
    this.solvePuzzleScreen.classList.remove('hidden');
  },

  guessVowel() {
    event.preventDefault();
    this.buyVowelScreen.classList.add('hidden');
    this.handleVowelGuessed();
    game.handleVowelGuessed();
    this.showPlayerScore();
    this.guessVowelInput.value = '';
  },

  handleVowelGuessed() {
    const guessVowelInput = this.guessVowelInput.value.toLowerCase().trim();
    if (this.vowels.includes(guessVowelInput)) {
      // TODO: change UI to some message instead of alert
      this.greyOut(guessVowelInput);
    } else {
      alert('PLEASE ENTER A VOWEL!!!');
    }
  },

  guessPuzzleAnswer() {
    event.preventDefault();
    game.guessPuzzleAnswer();
    this.solvePuzzleScreen.classList.add('hidden');
  },

  populatePlayerNames() {
    this.player1Name.innerText = this.capitalizeFirstLetter(this.player1Input.value);
    this.player2Name.innerText = this.capitalizeFirstLetter(this.player2Input.value);
    this.player3Name.innerText = this.capitalizeFirstLetter(this.player3Input.value);
  },

  capitalizeFirstLetter(input) {
    let result = input.trim().toLowerCase();
    return result[0].toUpperCase() + result.substring(1);
  },

  showPlayersTurn() {
    let player1container = document.querySelector('.player-one-container');
    let player2container = document.querySelector('.player-two-container');
    let player3container = document.querySelector('.player-three-container');
    if(game.turn === 0) {
      player2container.classList.remove('blue-background');
      player3container.classList.remove('yellow-background');
      player1container.classList.add('red-background');
    } else if(game.turn === 1) {
      player1container.classList.remove('red-background');
      player3container.classList.remove('yellow-background');
      player2container.classList.add('blue-background');
    } else if(game.turn === 2) {
      player1container.classList.remove('red-background');
      player2container.classList.remove('blue-background');
      player3container.classList.add('yellow-background');
    }
  },

  showPlayerScore() {
    let player1score = document.querySelector('.player1-score');
    let player2score = document.querySelector('.player2-score');
    let player3score = document.querySelector('.player3-score');
    player1score.innerText = game.players[0].score;
    player2score.innerText = game.players[1].score;
    player3score.innerText = game.players[2].score;
  },

  showGrandTotalScore() {
    let player1GrandTotal = document.querySelector('.player1-grandtotal');
    let player2GrandTotal = document.querySelector('.player2-grandtotal');
    let player3GrandTotal = document.querySelector('.player3-grandtotal');
    player1GrandTotal.innerText = game.players[0].grandTotal;
    player2GrandTotal.innerText = game.players[1].grandTotal;
    player3GrandTotal.innerText = game.players[2].grandTotal;
  },

  showSpinValue() {
    wheel = new Wheel();
    wheel.generateCurrentSpinValue();
    const spinValue = document.querySelector('.current-spin-value');
    spinValue.innerText = wheel.currentSpinValue;
    wheel.checkForBankrupt();
    wheel.checkForLoseTurn();
  },

  showPuzzleCategory() {
    const puzzleCategoryOutput = document.querySelector('.puzzle-category-name')
    const roundPuzzleCategory = game.fivePuzzles[game.round].currentPuzzle.category;
    puzzleCategoryOutput.innerText = roundPuzzleCategory;
  },

  showCurrentPuzzle() {
    // insert letter into each box as inner text
    // give CSS property of white background and white text
    // if they guess the correct letter, letter changes to black text
    let splitAnswerArray = game.getCurrentPuzzle().currentPuzzle.correct_answer.toUpperCase().split('');
    let greenPuzzleBoxes = document.getElementsByClassName('puzzle-box');
    for(let i = 0; i < splitAnswerArray.length; i++) {
      if (splitAnswerArray[i] === ' ') {
        greenPuzzleBoxes[i].classList.add('green-background')
      }
      if (splitAnswerArray[i] === '-') {
        greenPuzzleBoxes[i].innerText = '-'
      }
      greenPuzzleBoxes[i].classList.add('white-background');
    }
    splitAnswerArray.forEach((letter, index) => {
      letter.split('')
      let rowBox = document.querySelector(`.row1-box${index + 1}`);  
        rowBox.innerText = letter
      })
  },

  handleConsonantGuessed(e) {
    e.preventDefault();
    let guessLetterInput = this.consonantLetterInput.value.toLowerCase().trim();
    if (this.vowels.includes(guessLetterInput)) {
      // TODO: change UI to some message instead of alert
      alert('PLEASE ENTER A CONSONANT!!!');
    } else {
      this.greyOut(guessLetterInput);
    }
    game.handleConsonantGuessed();
    if(guessLEtterInput)
    this.showPlayerScore();
  },

  greyOut(letter) {
    document.querySelector(`.letter-${letter}`).classList.add('green-font');
  },
};

// *Event Listeners*
document.querySelector('.reset-game-btn').addEventListener('click', domUpdates.resetGame.bind(domUpdates));
document.querySelector('.quit-game-btn').addEventListener('click', domUpdates.quitGame.bind(domUpdates));
// NOTE: 
  // If we used ES5 syntax without binding, this would refer to the HTML button element (where it was called)
  // If we used ES6 arrow syntax, this would refer to the global window object
document.querySelector('.wheel-btn').addEventListener('click', domUpdates.showSpinValue.bind(domUpdates));
document.querySelector('.letter-guess-submit-btn').addEventListener('click', domUpdates.handleConsonantGuessed.bind(domUpdates));
document.querySelector('.buy-vowel-btn').addEventListener('click', domUpdates.popupBuyVowelScreen.bind(domUpdates));
document.querySelector('.solve-puzzle-btn').addEventListener('click', domUpdates.popupSolvePuzzleScreen.bind(domUpdates));
document.querySelector('.guess-vowel-btn').addEventListener('click', domUpdates.guessVowel.bind(domUpdates));
document.querySelector('.solvepuzzle-submit-btn').addEventListener('click', domUpdates.guessPuzzleAnswer.bind(domUpdates));


