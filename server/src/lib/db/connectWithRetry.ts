import {DbClient} from "./types";
import {logger} from "../logger";
import {sleep} from "../utils";

export async function connectWithRetry(db: DbClient, attempts = 10) {
    while (attempts > 0) {
        try {
            await db.connect();
            return;
        } catch (e) {
            await sleep(2000);
            attempts--;
        }
    }
    logger.error('Failed to connect to database.');
    process.exit(1);
}

export async function waitForDb(db: DbClient, attempts = 10) {
    while (attempts > 0) {
        try {
            await db.query('SELECT 1 + 1');
            return;
        } catch (e) {
            await sleep(2000);
            attempts--;
        }
    }
    logger.error('Failed to connect to database.');
    process.exit(1);
}