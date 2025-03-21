import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nich Fashion | Bank Transfer Confirmation",
  description: "Retrieve your account easily though your mail",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
