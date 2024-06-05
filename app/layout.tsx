import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import {
  ClerkProvider,
} from '@clerk/nextjs'

export const metadata: Metadata = {
  title: "Star Expo",
  description: "Discover the best cars in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
    </ClerkProvider>
  );
}
