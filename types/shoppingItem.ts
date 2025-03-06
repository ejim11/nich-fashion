import { StaticImageData } from "next/image";

type Color = {
  color: string;
  quantity: number;
};

type Size = {
  quantity: number;
  size: string;
};

export type Review = {
  id: string;
  reviewer: string;
  comment: string;
  dateCreated: Date;
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
  colors: Color[];
  otherImages: StaticImageData[];
  reviews?: Review[];
};
