import { IssuesState } from "./types";
import { IssuesAction, IssuesActionType as Action } from "./actions";

const initialState: IssuesState = {
  issues: [],
};

export function issuesReducer(state = initialState, action: IssuesAction): IssuesState {
  switch (action.type) {
    case Action.SetIssues:
      return { ...state, issues: action.payload };
    default:
      return state;
  }
}
