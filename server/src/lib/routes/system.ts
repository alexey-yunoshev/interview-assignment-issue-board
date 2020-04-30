import { Router } from "express";

export const systemRouter = Router();

systemRouter.get("/ping", (req, res) => {
  res.send("pong");
});
