import {UserId, UserName} from "../user/user";

export interface DisplayBug {
    id: string,
    title: string,
    assigneeId: UserId,
    assigneeName: UserName,
}
