import { call, put, delay } from "redux-saga/effects";
import { userService } from "../../api/userService";
import { setUsers } from "./actions";
import { hideAlert, showAlert } from "../app/actions";

export function* fetchUsers() {
  try {
    const users = yield call(userService.fetchUsers);
    yield put(setUsers(users));
  } catch (e) {
    console.error(e);
    yield put(showAlert());
    yield delay(2000);
    yield put(hideAlert());
  }
}
