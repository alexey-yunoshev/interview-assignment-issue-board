import path from "path";

import { migrate } from "postgres-migrations";
import { DbClient } from "./types";
import { logger } from "../logger";

const MIGRATIONS_DIRECTORY = path.resolve(__dirname, "migrations");

export async function applyMigrations(client: DbClient) {
  logger.debug("Applying migrations...");
  await migrate({ client }, MIGRATIONS_DIRECTORY);
  logger.debug("Successfully applied migrations.");
}
