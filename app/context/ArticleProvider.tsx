"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { NewsAPIArticle } from "../types";
type ArticleContextType = {
  selectedArticle: NewsAPIArticle;
  setSelectedArticle: (article: NewsAPIArticle) => void;
};

const initialValues: NewsAPIArticle = {
  source: {
    id: "",
    name: "",
  },
  author: "",
  title: "",
  description: "",
  url: "",
  urlToImage: "",
  publishedAt: "",
  content: "",
};

const ArticleContext = createContext<ArticleContextType | undefined>(undefined);

export const ArticleProvider = ({ children }: { children: ReactNode }) => {
  const [selectedArticle, setSelectedArticle] =
    useState<NewsAPIArticle>(initialValues);

  useEffect(() => {
    const storedArticle = localStorage.getItem("selected-article");
    if (storedArticle && storedArticle !== "undefined") {
      setSelectedArticle(JSON.parse(storedArticle));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("selected-article", JSON.stringify(selectedArticle));
  }, [selectedArticle]);

  return (
    <ArticleContext.Provider value={{ selectedArticle, setSelectedArticle }}>
      {children}
    </ArticleContext.Provider>
  );
};

export const useArticleContext = () => {
  const context = useContext(ArticleContext);
  if (!context) {
    throw new Error("useArticle must be used within a ArticleProvider");
  }
  return context;
};
