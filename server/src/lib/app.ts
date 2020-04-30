import express from "express";
import type { Application } from "express";
import { router } from "./routes";

export const createApp = (): Application => {
  const app = express();
  app.use("/api", router);
  return app;
};
