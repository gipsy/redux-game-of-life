/*
 * Game Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 *
 * OR
 *
 * use createAction Flux Standard Action utilities
 * https://github.com/acdlite/redux-actions
 */

import { createAction } from 'redux-actions';

import {
  PLAY_GAME,
  STOP_GAME,
  TICK_GAME,
  RANDOM_GAME,
  RESET_GAME,
  TOGGLE_ALIVE_GAME,
} from './constants';

export const startPlaying = createAction(PLAY_GAME);
export const stopPlaying = createAction(STOP_GAME);
export const tick = createAction(TICK_GAME);
export const makeRandomGrid = createAction(RANDOM_GAME);
export const reset = createAction(RESET_GAME);
export const toggle = createAction(TOGGLE_ALIVE_GAME);
