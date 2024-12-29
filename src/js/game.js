import {
  ALL_WORDS,
  BASE_PATH,
  KEYBOARD_LETTERS,
  RUSSIAN_KEYBOARD_LETTERS,
  RUSSIAN_WORDS,
  TRANSLATIONS,
} from "./consts";

export class WordGame {
  constructor(difficulty) {
    const language = sessionStorage.getItem("language") || "english";
    this.words = language === "russian" ? RUSSIAN_WORDS : ALL_WORDS;
    this.maxWrongGuesses = 10;
    this.initialize(difficulty.words);
  }

  initialize(wordCount) {
    this.originalWords = [...this.words]
      .sort(() => Math.random() - 0.5)
      .slice(0, wordCount);

    if (!this.originalWords.length) {
      throw new Error("Массив слов пуст");
    }

    this.reset();
  }

  reset() {
    this.availableWords = [...this.originalWords];
    this.currentWord = "";
    this.guessedLetters = new Set();
    this.wrongGuesses = 0;
  }

  getNextWord() {
    if (this.availableWords.length === 0) {
      this.availableWords = [...this.originalWords];
    }

    const randomIndex = Math.floor(Math.random() * this.availableWords.length);
    this.currentWord = this.availableWords[randomIndex].toUpperCase();
    this.availableWords.splice(randomIndex, 1);
    this.guessedLetters.clear();
    this.wrongGuesses = 0;

    return this.currentWord;
  }

  guessLetter(letter) {
    letter = letter.toUpperCase();
    if (this.guessedLetters.has(letter)) return false;
    this.guessedLetters.add(letter);
    if (!this.currentWord.includes(letter)) {
      this.wrongGuesses++;
      return false;
    }
    return true;
  }

  isGameOver() {
    return this.wrongGuesses >= this.maxWrongGuesses;
  }

  hasWon() {
    return [...this.currentWord].every(letter =>
      this.guessedLetters.has(letter)
    );
  }
}

function startGame(game) {
  const gameDiv = document.getElementById("game");
  const logoH1 = document.getElementById("logo");

  gameDiv.innerHTML = "";
  logoH1.classList.add("logo-sm");

  const word = game.getNextWord();

  const hangmanImg = createHangmanImage();
  const wordDisplay = createWordDisplay(word);
  const keyboard = createKeyboard(game);

  gameDiv.appendChild(hangmanImg);
  gameDiv.appendChild(wordDisplay);
  gameDiv.appendChild(keyboard);
}

function createHangmanImage() {
  const img = document.createElement("img");
  img.src = "/images/hg-0.png";
  img.id = "hangman";
  img.className = "h-48 mb-8";
  return img;
}

function createWordDisplay(word) {
  const wordContainer = document.createElement("div");
  wordContainer.id = "word";
  wordContainer.className = "mb-8 flex gap-2";

  word.split("").forEach(() => {
    const span = document.createElement("span");
    span.className = "letter text-4xl font-bold";
    span.textContent = "_";
    wordContainer.appendChild(span);
  });

  return wordContainer;
}

function updateWordDisplay(game) {
  const wordDisplay = document.getElementById("word");
  const letters = wordDisplay.getElementsByClassName("letter");

  [...game.currentWord].forEach((letter, index) => {
    letters[index].textContent = game.guessedLetters.has(letter) ? letter : "_";
  });
}

function createKeyboard(game) {
  const keyboard = document.createElement("div");
  keyboard.id = "keyboard";
  keyboard.className = "grid grid-cols-7 gap-2";

  const language = sessionStorage.getItem("language") || "english";
  const letters =
    language === "russian" ? RUSSIAN_KEYBOARD_LETTERS : KEYBOARD_LETTERS;

  letters.forEach(letter => {
    const button = document.createElement("button");
    button.className = "keyboard-btn bg-gray-200 p-2 rounded hover:bg-gray-300";
    button.textContent = letter;
    button.dataset.letter = letter;

    button.addEventListener("click", () => {
      if (!button.disabled) {
        handleGuess(letter, game, button);
      }
    });

    keyboard.appendChild(button);
  });

  return keyboard;
}

