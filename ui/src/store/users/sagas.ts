import { call, put } from "redux-saga/effects";
import { userService } from "../../api/userService";
import { setUsers } from "./actions";
import { showAlert } from "../system/actions";

export function* fetchUsers() {
  try {
    const users = yield call(userService.fetchUsers);
    yield put(setUsers(users));
  } catch (e) {
    console.error(e);
    yield put(showAlert("error", "Failed to get users."));
  }
}
