import OrderItemDetail from "@/components/Orders/OrderItemDetail";
import { Suspense } from "react";

export default function OrderItemDetails({
  params,
}: {
  params: { orderId: string };
}) {
  const { orderId } = params;
  return (
    <Suspense>
      <OrderItemDetail orderId={orderId} />
    </Suspense>
  );
}
