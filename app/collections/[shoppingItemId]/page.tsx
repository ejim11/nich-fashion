import ShoppingItemDetail from "@/components/Collections/ShoppingItemDetail/ShoppingItemDetail";
import { collections } from "@/data/collections";
import { ShoppingItem } from "@/types/shoppingItem";
import { Metadata } from "next";

// Utility function to fetch product data
async function fetchProduct(shoppingItemId: string) {
  const item = collections.find(
    (shoppingItem: ShoppingItem) => shoppingItem.id === shoppingItemId
  );
  return {
    name: item?.name,
    shortDescription: item?.shortDescription,
  };
}

// Async function to generate dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: { shoppingItemId: string };
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
  params: { shoppingItemId: string };
}) {
  const { shoppingItemId } = await params;
  return <ShoppingItemDetail itemId={shoppingItemId} />;
}
