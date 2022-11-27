// These styles apply to every route in the application
import "@/styles/globals.css";
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
      <body className={inter.variable}>
      <Toaster />
      {children}
      </body>
    </html>
  );
}
