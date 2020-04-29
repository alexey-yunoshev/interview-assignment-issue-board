import {combineReducers} from 'redux';
import {usersReducer} from "./users/reducer";
import {formReducer} from "./form/reducer";
import {issuesReducer} from "./issues/reducer";

export const rootReducer = combineReducers({
    form: formReducer,
    issues: issuesReducer,
    users: usersReducer,
});