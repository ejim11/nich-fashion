import { subscriberToNewsletter } from "@/services/subscribersService";
import { Dispatch, SetStateAction } from "react";
import { ToastIcon } from "react-toastify";

export const subscribeToNewsletterDispatch =
  (
    email: string,
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    clearInput: () => void,
    toastSuccess: (msg: string, icon: ToastIcon) => void,
    toastError: (msg: string, icon: ToastIcon) => void,
    successIcon: ToastIcon,
    errorIcon: ToastIcon
  ) =>
  async () => {
    setIsLoading(true);
    try {
      await subscriberToNewsletter(email);
      setIsLoading(false);
      clearInput();
      toastSuccess("Subscribed successfully!", successIcon);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setIsLoading(false);
      const errMsg: string = error.response?.data?.detail.includes("exist")
        ? "You have already subscribed."
        : error.message;

      toastError(errMsg, errorIcon);
    }
  };
