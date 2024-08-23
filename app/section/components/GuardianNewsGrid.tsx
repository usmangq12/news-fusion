"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import SkeletonCard from "../../components/home/SkeletonCard";
import { GuardianArticle } from "@/app/types";
import useResponsiveItemCount from "@/hooks/useResponsiveItemCount";
import { THE_GUARDIAN_API_SOURCE } from "@/app/data/constants";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { usePreferences } from "@/app/context/NewsPreferencesContext";

type Props = {
  articles: GuardianArticle[];
};

const SECTION_PAGE_URL = "/section";
const GuardianNewsGrid = ({ articles }: Props) => {
  const { authors, setAuthors, selectedAuthors } = usePreferences();
  const filteredArticles = articles.filter(
    (article: GuardianArticle) =>
      !selectedAuthors.includes(article?.fields?.byline)
  );
  const itemCount = useResponsiveItemCount();

  useEffect(() => {
    const filteredAuthors = articles.reduce(
      (accumulator: string[], article: GuardianArticle): string[] => {
        const author = article?.fields?.byline;

        if (author && !authors.includes(author)) {
          accumulator.push(author);
        }
        return accumulator;
      },
      []
    );
    setAuthors(filteredAuthors);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {!filteredArticles ? (
        Array.from({ length: itemCount }).map((_, index) => (
          <SkeletonCard key={`guardian_skeleton_${index}`} />
        ))
      ) : filteredArticles.length > 0 ? (
        filteredArticles.map((article) => (
          <Link
            key={`${article.webTitle}_id`}
            href={`${SECTION_PAGE_URL}/${article.id}?source=${THE_GUARDIAN_API_SOURCE}`}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                {article?.fields?.thumbnail ? (
                  <Image
                    src={article.fields.thumbnail}
                    sizes="100vw"
                    width={500}
                    height={300}
                    alt="Article Cover Image"
                    className="rounded-lg w-full h-80"
                  />
                ) : (
                  <div className="w-full h-80 bg-gray-200 flex items-center justify-center rounded-lg">
                    <span className="text-gray-500 text-sm">
                      No Image Available
                    </span>
                  </div>
                )}
                <div className="text-xs text-muted-foreground mb-4">
                  <p>{article?.fields?.byline || "Unknown Author"}</p>
                </div>
                <h3>{article?.webTitle}</h3>
                <CardDescription>{article?.fields?.trailText}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))
      ) : (
        <div className="col-span-3">
          <h2 className="text-gray-500 text-lg text-center">No Data Found</h2>
        </div>
      )}
    </div>
  );
};

export default GuardianNewsGrid;
