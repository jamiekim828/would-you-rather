import { saveQuestion, saveQuestionAnswer } from '../utils/api';
import { _getQuestions } from '../utils/_DATA';
import { updateUser, updateUser2 } from './users';

export const ADD_QUESTION = 'ADD_QUESTION';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const SAVE_ANSWER = 'SAVE_ANSWER';
export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER';

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

// save answer
function saveUserAnswer({ authedUser, qid, answer }) {
  return {
    type: SAVE_USER_ANSWER,
    authedUser,
    qid,
    answer,
  };
}

export function handleSaveAnswer(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser, questions } = getState();
    console.log('maybe here', questions, qid, answer);
    return saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
      dispatch(saveUserAnswer({ authedUser, qid, answer }));
      dispatch(updateUser2(authedUser, qid, answer));
    });
  };
}
