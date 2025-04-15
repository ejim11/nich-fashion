import { subscribers } from "@/axios.config";

export const subscriberToNewsletter = async (email: string) => {
  await subscribers.post("/", {
    email: email,
  });
};
