import { NYT_API_SOURCE } from "@/app/data/constants";
import { nytApiInstance } from "@/lib/axiosConfig";
const NYT_API_KEY = process.env.NEXT_PUBLIC_NYT_API_KEY as string;
export const getNYTArticles = async (date: any) => {
  try {
    const response = await nytApiInstance.get("/search/v2/articlesearch.json", {
      params: {
        "api-key": NYT_API_KEY,
        begin_date: date.from,
        end_date: date.to,
      },
    });
    return response.data.response.docs;
  } catch (error) {
    console.error("Error fetching articles from New York Times API:", error);
    return [];
  }
};
export const getNYTSectionTypeArticles = async (section: string) => {
  try {
    const response = await nytApiInstance.get(
      `/topstories/v2/${section}.json`,
      {
        params: {
          "api-key": NYT_API_KEY,
        },
      }
    );
    return { source: NYT_API_SOURCE, articles: response.data.response.results };
  } catch (error) {
    console.error("Error fetching articles from New York Times API:", error);
    return [];
  }
};
export const searchNYTArticles = async (id: string) => {
  try {
    const response = await nytApiInstance.get("/search/v2/articlesearch.json", {
      params: {
        q: id,
        "api-key": NYT_API_KEY,
      },
    });
    return response.data.response.docs;
  } catch (error) {
    console.error("Error fetching articles from New York Times API:", error);
    return [];
  }
};
export const getNYTArticlesPreference = async (pageSize: number) => {
  try {
    const response = await nytApiInstance.get("/search/v2/articlesearch.json", {
      params: {
        "api-key": NYT_API_KEY,
        "page-size": pageSize,
      },
    });
    return { source: NYT_API_SOURCE, articles: response.data.response.docs };
  } catch (error) {
    console.error("Error fetching articles from New York Times API:", error);
    return [];
  }
};
export const fetchNYTCategoryBaseArticles = async (
  pageSize: number,
  query: string
) => {
  try {
    const response = await nytApiInstance.get(`/search/v2/${query}.json`, {
      params: {
        "api-key": NYT_API_KEY,
        "page-size": pageSize,
      },
    });
    return { source: NYT_API_SOURCE, articles: response.data.response.docs };
  } catch (error) {
    console.error("Error fetching articles from New York Times API:", error);
    return [];
  }
};
