import "../css/style.css";
import { DIFFICULTY } from "./consts";
import { initializeGame, toggleLanguage, updateDifficultyText } from "./game";
import { initDarkMode } from "./utils";

const init = () => {
  initDarkMode();
  setupLanguageToggle();
  setupDifficultyButtons();
  setupKeyboardEvents();

  updateDifficultyText();
};

const setupLanguageToggle = () => {
  const languageToggle = document.getElementById("language-toggle");
  if (languageToggle) {
    languageToggle.addEventListener("click", toggleLanguage);

    const currentLanguage = sessionStorage.getItem("language") || "english";
    const languageIcon = document.getElementById("language-icon");
    if (languageIcon) {
      languageIcon.src = `/images/${
        currentLanguage === "english" ? "uk-flag" : "ru-flag"
      }.png`;
      languageIcon.alt = currentLanguage === "english" ? "English" : "Русский";
    }
  }
};

const setupDifficultyButtons = () => {
  const difficultyDiv = document.querySelector(".difficulty-select");

  document.getElementById("easy")?.addEventListener("click", () => {
    difficultyDiv.style.display = "none";
    initializeGame(DIFFICULTY.EASY);
  });

  document.getElementById("medium")?.addEventListener("click", () => {
    difficultyDiv.style.display = "none";
    initializeGame(DIFFICULTY.MEDIUM);
  });

  document.getElementById("hard")?.addEventListener("click", () => {
    difficultyDiv.style.display = "none";
    initializeGame(DIFFICULTY.HARD);
  });
};

const setupKeyboardEvents = () => {
  document.addEventListener("keydown", event => {
    const key = event.key.toUpperCase();
    const button = document.querySelector(`button[data-letter="${key}"]`);
    if (button && !button.disabled) {
      button.click();
    }
  });
};

init();
