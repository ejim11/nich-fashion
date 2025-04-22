import { paystack } from "@/axios.config";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const initiatePayment = async (paymentInfo: any, token: string) => {
  return await paystack.post("/initiate-payment", paymentInfo, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};
