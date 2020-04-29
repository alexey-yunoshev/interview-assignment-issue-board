import {UserId} from "../users/types";
import {Query} from "./types";

export enum FormActionType {
    SetAssignee = '[Form] set assignee',
    SetQuery = '[Form] set query',
}

export interface SetAssigneeAction {
    type: FormActionType.SetAssignee,
    payload: UserId,
}

export interface SetQueryAction {
    type: FormActionType.SetQuery,
    payload: Query,
}

export type FormAction =
    | SetAssigneeAction
    | SetQueryAction
    ;

export function setAssignee(id: UserId): SetAssigneeAction {
    return {
        type: FormActionType.SetAssignee,
        payload: id,
    }
}

export function setQuery(query: Query): SetQueryAction {
    return {
        type: FormActionType.SetQuery,
        payload: query,
    }
}