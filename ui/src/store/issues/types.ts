import {UserId, UserName} from "../users/types";

export interface RawDisplayIssue {
    id: string,
    title: string,
    assignee_id: UserId,
    assignee_name: UserName,
}

export interface IssuesState {
    issues: Array<RawDisplayIssue>,
}