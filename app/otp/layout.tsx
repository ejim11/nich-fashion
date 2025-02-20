import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nich Fashion | OTP",
  description:
    "Enter your OTP to login and gain access to variety of cool clothes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
