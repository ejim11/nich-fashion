"use client";
import { motion } from "framer-motion";
import React, { Dispatch, ReactNode, SetStateAction } from "react";

const ModalComp: React.FC<{
  children: ReactNode;
  setVisible: Dispatch<SetStateAction<boolean>>;
}> = ({ children, setVisible }) => {
  const initialAnimation = { opacity: 0, x: "100%" };

  const animate = { opacity: 1, x: 0 };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const closeModalHandler = (e: any) => {
    if (e.target.dataset.closemodal) setVisible(false);
  };

  return (
    <motion.div
      initial={initialAnimation}
      animate={animate}
      exit={initialAnimation}
      transition={{ duration: 0.3, ease: "easeIn" }}
      className={`bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 w-full h-screen flex justify-end z-50`}
      onClick={closeModalHandler}
      data-closemodal="true"
    >
      <div className="w-[55rem] h-full bg-white">{children}</div>
    </motion.div>
  );
};

export default ModalComp;
