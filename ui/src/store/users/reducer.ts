import {UserState} from "./types";
import {UsersAction, UsersActionType as Action} from "./actions";

const initialState: UserState = {
    users: [],
}

export function usersReducer(state = initialState, action: UsersAction): UserState {
    switch (action.type) {
        case Action.SetUsers:
            return {...state, users: action.payload};
        default:
            return state;
    }
}
