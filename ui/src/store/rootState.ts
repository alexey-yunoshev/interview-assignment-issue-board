import {UserState} from "./users/types";
import {FormState} from "./form/reducer";
import {IssuesState} from "./issues/types";

export interface RootState {
    form: FormState,
    issues: IssuesState,
    users: UserState,
}