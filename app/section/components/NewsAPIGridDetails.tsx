"use client";
import { useArticleContext } from "@/app/context/ArticleProvider";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatDate } from "@/lib/date";
import Image from "next/image";

export const NewsAPIGridDetails = () => {
  const { selectedArticle } = useArticleContext();

  return (
    <div className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
      <Card className="prose prose-gray max-w-3xl mx-auto dark:prose-invert">
        <CardHeader className="p-6 md:p-8 lg:p-10">
          <CardTitle className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
            {selectedArticle?.title}
          </CardTitle>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0 text-muted-foreground">
            <p>{selectedArticle?.author}</p>
            <Separator orientation="vertical" className="hidden sm:block" />
            <p className="sm:ml-auto">
              Published on {formatDate(selectedArticle?.publishedAt as string)}
            </p>
          </div>
        </CardHeader>
        <CardContent className="p-6 md:p-8 lg:p-10">
          <figure className="flex justify-center">
            <div className="relative w-full pb-[56.25%] rounded-lg">
              {selectedArticle?.urlToImage ? (
                <Image
                  src={selectedArticle.urlToImage}
                  alt="Featured Image"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 50vw"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  priority
                />
              ) : (
                <div className="w-full h-80 bg-gray-200 flex items-center justify-center rounded-lg">
                  <span className="text-gray-500 text-sm">
                    No Image Available
                  </span>
                </div>
              )}
            </div>
          </figure>
          <p className="mt-6 text-base sm:text-lg">
            {selectedArticle?.description}
          </p>
          <p className="mt-4 text-sm sm:text-base">
            {selectedArticle?.content}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
export default NewsAPIGridDetails;
