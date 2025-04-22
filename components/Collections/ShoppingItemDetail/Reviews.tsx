import { Review, ShoppingItem } from "@/types/shoppingItem";
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
// import { FiSliders } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
// import { BsThreeDots } from "react-icons/bs";
import formatDate from "@/utils/formatDate";
import AddReviewForm from "./AddReviewForm";
import { AnimatePresence } from "framer-motion";

const Reviews = ({
  reviews,
  setItemDetails,
  productId,
}: {
  reviews?: Review[];
  setItemDetails: Dispatch<SetStateAction<ShoppingItem>>;
  productId: string;
}) => {
  const [isAddReviewModalVisible, setIsAddReviewModalVisible] =
    useState<boolean>(false);

  const [sortReviewsBy, setSortReviewsBy] = useState<string>("latest");

  const [reviewsAmount, setReviewsAmount] = useState<number>(2);

  const sortedReviews =
    reviews && reviews?.length > 0
      ? reviews.sort((a, b) => {
          if (sortReviewsBy === "oldest") {
            return (
              new Date(a.dateCreated).getTime() -
              new Date(b.dateCreated).getTime()
            );
          } else {
            return (
              new Date(b.dateCreated).getTime() -
              new Date(a.dateCreated).getTime()
            );
          }
        })
      : [];

  const onChangeSortByHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortReviewsBy(e.target.value);
  };

  return (
    <section className="mt-[4rem] flex flex-col relative">
      <p className="text-[2rem] font-satoshi font-medium leading-[2.2rem] mb-[3rem] text-black">
        Rating & Reviews
      </p>
      <div className="flex items-center justify-between">
        <p className="text-black text-[2.4rem] font-bold font-satoshi">
          All Reviews{" "}
          <span className="text-[1.6rem] font-normal leading-[2.2rem]">
            ({reviews?.length})
          </span>
        </p>
        <div className="flex items-center">
          {/* <button className="bg-[#F0F0F0] w-[4.8rem] h-[4.8rem] rounded-full flex items-center justify-center ">
            <FiSliders className="text-[#000000] w-[2.2rem] h-[2.2rem]" />
          </button> */}
          <div className="flex items-center bg-[#F0F0F0] py-[1.6rem] px-[2rem] rounded-[6.2rem] font-satoshi mx-[1rem] w-[12.5rem]">
            <select
              name="sort-reviews"
              id="sort-reviews"
              value={sortReviewsBy}
              onChange={onChangeSortByHandler}
              className="bg-transparent focus:ring-0 focus:outline-none w-full cursor-pointer font-satoshi font-semibold"
            >
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
          {/* <button
            type="button"
            className="flex items-center bg-[#F0F0F0] py-[1.6rem] px-[2rem] rounded-[6.2rem] font-satoshi mx-[1rem]"
          >
            <span className="mr-[2rem] font-medium">{}</span>
            <FiChevronDown className="w-[1.6rem] h-[1.6rem]" />
          </button> */}
          <button
            onClick={() => {
              setIsAddReviewModalVisible(true);
            }}
            type="button"
            className="bg-black text-white rounded-[6.2rem] py-[1.6rem] px-[2rem] font-medium font-satoshi"
          >
            Write Review
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 mt-[3rem] w-[90%] mx-auto gap-[2rem]">
        {sortedReviews.slice(0, reviewsAmount)?.map((review: Review) => {
          const date = formatDate(review.dateCreated);

          return (
            <div
              key={review.id}
              className="border border-[#0000001A] py-[2.8rem] px-[3.2rem] rounded-[2rem] flex flex-col"
            >
              <div className="flex items-center justify-between">
                <div className="flex">
                  {Array.from(
                    { length: review?.stars || 3 },
                    (_, index) => index
                  ).map((star: number) => (
                    <FaStar
                      key={star}
                      className="text-[#FFC633] w-[2.2rem] h-[2.2rem]"
                    />
                  ))}
                </div>
                {/* <button>
                  <BsThreeDots className="text-[rgba(0,0,0,0.4)] w-[2rem] h-[2rem]" />
                </button> */}
              </div>
              <p className="font-bold font-satoshi text-[2rem] leading-[2.2rem] my-[1.5rem]">
                {review.reviewer}
              </p>
              <p className="text-[rgba(0,0,0,0.6)] font-satoshi leading-[2.2rem] mb-[2.4rem]">{`"${review.review}"`}</p>
              <p className="mt-auto font-medium font-satoshi leading-[2.2rem] text-[rgba(0,0,0,0.6)] ">
                Posted on{" "}
                {`${date?.month} ${date?.dateInNumber}, ${date?.year}`}
              </p>
            </div>
          );
        })}
      </div>
      {reviewsAmount <= 10 && (
        <button
          type="button"
          className="mt-[4.8rem] border border-[rgba(0,0,0,0.1)] py-[1.5rem] px-[4.5rem] mx-auto rounded-[6.2rem] font-satoshi font-medium"
          onClick={() => {
            setReviewsAmount(11);
          }}
        >
          Load More Reviews
        </button>
      )}
      <AnimatePresence>
        {isAddReviewModalVisible && (
          <AddReviewForm
            setIsAddReviewModalVisible={setIsAddReviewModalVisible}
            setItemDetails={setItemDetails}
            setIsModalVisible={setIsAddReviewModalVisible}
            productId={productId}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Reviews;
