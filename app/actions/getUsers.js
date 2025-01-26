import { query } from "@/lib/db";

export async function getUsers() {
  try {
    const res = await query(`SELECT * FROM users`);
    console.log(res.rows);

    return res.rows;
  } catch (error) {
    console.log(error);
  }
}
