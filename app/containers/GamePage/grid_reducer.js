import { handleActions } from 'redux-actions';
import * as gameMethods from './game_methods';
import { randomizer } from '../../utils/randomizer';

import {
  TICK_GAME,
  RANDOM_GAME,
  RESET_GAME,
  TOGGLE_ALIVE_GAME,
} from './constants';

const GRID_SIZE = 30;
const DEFAULT_STATE = gameMethods.makeGrid(randomizer, GRID_SIZE);

// `payload` came from node_modules/redux-actions/src/createAction.js:
// payload: finalActionCreator(...args)
const actionHandlers = {
  [TICK_GAME]: gameMethods.nextState,

  [RESET_GAME]:
    // eslint-disable-next-line no-unused-vars
    (state) => gameMethods.makeBlankGrid(GRID_SIZE, GRID_SIZE),

  [RANDOM_GAME]:
    (state, { payload }) => gameMethods.makeGrid(payload.randomizer, GRID_SIZE),

  [TOGGLE_ALIVE_GAME]:
    (state, { payload }) => gameMethods.toggle(payload.coordinates, payload.current, state),
};

export default handleActions(
  actionHandlers,
  DEFAULT_STATE,
);
