import "reflect-metadata";
import express, {Application} from "express";
import path from "path";

import {router} from "./routes";

export const createApp = (): Application => {
  const app = express();

  app.use("/api", router);

  app.use(express.static(path.resolve(__dirname, "static")))

  app.get("/schema", (req, res) => {
    res.redirect("/schema.html")
  });

  return app;
};
