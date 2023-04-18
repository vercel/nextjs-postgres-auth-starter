import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const protectedPaths = ["/protected", "/profile"];
const publicPaths = ["/", "/login", "/register"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  if (protectedPaths.includes(path)) {
    const session = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });
    if (!session) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  } else if (publicPaths.includes(path)) {
    const session = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });
    if (session) {
      return NextResponse.redirect(new URL("/protected", req.url));
    }
  }

  return NextResponse.next();
}
