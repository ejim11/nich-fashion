import { deliveryStates } from "@/axios.config";

export const getDeliveryStateInfoService = async (state: string) => {
  return await deliveryStates.get(`/${state}`);
};
