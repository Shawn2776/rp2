import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: ["/((?!_next|static|favicon.ico).*)"], // Apply middleware to all routes except static files
};
