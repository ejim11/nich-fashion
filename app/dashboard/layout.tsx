import DashboardNav from "@/components/Dashboard/DashboardNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nich Fashion | Dashboard",
  description: "Manage Dashboard seamlessly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <DashboardNav>{children}</DashboardNav>
    </div>
  );
}
