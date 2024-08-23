import { useEffect, useState } from "react";
import {
  fetchSearchedNewsArticles,
  fetchGuardianAPIArticles,
  fetchGuardianCategoryBaseArticles,
  fetchGuardianAPIArticlesPreference,
} from "@/app/api/news/fetchGuardianApi";
import {
  fetchNYTCategoryBaseArticles,
  getNYTArticlesPreference,
  searchNYTArticles,
} from "@/app/api/news/fetchNytApi";
import { GuardianArticle, NYTArticle } from "@/app/types";
import {
  fetchNewsAPIArticlesPreference,
  fetchNewsCategoryBaseArticles,
  fetchSearchNewsAPIArticles,
} from "@/app/api/news/fetchNewsApi";
import { usePreferences } from "@/app/context/NewsPreferencesContext";

export const useSearchArticles = (
  debouncedValue: string,
  sources: string[]
) => {
  const [articles, setArticles] = useState<any>([]);

  const fetchArticles = async () => {
    try {
      const articlePromises = sources.map(async (source) => {
        const numberOfArticles = 12 / sources.length;

        switch (source) {
          case "The Guardian":
            const guardianArticles = await fetchSearchedNewsArticles(
              debouncedValue
            );
            return { source: "The Guardian", articles: guardianArticles };

          case "New York Times":
            const nytArticles = await searchNYTArticles(debouncedValue);
            return { source: "New York Times", articles: nytArticles };

          default:
            const apiNewsArticles = await fetchSearchNewsAPIArticles(
              debouncedValue
            );

            return { source: "API News", articles: apiNewsArticles };
        }
      });

      const results = await Promise.all(articlePromises);

      setArticles(results);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  useEffect(() => {
    if (sources.length && debouncedValue) {
      fetchArticles();
    } else {
      setArticles([]);
    }
  }, [debouncedValue]);

  return articles;
};
