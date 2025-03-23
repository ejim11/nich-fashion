import { OrderState } from "@/enums/orderState.enum";
import { OrderItem } from "@/types/orderItem";

export const orders: OrderItem[] = [
  {
    id: "FW-28678678",
    createdAt: new Date().toISOString(),
    estimatedDeliveryTime: new Date().toISOString(),
    carrier: "Guo ltd logistics",
    carrierPhoneNumber: "07023287382892",
    shippingAddress: "12 Coker, Lagos",
    orderState: OrderState.OUTFORDELIVERY,
  },
  {
    id: "FW-28382901",
    createdAt: new Date().toISOString(),
    estimatedDeliveryTime: new Date().toISOString(),
    carrier: "abc logistic",
    carrierPhoneNumber: "0902428292192",
    shippingAddress: "12 Okey Amazi , Idumota, Lagos",
    orderState: OrderState.DELIVERED,
  },
];
