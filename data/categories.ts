import { Category, ItemCategory } from "@/types/itemCategory";
import categoryImg1 from "../assets/home/category-1.png";
import categoryImg2 from "../assets/home/category-2.png";
import categoryImg3 from "../assets/home/category-3.png";
import categoryImg4 from "../assets/home/category-4.png";

export const categories: ItemCategory[] = [
  {
    category: Category.Hoodies,
    title: "hoodies",
    image: categoryImg1,
  },
  {
    category: Category.RoundNeck,
    title: "round neck",
    image: categoryImg2,
  },
  {
    category: Category.PoloShirt,
    title: "polo shirt",
    image: categoryImg3,
  },
  {
    category: Category.Cap,
    title: "cap",
    image: categoryImg4,
  },
];
