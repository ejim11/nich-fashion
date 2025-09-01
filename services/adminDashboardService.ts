import { aggregate } from "@/axios.config";

export const getAdminDashboard = async (token: string) => {
  return await aggregate.get("/admin-dashboard", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export const getRecentOrders = async (token: string) => {
  return await aggregate.get("/recent-orders", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export const getRecentProductInventory = async (token: string) => {
  return await aggregate.get("/admin-dashboard-inventory-status", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};
