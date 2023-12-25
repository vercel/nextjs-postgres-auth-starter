import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import prisma from 'app/prisma';
import { authConfig } from 'app/auth.config';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize({ email, password }: any) {
        let user = await prisma.user.findUnique({
          where: {
            email,
          },
        });

        if (!user) return null;
        let passwordsMatch = await bcrypt.compare(password, user.password);
        if (passwordsMatch) return user as any;
      },
    }),
  ],
});
