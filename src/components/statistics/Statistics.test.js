import Statistics from './Statistics';
import Exercise from '../../models/Exercise';

const data = require('../../../config/exercises/basic.json');
const exercise = new Exercise(data);
let statistics;

describe('Statistics', () => {
  it('#constructor builds without crashing', () => {
    statistics = new Statistics(exercise);
  });

  it('#addKeyStroke adds a keystroke stats', () => {
    statistics.addKeyStroke(false,500);
    statistics.addKeyStroke(true,750);
    statistics.addKeyStroke(true,250);
    statistics.addKeyStroke(false,500);
    statistics.addKeyStroke(false,500);
  });

  it('#getLiveProgress return the progress', () => {
    expect(statistics.getLiveProgress()).toEqual('29.41');
  });

  it('#getLiveAccuracy return the accuracy', () => {
    expect(statistics.getLiveAccuracy()).toEqual('40.00');
  });

  it('#getLiveErrorCount return the error count', () => {
    expect(statistics.getLiveErrorCount()).toEqual(3);
  });

  it('#getLiveAverageStrokeLatency return the error count', () => {
    expect(statistics.getLiveAverageStrokeLatency()).toEqual('500.00');
  });

  it('#getLiveCharacterPerSecondAverage return the error count', () => {
    expect(statistics.getLiveCharacterPerSecondAverage()).toEqual('2.00');
  });

  it('#getLiveWordsPerMinuteAverage return the error count', () => {
    expect(statistics.getLiveWordsPerMinuteAverage()).toEqual('24.00');
  });
});
