import WordGame from "./game";

const testWords = ["яблоко", "банан"];
const game = new WordGame(testWords);

function testGameIterations(iterations) {
  for (let i = 0; i < iterations; i++) {
    const nextWord = game.getNextWord();
    console.log(`Слово ${i + 1}:`, nextWord);
  }
}

testGameIterations(5);
