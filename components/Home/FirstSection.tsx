import Image from "next/image";
import React from "react";
import firstSecImg1 from "../../assets/home/first-sec-1.png";
import firstSecImg2 from "../../assets/home/first-sec-2.png";
import firstSecImg3 from "../../assets/home/first-sec-3.svg";
import firstSecImg4 from "../../assets/home/first-sec-4.svg";
import Link from "next/link";

const FirstSection = () => {
  return (
    <section className="h-[77rem] w-full rounded-tl-[3rem] rounded-tr-[3rem] bg-color-grey-3 px-[7.2rem] flex items-end">
      <div className="w-full flex relative">
        <div className="w-[36.5rem] h-[60rem]">
          <Image
            src={firstSecImg1}
            alt="first section image of a person"
            priority
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        </div>
        <div className="flex-1  self-stretch text-center pt-[4rem] flex flex-col items-center">
          <h1 className="font-monserrat text-[5.4rem]  font-black leading-[6.4rem]">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="font-satoshi leading-[2.2rem] text-[#00000099] my-[2.6rem]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Link
            href="/shop"
            className="bg-color-black text-color-white  font-satoshi font-medium py-[1.5rem] px-[5.8rem] capitalize rounded-[6.2rem]"
          >
            Shop Now
          </Link>
        </div>
        <div className="w-[27rem] h-[60rem]">
          <Image
            src={firstSecImg2}
            alt="first section image of a person"
            priority
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        </div>
        <div className="w-[5.6rem] h-[5.6rem] absolute bottom-[7.6rem] left-[40rem]">
          <Image
            src={firstSecImg3}
            alt="first section image of a person"
            priority
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        </div>
        <div className="w-[7.8rem] h-[7.8rem] absolute right-[15rem] -top-[8rem]">
          <Image
            src={firstSecImg4}
            alt="first section image of a person"
            priority
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
