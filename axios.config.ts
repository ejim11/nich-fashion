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
