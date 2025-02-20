import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nich Fashion | Contact",
  description: "Easily contact us for information on our products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
