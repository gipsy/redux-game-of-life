/*
 * GameConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const PLAY_GAME = 'boilerplate/Game/PLAY_GAME';
export const STOP_GAME = 'boilerplate/Game/STOP_GAME';
export const TICK_GAME = 'boilerplate/Game/TICK_GAME';
export const RANDOM_GAME = 'boilerplate/Game/RANDOM_GAME';
export const RESET_GAME = 'boilerplate/Game/RESET_GAME';
export const TOGGLE_ALIVE_GAME = 'boilerplate/Game/TOGGLE_ALIVE_GAME';
