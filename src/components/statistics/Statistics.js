const AVERAGE_WORD_LENGTH = 5;

export default class Statistics {
  constructor(exercise) {
    this.nbTotalChars = exercise.length();
    this.errorCount = 0;
    this.nbCharactersTyped = 0;
    this.latencySum = 0;
  }

  addKeyStroke(success, strokeLatencyInMs) {
    this.nbCharactersTyped++;
    if(!success) {
      this.errorCount++;
    }
    this.latencySum += strokeLatencyInMs;
  }

  getLiveProgress() {
    return (this.nbCharactersTyped / this.nbTotalChars) * 100;
  }

  getLiveAccuracy() {
    return 100 - (this.errorCount / this.nbCharactersTyped) * 100;
  }

  getLiveErrorCount() {
    return this.errorCount;
  }

  getLiveAverageStrokeLatency() {
    return (this.latencySum / this.nbCharactersTyped);
  }

  getLiveCharacterPerSecondAverage() {
    return (1000 / this.getLiveAverageStrokeLatency());
  }

  getLiveWordsPerMinuteAverage() {
    return (this.getLiveCharacterPerSecondAverage() / AVERAGE_WORD_LENGTH) * 60;
  }
}
