"use client";

import { autoLogin, autoLogout } from "@/actions/authActions";
import { useAppDispatch, useAppSelector } from "@/hooks/stateHooks";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

const AppWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dispatchFn = useAppDispatch();
  const router = useRouter();

  const { remainingTime, refreshToken } = useAppSelector((state) => state.auth);

  const autoLogoutHandler = useCallback(() => {
    const navToHome = () => {
      router.push("/");
    };
    if (remainingTime && refreshToken) {
      dispatchFn(autoLogout(remainingTime, navToHome));
      dispatchFn(autoLogin(remainingTime, refreshToken, navToHome));
    }
  }, [dispatchFn, refreshToken, remainingTime, router]);

  useEffect(() => {
    autoLogoutHandler();
  }, [autoLogoutHandler, dispatchFn]);

  return (
    <div className="mt-[7.5rem] max-w-full min-h-screen flex flex-col  bg-[#FFFBFB]">
      {children}
    </div>
  );
};

export default AppWrapper;
