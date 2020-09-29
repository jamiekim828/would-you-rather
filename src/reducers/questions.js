import {
  ADD_QUESTION,
  RECEIVE_QUESTIONS,
  SAVE_USER_ANSWER,
} from '../actions/questions';

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return { ...state, ...action.questions };
    case ADD_QUESTION:
      return { ...state, [action.question.id]: action.question };
    case SAVE_USER_ANSWER:
      console.log('solved');
      console.log(action.qid, action.answer);
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: [
              ...state[action.qid][action.answer].votes.concat([
                action.authedUser,
              ]),
            ],
          },
        },
      };
    default:
      return state;
  }
}
