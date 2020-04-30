import {Router} from "express";
import {INTERNAL_SERVER_ERROR} from "http-status-codes";

import {logger} from "../logger";
import {RawDisplayIssue} from "../display-bug/rawDisplayIssue";
import {
  findAllIssues,
  findIssuesByAssigneeId,
  findIssuesByQuery,
  findIssuesByQueryAndAssigneeId,
} from "../display-bug/display-bug.service";
import {isDefined, isUndefined} from "../utils";
import {QueryResult} from "pg";
import {IsInt, IsNumber, IsOptional, Length} from "class-validator";
import {validateParams} from "../middlewares/validate";
import {Type} from "class-transformer";

export const issuesRouter = Router();

class GetIssuesParams {
  @Length(1, 50)
  @IsOptional()
    // @ts-ignore: no initializer
  query?: string;

  @IsOptional()
  @IsNumber()
  @IsInt()
  @Type(() => Number)
    // @ts-ignore: no initializer
  assigneeId?: number;
}

issuesRouter.get(
  "/",
  validateParams(GetIssuesParams),
  async (req, res) => {
    const {query, assigneeId} = res.locals.query as GetIssuesParams
    try {
      let queryResult: QueryResult<RawDisplayIssue>;
      if (isUndefined(query) && isUndefined(assigneeId)) {
        queryResult = await findAllIssues();
      } else if (isDefined(assigneeId) && isDefined(query)) {
        queryResult = await findIssuesByQueryAndAssigneeId(assigneeId, query);
      } else if (isDefined(query)) {
        queryResult = await findIssuesByQuery(query);
      } else if (isDefined(assigneeId)) {
        queryResult = await findIssuesByAssigneeId(assigneeId);
      }

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      res.json(queryResult!.rows);
    } catch (err) {
      logger.error(err.message, err);
      res.sendStatus(INTERNAL_SERVER_ERROR);
    }
  });
