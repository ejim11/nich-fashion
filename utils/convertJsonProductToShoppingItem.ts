/* eslint-disable @typescript-eslint/no-explicit-any */
import { Color, ShoppingItem } from "@/types/shoppingItem";

// Conversion function
export function convertToShoppingItem(jsonData: any): ShoppingItem {
  // Group variants by color and aggregate sizes and images
  const colorMap: { [key: string]: Color } = {};

  jsonData.variants.forEach((variant: any) => {
    const color = variant.color;
    if (!colorMap[color]) {
      colorMap[color] = {
        id: variant.id,
        color,
        images: [],
        sizes: [],
      };
    }

    // Add images (using URLs as strings instead of StaticImageData)
    variant.images.forEach((img: any) => {
      if (!colorMap[color].images.includes(img.imagePath)) {
        colorMap[color].images.push(img.imagePath);
      }
    });

    // Add size
    colorMap[color].sizes.push({
      size: variant.size,
      quantity: variant.quantity,
    });
  });

  // Convert colorMap to array of Colors
  const colors = Object.values(colorMap);

  // Determine if all variant is sold out to set the soldOut flag for the item
  const soldOut = jsonData.variants.every((v: any) => v.soldOut);

  // Use the first image from the first variant as the main image
  const mainImage =
    jsonData.variants[0]?.images[0]?.imagePath || "placeholder-image-url";

  // Construct the ShoppingItem
  const shoppingItem: ShoppingItem = {
    id: jsonData.id,
    image: mainImage, // Using string instead of StaticImageData
    name: jsonData.name,
    price: parseFloat(jsonData.price), // Convert string to number
    discount: parseFloat(jsonData.discount), // Convert string to number
    soldOut,
    category: jsonData.category,
    dressStyle: jsonData.dressStyle,
    clothType: jsonData.clothType,
    material: jsonData.material,
    brand: jsonData.brand,
    colors,
    shortDescription: jsonData.shortDescription,
    longDescription: jsonData.longDescription,
    reviews:
      jsonData.reviews.length > 0
        ? jsonData.reviews.map((review: any) => ({
            id: review.id,
            reviewer: review.reviewer,
            review: review.review,
            dateCreated: review.dateCreated,
            stars: review.stars,
          }))
        : [],
  };

  return shoppingItem;
}
