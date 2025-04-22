import CollectionsNav from "@/components/Collections/CollectionsNav";
// import ShoppingItemSkeleton from "@/components/skeletons/ShoppingItemSkeleton";
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
      <Suspense
      // fallback={
      //   <div className="grid grid-cols-3  gap-x-[2rem] gap-y-[8rem] px-[10rem]">
      //     <ShoppingItemSkeleton />
      //     <ShoppingItemSkeleton />
      //     <ShoppingItemSkeleton />
      //     <ShoppingItemSkeleton />
      //     <ShoppingItemSkeleton />
      //     <ShoppingItemSkeleton />
      //   </div>
      // }
      >
        <CollectionsNav>{children}</CollectionsNav>
      </Suspense>
    </div>
  );
}
