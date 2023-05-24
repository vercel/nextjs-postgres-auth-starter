import NextAuth, { DefaultSession } from "next-auth";
import { User as UserModel } from "@prisma/client";

declare module "next-auth" {
  interface User extends UserModel {
    id: number; // <- we need to set this as number to match our prisma schema
  }
}
