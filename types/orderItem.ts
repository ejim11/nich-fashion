import { OrderState } from "@/enums/orderState.enum";

export type OrderItem = {
  id: string;
  createdAt: string;
  estimatedDeliveryTime: string;
  carrier: string;
  carrierPhoneNumber: string;
  shippingAddress: string;
  orderState: OrderState;
};
