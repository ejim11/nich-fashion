import axios from "axios";

const base =
  process.env.NEXT_PUBLIC_ENVIROMENT === "development"
    ? process.env.NEXT_PUBLIC_LOCAL_HOST
    : process.env.NEXT_PUBLIC_WEB_HOST;

export const user = axios.create({
  baseURL: `${base}/users`,
  timeout: 60000,
});

export const auth = axios.create({
  baseURL: `${base}/auth`,
  timeout: 60000,
});

export const subscriber = axios.create({
  baseURL: `${base}/subscribers`,
  timeout: 60000,
});

export const paystack = axios.create({
  baseURL: `${base}/paystack`,
  timeout: 60000,
});

export const products = axios.create({
  baseURL: `${base}/products`,
  timeout: 60000,
});

export const subscribers = axios.create({
  baseURL: `${base}/subscribers`,
  timeout: 60000,
});

export const contactUs = axios.create({
  baseURL: `${base}/contact-us`,
  timeout: 60000,
});

export const discounts = axios.create({
  baseURL: `${base}/discounts`,
  timeout: 60000,
});

export const deliveryStates = axios.create({
  baseURL: `${base}/delivery-states`,
  timeout: 60000,
});

export const orders = axios.create({
  baseURL: `${base}/orders`,
  timeout: 60000,
});

export const productVariants = axios.create({
  baseURL: `${base}/product-variants`,
  timeout: 60000,
});

export const bankTransfer = axios.create({
  baseURL: `${base}/bank-transfers`,
  timeout: 60000,
});

export const reviews = axios.create({
  baseURL: `${base}/reviews`,
  timeout: 60000,
});

export const aggregate = axios.create({
  baseURL: `${base}/aggregate`,
  timeout: 60000,
});
