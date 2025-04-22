import { productVariants } from "@/axios.config";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const checkProductVariantsAvailability = async (products: any) => {
  return await productVariants.post("/check-availability", {
    products: products,
  });
};
