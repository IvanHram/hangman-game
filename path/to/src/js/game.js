class WordGame {
  constructor(words) {
    this.words = words;
    this.currentIndex = 0;
  }

  getNextWord() {
    if (this.currentIndex >= this.words.length) {
      this.currentIndex = 0; // Сброс индекса для повторного прохождения списка
    }
    const word = this.words[this.currentIndex];
    this.currentIndex += 1;
    return word;
  }
}

export default WordGame;
