import { user } from "@/axios.config";

export const getAllUsers = async (token: string) => {
  return user.get("", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const createUser = async (
  token: string,
  data: {
    firstName: string;
    lastName: string;
    role: string;
    status: string;
    email: string;
  }
) => {
  return user.post("", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
