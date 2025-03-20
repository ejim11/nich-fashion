import { CartItem } from "@/types/cartItem";

export const getTotalPriceOfCartItems = (cart: CartItem[]): number => {
  return cart
    .map((cartItem: CartItem) => {
      return (
        cartItem.colors
          .map(
            (color: {
              color: string;
              sizes: {
                size: string;
                quantity: number;
                chosenQuantity: number;
              }[];
            }) => color.sizes
          )
          .flat()
          .map(
            (size: {
              size: string;
              quantity: number;
              chosenQuantity: number;
            }) => size.chosenQuantity
          )
          .reduce((acc, cur) => acc + cur, 0) * cartItem.price
      );
    })
    .reduce((acc, cur) => cur + acc, 0);
};

export const getTotalQuantityOfCartItems = (cart: CartItem[]): number => {
  return cart
    .map((cartItem: CartItem) => {
      return cartItem.colors
        .map(
          (color: {
            color: string;
            sizes: {
              size: string;
              quantity: number;
              chosenQuantity: number;
            }[];
          }) => color.sizes
        )
        .flat()
        .map(
          (size: { size: string; quantity: number; chosenQuantity: number }) =>
            size.chosenQuantity
        )
        .reduce((acc, cur) => acc + cur, 0);
    })
    .reduce((acc, cur) => cur + acc, 0);
};
