import { combineReducers } from 'redux';

import commonReducer from './common-reducer';
import teamReducer from './team-reducer';
import playerReducer from './player-reducer';

const rootReducer = combineReducers({
  common: commonReducer,
  teams: teamReducer,
  players: playerReducer,
});

export default rootReducer;
