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
  title: "Vishnu Sankar - Portfolio",
  description: "Personal portfolio showcasing my skills, projects, and experience in software development",
  keywords: ["developer", "portfolio", "software engineer", "web development"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script 
          type="module" 
          src="https://unpkg.com/@splinetool/viewer/build/spline-viewer.js"
        />
      </body>
    </html>
  );
}
