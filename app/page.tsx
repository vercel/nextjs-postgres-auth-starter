import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen bg-black">
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <Image
          width={512}
          height={512}
          src="/logo.png"
          alt="Platforms on Vercel"
          className="w-48 h-48"
        />
        <div className="text-center max-w-screen-sm mb-10">
          <h1 className="text-stone-200 font-bold text-2xl">
            Next.js Prisma PostgreSQL Auth Starter
          </h1>
          <p className="text-stone-400 mt-5">
            This is a{" "}
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 underline hover:text-stone-200 transition-all"
            >
              Next.js
            </a>{" "}
            starter kit that uses{" "}
            <a
              href="https://next-auth.js.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 underline hover:text-stone-200 transition-all"
            >
              Next-Auth
            </a>{" "}
            for simple email + password login and a{" "}
            <a
              href="https://vercel.com/postgres"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 underline hover:text-stone-200 transition-all"
            >
              Vercel Postgres
            </a>{" "}
            database to persist the data.
          </p>
        </div>
        <div className="flex space-x-3">
          <Link
            href="/protected"
            prefetch={false} // workaround until https://github.com/vercel/vercel/pull/8978 is deployed
            className="text-stone-400 underline hover:text-stone-200 transition-all"
          >
            Protected Page
          </Link>
          <p className="text-white">·</p>
          <a
            href="https://github.com/steven-tey/nextjs-typescript-starter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 underline hover:text-stone-200 transition-all"
          >
            GitHub
          </a>
          <p className="text-white">·</p>
          <a
            href="https://vercel.com/templates/next.js/prisma-postgres-auth-starter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 underline hover:text-stone-200 transition-all"
          >
            1-click Deploy to Vercel
          </a>
        </div>
      </div>
    </div>
  );
}
