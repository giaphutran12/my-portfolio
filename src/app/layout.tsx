import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Edward - Full Stack Software Engineer",
  description: "Specializing in AI Engineering and Full Stack Development",
  keywords: [
    "Full Stack Developer",
    "AI Engineer",
    "Software Engineer",
    "React",
    "Node.js",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Edward" }],
  creator: "Edward",
  icons: {
    icon: [
      {
        url: "/edward-logo.svg",
        type: "svg",
      },
    ],
    shortcut: "/edward-logo.svg",
    apple: "/edward-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
