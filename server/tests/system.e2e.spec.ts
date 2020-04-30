import { Server } from "http";

import { Application } from "express";
import * as HttpStatus from "http-status-codes";
import request from "supertest";

import { logger, startApp, stopApp } from "./utils";

let server: Server;
let app: Application;

beforeAll(async (done) => {
  [server, app] = await startApp();
  done();
});

afterAll(async (done) => {
  await stopApp(server);
  done();
});

describe("/api/system", () => {
  test("GET /api/system/ping", (done) => {
    request(app)
      .get("/api/system/ping")
      .expect(HttpStatus.OK)
      .end((err, res) => {
        if (err) {
          logger.error(err.message);
          throw new Error(err);
        }
        expect(res.text).toBe("pong");
        done();
      });
  });
});
