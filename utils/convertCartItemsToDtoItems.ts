/* eslint-disable @typescript-eslint/no-explicit-any */
import { CartItem } from "@/types/cartItem";

// Function to convert input to desired output
export function convertProductData(cartItems: CartItem[]) {
  const products = cartItems.map((product) => {
    // Flatten colors and sizes into variants
    const variants = product.colors.flatMap((colorObj: any) =>
      colorObj.sizes.map((sizeObj: any) => ({
        id: colorObj.id, // Generate unique ID for each variant
        color: colorObj.color,
        size: sizeObj.size,
        quantity: sizeObj.chosenQuantity, // Use chosenQuantity; alternatively, use sizeObj.quantity
      }))
    );

    // Return product object in desired format
    return {
      productId: product.id,
      price: product.price,
      variants,
    };
  });

  return products;
}
