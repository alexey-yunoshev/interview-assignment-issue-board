import {UsersAction} from "./users/actions";
import {SystemAction} from "./app/actions";
import {Dispatch} from "react";
import {FormAction} from "./form/actions";
import {IssuesAction} from "./issues/actions";

export type RootAction =
    | FormAction
    | IssuesAction
    | SystemAction
    | UsersAction
    ;

export type AppDispatch = Dispatch<RootAction>;
