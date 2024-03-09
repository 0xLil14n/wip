import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { LensClient, development, staging } from "@lens-protocol/client";

const lensClient = new LensClient({
  environment: development,
});

export const createAccountRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ handle: z.string().min(1), address: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return await lensClient.wallet.createProfileWithHandle({
        handle: input.handle,
        to: input.address,
      });
    }),

  getLatest: protectedProcedure.query(({ ctx }) => {
    return ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
      where: { createdBy: { id: ctx.session.user.id } },
    });
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
