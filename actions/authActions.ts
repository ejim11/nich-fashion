/* eslint-disable @typescript-eslint/no-explicit-any */
import { loginUser, otpSignin, sendRefreshToken } from "@/services/authService";
import { authActions } from "@/slices/authSlice";
import { userActions } from "@/slices/userSlice";
import calculateExpirationTime from "@/utils/calculateExpirationTime";
import { Dispatch, SetStateAction } from "react";
import { ToastIcon } from "react-toastify";

let logoutTimer: any;

export const loginWithEmailDispatch =
  (
    email: string,
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    toastSuccess: (msg: string, icon: ToastIcon) => void,
    toastError: (msg: string, icon: ToastIcon) => void,
    successIcon: ToastIcon,
    errorIcon: ToastIcon,
    resetFunc: () => void
  ) =>
  async () => {
    setIsLoading(true);
    try {
      await loginUser({ email: email, role: "user" });

      setIsLoading(false);

      toastSuccess("Check mail for OTP", successIcon);

      resetFunc();
    } catch (e: any) {
      console.log(e);

      setIsLoading(false);

      toastError(e.response.data.message, errorIcon);
    }
  };

export const loginWithOtpDispatch =
  (
    otp: number,
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    toastSuccess: (msg: string, icon: ToastIcon) => void,
    toastError: (msg: string, icon: ToastIcon) => void,
    successIcon: ToastIcon,
    errorIcon: ToastIcon,
    resetFunc: () => void
  ) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "user/setUserDetails"
        | "auth/setUserTokens"
        | "auth/autoLogoutHandler";
    }) => void
  ) => {
    setIsLoading(true);
    try {
      const res = await otpSignin({ otp });

      setIsLoading(false);

      toastSuccess("Login Successful!", successIcon);

      const { accessToken, refreshToken } = res.data.data;

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
      } = res.data.data.user;

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

      // login expires an hour
      const expirationTime = new Date(new Date().getTime() + 30 * 1000);

      // calculating the remaining time
      const remainingTime = calculateExpirationTime(
        expirationTime.toISOString()
      );

      // setting a logout timer as soon as one logs in
      logoutTimer = setTimeout(async () => {
        dispatch(authActions.autoLogoutHandler());
        dispatch(
          userActions.setUserDetails({
            id: "",
            email: "",
            role: "",
          })
        );
        resetFunc();
      }, remainingTime);

      dispatch(
        authActions.setUserTokens({
          accessToken,
          refreshToken,
          expirationTime: expirationTime.toISOString(),
        })
      );

      resetFunc();
    } catch (e: any) {
      console.log(e);

      setIsLoading(false);

      toastError(e.response.data.message, errorIcon);
    }
  };

export const userLogout = () => {
  return (
    dispatch: (arg0: { payload: any; type: "auth/logoutHandler" }) => void
  ) => {
    dispatch(authActions.logoutHandler({ logoutTimer }));
  };
};

// autologout when page is refreshed
export const autoLogout = (tokenDuration: any, navToHome: () => void) => {
  console.log("auto", tokenDuration);

  return (dispatch: any) => {
    logoutTimer = setTimeout(async () => {
      dispatch(authActions.autoLogoutHandler());
      navToHome();
    }, tokenDuration);
  };
};

export const autoLogin =
  (tokenDuration: any, refreshToken: string, navFunc: () => void) =>
  async (dispatch: any) => {
    if (tokenDuration > 6000 && tokenDuration <= 60000) {
      clearTimeout(logoutTimer);
      const expirationTime = new Date(new Date().getTime() + 30 * 1000);
      // User is still active
      const res = await sendRefreshToken(refreshToken);

      const { accessToken: newToken, refreshToken: newRefreshToken } =
        res.data.data;

      // calculating the remaining time
      const remainingTime = calculateExpirationTime(
        expirationTime.toISOString()
      );

      // setting a logout timer as soon as one logs in
      logoutTimer = setTimeout(async () => {
        dispatch(authActions.autoLogoutHandler());
        dispatch(
          userActions.setUserDetails({
            id: "",
            email: "",
            role: "",
          })
        );
        navFunc();
      }, remainingTime);

      dispatch(
        authActions.setUserTokens({
          accessToken: newToken,
          refreshToken: newRefreshToken,
          expirationTime: expirationTime.toISOString(),
        })
      );
    }
  };
