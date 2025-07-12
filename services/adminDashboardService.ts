import { aggregate, orders, products } from "@/axios.config";

export const getAdminDashboard = async (token: string) => {
  return await aggregate.get("/admin-dashboard", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export const getRecentOrders = async (token: string) => {
  return await orders.get("?limit=5", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export const getRecentProductInventory = async () => {
  return await products.get("");
};
