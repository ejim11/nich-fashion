/* eslint-disable @typescript-eslint/no-explicit-any */
import { applyForDiscountService } from "@/services/discountService";
import { discountsActions } from "@/slices/discountSlice";
import { Dispatch, SetStateAction } from "react";
import { ToastIcon } from "react-toastify";

export const applyForDiscountDispatch =
  (
    code: string,
    token: string,
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    toastSuccess: (msg: string, icon: ToastIcon) => void,
    toastError: (msg: string, icon: ToastIcon) => void,
    successIcon: ToastIcon,
    errorIcon: ToastIcon,
    resetFunc: () => void
  ) =>
  async (dispatch: any) => {
    setIsLoading(true);

    try {
      const res = await applyForDiscountService({ code: code }, token);

      dispatch(discountsActions.addPromoInfo(res.data.data));
      toastSuccess("You can use promo code", successIcon);
      setIsLoading(false);
      resetFunc();
    } catch (error: any) {
      console.log(error);
      setIsLoading(false);
      toastError(error.response.data.message, errorIcon);
    }
  };
