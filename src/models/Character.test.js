import TYPING_STATUS from '../constants/TYPING_STATUS';
import Character from './Character';

describe('utils/Character', () => {
  let character;

  beforeEach(() => {
    character = new Character('a');
  });

  describe('constructor', () => {
    it('builds without crashing', () => {
      expect(character).not.toBeNull();
    });
  });

  describe('getStatus', () => {
    describe('when the character has not been typed yet', () => {
      it('return status togo', () => {
        expect(character.getStatus()).toEqual(TYPING_STATUS.togo);
      });
    });

    describe('when the correct character has been typed', () => {
      beforeEach(() => {
        character.setLastTypedValue('a');
      });

      it('return status success', () => {
        expect(character.getStatus()).toEqual(TYPING_STATUS.success);
      });
    });

    describe('when a wrong character has been typed', () => {
      beforeEach(() => {
        character.setLastTypedValue('b');
      });

      it('return status success', () => {
        expect(character.getStatus()).toEqual(TYPING_STATUS.error);
      });
    });
  });

  describe('getCharToDisplay', () => {
    describe('when the character has not been typed yet', () => {
      it('return the initial character', () => {
        expect(character.getCharToDisplay()).toEqual('a');
      });
    });

    describe('when the correct character has been typed', () => {
      beforeEach(() => {
        character.setLastTypedValue('a');
      });

      it('return the initial character', () => {
        expect(character.getCharToDisplay()).toEqual('a');
      });
    });

    describe('when a wrong character has been typed', () => {
      beforeEach(() => {
        character.setLastTypedValue('b');
      });

      it('return the typed character', () => {
        expect(character.getCharToDisplay()).toEqual('b');
      });
    });
  });

  describe('setLastTypedValue', () => {
    describe('when the character has not been typed yet', () => {
      it('return the initial character', () => {
        expect(character.lastTypedValue).toBeNull();
      });
    });

    describe('when a character has been typed', () => {
      beforeEach(() => {
        character.setLastTypedValue('b');
      });

      it('return the initial character', () => {
        expect(character.lastTypedValue).toEqual('b');
      });
    });
  });

  describe('setCurrentCharacterFlag', () => {
    beforeEach(() => {
      character.isCurrentChar = false;
      character.setCurrentCharacterFlag();
    });

    it('return the current status', () => {
      expect(character.getStatus()).toEqual(TYPING_STATUS.current);
    });
  });

  describe('unsetCurrentCharacterFlag', () => {
    beforeEach(() => {
      character.isCurrentChar = true;
      character.unsetCurrentCharacterFlag();
    });

    it('return the current status', () => {
      expect(character.getStatus()).not.toEqual(TYPING_STATUS.current);
    });
  });
});
