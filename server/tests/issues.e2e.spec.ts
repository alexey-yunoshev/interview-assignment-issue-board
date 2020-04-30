import { Server } from "http";

import { Application } from "express";
import * as HttpStatus from "http-status-codes";
import request from "supertest";

import { endDbConnection, getDbConnection, logger, startApp, stopApp } from "./utils";
import { RawDisplayIssue } from "../src/lib/display-bug/rawDisplayIssue";
import { issues as sampleIssues } from "./fixtures";
import { Pool } from "pg";
import { seed } from "../src/lib/db/seeding/seed";
import { cleanDatabase } from "../src/lib/db";

jest.setTimeout(120000);

let server: Server;
let app: Application;
let db: Pool;

beforeAll(async (done) => {
  [server, app] = await startApp();
  db = await getDbConnection();
  await cleanDatabase(db);
  await seed(db);
  done();
});

afterAll(async (done) => {
  await stopApp(server);
  await endDbConnection(db);
  done();
});

describe("/api/issues", () => {
  test("GET /api/issues", (done) => {
    request(app)
      .get(`/api/issues`)
      .expect(HttpStatus.OK)
      .end((err, res) => {
        if (err) {
          logger.error(err.message);
          throw new Error(err);
        }
        const issues: Array<RawDisplayIssue> = res.body;
        expect(issues).toHaveLength(sampleIssues.length);
        done();
      });
  });

  test("GET /api/issues?assigneeId=q", (done) => {
    const assigneeId = 'q';
    request(app)
      .get(`/api/issues?assigneeId=${assigneeId}`)
      .expect(HttpStatus.BAD_REQUEST)
      .end((err, res) => {
        if (err) {
          logger.error(err.message);
          throw new Error(err);
        }
        const constraints = res.body[0].constraints;
        const expectedConstraints = ['isInt', 'isNumber'];
        for (const constraint of expectedConstraints) {
          expect(constraint in constraints).toBe(true);
        }
        done();
      });
  });

  test("GET /api/issues?query=VERY_LONG",
    (done) => {
    const query = '012345678901234567890123456789012345678901234567890123456789';
    request(app)
      .get(`/api/issues?query=${query}`)
      .expect(HttpStatus.BAD_REQUEST)
      .end((err, res) => {
        if (err) {
          logger.error(err.message);
          throw new Error(err);
        }
        const constraints = res.body[0].constraints;
        const expectedConstraints = ['length'];
        for (const constraint of expectedConstraints) {
          expect(constraint in constraints).toBe(true);
        }
        done();
      });
  });

  test("GET /api/issues?assigneeId=2", (done) => {
    const assigneeId = 2;
    request(app)
      .get(`/api/issues?assigneeId=${assigneeId}`)
      .expect(HttpStatus.OK)
      .end((err, res) => {
        if (err) {
          logger.error(err.message);
          throw new Error(err);
        }
        const issues: Array<RawDisplayIssue> = res.body;
        const expectedLength = 2;
        expect(issues).toHaveLength(expectedLength);
        const bugIds = new Set(issues.map((bug) => bug.id));
        const sampleBugIds = sampleIssues.filter((bug) => bug.assignee_id === assigneeId).map((bug) => bug.id);
        for (const id of sampleBugIds) {
          expect(bugIds.has(id)).toBe(true);
        }
        done();
      });
  });

  test("GET /api/issues?query=1", (done) => {
    const query = "1";
    request(app)
      .get(`/api/issues?query=${query}`)
      .expect(HttpStatus.OK)
      .end((err, res) => {
        if (err) {
          logger.error(err.message);
          throw new Error(err);
        }
        const issues: Array<RawDisplayIssue> = res.body;
        const expectedLength = 2;
        expect(issues).toHaveLength(expectedLength);
        const bugIds = new Set(issues.map((bug) => bug.id));
        const expectedBugIds = ["1", "5"];
        for (const id of expectedBugIds) {
          expect(bugIds.has(id)).toBe(true);
        }
        done();
      });
  });

  test("GET /api/issues?query=yoh", (done) => {
    const query = "yoh";
    request(app)
      .get(`/api/issues?query=${query}`)
      .expect(HttpStatus.OK)
      .end((err, res) => {
        if (err) {
          logger.error(err.message);
          throw new Error(err);
        }
        const issues: Array<RawDisplayIssue> = res.body;
        const expectedLength = 2;
        expect(issues).toHaveLength(expectedLength);
        const bugIds = new Set(issues.map((bug) => bug.id));
        const expectedBugIds = ["2", "5"];
        for (const id of expectedBugIds) {
          expect(bugIds.has(id)).toBe(true);
        }
        done();
      });
  });

  test("GET /api/issues?query=cat&assigneeId=3", (done) => {
    const query = "cat";
    const assigneeId = "3";
    request(app)
      .get(`/api/issues?query=${query}&assigneeId=${assigneeId}`)
      .expect(HttpStatus.OK)
      .end((err, res) => {
        if (err) {
          logger.error(err.message);
          throw new Error(err);
        }
        const issues: Array<RawDisplayIssue> = res.body;
        const expectedLength = 1;
        expect(issues).toHaveLength(expectedLength);
        const expectedBugId = "6";
        expect(issues[0].id).toBe(expectedBugId);
        done();
      });
  });
});
