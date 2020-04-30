import { Router } from "express";
import { INTERNAL_SERVER_ERROR } from "http-status-codes";

import { logger } from "../logger";
import { RawDisplayIssue } from "../display-bug/rawDisplayIssue";
import {
  findAllIssues,
  findIssuesByAssigneeId,
  findIssuesByQuery,
  findIssuesByQueryAndAssigneeId,
} from "../display-bug/display-bug.service";
import { isDefined, isUndefined } from "../utils";
import { QueryResult } from "pg";

export const bugsRouter = Router();

// TODO add query params validation
bugsRouter.get("/", async (req, res) => {
  const query = req.query.query as string | undefined;
  const assigneeId = parseInt(req.query.assigneeId as string);

  try {
    let queryResult: QueryResult<RawDisplayIssue>;
    if (isUndefined(query) && Number.isNaN(assigneeId)) {
      queryResult = await findAllIssues();
    } else if (Number.isInteger(assigneeId) && isDefined(query)) {
      queryResult = await findIssuesByQueryAndAssigneeId(assigneeId, query);
    } else if (isDefined(query)) {
      queryResult = await findIssuesByQuery(query);
    } else if (Number.isInteger(assigneeId)) {
      queryResult = await findIssuesByAssigneeId(assigneeId);
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    res.json(queryResult!.rows);
  } catch (err) {
    logger.error(err.message, err);
    res.sendStatus(INTERNAL_SERVER_ERROR);
  }
});
