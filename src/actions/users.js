import { saveQuestionAnswer } from '../utils/api';

export const SAVE_ANSWER = ' SAVE_ANSWER';
export const GET_USERS = 'GET_USERS';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_ANSWER = 'UPDATE_USER_ANSWER';

function saveAnswer({ authedUser, questionId, answer }) {
  return {
    type: SAVE_ANSWER,
    authedUser,
    questionId,
    answer,
  };
}

export function handleSaveAnswer(questionId, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    return saveQuestionAnswer({ authedUser, questionId, answer }).then(() => {
      dispatch(saveAnswer(authedUser, questionId, answer));
    });
  };
}

export function updateUserAnswer(authedUser, questionId, answer) {
  return {
    type: UPDATE_USER_ANSWER,
    authedUser,
    questionId,
    answer,
  };
}

export function getUsers(users) {
  return {
    type: GET_USERS,
    users,
  };
}

export function updateUser(authedUser, questionId) {
  return {
    type: UPDATE_USER,
    authedUser,
    questionId,
  };
}
