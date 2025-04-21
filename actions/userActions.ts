import { updateUserService } from "@/services/userService";
import { userActions } from "@/slices/userSlice";
import { Dispatch, SetStateAction } from "react";
import { ToastIcon } from "react-toastify";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const updateUserDispatch =
  (
    data: any,
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
      const res = await updateUserService(data, token);

      const {
        id,
        email,
        role,
        city,
        country,
        firstName,
        lastName,
        phoneNumber,
        state,
        streetAddress,
        zipCode,
      } = res.data.data;

      dispatch(
        userActions.setUserDetails({
          id,
          email,
          role,
          city,
          country,
          firstName,
          lastName,
          phoneNumber,
          state,
          streetAddress,
          zipCode,
        })
      );

      toastSuccess("Payment Info Updated", successIcon);

      setIsLoading(false);
      resetFunc();
    } catch (error) {
      console.log(error);
      toastError("Please try again", errorIcon);
      setIsLoading(false);
    }
  };
