import Statistics from './Statistics';
import Exercise from '../exercises/Exercise';

const exercise = new Exercise('stats-test', 'asdflhqueoeuthfaljasuhfue');
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
    expect(statistics.getLiveProgress()).toEqual(20);
  });

  it('#getLiveAccuracy return the accuracy', () => {
    expect(statistics.getLiveAccuracy()).toEqual(40);
  });

  it('#getLiveErrorCount return the error count', () => {
    expect(statistics.getLiveErrorCount()).toEqual(3);
  });

  it('#getLiveAverageStrokeLatency return the error count', () => {
    expect(statistics.getLiveAverageStrokeLatency()).toEqual(500);
  });

  it('#getLiveCharacterPerSecondAverage return the error count', () => {
    expect(statistics.getLiveCharacterPerSecondAverage()).toEqual(2);
  });

  it('#getLiveWordsPerMinuteAverage return the error count', () => {
    expect(statistics.getLiveWordsPerMinuteAverage()).toEqual(24);
  });
});
