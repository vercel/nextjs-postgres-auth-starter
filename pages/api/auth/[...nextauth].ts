import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";
import { compare } from "bcrypt";

interface User {
  email: string;
  password: string;
}
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {},
      // @ts-ignore
      async authorize(credentials, _) {
        const { email, password } = credentials as User;
        if (!email || !password) {
          throw new Error("Missing email or password");
        }
        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });
        const authenticated = user && (await compare(password, user.password));
        if (!authenticated) {
          throw new Error("Invalid email or password");
        }
        return user;
      },
    }),
  ],
  session: { strategy: "jwt" },
};
export default NextAuth(authOptions);
