import { getInitialData } from '../utils/api';
import { getUsers } from './users';
import { receiveQuestions } from './questions';
import { setAuthedUser } from './authedUser';

const AUTHED_ID = null;

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(getUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
}
