import React from "react";
import CartItemComp from "./CartItemComp";
import { CartItem } from "@/types/cartItem";

const CartList = ({ cart }: { cart: CartItem[] }) => {
  return (
    <div className="flex-1 mr-[2.4rem] rounded-[2rem]  flex flex-col border-[0.1rem] border-[rgba(0,0,0,0.1)] py-[2rem] px-[2.4rem]">
      {cart.map((cartItem: CartItem, index: number) => {
        const colors = cartItem.colors.map(
          (color: {
            color: string;
            sizes: {
              size: string;
              quantity: number;
              chosenQuantity: number;
            }[];
          }) => color.color
        );

        const sizes = [
          ...new Set(
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
                }) => size.size
              )
          ),
        ];

        const totalQty = cartItem.colors
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
          .reduce((acc, cur) => acc + cur, 0);

        return (
          <CartItemComp
            key={cartItem.name}
            image={cartItem.image}
            name={cartItem.name}
            sizes={sizes}
            colors={colors}
            totalQuantity={totalQty}
            price={cartItem.price}
            index={index}
            cartLength={cart.length}
          />
        );
      })}
    </div>
  );
};

export default CartList;
