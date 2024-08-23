import React from "react";
import { ArticlesGrid } from "@/app/components/home/ArticlesGrid";

const Section = ({
  params,
}: {
  params: {
    type: string;
  };
}) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <ArticlesGrid type={params?.type} />
    </div>
  );
};

export default Section;
