import { ShoppingItem } from "@/types/shoppingItem";

export function getPriceRange(products: ShoppingItem[]) {
  // Handle empty array case
  if (!products || products.length === 0) {
    return [0, 0];
  }

  if (products.length === 1) {
    return [100, products[0].price];
  }

  // Initialize min and max with the first product's price
  let minPrice = products[0].price;
  let maxPrice = products[0].price;

  // Loop through products to find min and max prices
  for (let i = 1; i < products.length; i++) {
    const currentPrice = products[i].price;

    if (currentPrice < minPrice) {
      minPrice = currentPrice;
    }

    if (currentPrice > maxPrice) {
      maxPrice = currentPrice;
    }
  }

  if (minPrice === maxPrice) {
    return [100, maxPrice];
  }

  return [minPrice, maxPrice];
}
