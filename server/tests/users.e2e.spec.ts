import { Server } from "http";

import { Application } from "express";
import * as HttpStatus from "http-status-codes";
import request from "supertest";

import { endDbConnection, getDbConnection, logger, startApp, stopApp } from "./utils";
import { User } from "../src/lib/user/user";
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

describe("/api/users", () => {
  test("GET /api/users", async (done) => {
    request(app)
      .get("/api/users")
      .expect(HttpStatus.OK)
      .end((err, res) => {
        if (err) {
          logger.error(err.message);
          throw new Error(err);
        }
        const users: Array<User> = res.body;
        const expectedLength = 11;
        expect(users).toHaveLength(expectedLength);
        // expect users to be sorted by name
        const userNames = users.map((user) => user.username);
        userNames.sort();
        for (let i = 0; i < expectedLength; i++) {
          expect(userNames[i]).toBe(users[i].username);
        }
        done();
      });
  });
});
