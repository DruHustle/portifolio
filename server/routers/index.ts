import { z } from "zod";
import { publicProcedure, router } from "../trpc";

/**
 * Server Router Configuration
 * 
 * This module defines the TRPC router for the portfolio application.
 * Following SOLID principles:
 * - Single Responsibility: Router only handles API route definitions
 * - Open/Closed: Easy to extend with new routes without modifying existing ones
 */

const authRouter = router({
  me: publicProcedure.query(() => {
    return null;
  }),
  logout: publicProcedure.mutation(() => {
    return { success: true };
  }),
});

export const appRouter = router({
  auth: authRouter,

  health: publicProcedure.query(() => {
    return { status: "ok", timestamp: new Date().toISOString() };
  }),

  projects: publicProcedure.query(() => {
    return {
      projects: [
        {
          id: "imsop",
          title: "IMSOP",
          description: "Intelligent Multi-Cloud Supply Chain & Operations Platform",
        },
        {
          id: "sap-btp-ai-hub",
          title: "Learning Hub",
          description: "Enterprise AI Education Platform",
        },
      ],
    };
  }),

  getProject: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input }: { input: { id: string } }) => {
      const projects: Record<string, any> = {
        imsop: {
          id: "imsop",
          title: "IMSOP",
          description: "Intelligent Multi-Cloud Supply Chain & Operations Platform",
        },
        "sap-btp-ai-hub": {
          id: "sap-btp-ai-hub",
          title: "Learning Hub",
          description: "Enterprise AI Education Platform",
        },
      };
      return projects[input.id] || null;
    }),
});

export type AppRouter = typeof appRouter;
