import { StaticImageData } from "next/image";

export type Color = {
  color: string;
  images: StaticImageData[];
  sizes: Size[];
};

export type Size = {
  size: string;
  quantity: number;
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
  category: string;
  dressStyle: string;
  clothType: string;
  material: string;
  brand: string;
  colors: Color[];
  shortDescription: string;
  longDescription: string;
  reviews?: Review[];
};
