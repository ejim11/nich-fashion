import OrderItemDetail from "@/components/Orders/OrderItemDetail";
import { orders } from "@/data/orders";
import { OrderItem } from "@/types/orderItem";
import { Metadata } from "next";

type Params = Promise<{ orderId: string }>;

// Utility function to fetch product data
async function fetchProduct(orderId: string) {
  const item = orders.find((orderItem: OrderItem) => orderItem.id === orderId);
  return {
    name: item?.id,
    shortDescription: `Order ${item?.id} was created on ${item?.createdAt}`,
  };
}

// Async function to generate dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { orderId } = await params;
  // Fetch product details
  const product = await fetchProduct(orderId);

  return {
    title: `Nich Fashion |  Order ${product.name}`,
    description: `${product.name} - ${product.shortDescription}`,
  };
}

export default async function OrderItemDetails({ params }: { params: Params }) {
  const { orderId } = await params;
  return <OrderItemDetail orderId={orderId} />;
}
