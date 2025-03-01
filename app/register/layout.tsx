import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nich Fashion | Register",
  description: "Register to buy cool clothes that fit your fashion style",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
