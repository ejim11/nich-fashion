"use client";
import React, { useEffect, useState } from "react";
import TableComp from "../TableComp";
import { useAppDispatch, useAppSelector } from "@/hooks/stateHooks";
import { getUsersDispatch } from "@/actions/userManagementActions";
import { toastError, toastSuccess } from "@/utils/toastFuncs";
import { FaRegCircleCheck } from "react-icons/fa6";
import { LuBadgeAlert } from "react-icons/lu";
import { BsThreeDots } from "react-icons/bs";

const tableHeaders = ["name", "role", "email", "status", "actions"];

const UsersTable = () => {
  const dispatch = useAppDispatch();

  const { token } = useAppSelector((state) => state.auth);

  const { users } = useAppSelector((state) => state.userManagement);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 20;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = [...users].slice(itemOffset, endOffset);
  const pageCount = Math.ceil(users.length / itemsPerPage);

  // Invoke when user click to request another page.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % users.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    dispatch(
      getUsersDispatch(
        token,
        setIsLoading,
        toastSuccess,
        toastError,
        <FaRegCircleCheck className="w-[2.3rem] h-[2.3rem] text-color-primary-1" />,
        <LuBadgeAlert className="w-[2.3rem] h-[2.3rem] red" />
      )
    );
  }, [dispatch, token]);

  return (
    <div className="flex flex-col flex-1 ">
      <TableComp
        tableHeaders={tableHeaders}
        data={users}
        pageCount={pageCount}
        handlePageClick={handlePageClick}
        isPaginated={true}
      >
        {currentItems.map(
          (user: {
            id: string;
            firstName: string;
            lastName: string;
            role: string;
            email: string;
            status: string;
          }) => (
            <tr
              key={user.id}
              className="border-b border-b-[rgba(239,241,243,1)]  text-[rgba(25,25,25,1)] capitalize font-satoshi"
            >
              <td className="px-[1rem] py-[1rem] ">
                {user.firstName} {user.lastName}
              </td>
              <td className="pl-[1rem]">{user.role}</td>
              <td>{user.email}</td>
              <td>
                <span
                  className={`${
                    user.status === "active"
                      ? "bg-[rgba(177,255,229,1)] text-[rgba(0,111,74,1)]"
                      : "bg-[rgba(220,220,220,1)] text-[rgba(121,121,121,1)]"
                  } px-[0.8rem] py-[0.4rem] rounded-[3rem]`}
                >
                  {user.status}
                </span>
              </td>
              <td>
                <button type="button" onClick={() => {}}>
                  <BsThreeDots className="text-[rgba(159,159,159,1)] w-[2rem] h-[2rem] ml-[2.5rem]" />
                </button>
              </td>
            </tr>
          )
        )}
      </TableComp>
    </div>
  );
};

export default UsersTable;
