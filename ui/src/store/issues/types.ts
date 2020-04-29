import {UserId, UserName} from "../users/types";

export interface DisplayIssue {
    id: string,
    title: string,
    assigneeId: UserId,
    assigneeName: UserName,
}

export interface IssuesState {
    issues: Array<DisplayIssue>,
}