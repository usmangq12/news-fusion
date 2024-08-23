import React from "react";
import { useRouter } from "next/navigation";
import { generateRandomNewsArticleId } from "@/lib/generateRandomId";
import {
  NEWS_API_SOURCE,
  NYT_API_SOURCE,
  THE_GUARDIAN_API_SOURCE,
} from "@/app/data/constants";
import { GuardianArticle, NYTArticle, NewsAPIArticle } from "@/app/types";

const truncateTitle = (title: string, wordLimit: number = 10) => {
  return title;
};

type Props = {
  article: any;
  handleCloseModal: () => void;
};

export const SearchItem = ({ article, handleCloseModal }: Props) => {
  const router = useRouter();

  const guardian = article.filter(
    (article: { source: string }) => article.source === "The Guardian"
  );
  const newsApi = article.filter(
    (article: { source: string }) => article.source === "API News"
  );
  const nytApi = article.filter(
    (article: { source: string }) => article.source === "New York Times"
  );

  const guardianArticles = guardian.flatMap(
    (item: { articles: [] }) => item.articles
  );
  const newsArticles = newsApi.flatMap(
    (item: { articles: [] }) => item.articles
  );
  const nytArticles = nytApi.flatMap((item: { articles: [] }) => item.articles);

  return (
    <>
      {guardianArticles.length > 0 &&
        guardianArticles.map((article: GuardianArticle) => (
          <div
            onClick={() => {
              handleCloseModal();
              router.push(
                `/section/${article.id}?source=${THE_GUARDIAN_API_SOURCE}`
              );
            }}
            key={article.id}
            className="flex items-center gap-2 hover:bg-muted/50 rounded-md p-2 cursor-pointer"
          >
            <div className="h-8 w-8 bg-muted rounded-md" />
            <div>
              <p className="font-medium">{truncateTitle(article.webTitle)}</p>
              <p className="text-sm text-muted-foreground">
                {article.pillarName}
              </p>
            </div>
          </div>
        ))}
      {newsArticles.length > 0 &&
        newsArticles?.map((article: NewsAPIArticle) => (
          <div
            onClick={() => {
              handleCloseModal();
              router.push(
                `/section/${generateRandomNewsArticleId()}?source=${NEWS_API_SOURCE}`
              );
            }}
            key={article.publishedAt}
            className="flex items-center gap-2 hover:bg-muted/50 rounded-md p-2 cursor-pointer"
          >
            <div className="h-8 w-8 bg-muted rounded-md" />
            <div>
              <p className="font-medium">{truncateTitle(article.title)}</p>
              <p className="text-sm text-muted-foreground">
                {article?.source?.name}
              </p>
            </div>
          </div>
        ))}
      {nytArticles.length > 0 &&
        nytArticles.map((article: NYTArticle) => (
          <div
            onClick={() => {
              handleCloseModal();
              router.push(`/sections/${article?.uri}?source=${NYT_API_SOURCE}`);
            }}
            key={article.uri}
            className="flex items-center gap-2 hover:bg-muted/50 rounded-md p-2 cursor-pointer"
          >
            <div className="h-8 w-8 bg-muted rounded-md" />
            <div>
              <p className="font-medium">{truncateTitle(article.snippet)}</p>
              <p className="text-sm text-muted-foreground">
                {article.type_of_material}
              </p>
            </div>
          </div>
        ))}
    </>
  );
};
