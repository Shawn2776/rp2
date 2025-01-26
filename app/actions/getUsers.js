import { query } from "@/lib/db";

export async function getUsers() {
  const res = await query(`SELECT * FROM users`);
  return res.rows;
}
