import { products } from "@/axios.config";
import { cleanQueryString } from "@/utils/cleanQueryString";

export const getNewArrivals = async () => {
  return await products.get("?sort=newest&limit=4");
};

export const getShoppingItem = async (id: string) => {
  return await products.get(`/${id}`);
};

export const getShoppingItems = async (
  name?: string,
  category?: string,
  clothType?: string,
  dressStyle?: string,
  price?: string,
  sort?: string,
  colors?: string,
  sizes?: string,
  limit?: string
) => {
  const qryString = cleanQueryString(
    `name=${name}&price=${price}&category=${category}&clothType=${clothType}&dressStyle=${dressStyle}&colors=${colors}&sizes=${sizes}&sort=${sort}&limit=${limit}`
  );

  return await products.get(`${qryString}`);
};

export const getTopSellingItems = async () => {
  return await products.get("?limit=4&sort=most_purchased");
};
