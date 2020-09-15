import { GET_USERS, SAVE_ANSWER } from '../actions/users';

export default function users(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users,
      };
    case SAVE_ANSWER:
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
    default:
      return state;
  }
}
