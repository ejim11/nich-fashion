import { createReview } from "@/services/reviewsService";
import { ShoppingItem } from "@/types/shoppingItem";
import { Dispatch, SetStateAction } from "react";
import { ToastIcon } from "react-toastify";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const createReviewDispatch =
  (
    data: any,
    setItemDetails: Dispatch<SetStateAction<ShoppingItem>>,
    setIsModalVisible: Dispatch<SetStateAction<boolean>>,
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    toastSuccess: (msg: string, icon: ToastIcon) => void,
    toastError: (msg: string, icon: ToastIcon) => void,
    successIcon: ToastIcon,
    errorIcon: ToastIcon,
    resetFunc: () => void
  ) =>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (dispatch: any) => {
    setIsLoading(true);

    try {
      const res = await createReview(data);

      console.log(res.data.data);

      setItemDetails((prevState: ShoppingItem) => {
        const oldReviews: any = prevState.reviews;

        const newReviews =
          oldReviews.length > 0
            ? [res.data.data, ...oldReviews]
            : [res.data.data];

        return {
          ...prevState,
          reviews: [...newReviews],
        };
      });
      toastSuccess("Review done!", successIcon);
      resetFunc();
      console.log(res);
      setIsLoading(false);
      setIsModalVisible(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toastError("Please try again!", errorIcon);
    }
  };
