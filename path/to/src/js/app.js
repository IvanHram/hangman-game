import { ALL_WORDS } from "./consts";
import WordGame from "./game";

const game = new WordGame(ALL_WORDS);

// Пример получения следующего слова
const nextWord = game.getNextWord();
console.log(nextWord);
