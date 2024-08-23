import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

export const DetailsSkeleton = () => {
  return (
    <Card className="flex flex-col h-full w-full sm:w-3/5 px-4 py-6 md:px-6 md:py-12 lg:py-16 mt-16">
      <CardHeader className="p-6 md:p-8 lg:p-10 w-full py-6 ">
        <Skeleton className="h-8 w-3/4 md:h-10 lg:h-12 rounded-md" />

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0 text-muted-foreground mt-4">
          <Skeleton className="h-4 w-1/2 sm:w-1/4 rounded-md" />
          <Separator orientation="vertical" className="hidden sm:block" />

          <Skeleton className="h-4 w-1/2 sm:w-1/4 rounded-md sm:ml-auto" />
        </div>
      </CardHeader>

      <CardContent className="p-6 md:p-8 lg:p-10">
        <div className="relative w-full pb-[56.25%] overflow-hidden rounded-lg bg-gray-200">
          <Skeleton className="absolute inset-0 w-full h-full" />
        </div>

        <Skeleton className="mt-6 h-5 w-full sm:w-3/4 rounded-md" />

        <div className="mt-4 space-y-4">
          <Skeleton className="h-4 w-full rounded-md" />
          <Skeleton className="h-4 w-full rounded-md" />
          <Skeleton className="h-4 w-3/4 rounded-md" />
        </div>
      </CardContent>
    </Card>
  );
};
