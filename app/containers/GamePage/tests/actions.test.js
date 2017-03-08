import {
  PLAY_GAME,
  STOP_GAME,
  TICK_GAME,
  RANDOM_GAME,
  RESET_GAME,
  TOGGLE_ALIVE_GAME,
} from '../constants';

import {
  startPlaying,
  stopPlaying,
  tick,
  makeRandomGrid,
  reset,
  toggle,
} from '../actions';

describe('Game Actions', () => {
  describe('startPlaying', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: PLAY_GAME,
      };

      expect(startPlaying()).toEqual(expectedResult);
    });
  });

  describe('stopPlaying', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: STOP_GAME,
      };

      expect(stopPlaying()).toEqual(expectedResult);
    });
  });

  describe('tick', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: TICK_GAME,
      };

      expect(tick()).toEqual(expectedResult);
    });
  });

  describe('makeRandomGrid', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: RANDOM_GAME,
      };
      expect(makeRandomGrid()).toEqual(expectedResult);
    });
  });

  describe('reset', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: RESET_GAME,
      };

      expect(reset()).toEqual(expectedResult);
    });
  });

  describe('toggle', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: TOGGLE_ALIVE_GAME,
      };

      expect(toggle()).toEqual(expectedResult);
    });
  });
});
