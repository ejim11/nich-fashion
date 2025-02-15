import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import AppWrapper from "../components/AppWrapper";
import Header from "@/components/Header";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/Footer";

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
        <AppWrapper>
          <Header />
          {children}
          <Footer />
          <ToastContainer />
        </AppWrapper>
      </body>
    </html>
  );
}
