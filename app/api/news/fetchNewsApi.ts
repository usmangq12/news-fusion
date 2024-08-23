import { NEWS_API_SOURCE } from "@/app/data/constants";
import { newsApiInstance } from "@/lib/axiosConfig";
const NEWS_API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY as string;
const EVERYTHING_ADDITIONAL_URL = "/everything";
// domains
export const fetchNewsAPIArticles = async () => {
  const res = await newsApiInstance.get(EVERYTHING_ADDITIONAL_URL, {
    params: {
      q: "apple",
      pageSize: 10,
      language: "en",
      apiKey: NEWS_API_KEY,
    },
  });
  return res.data.articles;
};
export const fetchSearchNewsAPIArticles = async (session: string) => {
  const res = await newsApiInstance.get(EVERYTHING_ADDITIONAL_URL, {
    params: {
      q: session,
      pageSize: 10,
      language: "en",
      apiKey: NEWS_API_KEY,
    },
  });
  return {
    source: NEWS_API_SOURCE,
    articles: res.data.articles,
  };
};
export const fetchNewsAPIArticlesPreference = async (pageSize: number) => {
  const res = await newsApiInstance.get(EVERYTHING_ADDITIONAL_URL, {
    params: {
      q: "apple",
      pageSize: pageSize,
      language: "en",
      apiKey: NEWS_API_KEY,
    },
  });
  return {
    source: NEWS_API_SOURCE,
    articles: res.data.articles,
  };
};
export const fetchNewsCategoryBaseArticles = async (
  pageSize: number,
  category: string
) => {
  const res = await newsApiInstance.get(EVERYTHING_ADDITIONAL_URL, {
    params: {
      q: category,
      pageSize: pageSize,
      language: "en",
      apiKey: NEWS_API_KEY,
    },
  });
  return {
    source: NEWS_API_SOURCE,
    articles: res.data.articles,
  };
};
