import { DbClient } from "./types";
import { logger } from "../logger";

export async function cleanDatabase(db: DbClient) {
  logger.debug("Cleaning database...");
  const tables = ["bugs", "users"];
  for (const table of tables) {
    await Promise.all([
      db.query(`DELETE FROM ${table};`),
      db.query(`SELECT SETVAL((SELECT pg_get_serial_sequence('${table}', 'id')), 1, false);`),
    ]);
  }
  logger.debug("Successfully cleaned database.");
}
