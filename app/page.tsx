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
        <div className="flex space-x-3">
          <Link
            href="/protected"
            className="text-stone-400 hover:text-stone-200 transition-all"
          >
            Protected Page
          </Link>
          <p className="text-white">·</p>
          <a
            href="https://github.com/steven-tey/nextjs-typescript-starter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 hover:text-stone-200 transition-all"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
