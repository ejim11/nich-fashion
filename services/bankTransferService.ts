/* eslint-disable @typescript-eslint/no-explicit-any */
import { bankTransfer } from "@/axios.config";

export const saveBankTransferDetails = async (data: any, token: string) => {
  const formData = new FormData();

  // Add the basic payment fields
  formData.append("deliveryPicker", data.deliveryPicker);
  formData.append("shippingMethod", data.shippingMethod);
  formData.append("deliveryAddress", data.deliveryAddress);
  formData.append("totalAmount", data.totalAmount.toString());
  formData.append("file", data.file, data.file.name);

  // Only append discountId if it exists and isn't empty
  if (data.discountId) {
    formData.append("discountId", data.discountId);
  }

  // Handle the products array
  data.products.forEach((product: any, productIndex: number) => {
    formData.append(`products[${productIndex}][productId]`, product.productId);
    formData.append(
      `products[${productIndex}][price]`,
      product.price.toString()
    );

    // Handle variants for each product
    product.variants.forEach((variant: any, variantIndex: number) => {
      formData.append(
        `products[${productIndex}][variants][${variantIndex}][id]`,
        variant.id
      );
      formData.append(
        `products[${productIndex}][variants][${variantIndex}][color]`,
        variant.color
      );
      formData.append(
        `products[${productIndex}][variants][${variantIndex}][size]`,
        variant.size
      );
      formData.append(
        `products[${productIndex}][variants][${variantIndex}][quantity]`,
        variant.quantity.toString()
      );
    });
  });

  return await bankTransfer.post("submit-tf-info", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
