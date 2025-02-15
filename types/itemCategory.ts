import { StaticImageData } from "next/image";

export enum Category {
  Hoodies = "hoodies",
  RoundNeck = "round-neck",
  PoloShirt = "polo-shirt",
  Cap = "cap",
}

export type ItemCategory = {
  category: Category;
  title: string;
  image: StaticImageData;
};
