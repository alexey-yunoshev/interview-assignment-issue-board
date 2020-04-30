import {connect} from "react-redux";

import {RootState} from "../store/rootState";
import {AppDispatch} from "../store/rootAction";
import {FetchIssuesParams} from "../api/issueService";
import {fetchIssues} from "../store/issues/actions";
import {Query} from "../store/form/types";
import {UserId} from "../store/users/types";
import {useEffect} from "react";
import {fetchUsers} from "../store/users/actions";

export interface FetcherProps {
    assigneeId: UserId,
    query: Query,
    fetchUsers: () => void,
    fetchIssues: (params: Partial<FetchIssuesParams>) => void,
}

export function FetcherComponent({assigneeId, query, fetchIssues, fetchUsers}: FetcherProps) {
    useEffect(() => {
        fetchUsers()
    }, [fetchUsers]);

    useEffect(() => {
        const params: Partial<FetchIssuesParams> = {};
        if (assigneeId !== 0) {
            params.assigneeId = assigneeId;
        }
        if (query !== '') {
            params.query = query;
        }

        fetchIssues(params);
    }, [
        assigneeId,
        query,
        fetchIssues
    ])
    return null;
}

export const Fetcher =
    connect(
        (state: RootState) => ({assigneeId: state.form.assignee, query: state.form.query}),
        (dispatch: AppDispatch) => ({
            fetchIssues: (params: Partial<FetchIssuesParams>) => dispatch(fetchIssues(params)),
            fetchUsers: () => dispatch(fetchUsers()),
        }),
    )
    (FetcherComponent);