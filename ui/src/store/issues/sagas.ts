import {call, delay, put} from 'redux-saga/effects'
import {FetchIssuesAction, setIssues} from "./actions";
import {hideAlert, showAlert} from "../app/actions";
import {issueService} from "../../api/issueService";

export function* fetchIssues(action: FetchIssuesAction) {
    try {
        const issues = yield call(issueService.fetchIssues, action.payload);
        yield put(setIssues(issues))
    } catch (e) {
        console.error(e);
        yield put(showAlert());
        yield delay(2000);
        yield put(hideAlert());
    }
}

