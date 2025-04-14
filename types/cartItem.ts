import { StaticImageData } from "next/image";
import { Review } from "./shoppingItem";

export type CartItem = {
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
  shortDescription: string;
  longDescription: string;
  reviews?: Review[];
  colors: {
    color: string;
    sizes: {
      size: string;
      quantity: number;
      chosenQuantity: number;
    }[];
  }[];
};
