import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex justify-start items-center gap-2 p-2">
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/account">Account</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
