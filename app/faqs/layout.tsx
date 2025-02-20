import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nich Fashion | FAQs",
  description: "See frequently asked questions about our products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
