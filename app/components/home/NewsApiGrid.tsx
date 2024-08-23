"use client";
import React from "react";
import { NewsAPIArticle } from "@/app/types";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { generateRandomNewsArticleId } from "@/lib/generateRandomId";
import { useRouter } from "next/navigation";
import { useArticleContext } from "@/app/context/ArticleProvider";
type NewsApiGridProps = {
  articles: NewsAPIArticle[];
};
const SECTION_PAGE_URL = "/section";
const NewsApiGrid = ({ articles }: NewsApiGridProps) => {
  const { setSelectedArticle } = useArticleContext();
  const router = useRouter();

  const handleArticleClick = (article: NewsAPIArticle) => {
    setSelectedArticle(article);
    router.push(`${SECTION_PAGE_URL}/${generateRandomNewsArticleId()}`);
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.length ? (
        articles?.map((article, index) => (
          <Link
            key={index}
            // href={`${SECTION_PAGE_URL}/${generateRandomNewsArticleId()}`}
            href={{
              pathname: `${SECTION_PAGE_URL}/${generateRandomNewsArticleId()}`,
              query: { source: "API News" },
            }}
            onClick={() => handleArticleClick(article)}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                {article?.urlToImage ? (
                  <Image
                    src={article.urlToImage}
                    alt={article.title}
                    sizes="100vw"
                    width={500}
                    height={300}
                    className="rounded-lg w-full h-80"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-lg">
                    <span className="text-gray-500 text-sm">
                      No Image Available
                    </span>
                  </div>
                )}
                <div className="text-xs text-muted-foreground mb-4">
                  <p>{article?.author || "Unknown Author"}</p>
                </div>
                <CardTitle className="font-light text-lg md:text-xl lg:text-2xl leading-tight text-gray-900">
                  {article?.title}
                </CardTitle>
                <CardDescription>{article?.description}</CardDescription>
                <div className="text-sm text-gray-500 mt-2">
                  {new Date(article.publishedAt).toLocaleDateString()}
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))
      ) : (
        <div className="col-span-3 ">
          <h2 className="text-gray-500 text-lg text-center">No Data Found </h2>
        </div>
      )}
    </div>
  );
};

export default NewsApiGrid;
