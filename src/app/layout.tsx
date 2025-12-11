import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster as Sonner } from 'sonner';
import QueryClientProviderWrapper from "@/providers/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "BookVote",
  description: "BookVote Where Readers Decide What’s Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-dvh`}
      >
        <div className="bg-yellow-300 text-black text-center py-2 text-sm font-medium">
          🚧 This site is under revamp 🚧 |
          <a href="https://github.com/januantara/bookvote" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-800 ml-1">Frontend</a>
          {" • "}
          <a href="https://github.com/januantara/bookvote-backend" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-800">Backend</a>
        </div>
        <QueryClientProviderWrapper>
          {children}
        </QueryClientProviderWrapper>
        <Sonner />
      </body>
    </html>
  );
}
