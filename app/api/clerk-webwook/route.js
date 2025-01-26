import { Webhook } from "svix";
import { query } from "@/lib/db";

const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;

export async function POST(req) {
  const payload = await req.json();
  const svix = new Webhook(webhookSecret);

  try {
    const { data } = svix.verify(payload, req.headers);
    const { id, email_addresses, first_name, last_name } = data;

    // Save user to Neon.tech
    await query(
      `INSERT INTO users (id, email, first_name, last_name) VALUES ($1, $2, $3, $4)`,
      [id, email_addresses[0].email_address, first_name, last_name]
    );

    return new Response("User saved to database", { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response("Invalid webhook", { status: 400 });
  }
}
