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
  const basicData = {
    "exercise": {
      "title": "Basic exercise",
      "tags": ["fr", "easy"],
      "desription": "A good exercise for testing the typist",
      "text": "Il était une fois"
    }
  }
  const rubyData = {
    "exercise": {
      "title": "Basic ruby",
      "tags": ["code", "ruby", "easy"],
      "desription": "A good exercise for testing the typist",
      "text": "def length(str)\n  str.length\nend"
    }
  }
  const longData = {
    "exercise": {
      "title": "Long text exercise",
      "tags": ["long", "test"],
      "desription": "A good exercise for testing the typist",
      "text": "il était une fois un exercice dont la longueur était supérieur au double de la longueur minimale requise pour par ligne"
    }
  }
  const javaData = {
    "exercise": {
      "title": "Long coding exercise",
      "tags": ["long", "test"],
      "desription": "A good exercise for testing the typist",
      "text": "public static void anyMethodWithLongName(String arg1, String arg2) {\n System.out.println(\"Hello Dude !\");\n}"
    }
  }

  describe('with monoline simple text', () => {
    beforeEach(() => {
      exercise = new Exercise(basicData);
    });

    it('works', () => {
      expect(exercise.lines).toEqual( [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]] );
    });
  });

  describe('with multiline via CR char text', () => {
    beforeEach(() => {
      exercise = new Exercise(rubyData);
    });

    it('works', () => {
      expect(exercise.lines).toEqual( [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28], [29, 30, 31]]);
    });
  });

  describe('with monoline longer than 32 chars text', () => {
    beforeEach(() => {
      exercise = new Exercise(longData);
    });

    it('works', () => {
      expect(exercise.lines).toEqual([[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61], [62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92], [93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118]]);
    });
  });

  describe('with multine, with one longer than 32 chars text', () => {
    beforeEach(() => {
      exercise = new Exercise(javaData);
    });

    it('works', () => {
      expect(exercise.lines).toEqual([[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61], [62, 63, 64, 65, 66, 67, 68], [69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99], [100, 101, 102, 103, 104, 105], [106]]);
    });
  });
});


