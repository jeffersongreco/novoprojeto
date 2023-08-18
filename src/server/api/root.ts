import { npAppRouter } from "~/server/api/routers/app";
import { createTRPCRouter } from "~/server/api/trpc";

export const appRouter = createTRPCRouter({
  app: npAppRouter,
});

export type AppRouter = typeof appRouter;
