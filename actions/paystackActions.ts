import { initiatePayment } from "@/services/paystackService";
import { Dispatch, SetStateAction } from "react";
import { ToastIcon } from "react-toastify";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const initiatePaymentDispatch =
  (
    paymentInfo: any,
    token: string,
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    toastSuccess: (msg: string, icon: ToastIcon) => void,
    toastError: (msg: string, icon: ToastIcon) => void,
    successIcon: ToastIcon,
    errorIcon: ToastIcon,
    navFunc: (url: string) => void
  ) =>
  async () => {
    setIsLoading(true);

    try {
      const res = await initiatePayment(paymentInfo, token);
      if (res.data.data.message === "Authorization URL created") {
        const { authorization_url } = res.data.data.data;
        navFunc(authorization_url);
      }
      setIsLoading(false);
    } catch (error: any) {
      console.log(error);
      setIsLoading(false);
    }
  };
