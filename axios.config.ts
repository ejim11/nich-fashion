import axios from "axios";

const base =
  process.env.NEXT_PUBLIC_ENVIROMENT === "development"
    ? process.env.NEXT_PUBLIC_LOCAL_HOST
    : process.env.NEXT_PUBLIC_WEB_HOST;

export const user = axios.create({
  baseURL: `${base}/users`,
});

export const auth = axios.create({
  baseURL: `${base}/auth`,
});

export const subscriber = axios.create({
  baseURL: `${base}/subscribers`,
});

export const paystack = axios.create({
  baseURL: `${base}/paystack`,
});

export const products = axios.create({
  baseURL: `${base}/products`,
});

export const subscribers = axios.create({
  baseURL: `${base}/subscribers`,
});

export const contactUs = axios.create({
  baseURL: `${base}/contact-us`,
});

export const discounts = axios.create({
  baseURL: `${base}/discounts`,
});

export const deliveryStates = axios.create({
  baseURL: `${base}/delivery-states`,
});

export const orders = axios.create({
  baseURL: `${base}/orders`,
});

export const productVariants = axios.create({
  baseURL: `${base}/product-variants`,
});

export const bankTransfer = axios.create({
  baseURL: `${base}/bank-transfers`,
});

export const reviews = axios.create({
  baseURL: `${base}/reviews`,
});

export const aggregate = axios.create({
  baseURL: `${base}/aggregate`,
});
