import { takeLatest } from "redux-saga/effects";
import { UsersActionType } from "./users/actions";
import { fetchUsers } from "./users/sagas";
import { IssuesActionType } from "./issues/actions";
import { fetchIssues } from "./issues/sagas";

export function* rootSaga() {
  yield takeLatest(UsersActionType.FetchUsers, fetchUsers);
  yield takeLatest(IssuesActionType.FetchIssues, fetchIssues);
}
