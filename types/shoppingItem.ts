import { StaticImageData } from "next/image";

export type ShoppingItem = {
  id?: number;
  image: StaticImageData;
  title: string;
  price: number;
  discount: number;
  soldOut?: boolean;
  type?: string;
  sizes?: string[];
};
