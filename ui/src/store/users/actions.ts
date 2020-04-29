import {User} from "./types";

export enum UsersActionType {
    FetchUsers = '[Users] fetch users',
    SetUsers = '[Users] set users',
}

export interface FetchUsersAction {
    type: UsersActionType.FetchUsers,
}

export interface SetUsersAction {
    type: UsersActionType.SetUsers,
    payload: Array<User>,
}

export type UsersAction =
    | FetchUsersAction
    | SetUsersAction
    ;

export function fetchUsers(): FetchUsersAction {
    return {
        type: UsersActionType.FetchUsers
    }
}

export function setUsers(users: Array<User>): SetUsersAction {
    return {
        type: UsersActionType.SetUsers,
        payload: users,
    }
}
