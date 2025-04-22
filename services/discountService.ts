import { discounts } from "@/axios.config";

export const applyForDiscountService = async (
  data: { code: string },
  token: string
) => {
  return await discounts.post("/apply", data, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};
