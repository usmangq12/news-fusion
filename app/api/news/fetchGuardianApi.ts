import { THE_GUARDIAN_API_SOURCE } from "@/app/data/constants";
import { guardianApiInstance } from "@/lib/axiosConfig";

const GUARDIAN_API_KEY = process.env.NEXT_PUBLIC_GUARDIAN_API_KEY as string;

// To fetch news section articles for home page
export const fetchGuardianAPIArticles = async (date: any) => {
  const res = await guardianApiInstance.get("/search", {
    params: {
      "api-key": GUARDIAN_API_KEY,
      section: "news",
      "show-fields": "byline,thumbnail,trailText",
      start_date: date.from,
      end_date: date.to,
    },
  });

  return {
    source: THE_GUARDIAN_API_SOURCE,
    articles: res?.data?.response?.results,
  };
};

// To fetch by section type
export const fetchGuardianSectionArticles = async (section: string) => {
  const res = await guardianApiInstance.get("/search", {
    params: {
      "api-key": GUARDIAN_API_KEY,
      section: section,
      "show-fields": "byline,thumbnail,trailText",
    },
  });

  return {
    source: THE_GUARDIAN_API_SOURCE,
    articles: res?.data?.response?.results,
  };
};

// To fetch single news content
export const fetchSingleNewsContent = async (id: string) => {
  const res = await guardianApiInstance.get(id, {
    params: {
      "api-key": GUARDIAN_API_KEY,
      "show-fields": "byline,thumbnail,trailText,bodyText",
    },
  });

  return res?.data?.response?.content;
};

// To fetch single news content
export const fetchSearchedNewsArticles = async (keyword: string) => {
  const res = await guardianApiInstance.get("/search", {
    params: {
      "api-key": GUARDIAN_API_KEY,
      q: keyword,
      "show-fields": "byline,thumbnail,trailText",
    },
  });

  return res?.data?.response?.results;
};

export const fetchGuardianAPIArticlesPreference = async (pageSize: number) => {
  const res = await guardianApiInstance.get("/search", {
    params: {
      "api-key": GUARDIAN_API_KEY,
      section: "news",
      "show-fields": "byline,thumbnail,trailText",
      "page-size": pageSize,
    },
  });

  return {
    source: THE_GUARDIAN_API_SOURCE,
    articles: res?.data?.response?.results,
  };
};

// To fetch single news content
export const fetchGuardianCategoryBaseArticles = async (
  pageSize: number,
  category: string
) => {
  const res = await guardianApiInstance.get("/search", {
    params: {
      "api-key": GUARDIAN_API_KEY,
      q: category,
      "show-fields": "byline,thumbnail,trailText",
      "page-size": pageSize,
    },
  });

  return {
    source: THE_GUARDIAN_API_SOURCE,
    articles: res?.data?.response?.results,
  };
};
