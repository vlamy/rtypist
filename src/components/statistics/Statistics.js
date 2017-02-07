const AVERAGE_WORD_LENGTH = 5;

export default class Statistics {
  constructor(exercise) {
    this.nbTotalChars = exercise.getLength();
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
    return parseFloat((this.nbCharactersTyped / this.nbTotalChars) * 100).toFixed(2);
  }

  getLiveAccuracy() {
    return parseFloat(100 - (this.errorCount / this.nbCharactersTyped) * 100).toFixed(2);
  }

  getLiveErrorCount() {
    return this.errorCount;
  }

  getLiveAverageStrokeLatency() {
    return parseFloat((this.latencySum / this.nbCharactersTyped)).toFixed(2);
  }

  getLiveCharacterPerSecondAverage() {
    return parseFloat((1000 / this.getLiveAverageStrokeLatency())).toFixed(2);
  }

  getLiveWordsPerMinuteAverage() {
    return parseFloat((this.getLiveCharacterPerSecondAverage() / AVERAGE_WORD_LENGTH) * 60).toFixed(2);
  }
}
