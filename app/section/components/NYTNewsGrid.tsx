"use client";

import React from "react";
import Link from "next/link";

import Image from "next/image";
import { NYTArticle } from "@/app/types";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SkeletonCardGrid from "@/app/components/home/SkeletonCardGrid";

type Props = {
  articles: NYTArticle[];
};

const SECTION_PAGE_URL = "/section";

const NYTNewsGrid = ({ articles }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {!articles ? (
        Array.from({ length: 12 }).map((_) => <SkeletonCardGrid />)
      ) : articles.length ? (
        articles?.map((article) => {
          const defaultImage: any = article?.multimedia
            ? article?.multimedia.map(
                (multimedia: { url: any }) => multimedia.url
              )
            : null;
          return (
            <Link
              key={article?._id}
              href={{
                pathname: `${SECTION_PAGE_URL}/${article?.uri}`,
                query: { source: "New York Times" },
              }}
            >
              <Card className="flex flex-col h-full">
                <CardHeader>
                  {defaultImage.url ? (
                    <Image
                      src={defaultImage.url}
                      layout="responsive"
                      sizes="100vw"
                      width={500}
                      height={320}
                      alt={defaultImage.caption || "Article Cover Image"}
                      className="rounded-lg w-full h-80"
                    />
                  ) : (
                    <div className="w-full h-80 bg-gray-200 flex items-center justify-center rounded-lg">
                      <span className="text-gray-500 text-sm">
                        No Image Available
                      </span>
                    </div>
                  )}
                  <div className="text-xs text-muted-foreground mb-4"></div>
                  <CardTitle className="font-light text-lg md:text-xl lg:text-2xl leading-tight text-gray-900 duration-200 !my-3">
                    {article?.snippet}
                  </CardTitle>
                  <CardDescription>{article?.abstract}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          );
        })
      ) : (
        <div className="col-span-3 ">
          <h2 className="text-gray-500 text-lg text-center">No Data Found </h2>
        </div>
      )}
    </div>
  );
};

export default NYTNewsGrid;
