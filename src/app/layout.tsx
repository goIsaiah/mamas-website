import "./globals.css";

import type { Metadata } from "next";

import localFont from "next/font/local";


import { Landmark } from "lucide-react";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Isaiah Gocool",
  description: "Isaiah Gocool's personal portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen`}
      >
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
      </body>
    </html>
  );
}