function handleGuess(letter, game, button) {
  button.disabled = true;
  button.classList.add("opacity-50");

  const isCorrect = game.guessLetter(letter);

  if (!isCorrect) {
    const hangmanImg = document.getElementById("hangman");
    hangmanImg.src = `/images/hg-${game.wrongGuesses}.png`;
  }

  updateWordDisplay(game);

  if (game.hasWon()) {
    handleWin(game);
  } else if (game.isGameOver()) {
    handleLoss(game);
  }
}

function handleWin(game) {
  const hangmanImg = document.getElementById("hangman");
  hangmanImg.src = "/images/hg-win.png";

  setTimeout(() => {
    if (game.availableWords.length > 0) {
      startGame(game);
    } else {
      showGameComplete();
    }
  }, 1500);
}

function handleLoss(game) {
  showGameOver(game.currentWord);
}

function resetGame() {
  const difficultySelect = document.querySelector(".difficulty-select");
  const gameDiv = document.getElementById("game");
  const logoH1 = document.getElementById("logo");

  if (gameDiv) {
    gameDiv.innerHTML = "";
  }

  if (logoH1) {
    logoH1.classList.remove("logo-sm");
  }

  if (difficultySelect) {
    difficultySelect.style.display = "block";
  } else {
    window.location.replace(`${BASE_PATH}/`);
  }
}

function showGameOver(word) {
  const gameDiv = document.getElementById("game");
  const language = sessionStorage.getItem("language") || "english";
  const translations = TRANSLATIONS[language];

  gameDiv.innerHTML = `
        <div class="game-over mt-4 text-center">
            <img src="/images/hg-10.png" class="h-48 mb-8 mx-auto" alt="Game Over">
            <h2 class="text-xl mb-2">${translations.youLost}</h2>
            <p class="mb-4">${translations.theWordWas} ${word}</p>
            <button id="tryAgainBtn" class="button-primary px-6 py-2">${translations.tryAgain}</button>
        </div>
    `;

  document.getElementById("tryAgainBtn").addEventListener("click", resetGame);
}

function showGameComplete() {
  const gameDiv = document.getElementById("game");
  const language = sessionStorage.getItem("language") || "english";
  const translations = TRANSLATIONS[language];

  gameDiv.innerHTML = `
        <div class="game-complete text-center">
            <img src="/images/hg-win.png" class="h-48 mb-8 mx-auto" alt="You Won">
            <h2 class="text-xl mb-2">${translations.congratulations}</h2>
            <button id="playAgainBtn" class="button-primary mt-4 px-6 py-2">${translations.playAgain}</button>
        </div>
    `;

  document.getElementById("playAgainBtn").addEventListener("click", resetGame);
}

export function updateDifficultyText() {
  const language = sessionStorage.getItem("language") || "english";
  const translations = TRANSLATIONS[language];

  document.querySelector(".difficulty-select h2").textContent =
    translations.selectDifficulty;
  document.getElementById("easy").textContent = translations.easy;
  document.getElementById("medium").textContent = translations.medium;
  document.getElementById("hard").textContent = translations.hard;
}

export function initializeGame(difficulty) {
  const game = new WordGame(difficulty);
  startGame(game);
  return game;
}

export default WordGame;

export function toggleLanguage() {
  const currentLanguage = sessionStorage.getItem("language") || "english";
  const newLanguage = currentLanguage === "english" ? "russian" : "english";
  sessionStorage.setItem("language", newLanguage);

  const languageIcon = document.getElementById("language-icon");
  if (languageIcon) {
    languageIcon.src = `/images/${
      newLanguage === "english" ? "uk-flag" : "ru-flag"
    }.png`;
    languageIcon.alt = newLanguage === "english" ? "English" : "Русский";
  }

  window.location.reload();
}
