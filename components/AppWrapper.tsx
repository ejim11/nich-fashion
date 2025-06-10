"use client";

import { autoLogin, autoLogout } from "@/actions/authActions";
import { useAppDispatch, useAppSelector } from "@/hooks/stateHooks";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

const AppWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dispatchFn = useAppDispatch();
  const pathname = usePathname();
  const router = useRouter();

  const { isLoggedIn, token, remainingTime, refreshToken } = useAppSelector(
    (state) => state.auth
  );

  const { role } = useAppSelector((state) => state.user.details);

  console.log(role);

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
    if (typeof window !== "undefined") {
      const { role: storedUserRole } = JSON.parse(
        window.localStorage.getItem("user") || "{}"
      );
      const userRole = role ?? storedUserRole;

      if (isLoggedIn && token) {
        if (userRole === "admin") {
          router.replace(`/dashboard`);
        } else {
          router.replace("/");
        }
      }
    }
  }, [isLoggedIn, role, router, token]);

  useEffect(() => {
    autoLogoutHandler();
  }, [autoLogoutHandler, dispatchFn]);

  return (
    <div
      className={` max-w-full min-h-screen flex flex-col  bg-[#FFFBFB] ${
        pathname.includes("dashboard") ? "mt-0" : "mt-[7.5rem]"
      }`}
    >
      {children}
    </div>
  );
};

export default AppWrapper;
