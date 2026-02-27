// src/app/layout.tsx
import type { Metadata } from "next";
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
    <html lang="en">
      <body className="bg-slate-950 text-white min-h-screen antialiased font-sans">
        <Header />
        {children}
      </body>
    </html>
  );
}
