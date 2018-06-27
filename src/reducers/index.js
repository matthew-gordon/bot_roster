import { combineReducers } from 'redux';

import commonReducer from './common-reducer';
import teamReducer from './team-reducer';

const rootReducer = combineReducers({
  common: commonReducer,
  teams: teamReducer,
});

export default rootReducer;
