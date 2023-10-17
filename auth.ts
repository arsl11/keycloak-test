import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next"
import type { NextAuthOptions as NextAuthConfig } from "next-auth"
import { getServerSession } from "next-auth"

import Keycloak from "next-auth/providers/keycloak"

export const config = {
  providers: [
    Keycloak({
      clientId: process.env.KEYCLOAK_CLIENT_ID ?? 'client', 
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET ?? '',
      issuer: process.env.KEYCLOAK_ISSUER, 
    }),
  ],
} satisfies NextAuthConfig

// Helper function to get session without passing config every time
// https://next-auth.js.org/configuration/nextjs#getserversession
export function auth(...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []) {
  return getServerSession(...args, config)
}
