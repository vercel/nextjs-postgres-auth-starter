// These styles apply to every route in the application
import "@/styles/globals.css";
import Head from "next/head";
import { Inter } from "@next/font/google";
import Toaster from "@/components/toaster";

const inter = Inter({
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Toaster />
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
