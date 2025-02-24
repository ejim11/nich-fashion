import CollectionsNav from "@/components/Collections/CollectionsNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nich Fashion | Collections",
  description: "See collections of products we offer for sale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <CollectionsNav>{children}</CollectionsNav>
    </div>
  );
}
