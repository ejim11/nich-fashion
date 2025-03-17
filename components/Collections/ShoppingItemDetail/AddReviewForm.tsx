import { motion } from "framer-motion";
import React, { Dispatch, SetStateAction, useState } from "react";
import { FaStar } from "react-icons/fa";

const AddReviewForm = ({
  setIsAddReviewModalVisible,
}: {
  setIsAddReviewModalVisible: Dispatch<SetStateAction<boolean>>;
}) => {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  console.log(stars);

  const [chosenStars, setChosenStars] = useState<number>(0);

  const [review, setReview] = useState<string>("");

  const onReviewChangeHandler = (e: { target: { value: string } }): void => {
    setReview(e.target.value);
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
      className="absolute top-0  right-0 z-[40] bg-[rgba(255,251,251,1)] p-[2.5rem]  border-[0.1rem] border-[rgba(0,0,0,0.1)] rounded-[2rem] shadow-md"
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
      <form>
        <textarea
          name="review"
          id="review"
          rows={5}
          value={review}
          onChange={onReviewChangeHandler}
          className="bg-white rounded-[2rem] w-[55rem] border-[0.1rem] border-[rgba(0,0,0,0.1)] resize-none focus:ring-0 focus:outline-none outline-none ring-0 p-[1.5rem] text-black font-satoshi"
        />
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
            type="submit"
            className="px-[3rem] py-[1.5rem] bg-black text-white border border-black rounded-[6.2rem]"
          >
            Write a Review
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default AddReviewForm;
