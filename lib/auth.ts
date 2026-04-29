import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { db } from "@/lib/db";

export const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: "postgresql",
  }),

  emailAndPassword: {
    enabled: true,
  },

  user: {
    additionalFields: {
      role: {
        type: "string" as const,
        required: false,
        defaultValue: "creator",
        input: true,
      },
    },
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID ?? "GOOGLE_CLIENT_ID_PLACEHOLDER",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "GOOGLE_CLIENT_SECRET_PLACEHOLDER",
    },
    facebook: {
      clientId: process.env.FACEBOOK_CLIENT_ID ?? "FACEBOOK_CLIENT_ID_PLACEHOLDER",
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET ?? "FACEBOOK_CLIENT_SECRET_PLACEHOLDER",
    },
  },

  baseURL: "http://localhost:3000",
  secret: process.env.BETTER_AUTH_SECRET!,
});

export type Auth = typeof auth;
export type Session = typeof auth.$Infer.Session;
export type User = typeof auth.$Infer.Session.user;
