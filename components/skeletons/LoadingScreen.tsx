"use client";
import React from "react";
import { FallingLines } from "react-loader-spinner";

const LoadingScreen = () => {
  return (
    <div className="w-full h-[70vh] text-[5rem] justify-center flex items-center">
      <FallingLines height="100" width="100" color={"black"} visible={true} />
    </div>
  );
};

export default LoadingScreen;
