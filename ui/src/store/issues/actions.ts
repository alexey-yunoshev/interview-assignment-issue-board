import { RawDisplayIssue } from "./types";
import { FetchIssuesParams } from "../../api/issueService";

export enum IssuesActionType {
  FetchIssues = "[Issues] fetch issues",
  SetIssues = "[Issues] set issues",
}

export interface FetchIssuesAction {
  type: IssuesActionType.FetchIssues;
  payload: Partial<FetchIssuesParams>;
}

export interface SetIssuesAction {
  type: IssuesActionType.SetIssues;
  payload: Array<RawDisplayIssue>;
}

export type IssuesAction = FetchIssuesAction | SetIssuesAction;

export function fetchIssues(params: Partial<FetchIssuesParams>): FetchIssuesAction {
  return {
    type: IssuesActionType.FetchIssues,
    payload: params,
  };
}

export function setIssues(issues: Array<RawDisplayIssue>): SetIssuesAction {
  return {
    type: IssuesActionType.SetIssues,
    payload: issues,
  };
}
