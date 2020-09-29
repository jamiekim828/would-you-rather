export const SAVE_ANSWER = ' SAVE_ANSWER';
export const GET_USERS = 'GET_USERS';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER2 = 'UPDATE_USER2';

export function saveAnswer({ authedUser, questionId, answer }) {
  return {
    type: SAVE_ANSWER,
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

export function updateUser2(userId, qid, answer) {
  return {
    type: UPDATE_USER2,
    userId,
    qid,
    answer,
  };
}
