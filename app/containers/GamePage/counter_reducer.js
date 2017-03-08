import { handleActions } from 'redux-actions';

import * as types from './constants';
import { calculateFrameRate } from './game_methods';

const initialState = {
  frameId: null,
  startedAt: null,
  ticks: 0,
  frameRate: null,
};

const actionHandlers = {
  [types.STOP_GAME]: () => initialState,
  [types.PLAY_GAME]: (state, { payload }) => ({
    ...state,
    startedAt: payload,
  }),
  [types.TICK_GAME]: (state, { payload }) => ({
    ...state,
    ticks: state.ticks + 1,
    frameId: payload.frameId,
    frameRate: calculateFrameRate(state.ticks + 1, state.startedAt, payload.now),
  }),
};

export default handleActions(
  actionHandlers,
  initialState
);
