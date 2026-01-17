import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Global Textile Manufacturing | Premium B2B Textile Solutions",
  description: "Leading global B2B textile manufacturer specializing in design, sampling, production, and quality control. Trusted partner for premium textile solutions with sustainable practices.",
  keywords: "textile manufacturing, B2B textiles, fabric production, textile design, quality textiles, sustainable manufacturing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
