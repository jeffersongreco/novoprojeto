import { npAppRouter } from "~/server/api/routers/app";
import { userRouter } from "~/server/api/routers/user";
import { createTRPCRouter } from "~/server/api/trpc";

export const appRouter = createTRPCRouter({
  user: userRouter,
  app: npAppRouter,
});

export type AppRouter = typeof appRouter;
