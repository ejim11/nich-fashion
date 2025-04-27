import React from "react";
import Image from "next/image";
import discountImg1 from "../../assets/home/discount-1.png";
import discountImg2 from "../../assets/home/discount-2.png";
import Link from "next/link";

const DiscountComp = () => {
  return (
    <section className="flex sm:flex-col sm:py-[2.5rem] sm:items-center mb-[10rem] bg-gradient-to-r from-[#A09F9F1A] to-[#E5E5E5] rounded-[2rem] overflow-hidden ">
      <div className="flex-1 flex justify-center pl-[10rem] xl:pl-[5rem] xmd:pl-[3rem]  smd:pl-[2rem] sm:pl-0 sm:items-center mb-[3rem] flex-col">
        <h3 className="text-[4.8rem] xmd:text-[4rem] smd:text-[3rem] font-montserrat font-bold leading-[5.8rem] smd:leading-[3rem] text-color-black">
          50% Off All Cloth
        </h3>
        <p className="my-[1.6rem] font-satoshi text-[2.4rem] smd:text-[2rem] leading-[2.2rem]">
          Hurry! Offer ends January 31!
        </p>
        <Link
          href={"/shop"}
          className=" text-center block py-[1.6rem] px-[5.4rem] border bg-color-black text-color-white rounded-[6.2rem] w-max  transition-all duration-100 ease-in font-satoshi font-medium  leading-[2.1rem] capitalize"
        >
          shop now
        </Link>
      </div>
      <div className="h-full relative w-[45%] smd:w-[55%]">
        <Image
          src={discountImg1}
          alt="discount image "
          priority
          width={500}
          height={500}
          className="w-full h-full "
        />
        <div className="absolute bottom-0  w-[30rem] right-0  sm:hidden">
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
