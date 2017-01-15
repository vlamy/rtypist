import Exercise from './Exercise';

let exercise;
describe('#constructor', () => {
    it('builds without crashing', () => {
        const data = require('../../../config/exercises/basic.json')
        exercise = new Exercise(data);
    });
});

describe('#length', () => {
    it('returns text length', () => {
        expect(exercise.length()).toEqual(17);
    });
});

describe('#charAt', () => {
    it('returns character at the first index', () => {
        expect(exercise.charAt(0)).toEqual('I');
    });
    it('returns character a middle index', () => {
        expect(exercise.charAt(3)).toEqual('é');
    });
    it('returns character at the last index', () => {
        expect(exercise.charAt(9)).toEqual('u');
    });
});

