"use client";
import { Suspense, lazy } from "react";
import {
  NEWS_API_SOURCE,
  THE_GUARDIAN_API_SOURCE,
  NYT_API_SOURCE,
} from "@/app/data/constants";
import { DetailsSkeleton } from "@/app/section/components/DetailsSkeleton";

const GuardianNewsDetails = lazy(
  () => import("@/app/section/components/GuardianNewsDetails")
);
const NewsAPIGridDetails = lazy(
  () => import("@/app/section/components/NewsAPIGridDetails")
);
const NYTArticleDetails = lazy(
  () => import("@/app/section/components/NYTArticleDetail")
);

type DetailsType = {
  id: string;
  source: string;
};

const renderDetailsComponent = (source: string, id: string) => {
  switch (source) {
    case THE_GUARDIAN_API_SOURCE:
      return <GuardianNewsDetails id={id} />;
    case NEWS_API_SOURCE:
      return <NewsAPIGridDetails />;
    case NYT_API_SOURCE:
      return <NYTArticleDetails id={id} />;
    default:
      return null;
  }
};

export const Details = ({ id, source }: DetailsType) => (
  <Suspense fallback={<DetailsSkeleton />}>
    <div className="flex min-h-screen flex-col items-center justify-between">
      {renderDetailsComponent(source, id)}
    </div>
  </Suspense>
);
