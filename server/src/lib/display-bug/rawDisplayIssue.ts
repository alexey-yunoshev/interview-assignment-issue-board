import {UserId, UserName} from "../user/user";

export interface RawDisplayIssue {
    id: string,
    title: string,
    assignee_id: UserId,
    assignee_name: UserName,
}
