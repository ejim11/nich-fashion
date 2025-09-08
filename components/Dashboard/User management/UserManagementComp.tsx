"use client";
import React, { useState } from "react";
import HeaderText from "../HeaderText";
import UsersTable from "./UsersTable";
import ModalComp from "../ModalComp";
import { AnimatePresence } from "framer-motion";
import AddUserFormModal from "./AddUserFormModal";

const UserManagementComp = () => {
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);

  const openAddNewUserModalHandler = () => {
    setModalIsVisible(true);
  };

  return (
    <>
      <div className="flex w-full items-center justify-between">
        <HeaderText text="User Management" />
        <button
          type="button"
          className="bg-black text-white rounded-[0.8rem] py-[1.6rem] px-[5.4rem]"
          onClick={openAddNewUserModalHandler}
        >
          Add New User
        </button>
      </div>
      <div className="mt-[3.6rem] w-full h-auto border border-[rgba(175,175,175,1)] flex-1 bg-[rgba(253,253,253,1)] rounded-[0.4rem] px-[4rem] py-[2.1rem] flex">
        <UsersTable />
      </div>
      <AnimatePresence>
        {modalIsVisible && (
          <ModalComp setVisible={setModalIsVisible}>
            <AddUserFormModal setModalIsVisible={setModalIsVisible} />
          </ModalComp>
        )}
      </AnimatePresence>
    </>
  );
};

export default UserManagementComp;
