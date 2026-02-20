import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Providers } from "@/components/Providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "GCSE Mastery Hub — Your Free GCSE Revision Platform",
  description: "Master your GCSEs with free interactive lessons, quizzes, and AI-powered revision for AQA & Edexcel subjects. Built for Year 10 students.",
  keywords: ["GCSE", "revision", "AQA", "Edexcel", "Year 10", "free", "quizzes", "learning"],
  authors: [{ name: "GCSE Mastery Hub" }],
  openGraph: {
    title: "GCSE Mastery Hub",
    description: "Free GCSE revision with gamification, quizzes, and AI-powered learning",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#667eea",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
