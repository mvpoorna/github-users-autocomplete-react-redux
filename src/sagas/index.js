import { takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";
import { usersFetchList } from "./githubUsers";

// main saga generators
export function* sagas() {
  yield [
    fork(takeLatest, 'GITHUB_USERS_FETCH_LIST', usersFetchList)

  ];
}
