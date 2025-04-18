import { contactUsService } from "@/services/contactUsService";
import { Dispatch, SetStateAction } from "react";
import { ToastIcon } from "react-toastify";

export const contactUsDispatch =
  (
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    name: string,
    email: string,
    message: string,
    toastSuccess: (msg: string, icon: ToastIcon) => void,
    toastError: (msg: string, icon: ToastIcon) => void,
    successIcon: ToastIcon,
    errorIcon: ToastIcon,
    resetForm: () => void
  ) =>
  async () => {
    setIsLoading(true);

    try {
      await contactUsService(name, email, message);

      setIsLoading(false);
      toastSuccess("Sent Successfully", successIcon);
      resetForm();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toastError("Please try again later!", errorIcon);
    }
  };
