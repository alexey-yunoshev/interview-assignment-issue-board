import { Client, Pool, PoolClient } from "pg";

export type DbClient = Pool | Client | PoolClient;
