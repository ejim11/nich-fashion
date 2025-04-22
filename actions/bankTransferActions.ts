import { saveBankTransferDetails } from "@/services/bankTransferService";
import { cartActions } from "@/slices/cartSlice";
import { paymentActions } from "@/slices/paymentSlice";
import { Dispatch, SetStateAction } from "react";
import { ToastIcon } from "react-toastify";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const saveBankTransferDetailsDispatch =
  (
    data: any,
    token: string,
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    toastSuccess: (msg: string, icon: ToastIcon) => void,
    toastError: (msg: string, icon: ToastIcon) => void,
    successIcon: ToastIcon,
    errorIcon: ToastIcon,
    navFunc: () => void
  ) =>
  async (dispatch: any) => {
    setIsLoading(true);

    try {
      await saveBankTransferDetails(data, token);
      dispatch(cartActions.resetCart());
      dispatch(paymentActions.resetPayment());
      toastSuccess("Transafer Details Submitted!", successIcon);
      navFunc();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
