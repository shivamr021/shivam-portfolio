import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import BootSequence from "@/components/BootSequence";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shivam Rathod | AI Systems Engineer",
  description: "Building intelligent systems, RAG pipelines, and high-concurrency backends. Currently architecting the future of AI automation.",
  openGraph: {
    title: "Shivam Rathod | AI Systems Engineer",
    description: "Production-ready AI/ML systems and backend architecture.",
    url: "https://shivam-vision.vercel.app/",
    siteName: "Shivam Rathod Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* The physics and boot overlays govern the entire application */}
        <SmoothScroll>
          <BootSequence />
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}