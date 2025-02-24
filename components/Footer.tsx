import React, { ReactNode } from "react";
import logo from "../assets/logo.svg";
import Image, { StaticImageData } from "next/image";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { footerLinks } from "@/types/footerLinks";
import visaImg from "../assets/footer/visa.png";
import masterImg from "../assets/footer/master.png";
import paypalImg from "../assets/footer/paypal.png";
import applePayImg from "../assets/footer/apple-pay.png";
import gPayImg from "../assets/footer/gpay.png";

const Footer = () => {
  const cardImgs: StaticImageData[] = [
    visaImg,
    masterImg,
    paypalImg,
    applePayImg,
    gPayImg,
  ];

  const iconClassname: string = "w-[1.2rem] h-[1.2rem] text-color-black";

  const mediaLinks: { link: string; icon: ReactNode }[] = [
    {
      link: "www.x.com",
      icon: <FaTwitter className={iconClassname} />,
    },
    {
      link: "www.facebook.com",
      icon: <FaFacebookF className={iconClassname} />,
    },
    {
      link: "www.instagram.com",
      icon: <FaInstagram className={iconClassname} />,
    },
    {
      link: "",
      icon: <FaGithub className={iconClassname} />,
    },
  ];

  return (
    <footer className="bg-[#FFFBFB]   flex flex-col font-satoshi ">
      <div className="flex w-full px-[8rem] py-[7rem] ">
        <div className="w-[25rem] mr-[10rem]">
          <div className="w-[9.3rem] h-[4.3rem]">
            <Image
              src={logo}
              alt=" logo image"
              priority
              width={200}
              height={100}
              className="w-full h-full"
            />
          </div>
          <p className="text-[1.4rem] my-[0.8rem] leading-[2.2rem]">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <div className="flex">
            {mediaLinks.map((item: { link: string; icon: ReactNode }) => (
              <Link
                key={item.link}
                href={item.link}
                className="border border-[#00000033] w-[2.8rem] h-[2.8rem] rounded-full flex items-center justify-center mr-[1.2rem] last:mr-0"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex-1 flex justify-between">
          {footerLinks.map(
            (item: {
              title: string;
              links: { text: string; link: string }[];
            }) => (
              <div key={item.title} className="flex flex-col">
                <p className="font-medium tracking-[0.3rem] uppercase text-black mb-[2rem] leading-[1.8rem]">
                  {item.title}
                </p>
                <ul className="flex flex-col">
                  {item.links.map((link: { text: string; link: string }) => (
                    <li key={link.text} className="mb-[2rem] last:mb-0">
                      <Link
                        href={link.link}
                        className="leading-[1.9rem] block capitalize text-[#00000099] hover:text-black duration-100 ease-in transition-all "
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
      <div className="border-t border-[#0000001A] py-[2rem] mx-[8rem] flex justify-between items-center">
        <p>nich © 2025, All Rights Reserved</p>
        <div className="flex items-center ml-auto">
          {cardImgs.map((img: StaticImageData, i: number) => (
            <div key={i} className="w-[5rem] h-[3.5rem]">
              <Image
                src={img}
                alt="card image"
                priority
                width={200}
                height={200}
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
