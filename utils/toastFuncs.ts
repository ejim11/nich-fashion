import { toast, Bounce, ToastIcon } from "react-toastify";

export const toastError = (msg: string, icon: ToastIcon) => {
  toast.error(msg, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    style: { color: "red" },
    icon: icon,
  });
};

export const toastSuccess = (msg: string, icon: ToastIcon) => {
  toast.success(msg, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    style: { color: "#1B365D" },
    icon: icon,
  });
};
