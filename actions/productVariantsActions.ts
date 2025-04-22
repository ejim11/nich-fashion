import { checkProductVariantsAvailability } from "@/services/productVariantsService";
import { Dispatch, SetStateAction } from "react";
import { ToastIcon } from "react-toastify";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const checkProductVariantsAvailabilityDispatch =
  (
    products: any,
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    toastSuccess: (msg: string, icon: ToastIcon) => void,
    toastError: (msg: string, icon: ToastIcon) => void,
    successIcon: ToastIcon,
    errorIcon: ToastIcon,
    navFunc: () => void
  ) =>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (dispatch: any) => {
    setIsLoading(true);

    const prds = products.map((prd: any) => ({
      productId: prd.productId,
      variants: prd.variants,
    }));

    try {
      const res = await checkProductVariantsAvailability(prds);

      if (res.data.data.allAvailable) navFunc();

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
