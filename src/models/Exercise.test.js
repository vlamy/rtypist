import * as TYPING_STATUS from '../constants/TYPING_STATUS';
import Exercise from './Exercise';

describe('utils/Exercise', () => {
  let exercise;
  const cr = '\n';

  const basicData = {
    'exercise': {
      'title': 'Basic exercise',
      'tags': ['fr', 'easy'],
      'desription': 'A good exercise for testing the typist',
      'text': 'Il était une fois'
    }
  };
  const rubyData = {
    'exercise': {
      'title': 'Basic ruby',
      'tags': ['code', 'ruby', 'easy'],
      'desription': 'A good exercise for testing the typist',
      'text': 'def length(str)\n  str.length\nend'
    }
  };
  const longData = {
    'exercise': {
      'title': 'Long text exercise',
      'tags': ['long', 'test'],
      'desription': 'A good exercise for testing the typist',
      'text': 'il était une fois un exercice dont la longueur était supérieur au double de la longueur minimale requise pour par ligne'
    }
  };
  const javaData = {
    'exercise': {
      'title': 'Long coding exercise',
      'tags': ['long', 'test'],
      'desription': 'A good exercise for testing the typist',
      'text': 'public static void anyMethodWithLongName(String arg1, String arg2) {\n System.out.println(\'Hello Dude !\');\n}'
    }
  };

  describe('#constructor', () => {
    beforeEach(() => {
      exercise = new Exercise(basicData);
    });

    it('builds without crashing', () => {
      expect(exercise).not.toBeNull();
    });
  });

  describe('#getDescription', () => {
    describe('with provided data', () => {
      beforeEach(() => {
        exercise = new Exercise({
          exercise: { text: 'foo', description: 'test desc' }
        });
      });

      it('returns data description', () => {
        expect(exercise.getDescription()).toEqual('test desc');
      });
    });

    describe('without provided data', () => {
      beforeEach(() => {
        exercise = new Exercise({ exercise: { text: 'foo' } });
      });

      it('returns default description', () => {
        expect(exercise.getDescription()).toEqual('No description for this exercise');
      });
    });
  });

  describe('#getLength', () => {
    beforeEach(() => {
      exercise = new Exercise(basicData);
    });

    it('returns text length', () => {
      expect(exercise.getLength()).toEqual(17);
    });
  });

  describe('#getLocale', () => {
    describe('with provided data', () => {
      beforeEach(() => {
        exercise = new Exercise({
          exercise: { text: 'foo', locale: 'fr' }
        });
      });

      it('returns data locale', () => {
        expect(exercise.getLocale()).toEqual('fr');
      });
    });

    describe('without provided data', () => {
      beforeEach(() => {
        exercise = new Exercise({ exercise: { text: 'foo' } });
      });

      it('returns default locale', () => {
        expect(exercise.getLocale()).toEqual('en');
      });
    });
  });

  describe('#getSource', () => {
    describe('with provided data', () => {
      beforeEach(() => {
        exercise = new Exercise({
          exercise: { text: 'foo', source: 'test source' }
        });
      });

      it('returns data source', () => {
        expect(exercise.getSource()).toEqual('test source');
      });
    });

    describe('without provided data', () => {
      beforeEach(() => {
        exercise = new Exercise({ exercise: { text: 'foo' } });
      });

      it('returns default source', () => {
        expect(exercise.getSource()).toEqual('');
      });
    });
  });

  describe('#getTags', () => {
    describe('with provided data', () => {
      beforeEach(() => {
        exercise = new Exercise({
          exercise: { text: 'foo', tags: ['fr', 'easy'] }
        });
      });

      it('returns data tags', () => {
        expect(exercise.getTags()).toEqual(['fr', 'easy']);
      });
    });

    describe('without provided data', () => {
      beforeEach(() => {
        exercise = new Exercise({ exercise: { text: 'foo' } });
      });

      it('returns default tags', () => {
        expect(exercise.getTags()).toEqual([]);
      });
    });
  });

  describe('#getTitle', () => {
    describe('with provided data', () => {
      beforeEach(() => {
        exercise = new Exercise({ exercise: { text: 'foo', title: 'exercise' } });
      });

      it('returns text title', () => {
        expect(exercise.getTitle()).toEqual('exercise');
      });
    });

    describe('without provided data', () => {
      beforeEach(() => {
        exercise = new Exercise({ exercise: { text: 'foo' } });
      });

      it('returns text title', () => {
        expect(exercise.getTitle()).toEqual('Exercise');
      });
    });
  });

  describe('#hasTag', () => {
    describe('with provided data', () => {
      describe('and matching tag', () => {
        beforeEach(() => {
          exercise = new Exercise({
            exercise: { text: 'foo', tags: ['fr', 'easy'] }
          });
        });

        it('returns true', () => {
          expect(exercise.hasTag('fr')).toBeTruthy();
        });
      });

      describe('and no matching tag', () => {
        beforeEach(() => {
          exercise = new Exercise({
            exercise: { text: 'foo', tags: ['fr', 'easy'] }
          });
        });

        it('returns true', () => {
          expect(exercise.hasTag('en')).toBeFalsy();
        });
      });
    });

    describe('without provided data', () => {
      beforeEach(() => {
        exercise = new Exercise({ exercise: { text: 'foo' } });
      });

      it('returns false', () => {
        expect(exercise.hasTag('some tag')).toBeFalsy();
      });
    });
  });

  describe('#_prepareText', () => {
    describe('with monoline simple text', () => {
      beforeEach(() => {
        exercise = new Exercise(basicData);
      });

      it('works', () => {
        expect(exercise.lines).toEqual( [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]] );
        expect(exercise.characters).toEqual([{'isCurrentChar': false, 'lastTypedValue': null, 'reference': 'I'}, {'isCurrentChar': false, 'lastTypedValue': null, 'reference': 'l'}, {'isCurrentChar': false, 'lastTypedValue': null, 'reference': ' '}, {'isCurrentChar': false, 'lastTypedValue': null, 'reference': 'é'}, {'isCurrentChar': false, 'lastTypedValue': null, 'reference': 't'}, {'isCurrentChar': false, 'lastTypedValue': null, 'reference': 'a'}, {'isCurrentChar': false, 'lastTypedValue': null, 'reference': 'i'}, {'isCurrentChar': false, 'lastTypedValue': null, 'reference': 't'}, {'isCurrentChar': false, 'lastTypedValue': null, 'reference': ' '}, {'isCurrentChar': false, 'lastTypedValue': null, 'reference': 'u'}, {'isCurrentChar': false, 'lastTypedValue': null, 'reference': 'n'}, {'isCurrentChar': false, 'lastTypedValue': null, 'reference': 'e'}, {'isCurrentChar': false, 'lastTypedValue': null, 'reference': ' '}, {'isCurrentChar': false, 'lastTypedValue': null, 'reference': 'f'}, {'isCurrentChar': false, 'lastTypedValue': null, 'reference': 'o'}, {'isCurrentChar': false, 'lastTypedValue': null, 'reference': 'i'}, {'isCurrentChar': false, 'lastTypedValue': null, 'reference': 's'}]);
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

  describe('#handleInputEvent', () => {
    beforeEach(() => {
      exercise = new Exercise({
        exercise: {
          text: 'Il était\n'
        }
      });
      exercise.handleInputEvent('Il était\n');
    });

    describe('input has expected character', () => {
      it('puts regular character as success', () => {
        expect(exercise.characters[0].getStatus()).toEqual(TYPING_STATUS.success);
        expect(exercise.characters[0].lastTypedValue).toEqual('I');
      });

      it('puts space character as success', () => {
        expect(exercise.characters[2].getStatus()).toEqual(TYPING_STATUS.success);
        expect(exercise.characters[2].lastTypedValue).toEqual(' ');
      });

      it('puts carriage return character as current', () => {
        expect(exercise.characters[8].getStatus()).toEqual(TYPING_STATUS.success);
        expect(exercise.characters[8].lastTypedValue).toEqual(cr);
      });
    });

    describe('input has unexpected character', () => {
      beforeEach(() => {
        exercise.handleInputEvent('il\nétait ');
      });

      it('puts regular typed character as error', () => {
        expect(exercise.characters[0].getStatus()).toEqual(TYPING_STATUS.error);
        expect(exercise.characters[0].lastTypedValue).toEqual('i');
      });

      it('puts character typed instead of space character as error', () => {
        expect(exercise.characters[2].getStatus()).toEqual(TYPING_STATUS.error);
        expect(exercise.characters[2].lastTypedValue).toEqual(cr);
      });
    });
  });
});
