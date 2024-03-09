import { postRouter } from "@/server/api/routers/post";
import { createTRPCRouter } from "@/server/api/trpc";
import { createAccountRouter } from "./routers/createAccount";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  createAccount: createAccountRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
