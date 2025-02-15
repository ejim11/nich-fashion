import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const satoshi = localFont({
  src: "../public/fonts/Satoshi-Variable.ttf",
  display: "swap",
  variable: "--font-satoshi",
});

const monserrat = Montserrat({
  variable: "--font-monserrat",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nich Fashion",
  description: "Get the best accessories from us!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} ${monserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
