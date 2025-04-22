/* eslint-disable @typescript-eslint/no-explicit-any */
import { user } from "@/axios.config";

export const updateUserService = async (data: any, token: string) => {
  return await user.patch("", data, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};
