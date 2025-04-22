import { orders } from "@/axios.config";

export const getUserOrdersService = async (userId: string, token: string) => {
  return await orders.get(`?userId=${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getOrderByIdService = async (orderId: string, token: string) => {
  return await orders.get(`${orderId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
