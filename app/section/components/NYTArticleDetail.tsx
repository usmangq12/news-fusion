"use client";
import { useEffect, useState } from "react";
import { searchNYTArticles } from "@/app/api/news/fetchNytApi";
import { GuardianArticle } from "@/app/types";
interface Props {
  id: string | undefined;
}
const NYTArticleDetails = ({ id }: Props) => {
  const [article, setArticle] = useState<GuardianArticle>();
  useEffect(() => {
    (async () => {
      const response = await searchNYTArticles(`${id}`);
      setArticle(response);
    })();
  }, [id]);

  return (
    //   <div className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
    //   <Card className="prose prose-gray max-w-3xl mx-auto dark:prose-invert">
    //     <CardHeader className="p-6 md:p-8 lg:p-10">
    //       <CardTitle className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
    //         {selectedArticle?.title}
    //       </CardTitle>
    //       <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0 text-muted-foreground">
    //         <p>{selectedArticle?.author}</p>
    //         <Separator orientation="vertical" className="hidden sm:block" />
    //         <p className="sm:ml-auto">
    //           Published on {formatDate(selectedArticle?.publishedAt as string)}
    //         </p>
    //       </div>
    //     </CardHeader>
    //     <CardContent className="p-6 md:p-8 lg:p-10">
    //       <figure className="flex justify-center">
    //         <div className="relative w-full pb-[56.25%] rounded-lg">
    //           {selectedArticle?.urlToImage ? (
    //             <Image
    //               src={selectedArticle.urlToImage}
    //               alt="Featured Image"
    //               fill
    //               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 50vw"
    //               className="absolute inset-0 w-full h-full object-cover rounded-lg"
    //               priority
    //             />
    //           ) : (
    //             <div className="w-full h-80 bg-gray-200 flex items-center justify-center rounded-lg">
    //               <span className="text-gray-500 text-sm">
    //                 No Image Available
    //               </span>
    //             </div>
    //           )}
    //         </div>
    //       </figure>
    //       <p className="mt-6 text-base sm:text-lg">
    //         {selectedArticle?.description}
    //       </p>
    //       <p className="mt-4 text-sm sm:text-base">
    //         {selectedArticle?.content}
    //       </p>
    //     </CardContent>
    //   </Card>
    // </div>

    <div className="flex items-center justify-center min-h-screen px-4 py-6 md:px-6 md:py-12 lg:py-16">
      <div className="text-center">
        {/*
          Displaying "No Data Found" because the API can return multiple objects
          and I could not find the right content information by API provider.
        */}
        <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
          No Data Found
        </h1>
        <p className="mt-4 text-base sm:text-lg">
          Sorry, there is no data available at the moment.
        </p>
      </div>
    </div>
  );
};
export default NYTArticleDetails;
