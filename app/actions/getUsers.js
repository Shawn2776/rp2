import { query } from "@/lib/db";

export async function getUsers() {
  try {
    const res = await query(`SELECT * FROM users`);

    return res.rows;
  } catch (error) {
    console.log(error);
  }
}
