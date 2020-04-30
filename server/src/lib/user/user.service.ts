import { User } from "./user";
import { db } from "../db";

export async function getUsers(): Promise<Array<User>> {
  const { rows: users } = await db.query<User>("SELECT * FROM users ORDER BY username;");
  return users;
}
