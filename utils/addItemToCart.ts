import { CartItem } from "@/types/cartItem";

export const updateItemIfExists = (
  existingItems: CartItem[],
  newItem: CartItem
) => {
  // Find if the item already exists in the array
  const existingItemIndex = existingItems.findIndex(
    (item) => item.id === newItem.id
  );

  // If item doesn't exist, simply add it to the array
  if (existingItemIndex === -1) {
    return [...existingItems, newItem];
  }

  // Item exists, so we need to update it
  const updatedItems = [...existingItems];
  const existingItem = updatedItems[existingItemIndex];

  // Merge colors and sizes properly
  if (newItem.colors && existingItem.colors) {
    // For each color in new item
    newItem.colors.forEach((newColor) => {
      // Check if this color exists in the existing item
      const existingColorIndex = existingItem.colors.findIndex(
        (color) => color.color === newColor.color
      );

      if (existingColorIndex === -1) {
        // Color doesn't exist, add it
        existingItem.colors.push(newColor);
      } else {
        // Color exists, check and merge sizes
        newColor.sizes.forEach((newSize) => {
          const existingSizeIndex = existingItem.colors[
            existingColorIndex
          ].sizes.findIndex((size) => size.size === newSize.size);

          if (existingSizeIndex === -1) {
            // Size doesn't exist, add it
            existingItem.colors[existingColorIndex].sizes.push(newSize);
          } else {
            // Size exists, increase the chosenQuantity
            existingItem.colors[existingColorIndex].sizes[existingSizeIndex] = {
              ...existingItem.colors[existingColorIndex].sizes[
                existingSizeIndex
              ],
              chosenQuantity:
                (existingItem.colors[existingColorIndex].sizes[
                  existingSizeIndex
                ].chosenQuantity || 0) + (newSize.chosenQuantity || 0),
            };
          }
        });
      }
    });
  }

  // Update other properties of the item
  updatedItems[existingItemIndex] = {
    ...existingItem,
    name: newItem.name || existingItem.name,
    price: newItem.price || existingItem.price,
    discount:
      newItem.discount !== undefined ? newItem.discount : existingItem.discount,
    // Add other properties as needed
    reviews: [
      ...(existingItem.reviews || []),
      ...(newItem.reviews || []),
    ].filter(
      // Remove duplicate reviews by id
      (review, index, self) =>
        index === self.findIndex((r) => r.id === review.id)
    ),
  };

  return updatedItems;
};
