import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nich Fashion | User Mannagement",
  description: "Manage Dashboard seamlessly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
