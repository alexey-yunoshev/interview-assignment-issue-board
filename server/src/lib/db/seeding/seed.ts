import { promises } from "fs";
import { resolve } from "path";

import { DbClient } from "../index";
import { logger } from "../../logger";

function getQuery(name: string) {
  return promises.readFile(resolve(__dirname, `${name}.sql`), "utf-8");
}

export async function seed(db: DbClient) {
  logger.info("Adding seed data...");
  const tables = ["users", "bugs"];
  for (const table of tables) {
    await db.query(await getQuery(table));
  }
  logger.info("Successfully added seed data.");
}
