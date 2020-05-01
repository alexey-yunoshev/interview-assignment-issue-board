import { call, put } from "redux-saga/effects";
import { FetchIssuesAction, setIssues } from "./actions";
import { showAlert } from "../system/actions";
import { issueService } from "../../api/issueService";

export function* fetchIssues(action: FetchIssuesAction) {
  try {
    const issues = yield call(issueService.fetchIssues, action.payload);
    yield put(setIssues(issues));
  } catch (e) {
    console.error(e);
    yield put(showAlert("error", "Failed to get issues"));
  }
}
