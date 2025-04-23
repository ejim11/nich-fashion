/* eslint-disable @typescript-eslint/no-explicit-any */
import { reviews } from "@/axios.config";

export const createReview = async (data: any) => {
  return await reviews.post("", data);
};
