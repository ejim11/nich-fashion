import OrderItemDetail from "@/components/Orders/OrderItemDetail";
import { Suspense } from "react";

export default async function OrderItemDetails({
  params,
}: {
  params: { orderId: string };
}) {
  const { orderId } = await params;
  return (
    <Suspense>
      <OrderItemDetail orderId={orderId} />
    </Suspense>
  );
}
