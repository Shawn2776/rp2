import { Webhook } from "svix";
import { query } from "@/lib/db";

const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;

export async function POST(req) {
  const payload = await req.text(); // Get raw body text
  const headers = Object.fromEntries(req.headers.entries());

  const svix = new Webhook(webhookSecret);

  try {
    // Verify Clerk webhook
    const event = svix.verify(payload, headers);

    // Check for the "user.created" event
    if (event.type === "user.created") {
      const { id, email_addresses, first_name, last_name } = event.data;

      // Save user to Neon.tech database
      await query(
        `INSERT INTO users (id, email, first_name, last_name) VALUES ($1, $2, $3, $4)`,
        [
          id,
          email_addresses[0]?.email_address,
          first_name || "",
          last_name || "",
        ]
      );

      console.log("User saved to database:", id);
      return new Response("User saved to database", { status: 200 });
    }

    return new Response("Event not handled", { status: 200 });
  } catch (err) {
    console.error("Webhook verification failed:", err);
    return new Response("Invalid webhook", { status: 400 });
  }
}
