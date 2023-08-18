import { User } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { prisma } from "~/server/db";

export const filterUserForClient = (user: User) => {
  return {
    id: user.id,
    name: user.name,
    username: user.username,
    image: user.image,
  };
};

export const userRouter = createTRPCRouter({
  createUsername: privateProcedure
    .input(z.object({ username: z.string().min(3).max(21) }))
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.userId;

      const username = await ctx.prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          username: input.username,
        },
      });

      return username;
    }),
});
