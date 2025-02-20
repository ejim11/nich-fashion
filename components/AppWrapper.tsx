"use client";
// import { useAppDispatch, useAppSelector } from "@/hooks/stateHooks";
// import { useRouter } from "next/navigation";

// import React, { useCallback, useEffect } from "react";

const AppWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  //   const dispatchFn = useAppDispatch();
  //   const router = useRouter();

  //   const { remainingTime, refreshToken } = useAppSelector((state) => state.auth);

  //   const autoLogoutHandler = useCallback(() => {
  //     const navToHome = () => {
  //       router.push("/");
  //     };
  //     if (remainingTime) {
  //       dispatchFn(autoLogout(remainingTime, navToHome));
  //       dispatchFn(autoLogin(remainingTime, refreshToken));
  //     }
  //   }, [dispatchFn, refreshToken, remainingTime, router]);

  //   useEffect(() => {
  //     autoLogoutHandler();
  //   }, [autoLogoutHandler, dispatchFn]);

  return <div className="mt-[7.5rem]">{children}</div>;
};

export default AppWrapper;
