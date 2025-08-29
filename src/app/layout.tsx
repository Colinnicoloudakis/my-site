import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "My Site",
  description: "A custom site built with Next.js + Tailwind",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
