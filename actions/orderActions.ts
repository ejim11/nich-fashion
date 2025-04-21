/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  getOrderByIdService,
  getUserOrdersService,
} from "@/services/ordersService";
import { orderActions } from "@/slices/orderSlice";
import { Dispatch, SetStateAction } from "react";
import { ToastIcon } from "react-toastify";

export const getUserOrdersDispatch =
  (
    userId: string,
    token: string,
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    toastSuccess: (msg: string, icon: ToastIcon) => void,
    toastError: (msg: string, icon: ToastIcon) => void,
    successIcon: ToastIcon,
    errorIcon: ToastIcon
  ) =>
  async (dispatch: any) => {
    try {
      const res = await getUserOrdersService(userId, token);
      console.log(res);
      dispatch(orderActions.setOrders(res.data.data.data));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

export const getOrderByIdDispatch =
  (
    orderId: string,
    token: string,
    setOrder: Dispatch<SetStateAction<{ [key: string]: any }>>,
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    toastSuccess: (msg: string, icon: ToastIcon) => void,
    toastError: (msg: string, icon: ToastIcon) => void,
    successIcon: ToastIcon,
    errorIcon: ToastIcon
  ) =>
  async (dispatch: any) => {
    try {
      const res = await getOrderByIdService(orderId, token);
      console.log(res);
      setOrder(res.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
