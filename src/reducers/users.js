import {
  GET_USERS,
  SAVE_ANSWER,
  UPDATE_USER,
  UPDATE_USER_ANSWER,
} from '../actions/users';

export default function users(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users,
      };
    case SAVE_ANSWER:
      console.log(action);
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUSer],
          answers: {
            ...state[action.authedUser].answers,
            [action.questionId]: [action.answer],
          },
        },
      };
    case UPDATE_USER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          questions: state[action.authedUser].questions.concat([
            action.questionId,
          ]),
        },
      };
    case UPDATE_USER_ANSWER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.questionId]: action.answer,
          },
        },
      };
    default:
      return state;
  }
}
