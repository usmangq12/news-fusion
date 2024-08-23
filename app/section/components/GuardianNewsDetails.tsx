"use client";

import { fetchSingleNewsContent } from "@/app/api/news/fetchGuardianApi";
import { GuardianArticle } from "@/app/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatDate } from "@/lib/date";
import Image from "next/image";
import { useEffect, useState } from "react";
import { DetailsSkeleton } from "./DetailsSkeleton";
interface Props {
  id: string | undefined;
}
const GuardianNewsDetails = ({ id }: Props) => {
  const [article, setArticle] = useState<GuardianArticle>();

  useEffect(() => {
    const fetchArticle = async () => {
      const contentIdentifierPath = `/${id}`;
      const articleResponse = await fetchSingleNewsContent(
        contentIdentifierPath
      );
      setArticle(articleResponse);
    };
    fetchArticle();
  }, [id]);

  if (!article) return <DetailsSkeleton />;
  return (
    <Card className="prose prose-gray max-w-3xl mx-auto dark:prose-invert p-2">
      <CardHeader>
        <CardTitle className="text-2xl font-extrabold tracking-tight sm:text-2xl">
          {article?.webTitle}
        </CardTitle>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0 text-muted-foreground">
          <p>{article?.fields.byline}</p>
          <Separator orientation="vertical" className="hidden sm:block" />
          {article?.webPublicationDate && (
            <p className="sm:ml-auto">
              Published on {formatDate(article?.webPublicationDate)}
            </p>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {article?.fields?.thumbnail ? (
          <Image
            src={article.fields.thumbnail}
            alt="Featured Image"
            layout="fill"
            className="w-full !relative rounded-lg object-cover"
            priority
          />
        ) : (
          <div className="w-full h-80 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500 text-sm">No Image Available</span>
          </div>
        )}
        <p className="mt-6 text-base sm:text-lg text-muted-foreground">
          {article?.fields?.trailText}
        </p>
        <p className="mt-4 text-sm sm:text-base text-muted-foreground">
          {article?.fields?.bodyText}
        </p>
      </CardContent>
    </Card>
  );
};
export default GuardianNewsDetails;
