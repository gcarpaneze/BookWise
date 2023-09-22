import NextAuth, { NextAuthOptions } from 'next-auth'

import { PrismaAdapter } from '@auth/prisma-adapter'

import { prisma } from '../../../lib/prisma'

import GithubProvider from 'next-auth/providers/github'
// import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
  ],
}

export default NextAuth(authOptions)
