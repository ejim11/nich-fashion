import { auth } from "@/axios.config";

export const loginUser = async (userData: { email: string; role: string }) => {
  console.log(userData);
  return await auth.post("/sign-in", userData);
};

export const sendRefreshToken = async (refreshToken: string) => {
  return await auth.post("/refresh-tokens", { refreshToken });
};

export const otpSignin = async (data: { otp: number }) => {
  return await auth.patch("/otp-signin", data);
};
