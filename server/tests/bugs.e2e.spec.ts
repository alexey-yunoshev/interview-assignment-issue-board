import { Server } from "http";

import { Application } from "express";
import * as HttpStatus from "http-status-codes";
import request from "supertest";

import { endDbConnection, getDbConnection, logger, startApp, stopApp } from "./utils";
import { RawDisplayIssue } from "../src/lib/display-bug/rawDisplayIssue";
import { bugs as sampleBugs } from "./fixtures";
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

describe("/api/bugs", () => {
  test("GET /api/bugs", (done) => {
    request(app)
      .get(`/api/bugs`)
      .expect(HttpStatus.OK)
      .end((err, res) => {
        if (err) {
          logger.error(err.message);
          throw new Error(err);
        }
        const bugs: Array<RawDisplayIssue> = res.body;
        expect(bugs).toHaveLength(sampleBugs.length);
        done();
      });
  });

  test("GET /api/bugs?assigneeId=2", (done) => {
    const assigneeId = 2;
    request(app)
      .get(`/api/bugs?assigneeId=${assigneeId}`)
      .expect(HttpStatus.OK)
      .end((err, res) => {
        if (err) {
          logger.error(err.message);
          throw new Error(err);
        }
        const bugs: Array<RawDisplayIssue> = res.body;
        const expectedLength = 2;
        expect(bugs).toHaveLength(expectedLength);
        const bugIds = new Set(bugs.map((bug) => bug.id));
        const sampleBugIds = sampleBugs.filter((bug) => bug.assigneeId === assigneeId).map((bug) => bug.id);
        for (const id of sampleBugIds) {
          expect(bugIds.has(id)).toBe(true);
        }
        done();
      });
  });

  test("GET /api/bugs?query=1", (done) => {
    const query = "1";
    request(app)
      .get(`/api/bugs?query=${query}`)
      .expect(HttpStatus.OK)
      .end((err, res) => {
        if (err) {
          logger.error(err.message);
          throw new Error(err);
        }
        const bugs: Array<RawDisplayIssue> = res.body;
        const expectedLength = 2;
        expect(bugs).toHaveLength(expectedLength);
        const bugIds = new Set(bugs.map((bug) => bug.id));
        const expectedBugIds = ["1", "5"];
        for (const id of expectedBugIds) {
          expect(bugIds.has(id)).toBe(true);
        }
        done();
      });
  });

  test("GET /api/bugs?query=yoh", (done) => {
    const query = "yoh";
    request(app)
      .get(`/api/bugs?query=${query}`)
      .expect(HttpStatus.OK)
      .end((err, res) => {
        if (err) {
          logger.error(err.message);
          throw new Error(err);
        }
        const bugs: Array<RawDisplayIssue> = res.body;
        const expectedLength = 2;
        expect(bugs).toHaveLength(expectedLength);
        const bugIds = new Set(bugs.map((bug) => bug.id));
        const expectedBugIds = ["2", "5"];
        for (const id of expectedBugIds) {
          expect(bugIds.has(id)).toBe(true);
        }
        done();
      });
  });

  test("GET /api/bugs?query=cat&assigneeId=3", (done) => {
    const query = "cat";
    const assigneeId = "3";
    request(app)
      .get(`/api/bugs?query=${query}&assigneeId=${assigneeId}`)
      .expect(HttpStatus.OK)
      .end((err, res) => {
        if (err) {
          logger.error(err.message);
          throw new Error(err);
        }
        const bugs: Array<RawDisplayIssue> = res.body;
        const expectedLength = 1;
        expect(bugs).toHaveLength(expectedLength);
        const expectedBugId = "6";
        expect(bugs[0].id).toBe(expectedBugId);
        done();
      });
  });
});
