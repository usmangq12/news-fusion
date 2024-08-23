import axios, { AxiosInstance } from "axios";

const BASE_URL_NEWS_API = process.env.NEXT_PUBLIC_NEWS_API_BASE_URL as string;
const BASE_URL_GUARDIAN_API = process.env
  .NEXT_PUBLIC_GUARDIAN_API_BASE_URL as string;
const BASE_URL_NYT_NEWS_API = process.env
  .NEXT_PUBLIC_NYT_API_BASE_URL as string;

const createAxiosInstance = (baseURL: string): AxiosInstance => {
  return axios.create({
    baseURL: baseURL,
    headers: {
      "content-type": "application/json",
    },
  });
};

export const newsApiInstance = createAxiosInstance(BASE_URL_NEWS_API);
export const guardianApiInstance = createAxiosInstance(BASE_URL_GUARDIAN_API);
export const nytApiInstance = createAxiosInstance(BASE_URL_NYT_NEWS_API);
