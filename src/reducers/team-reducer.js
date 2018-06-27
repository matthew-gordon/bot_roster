import {
  CREATE_NEW_TEAM,
} from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_NEW_TEAM:
      return [
        ...state,
        { ...action.payload },
      ];
    default:
      return state;
  }
};
