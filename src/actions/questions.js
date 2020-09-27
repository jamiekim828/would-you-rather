import { saveQuestion } from '../utils/api';
import { _getQuestions } from '../utils/_DATA';
import { updateUser } from './users';

export const ADD_QUESTION = 'ADD_QUESTION';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

// add question
function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(optionOne, optionTwo) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    return saveQuestion({
      author: authedUser,
      optionOne,
      optionTwo,
    }).then((question) => {
      dispatch(addQuestion(question));
      dispatch(updateUser(question.author, question.id));
    });
  };
}

// save question
export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

// initial data
export function getInitialQuestions() {
  return (dispatch) => {
    return _getQuestions().then((questions) => {
      dispatch(receiveQuestions(questions));
    });
  };
}
