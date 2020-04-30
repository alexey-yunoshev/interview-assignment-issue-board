import { Router } from "express";

import { systemRouter } from "./system";
import { userRouter } from "./users";
import { bugsRouter } from "./issues";

export const router = Router();
router.use("/system", systemRouter);
router.use("/users", userRouter);
router.use("/issues", bugsRouter);
