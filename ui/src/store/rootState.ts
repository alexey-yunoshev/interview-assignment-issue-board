import { UserState } from "./users/types";
import { FormState } from "./form/reducer";
import { IssuesState } from "./issues/types";
import { SystemState } from "./system/types";

export interface RootState {
  form: FormState;
  issues: IssuesState;
  system: SystemState;
  users: UserState;
}
