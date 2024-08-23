"use client";

import React, { useEffect, useState } from "react";
import { usePreferences } from "@/app/context/NewsPreferencesContext";

import {
  fetchGuardianAPIArticlesPreference,
  fetchGuardianCategoryBaseArticles,
  fetchGuardianSectionArticles,
} from "@/app/api/news/fetchGuardianApi";
import {
  fetchNYTCategoryBaseArticles,
  getNYTArticlesPreference,
  getNYTSectionTypeArticles,
} from "@/app/api/news/fetchNytApi";
import {
  fetchNewsAPIArticlesPreference,
  fetchNewsCategoryBaseArticles,
  fetchSearchNewsAPIArticles,
} from "@/app/api/news/fetchNewsApi";
import {
  THE_GUARDIAN_API_SOURCE,
  NYT_API_SOURCE,
  NEWS_API_SOURCE,
} from "@/app/data/constants";
import { NewsGrid } from "./NewsGrid";
import { ArticleType } from "@/app/types";

const MAX_NUMBER_OF_ARTICLES = 12;

type Props = { type?: string };

export const ArticlesGrid = ({ type }: Props) => {
  const { sources, categories } = usePreferences();
  const [articles, setArticles] = useState<ArticleType[]>([]);

  const fetchArticles = async () => {
    try {
      const numberOfArticles = MAX_NUMBER_OF_ARTICLES / sources.length;
      const articlePromises = sources.map((source) => {
        switch (source) {
          case THE_GUARDIAN_API_SOURCE:
            if (!type) {
              return fetchGuardianAPIArticlesPreference(numberOfArticles);
            }
          case THE_GUARDIAN_API_SOURCE:
            if (type) {
              return fetchGuardianSectionArticles(type);
            }
          case NYT_API_SOURCE:
            if (!type) {
              return getNYTArticlesPreference(numberOfArticles);
            }
          case NYT_API_SOURCE:
            if (type) {
              return getNYTSectionTypeArticles(type);
            }
          case NEWS_API_SOURCE:
            if (type) {
              return fetchSearchNewsAPIArticles(type);
            }
          case NEWS_API_SOURCE:
            if (!type) {
              return fetchNewsAPIArticlesPreference(numberOfArticles);
            }
        }
      });
      const results = await Promise.all(articlePromises);
      setArticles(results as ArticleType[]);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  const fetchArticlesWithCategories = async () => {
    try {
      const articlesPromises = sources.flatMap((source) =>
        categories.map((category) => {
          const numberOfArticles = Math.floor(
            MAX_NUMBER_OF_ARTICLES / sources.length
          );
          switch (source) {
            case THE_GUARDIAN_API_SOURCE:
              return fetchGuardianCategoryBaseArticles(
                numberOfArticles,
                category
              );
            case NEWS_API_SOURCE:
              return fetchNewsCategoryBaseArticles(numberOfArticles, category);
            case NYT_API_SOURCE:
              return fetchNYTCategoryBaseArticles(numberOfArticles, category);
            default:
              return Promise.resolve([]);
          }
        })
      );
      const results = await Promise.all(articlesPromises);
      setArticles(results as ArticleType[]);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  useEffect(() => {
    if (sources.length && categories.length) {
      fetchArticlesWithCategories();
    } else if (sources.length) {
      fetchArticles();
    }
  }, [sources, categories]);

  return <NewsGrid data={articles} />;
};
