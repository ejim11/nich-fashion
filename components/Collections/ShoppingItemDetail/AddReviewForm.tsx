import { createReviewDispatch } from "@/actions/reviewsActions";
import { useAppDispatch } from "@/hooks/stateHooks";
import { ShoppingItem } from "@/types/shoppingItem";
import { toastError, toastSuccess } from "@/utils/toastFuncs";
import { motion } from "framer-motion";
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { LuBadgeAlert } from "react-icons/lu";
import { FallingLines } from "react-loader-spinner";

const AddReviewForm = ({
  setIsAddReviewModalVisible,
  setItemDetails,
  setIsModalVisible,
  productId,
}: {
  setIsAddReviewModalVisible: Dispatch<SetStateAction<boolean>>;
  setItemDetails: Dispatch<SetStateAction<ShoppingItem>>;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
  productId: string;
}) => {
  const dispatch = useAppDispatch();

  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  const [chosenStars, setChosenStars] = useState<number>(0);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [reviewer, setReviewer] = useState<string>("");

  const [review, setReview] = useState<string>("");

  const isFormFilled = !!reviewer && !!review && chosenStars;
  const onReviewChangeHandler = (e: { target: { value: string } }): void => {
    setReview(e.target.value);
  };

  const onSetReviewerChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setReviewer(e.target.value);
  };

  const resetFunc = () => {
    setReview("");
    setReviewer("");
    setChosenStars(0);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addReviewHandler = (e: any) => {
    e.preventDefault();

    const data = {
      reviewer,
      review,
      stars: chosenStars,
      productId: productId,
    };

    dispatch(
      createReviewDispatch(
        data,
        setItemDetails,
        setIsModalVisible,
        setIsLoading,
        toastSuccess,
        toastError,
        <FaRegCircleCheck className="w-[2.3rem] h-[2.3rem] text-color-primary-1" />,
        <LuBadgeAlert className="w-[2.3rem] h-[2.3rem] red" />,
        resetFunc
      )
    );
  };

  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        x: 80,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: 80,
        transition: {
          ease: "easeIn",
        },
      }}
      className="w-[55rem] sm:w-full sm:p-[1.5rem] sm:shadow-lg  absolute top-0  right-0 z-[40] bg-[rgba(255,251,251,1)] p-[2.5rem]  border-[0.1rem] border-[rgba(0,0,0,0.1)] rounded-[2rem] shadow-md"
    >
      <p className="font-medium font-satoshi leading-[2.2rem] text-[rgba(0,0,0,0.92)] mb-[1rem]">
        Rate me
      </p>
      <div className="flex mb-[1.6rem]">
        {stars.map((star: number) => (
          <button
            key={star}
            onClick={() => {
              setChosenStars(star);
            }}
            className={`mr-[0.5rem] last:mr-0 transition-all duration-150 ease-in ${
              Number(star) <= chosenStars
                ? "text-[#FFC633]"
                : "text-[rgba(229,229,229,1)]"
            }`}
          >
            <FaStar className="text-current w-[2.2rem] h-[2.2rem]" />
          </button>
        ))}
      </div>
      <form onSubmit={addReviewHandler}>
        <div className="flex flex-col mb-[2rem]">
          <label htmlFor="reviewer" className="mb-[1rem]">
            Fullname
          </label>
          <input
            type="text"
            name="reviewer"
            id="reviewer"
            value={reviewer}
            onChange={onSetReviewerChangeHandler}
            placeholder="Enter your name"
            className="w-full bg-white rounded-[0.6rem] border-[0.1rem] border-[rgba(0,0,0,0.1)] resize-none focus:ring-0 focus:outline-none outline-none ring-0 p-[1.5rem] text-black font-satoshi"
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="review" className="text-[1.8rem] mb-[1rem]">
            Review
          </label>
          <textarea
            name="review"
            id="review"
            rows={5}
            value={review}
            onChange={onReviewChangeHandler}
            placeholder="Enter your review"
            className="bg-white rounded-[0.6rem] w-full border-[0.1rem] border-[rgba(0,0,0,0.1)] resize-none focus:ring-0 
            focus:outline-none outline-none ring-0 p-[1.5rem] text-black font-satoshi"
          />
        </div>

        <div className=" flex font-satoshi mt-[1.5rem] justify-end">
          <button
            onClick={() => {
              setIsAddReviewModalVisible(false);
            }}
            type="button"
            className="px-[3rem] py-[1.5rem] bg-white text-black border border-black rounded-[6.2rem] mr-[2rem]"
          >
            Cancel
          </button>
          <button
            disabled={!isFormFilled}
            type="submit"
            className="disabled:bg-gray-400 disabled:border-gray-400 disabled:cursor-not-allowed px-[3rem] py-[1.5rem] bg-black text-white border border-black rounded-[6.2rem]"
          >
            {isLoading ? (
              <FallingLines
                height="25"
                width="25"
                color={"white"}
                visible={true}
              />
            ) : (
              " Write a Review"
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default AddReviewForm;
