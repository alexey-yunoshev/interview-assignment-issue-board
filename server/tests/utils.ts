import {createServer, Server} from 'http';
import winston from "winston";
import {Application} from 'express';
import getPort from 'get-port';

import {createApp} from "../src/lib/app";
import {Pool} from "pg";
import {config} from "../src/lib/config";
import path from "path";
import {migrate, MigrateDBConfig} from "postgres-migrations";

const MIGRATIONS_DIR = path.resolve(__dirname, '..', 'src', 'lib', 'db', 'migrations');

export function startApp(): Promise<[Server, Application]> {
    return new Promise(async (resolve) => {
        const port = await getPort();
        const app = createApp();
        const server = createServer(app);
        server.listen(port, () => {
            resolve([server, app])
        })
    })
}

export function stopApp(server: Server) {
    return new Promise((resolve) => {
        server.close(() => {
            resolve();
        })
    })
}

export async function getDbConnection() {
    const dbConfig: MigrateDBConfig = {
        host: config.postgres.host,
        port: config.postgres.port,
        user: config.postgres.user,
        password: config.postgres.password,
        database: config.postgres.database,
    }

    await migrate(dbConfig, MIGRATIONS_DIR);
    return new Pool(dbConfig);
}

export async function endDbConnection(testDb: Pool) {
    await testDb.end();
    const db = await new Pool({
        host: config.postgres.host,
        port: config.postgres.port,
        user: config.postgres.user,
        password: config.postgres.password,
        database: config.postgres.database,
    });
    return db.end();
}

export const logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    transports: [
        new winston.transports.Console(),
    ]
});