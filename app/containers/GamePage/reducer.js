import { combineReducers } from 'redux';
import counter from './counter_reducer';
import grid from './grid_reducer';

const gameReducer = combineReducers({
  counter,
  grid,
});

export default gameReducer;
