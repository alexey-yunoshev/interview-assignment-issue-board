import axios from "axios";

import {UserId} from "../store/users/types";
import {RawDisplayIssue} from "../store/issues/types";
import {Query} from "../store/form/types";

export interface FetchIssuesParams {
    assigneeId: UserId,
    query: Query,
}

export class IssueService {
    async fetchIssues(params: Partial<FetchIssuesParams>): Promise<Array<RawDisplayIssue>> {
        const {data} = await axios.get<Array<RawDisplayIssue>>('/api/issues', {params});
        return data;
    }
}

export const issueService = new IssueService();
