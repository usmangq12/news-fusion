"use client";

import { Suspense, lazy } from "react";

import { ArticleType } from "@/app/types";

const GuardianNewsGrid = lazy(
  () => import("@/app/section/components/GuardianNewsGrid")
);
const NewsAPIGrid = lazy(() => import("@/app/components/home/NewsApiGrid"));

const NYTArticleGrid = lazy(
  () => import("@/app/section/components/NYTNewsGrid")
);

import {
  NEWS_API_SOURCE,
  THE_GUARDIAN_API_SOURCE,
  NYT_API_SOURCE,
} from "@/app/data/constants";
import SkeletonCardGrid from "./SkeletonCardGrid";

type Props = {
  data: ArticleType[];
};

export const NewsGrid = ({ data }: Props) => {
  return (
    <Suspense fallback={<SkeletonCardGrid />}>
      <div className="flex min-h-screen flex-col items-center justify-between">
        {data.map((articleSet, index) => (
          <div
            className="flex min-h-screen flex-col items-center justify-between"
            key={index}
          >
            {articleSet.source === THE_GUARDIAN_API_SOURCE && (
              <GuardianNewsGrid articles={articleSet.articles} />
            )}
            {articleSet.source === NYT_API_SOURCE && (
              <NYTArticleGrid articles={articleSet.articles} />
            )}
            {articleSet.source === NEWS_API_SOURCE && (
              <NewsAPIGrid articles={articleSet.articles} />
            )}
          </div>
        ))}
      </div>
    </Suspense>
  );
};
