import Image from "next/image";
import React from "react";
import firstSecImg1 from "../../assets/home/first-sec-1.png";
import firstSecImg2 from "../../assets/home/first-sec-2.png";
import firstSecImg3 from "../../assets/home/first-sec-3.svg";
import firstSecImg4 from "../../assets/home/first-sec-4.svg";
import Link from "next/link";

const FirstSection = () => {
  return (
    <section className="h-[77rem] smd:h-auto w-full rounded-tl-[3rem] rounded-tr-[3rem] bg-color-grey-3 px-[7.2rem] 2xl:px-[3rem] xl:px-[1rem]  xlg:px-[0.2rem]  flex items-end">
      <div className="w-full flex relative  smd:flex-wrap smd:items-center smd:flex-col">
        <div className="w-[36.5rem] h-[60rem] smd:order-2  smd:mt-[3rem] sm:h-auto">
          <Image
            src={firstSecImg1}
            alt="first section image of a person"
            priority
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        </div>
        <div className="smd:flex-[100%] smd:order-1 flex-1  self-stretch xlg:self-center text-center pt-[4rem] xlg:px-[1rem] flex flex-col items-center ">
          <h1 className="font-monserrat text-[5.4rem] 3xl:text-[5rem] xl:text-[4rem] smd:text-[3rem]  font-black leading-[6.4rem] smd:leading-[4rem] ">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="font-satoshi leading-[2.2rem] text-[#00000099] my-[2.6rem] ">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Link
            href="/collections?category=voltex"
            className="bg-color-black text-color-white  font-satoshi font-medium py-[1.5rem] px-[5.8rem] capitalize rounded-[6.2rem]"
          >
            Shop Now
          </Link>
        </div>
        <div className="w-[27rem] h-[60rem] xlg:hidden">
          <Image
            src={firstSecImg2}
            alt="first section image of a person"
            priority
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        </div>
        <div className="w-[5.6rem] h-[5.6rem] absolute bottom-[7.6rem] left-[40rem] smd:left-[55rem] sm:right-0  sm:left-auto  ">
          <Image
            src={firstSecImg3}
            alt="first section image of a star"
            priority
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        </div>
        <div className="w-[7.8rem] h-[7.8rem] absolute right-[15rem] smd:left-[10rem] smd:right-auto sm:top-[30rem] -top-[8rem] smd:top-[18rem] sm:left-0">
          <Image
            src={firstSecImg4}
            alt="first section image of a star icon"
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
