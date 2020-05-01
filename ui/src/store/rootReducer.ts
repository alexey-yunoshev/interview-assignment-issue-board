import { combineReducers } from "redux";
import { usersReducer } from "./users/reducer";
import { formReducer } from "./form/reducer";
import { issuesReducer } from "./issues/reducer";
import { systemReducer } from "./system/reducer";

export const rootReducer = combineReducers({
  form: formReducer,
  issues: issuesReducer,
  system: systemReducer,
  users: usersReducer,
});
