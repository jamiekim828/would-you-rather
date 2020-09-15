import { saveQuestionAnswer } from '../utils/api';

export const SAVE_ANSWER = ' SAVE_ANSWER';
export const GET_USERS = 'GET_USERS';

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
      dispatch(saveAnswer(authedUser, auestionId, answer));
    });
  };
}

export function getUsers(users) {
  return {
    type: GET_USERS,
    users,
  };
}
