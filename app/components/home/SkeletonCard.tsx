import React from "react";
import { Card, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const SkeletonCard = () => {
  return (
    <Card className="flex flex-col h-full w-[320px]">
      <CardHeader>
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[200px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full " />
            <Skeleton className="h-4 w-[90%]  " />
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default SkeletonCard;
