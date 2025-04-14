import ShoppingItemDetail from "@/components/Collections/ShoppingItemDetail/ShoppingItemDetail";
// import { collections } from "@/data/collections";
import { getShoppingItem } from "@/services/productsService";
import { convertToShoppingItem } from "@/utils/convertJsonProductToShoppingItem";
// import { ShoppingItem } from "@/types/shoppingItem";
import { Metadata } from "next";
import { Suspense } from "react";

type Params = Promise<{ shoppingItemId: string }>;

// Utility function to fetch product data
async function fetchProduct(shoppingItemId: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const res: any = await getShoppingItem(shoppingItemId);
  return {
    name: res.data.data.name,
    shortDescription: res.data.data.shortDescription,
  };
}

// Async function to generate dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { shoppingItemId } = await params;
  // Fetch product details
  const product = await fetchProduct(shoppingItemId);

  return {
    title: `Nich Fashion | ${product.name}`,
    description: `Shop ${product.name} - ${product.shortDescription}`,
  };
}

export default async function ShoppingItemDetails({
  params,
}: {
  params: Params;
}) {
  const { shoppingItemId } = await params;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const res: any = await getShoppingItem(shoppingItemId);

  const item = convertToShoppingItem(res.data.data);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShoppingItemDetail item={item} />
    </Suspense>
  );
}
