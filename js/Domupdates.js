let game;
let puzzle;
let player;

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
  vowels: ['a', 'e', 'i', 'o', 'u'],

  startGame() {
    this.startScreen.classList.add('hidden');
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
    game.round = 1;
    game.playerIndex = 0;
    let letter = document.getElementsByClassName('letter');
      for(let i=0; i<letter.length; i++) {
        letter[i].classList.remove('green-font');
      }
    this.showPuzzleCategory();
    // player.bankAccount = 0;
    // player.wallet = 0;
    game = new Game(this.player1Name.innerText, this.player2Name.innerText, this.player3Name.innerText);
    this.showPuzzleCategory();
  },

  popupBuyVowelScreen() {
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

  guessPuzzle() {
    event.preventDefault();
    const puzzleGuessInput = document.querySelector('.solvepuzzle-guess-input').value.toUpperCase();
    console.log(puzzleGuessInput);
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

  showSpinValue() {
    const spinValue = document.querySelector('.current-spin-value');
    spinValue.innerText = 10;
  },

  showPuzzleCategory() {
    const puzzleCategoryOutput = document.querySelector('.puzzle-category-name')
    const round1PuzzleCategory = game.fivePuzzles[0].currentPuzzle.category;
    puzzleCategoryOutput.innerText = round1PuzzleCategory;
  },

  handleConsonantGuessed(e) {
    e.preventDefault();
    const guessLetterInput = document.querySelector('.letter-guess-input').value.toLowerCase().trim();
    
    if (this.vowels.includes(guessLetterInput)) {
      // TODO: change UI to some message instead of alert
      alert('PLEASE ENTER A CONSONANT!!!');
    } else {
      this.greyOut(guessLetterInput);
    }
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
document.querySelector('.wheel-btn').addEventListener('click', domUpdates.showSpinValue);
document.querySelector('.letter-guess-submit-btn').addEventListener('click', domUpdates.handleConsonantGuessed.bind(domUpdates));
document.querySelector('.buy-vowel-btn').addEventListener('click', domUpdates.popupBuyVowelScreen.bind(domUpdates));
document.querySelector('.solve-puzzle-btn').addEventListener('click', domUpdates.popupSolvePuzzleScreen.bind(domUpdates));
document.querySelector('.guess-vowel-btn').addEventListener('click', domUpdates.guessVowel.bind(domUpdates));
document.querySelector('.solvepuzzle-submit-btn').addEventListener('click', domUpdates.guessPuzzle.bind(domUpdates));

