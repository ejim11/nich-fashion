import { StaticImageData } from "next/image";

export type ShoppingItem = {
  image: StaticImageData;
  title: string;
  price: number;
  discount: number;
  soldOut?: boolean;
};
