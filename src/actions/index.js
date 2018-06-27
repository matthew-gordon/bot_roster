import {
  LOGIN_USER,
  LOGOUT_USER,
  CREATE_NEW_TEAM,
} from '../actions/types';

let nextTeamId = 1;
let nextUserId = 1;

export function loginUser(name, history) {
  const payload = {
    id: nextUserId++,
    name,
  }

  return (dispatch) => {
    dispatch({
      type: LOGIN_USER,
      payload,
    })
    // programatically navigate user
    history.push('/');
  }
};

export function logoutUser() {
  return (dispatch) => {
    dispatch({
      type: LOGOUT_USER,
    });
  }
};

export const addNewTeam = (team, history) => {
  const payload = {
    id: nextTeamId++,
    name: team.name,
    description: team.description,
  };

  return (dispatch) => {
    // create new team
    dispatch({
      type: CREATE_NEW_TEAM,
      payload,
    })
    // programatically navigate user
    history.push('/teams');
  }
};

