import { Router } from 'express'
import {INTERNAL_SERVER_ERROR} from "http-status-codes";

import { logger } from '../logger';
import {DisplayBug} from "../display-bug/displayBug";
import {
    findAllBugs,
    findBugsByAssigneeId,
    findBugsByQuery,
    findBugsByQueryAndAssigneeId
} from "../display-bug/display-bug.service";
import {isDefined, isUndefined} from "../utils";
import {QueryResult} from "pg";

export const bugsRouter = Router()

// TODO add query params validation
bugsRouter.get('/', async (req, res) => {
    const query = req.query.query as string | undefined;
    const assigneeId = parseInt(req.query.assigneeId as string);

    try {
        let queryResult: QueryResult<DisplayBug>;
        if (isUndefined(query) && Number.isNaN(assigneeId)) {
            queryResult = await findAllBugs();
        } else if (Number.isInteger(assigneeId) && isDefined(query)) {
            queryResult = await findBugsByQueryAndAssigneeId(assigneeId, query);
        } else if (isDefined(query)) {
            queryResult = await findBugsByQuery(query);
        } else if (Number.isInteger(assigneeId)) {
            queryResult = await findBugsByAssigneeId(assigneeId);
        }

        res.json(queryResult!.rows)
    } catch (err) {
        logger.error(err.message, err);
        res.sendStatus(INTERNAL_SERVER_ERROR)
    }
})
