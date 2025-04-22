import { contactUs } from "@/axios.config";

export const contactUsService = async (
  name: string,
  email: string,
  message: string
) => {
  return await contactUs.post("", {
    name: name,
    email: email,
    message: message,
  });
};
