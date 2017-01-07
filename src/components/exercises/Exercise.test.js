import Exercise from './Exercise';

const title = 'mock title';
const text = 'lalalilalo';

let exercise;
describe('#constructor', () => {
    it('builds without crashing', () => {
        exercise = new Exercise(title, text);
    });
});

describe('#length', () => {
    it('returns text length', () => {
        expect(exercise.length()).toEqual(10);
    });
});

describe('#charAt', () => {
    it('returns character at the first index', () => {
        expect(exercise.charAt(0)).toEqual('l');
    });
    it('returns character a middle index', () => {
        expect(exercise.charAt(3)).toEqual('a');
    });
    it('returns character at the last index', () => {
        expect(exercise.charAt(9)).toEqual('o');
    });
});

