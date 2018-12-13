let game;
let wheel;

let domUpdates = {
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
  guessMessage: document.querySelector('.guess-message'),
  greenPuzzleBoxes: document.getElementsByClassName('puzzle-box'),
  allLettersList: document.getElementsByClassName('letter'),
  vowels: ['a', 'e', 'i', 'o', 'u'],
  bonusRoundHints: ['R', 'S', 'T', 'L', 'N', 'E'],

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
    for (let i = 0; i < letter.length; i++) {
      letter[i].classList.remove('green-font');
    }
  },
  
  resetGame() {
    game.resetGame();
    let letter = document.getElementsByClassName('letter');
    for (let i = 0; i < letter.length; i++) {
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
    this.showPlayerScore();
    this.guessVowelInput.value = '';
  },

  handleVowelGuessed() {
    const guessVowelInput = this.guessVowelInput.value.toLowerCase().trim();
    const correctGuess = game.correctGuess(guessVowelInput.toUpperCase());
    if (correctGuess) {
      this.guessMessage.innerText = '- CORRECT ANSWER! -';
    } else {
      this.guessMessage.innerText = '- Sorry, incorrect answer -';
    }
    if (this.vowels.includes(guessVowelInput)) {
      this.greyOut(guessVowelInput);
      this.revealLetters(correctGuess, guessVowelInput);
      game.handleVowelGuessed();
    } else {
      this.guessMessage.innerText = '- Please enter a VOWEL -';
    }
  },

  guessPuzzleAnswer() {
    event.preventDefault();
    const puzzleGuessInput = document.querySelector('.solvepuzzle-guess-input').value.toUpperCase();
    if (puzzleGuessInput == game.getCurrentPuzzle().currentPuzzle.correct_answer.toUpperCase()) {
      this.guessMessage.innerText = '- You Solved the Puzzle! -';
    } else {
      this.guessMessage.innerText = '- Sorry, incorrect answer -';
    }
    game.guessPuzzleAnswer();
    this.solvePuzzleScreen.classList.add('hidden');
  },

  populatePlayerNames() {
    this.player1Name.innerText = this.capitalizeFirstLetter(this.player1Input.value || 'Player 1');
    this.player2Name.innerText = this.capitalizeFirstLetter(this.player2Input.value || 'Player 2');
    this.player3Name.innerText = this.capitalizeFirstLetter(this.player3Input.value || 'Player 3');
  },

  capitalizeFirstLetter(input) {
    let result = input.trim().toLowerCase();
    return result[0].toUpperCase() + result.substring(1);
  },

  showRoundNumber() {
    let roundNumber = document.querySelector('.round-number-text');
    if (game.round === 4) {
      roundNumber.innerText = `BONUS ROUND`;
    } else {
      roundNumber.innerText = `ROUND ${game.round + 1}`;
    }
  },

  showPlayersTurn() {
    let player1container = document.querySelector('.player-one-container');
    let player2container = document.querySelector('.player-two-container');
    let player3container = document.querySelector('.player-three-container');
    if (game.turn === 0) {
      player2container.classList.remove('blue-background');
      player3container.classList.remove('yellow-background');
      player1container.classList.add('red-background');
    } else if (game.turn === 1) {
      player1container.classList.remove('red-background');
      player3container.classList.remove('yellow-background');
      player2container.classList.add('blue-background');
    } else if (game.turn === 2) {
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
    if (game.round === 4) {
      spinValue.innerText = game.bonusWheel.currentSpinValue;
    } else {
      spinValue.innerText = wheel.currentSpinValue;
    }
    wheel.checkForBankrupt();
    wheel.checkForLoseTurn();
  },

  showPuzzleCategory() {
    const puzzleCategoryOutput = document.querySelector('.puzzle-category-name')
    const roundPuzzleCategory = game.fivePuzzles[game.round].currentPuzzle.category;
    puzzleCategoryOutput.innerText = roundPuzzleCategory;
  },

  showCurrentPuzzle(bonusRound) {
    console.log(game.getCurrentPuzzle().currentPuzzle.correct_answer)
    let splitAnswerArray = game.getCurrentPuzzle().currentPuzzle.correct_answer.toUpperCase().split('');
    splitAnswerArray.forEach((letter, index) => {
      if (letter === ' ') {
        this.greenPuzzleBoxes[index].classList.remove('white-background')
        this.greenPuzzleBoxes[index].classList.add('green-background')
      } else if (letter === '-' || letter === '&' || letter === '\'') {
        this.greenPuzzleBoxes[index].classList.add('orange-text');
      } else if (bonusRound && this.bonusRoundHints.includes(letter)) {
        this.greenPuzzleBoxes[index].classList.add('orange-text');
        this.greyOut(letter);
        this.guessMessage.innerText = '-- GUESS 3 CONSONANTS & 1 VOWEL --'
      }
      this.greenPuzzleBoxes[index].innerText = letter;
      this.greenPuzzleBoxes[index].classList.add('white-background');
    }) 
  },

  resetDefaultGreenBoxes() {
    [...this.greenPuzzleBoxes].forEach((box) => {
      box.classList.remove('green-background');
      box.classList.remove('white-background');
      box.classList.remove('orange-text');
      box.innerText = '';
    })
  },

  resetGuessedLetters() {
    [...this.allLettersList].forEach((letter) => {
      letter.classList.remove('green-font');
    })
  },
 
  handleConsonantGuessed() {
    event.preventDefault();
    let guessLetterInput = this.consonantLetterInput.value.toLowerCase().trim();
    let correctGuess = game.correctGuess(guessLetterInput.toUpperCase());
    if (correctGuess) {
      this.guessMessage.innerText = '- CORRECT ANSWER! -';
    } else {
      this.guessMessage.innerText = '- Sorry, incorrect answer -';
    }
    if (this.vowels.includes(guessLetterInput)) {
      this.guessMessage.innerText = '- Please enter a CONSONANT -';
    } else {
      this.revealLetters(correctGuess, guessLetterInput);
      this.greyOut(guessLetterInput);
      game.handleConsonantGuessed();
      this.showPlayerScore();
    }
  },

  revealLetters(correctGuess, letter) {
    if (correctGuess) {
      [...this.greenPuzzleBoxes].filter((currentBox) => {
        return currentBox.innerText === letter.toUpperCase();
      }).forEach((box) => {
        box.classList.add('orange-text');
      })
    }
  },

  greyOut(letter) {
    document.querySelector(`.letter-${letter.toLowerCase()}`).classList.add('green-font');
  },
};

document.querySelector('.reset-game-btn').addEventListener('click', domUpdates.resetGame.bind(domUpdates));
document.querySelector('.quit-game-btn').addEventListener('click', domUpdates.quitGame.bind(domUpdates));
document.querySelector('.wheel-btn').addEventListener('click', domUpdates.showSpinValue.bind(domUpdates));
document.querySelector('.letter-guess-submit-btn').addEventListener('click', domUpdates.handleConsonantGuessed.bind(domUpdates));
document.querySelector('.buy-vowel-btn').addEventListener('click', domUpdates.popupBuyVowelScreen.bind(domUpdates));
document.querySelector('.solve-puzzle-btn').addEventListener('click', domUpdates.popupSolvePuzzleScreen.bind(domUpdates));
document.querySelector('.guess-vowel-btn').addEventListener('click', domUpdates.guessVowel.bind(domUpdates));
document.querySelector('.solvepuzzle-submit-btn').addEventListener('click', domUpdates.guessPuzzleAnswer.bind(domUpdates));


