import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from 'next-auth/providers/github';
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

interface ProviderType {
  clientId: string;
  clientSecret: string;
}

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider(<ProviderType>{
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
    }),
    GoogleProvider(<ProviderType>{
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  secret: process.env.NEXT_PUBLIC_SECRET
})