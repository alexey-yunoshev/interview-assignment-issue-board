import { logger } from "./logger";
import { config as dotenv } from "dotenv";
import path from "path";

if (process.env.NODE_ENV === "test") {
  dotenv({
    path: path.resolve(__dirname, "..", "..", ".env.test"),
  });
}

interface GetVarParams<T> {
  name: string;
  defaultValue?: T;
  transform?: (value: string) => T;
}

function getVar<T = string>({ defaultValue, name, transform }: GetVarParams<T>): T {
  const value = process.env[name];
  if (value === undefined && defaultValue !== undefined) {
    return defaultValue;
  }
  if (value == undefined) {
    logger.error(`Environmental variable ${name} is not set but must be.`);
    process.exit(1);
  }
  return transform === undefined ? ((value as unknown) as T) : transform(value);
}

function jsonParse<T>(value: string): T {
  return JSON.parse(value);
}

function parseInteger(value: string): number {
  const result = parseInt(value, 10);
  if (Number.isNaN(result)) {
    logger.error(`${value} is not an integer but must be`);
    process.exit(1);
  }
  return result;
}

export const config = {
  postgres: {
    seedData: getVar<boolean>({ name: "APPLY_MIGRATIONS", defaultValue: false, transform: jsonParse }),
    applyMigrations: getVar<boolean>({ name: "SEED_DATA", defaultValue: false, transform: jsonParse }),
    host: getVar<string>({ name: "POSTGRES_HOST" }),
    port: getVar<number>({ name: "POSTGRES_PORT", transform: parseInteger }),
    user: getVar<string>({ name: "POSTGRES_USER" }),
    password: getVar<string>({ name: "POSTGRES_PASSWORD" }),
    database: getVar<string>({ name: "POSTGRES_DATABASE" }),
  },
};
