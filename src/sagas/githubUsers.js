import { call, put } from "redux-saga/effects";
import githubUsers from "../api/githubUsers";

// fetch the user's list
export function* usersFetchList(action) {
  // call the api to get the users list
  const users = yield call(githubUsers.getList(action));
  console.log("SAGS",action)

  // save the users in state
  yield put({
    type: 'GITHUB_USERS_LIST_SAVE',
    users: users,
  });
}
