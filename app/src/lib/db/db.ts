import {Pool} from "pg"
import {config} from "../config"
import {applyMigrations} from "./applyMigrations";
import {seed} from "./seeding/seed";
import {logger} from "../logger";
import {waitForDb} from "./connectWithRetry";

export const db = new Pool({
    host: config.postgres.host,
    port: config.postgres.port,
    user: config.postgres.user,
    password: config.postgres.password,
    database: config.postgres.database,
})

async function prepare() {
    await waitForDb(db);
    if (config.postgres.applyMigrations) {
        await applyMigrations(db);
    }
    if (config.postgres.seedData) {
        await seed(db);
    }
}

prepare()
    .catch((e) => {
        logger.error(e.message, e);
    })
