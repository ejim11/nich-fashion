import { createUser, getAllUsers } from "@/services/userManagementService";
import { userManagementActions } from "@/slices/userManagementSlice";
import { Dispatch, SetStateAction } from "react";
import { ToastIcon } from "react-toastify";

export const getUsersDispatch =
  (
    token: string,
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    toastSuccess: (msg: string, icon: ToastIcon) => void,
    toastError: (msg: string, icon: ToastIcon) => void,
    successIcon: ToastIcon,
    errorIcon: ToastIcon
  ) =>
  async (
    dispatch: (arg0: {
      payload: unknown;
      type: "userManagement/setUsers";
    }) => void
  ) => {
    try {
      const res = await getAllUsers(token);

      console.log(res);

      dispatch(userManagementActions.setUsers(res.data.data.data));
    } catch (e: unknown) {
      console.log(e);

      toastError("Try again!", errorIcon);
    }
    setIsLoading(false);
  };

export const createUserDispatch =
  (
    token: string,
    data: {
      firstName: string;
      lastName: string;
      role: string;
      status: string;
      email: string;
    },
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    toastSuccess: (msg: string, icon: ToastIcon) => void,
    toastError: (msg: string, icon: ToastIcon) => void,
    successIcon: ToastIcon,
    errorIcon: ToastIcon,
    resetForm: () => void
  ) =>
  async (
    dispatch: (
      arg0:
        | { payload: undefined; type: "userManagement/addUser" }
        | { payload: unknown; type: "userManagement/addUser" }
    ) => void
  ) => {
    setIsLoading(true);

    try {
      const res = await createUser(token, data);

      dispatch(userManagementActions.addUser(res.data.data));
      setIsLoading(false);
      toastSuccess("created successfully", successIcon);
      resetForm();
    } catch (e: unknown) {
      console.log(e);
      setIsLoading(false);
      toastSuccess("Failed to create user, Try again", errorIcon);
    }
  };
