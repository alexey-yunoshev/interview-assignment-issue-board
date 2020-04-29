import {UserId} from "../users/types";
import {Query} from "./types";
import {FormAction, FormActionType as Action} from "./actions";

export interface FormState {
    query: Query,
    assignee: UserId
}

export const ANYONE = 0;

const initialState: FormState = {
    assignee: ANYONE,
    query: '',
}

export function formReducer(state = initialState, action: FormAction): Partial<FormState> {
    switch (action.type) {
        case Action.SetAssignee:
            return {...state, assignee: action.payload}
        case Action.SetQuery:
            return {...state, query: action.payload}
        default:
            return state;
    }
}