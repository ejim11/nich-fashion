"use client";
import { createUserDispatch } from "@/actions/userManagementActions";
import InputComponent from "@/components/InputComponent";
import { useAppDispatch, useAppSelector } from "@/hooks/stateHooks";
import { registrationOption } from "@/utils/inputValidator";
import { toastError, toastSuccess } from "@/utils/toastFuncs";
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import { LuBadgeAlert } from "react-icons/lu";
import { FallingLines } from "react-loader-spinner";

export enum UserRole {
  USER = "user",
  ADMIN = "admin",
}

export enum UserStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
}

type FormData = {
  name: string;
  email: string;
};

const AddUserFormModal = ({
  setModalIsVisible,
}: {
  setModalIsVisible: Dispatch<SetStateAction<boolean>>;
}) => {
  const dispatch = useAppDispatch();

  const { token } = useAppSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [role, setRole] = useState<UserRole>(UserRole.USER);

  const [userStatus, setUserStatus] = useState<UserStatus>(UserStatus.ACTIVE);

  const selectRoleHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value as UserRole);
  };

  const selectUserStatusHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setUserStatus(e.target.value as UserStatus);
  };

  const closeModalHandler = () => {
    setModalIsVisible(false);
  };

  const resetForm = () => {
    reset({
      name: "",
      email: "",
    });

    setModalIsVisible(false);
  };

  const roleAndStatusInputData = [
    {
      name: "roles",
      id: "role",
      value: role,
      onChange: selectRoleHandler,
      options: ["user", "admin"],
    },
    {
      name: "status",
      id: "status",
      value: userStatus,
      onChange: selectUserStatusHandler,
      options: ["active", "inactive"],
    },
  ];

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    console.log();

    dispatch(
      createUserDispatch(
        token,
        {
          email: data.email,
          firstName: data.name.trim().split(" ")[0],
          lastName: data.name.trim().split(" ")[1],
          role,
          status: userStatus,
        },
        setIsLoading,
        toastSuccess,
        toastError,
        <FaRegCircleCheck className="w-[2.3rem] h-[2.3rem] text-color-primary-1" />,
        <LuBadgeAlert className="w-[2.3rem] h-[2.3rem] red" />,
        resetForm
      )
    );
  };

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex justify-between items-center px-[2.4rem] py-[2rem] border-b border-[rgba(175,175,175,1)]">
        <h4 className="text-[2.4rem] font-satoshi font-bold text-[rgba(25,25,25,1)] capitalize">
          Add new user
        </h4>
        <button
          type="button"
          onClick={closeModalHandler}
          className="w-[3.2rem] h-[3.2rem]"
          data-closemodal="true"
        >
          <IoCloseOutline className="w-full h-full" data-closemodal="true" />
        </button>
      </div>
      <div className="w-full flex-1 px-[2.4rem] py-[3.6rem]">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <InputComponent
            placeholder={"Enter your full name"}
            type={"text"}
            register={register}
            error={errors}
            label="Fullname"
            labelTextColor=" font-satoshi"
            name={"name"}
            pl={"pl-[2rem]"}
            border="border-[rgba(102,102,102,0.35)] border"
            inputRadius="rounded-[1.2rem]"
            validation={registrationOption.fullname}
          />
          <InputComponent
            placeholder={"Enter your mail address"}
            type={"email"}
            register={register}
            error={errors}
            label="Email"
            labelTextColor=" font-satoshi"
            name={"email"}
            inputRadius="rounded-[1.2rem]"
            pl={"pl-[2rem]"}
            border="border-[rgba(102,102,102,0.35)] border "
            validation={registrationOption.email}
          />
          {roleAndStatusInputData.map((data, i) => (
            <div key={i} className="flex flex-col mb-[2rem]">
              <label
                htmlFor={data.id}
                className="font-satoshi mb-[0.5rem] capitalize"
              >
                {data.id}
              </label>
              <div className="px-[2rem] py-[1.3rem] border border-[rgba(102,102,102,0.35)] rounded-[1.2rem]">
                <select
                  name={data.name}
                  id={data.id}
                  value={data.value}
                  onChange={data.onChange}
                  className="flex w-full focus:border-0 focus:ring-0 ring-0 outline-none focus:outline-none"
                >
                  {data.options.map((opt) => (
                    <option key={opt} value={opt} className="capitalize">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}
          <div className="flex justify-end items-center mt-[2.4rem]">
            <button
              type="button"
              className="px-[6.2rem] py-[1.6rem] font-satoshi font-medium border border-black rounded-[0.8rem] capitalize"
            >
              cancel
            </button>
            <button
              type="submit"
              className="px-[6.2rem] py-[1.6rem] font-satoshi font-medium border border-black rounded-[0.8rem] capitalize ml-[1.6rem] bg-black text-white"
            >
              {isLoading ? (
                <FallingLines
                  height="25"
                  width="25"
                  color={"white"}
                  visible={true}
                />
              ) : (
                "add new user"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserFormModal;
