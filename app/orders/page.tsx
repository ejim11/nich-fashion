import OrdersComp from "@/components/Orders/OrdersComp";
import { Suspense } from "react";

export default function Orders() {
  return (
    <Suspense>
      <OrdersComp />
    </Suspense>
  );
}
