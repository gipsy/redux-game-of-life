import gameReducer from '../reducer';
import { makeGrid } from '../game_methods';
import { randomizer } from '../../../utils/randomizer';

describe('gameReducer', () => {
  let state;

  describe('gridReducer', () => {
    const GRID_SIZE = 30;
    it(`should contains ${GRID_SIZE} rows`, () => {
      const expectedResult = GRID_SIZE;

      expect(makeGrid(randomizer, GRID_SIZE).length)
        .toEqual(expectedResult);
    });

    it(`should contains ${GRID_SIZE} cols`, () => {
      const expectedResult = GRID_SIZE;

      expect(makeGrid(randomizer, GRID_SIZE)[0].length)
        .toEqual(expectedResult);
    });
  });

  describe('counterReducer', () => {
    beforeEach(() => {
      state = {
        frameId: null,
        startedAt: null,
        ticks: 0,
        frameRate: null,
      };
    });

    it('should return the initial state', () => {
      const expectedResult = state;

      expect(gameReducer(undefined, {}).counter)
        .toEqual(expectedResult);
    });
  });
});
