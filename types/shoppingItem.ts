import { StaticImageData } from "next/image";

export type Color = {
  color: string;
  quantity: number;
};

export type Size = {
  size: string;
  colors: Color[];
};

export type Review = {
  id: string;
  reviewer: string;
  comment: string;
  dateCreated: string;
  stars: number;
};

export type ShoppingItem = {
  id: string;
  image: StaticImageData;
  name: string;
  price: number;
  discount: number;
  soldOut: boolean;
  type: string;
  material: string;
  brand: string;
  sizes: Size[];
  shortDescription: string;
  longDescription: string[];
  otherImages: StaticImageData[];
  reviews?: Review[];
};
