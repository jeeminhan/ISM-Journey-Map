// src/app/layout.tsx
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "ISM Journey Map",
  description: "A missional guide to seeing and loving international students",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-slate-950 text-white min-h-screen antialiased font-[family-name:var(--font-geist-sans)]">
        <Header />
        {children}
      </body>
    </html>
  );
}
