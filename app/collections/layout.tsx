import CollectionsNav from "@/components/Collections/CollectionsNav";
import type { Metadata } from "next";
import { Suspense } from "react";

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
      <Suspense>
        <CollectionsNav>{children}</CollectionsNav>
      </Suspense>
    </div>
  );
}
