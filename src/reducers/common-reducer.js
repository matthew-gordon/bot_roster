import {
  LOGIN_USER,
  LOGOUT_USER,
} from '../actions/types';

const defaultState = {
  appName: 'Bot Roster',
  loggedIn: false,
  currentUser: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loggedIn: true,
        currentUser: {
          id: action.payload.id,
          username: action.payload.name,
          email: `${action.payload.name}@email.com`
        },
      }
    case LOGOUT_USER:
      return {
        ...state,
        loggedIn: false,
        currentUser: null,
      }
    default:
      return state;
  }
};
