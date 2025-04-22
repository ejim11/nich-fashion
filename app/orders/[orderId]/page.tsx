import OrderItemDetail from "@/components/Orders/OrderItemDetail";
import { Suspense } from "react";

export default async function OrderItemDetails({
  params,
}: {
  params: Promise<{ orderId: string }>;
}) {
  const { orderId } = await params;
  return (
    <Suspense>
      <OrderItemDetail orderId={orderId} />
    </Suspense>
  );
}
