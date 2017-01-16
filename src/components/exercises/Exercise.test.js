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

describe('#_linearize', () => {
    const basicData = require('../../../config/exercises/basic.json')
    const rubyData = require('../../../config/exercises/ruby.json')
    const longData = require('../../../config/exercises/long.json')
    const javaData = require('../../../config/exercises/java.json')
    const cr = '\n';

    describe('with monoline simple text', () => {
        beforeEach(() => {
            exercise = new Exercise(basicData);
        });

        it('works', () => {
            exercise._linearize()
            expect(exercise.lines).toEqual( [["I", "l", " ", "é", "t", "a", "i", "t", " ", "u", "n", "e", " ", "f", "o", "i", "s"]] );
        });
    });

    describe('with multiline via CR char text', () => {
        beforeEach(() => {
            exercise = new Exercise(rubyData);
        });

        it('works', () => {
            exercise._linearize()
            expect(exercise.lines).toEqual( [["d", "e", "f", " ", "l", "e", "n", "g", "t", "h", "(", "s", "t", "r", ")", cr], [" ", " ", "s", "t", "r", ".", "l", "e", "n", "g", "t", "h", cr], ["e", "n", "d"]]);
        });
    });

    describe('with monoline longer than 32 chars text', () => {
        beforeEach(() => {
            exercise = new Exercise(longData);
        });

        it('works', () => {
            exercise._linearize()
            expect(exercise.lines).toEqual([["A", "p", "r", "è", "s", " ", "u", "n", "e", " ", "f", "o", "r", "m", "a", "t", "i", "o", "n", " ", "d", "'", "i", "n", "g", "é", "n", "i", "e", "u", "r"], [" ", "a", "é", "r", "o", "n", "a", "u", "t", "i", "q", "u", "e", ",", " ", "P", "e", "s", "q", "u", "e", "t", " ", "a", " ", "o", "c", "c", "u", "p", "é"], [" ", "d", "i", "f", "f", "é", "r", "e", "n", "t", "s", " ", "p", "o", "s", "t", "e", "s", " ", "d", "a", "n", "s", " ", "l", "'", "i", "n", "d", "u", "s"], ["t", "r", "i", "e", " ", "a", "é", "r", "o", "s", "p", "a", "t", "i", "a", "l", "e", " ", "e", "t", " ", "à", " ", "l", "'", "a", "g", "e", "n", "c", "e"], [" ", "s", "p", "a", "t", "i", "a", "l", "e", " ", "e", "u", "r", "o", "p", "é", "e", "n", "n", "e", " ", "a", "v", "a", "n", "t", " ", "d", "e", " ", "d"], ["e", "v", "e", "n", "i", "r", ",", " ", "e", "n", " ", "2", "0", "0", "4", ",", " ", "p", "i", "l", "o", "t", "e", " ", "d", "e", " ", "l", "i", "g", "n"], ["e", "."]]);
        });
    });

    describe('with multine, with one longer than 32 chars text', () => {
        beforeEach(() => {
            exercise = new Exercise(javaData);
        });

        it('works', () => {
            exercise._linearize()
            expect(exercise.lines).toEqual([["p", "u", "b", "l", "i", "c", " ", "s", "t", "a", "t", "i", "c", " ", "v", "o", "i", "d", " ", "m", "e", "t", "h", "o", "d", "W", "i", "t", "h", "A", "n"], ["y", "L", "o", "n", "g", "N", "a", "m", "e", "(", "S", "t", "r", "i", "n", "g", "[", "]", " ", "a", "r", "g", "s", ")", " ", "{", cr], [" ", " ", "S", "y", "s", "t", "e", "m", ".", "o", "u", "t", ".", "p", "r", "i", "n", "t", "l", "n", "(", "a", "r", "g", "s", ".", "l", "e", "n", "g", "t"], ["h", "(", ")", ")", ";", cr], ["}"]]
            );
        });
    });
});


