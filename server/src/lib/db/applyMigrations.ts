import path from "path";

import { migrate } from "postgres-migrations";
import { DbClient } from "./types";
import { logger } from "../logger";

const MIGRATIONS_DIRECTORY = path.resolve(__dirname, "migrations");

export async function applyMigrations(client: DbClient) {
  logger.info("Applying migrations...");
  await migrate({ client }, MIGRATIONS_DIRECTORY);
  logger.info("Successfully applied migrations.");
}
