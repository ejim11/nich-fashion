import React from "react";
import Image from "next/image";
import discountImg1 from "../../assets/home/discount-1.png";
import discountImg2 from "../../assets/home/discount-2.png";
import Link from "next/link";

const DiscountComp = () => {
  return (
    <section className="flex mb-[10rem] bg-gradient-to-r from-[#A09F9F1A] to-[#E5E5E5] rounded-[2rem] overflow-hidden ">
      <div className="flex-1 flex justify-center pl-[10rem] flex-col">
        <h3 className="text-[4.8rem] font-montserrat font-bold leading-[5.8rem] text-color-black">
          50% Off All Cloth
        </h3>
        <p className="my-[1.6rem] font-satoshi text-[2.4rem] leading-[2.2rem]">
          Hurry! Offer ends January 31!
        </p>
        <Link
          href={"/shop"}
          className=" text-center block py-[1.6rem] px-[5.4rem] border bg-color-black text-color-white rounded-[6.2rem] w-max  transition-all duration-100 ease-in font-satoshi font-medium  leading-[2.1rem] capitalize"
        >
          shop now
        </Link>
      </div>
      <div className="h-full relative w-[45%]">
        <Image
          src={discountImg1}
          alt="discount image "
          priority
          width={500}
          height={500}
          className="w-full h-full "
        />
        <div className="absolute bottom-0  w-[30rem] right-0 ">
          <Image
            src={discountImg2}
            alt="discount image "
            priority
            width={500}
            height={500}
            className="w-full h-full "
          />
        </div>
      </div>
    </section>
  );
};

export default DiscountComp;
