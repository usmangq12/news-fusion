import React from "react";
import SkeletonCard from "./SkeletonCard";
import useResponsiveItemCount from "@/hooks/useResponsiveItemCount";

const SkeletonCardGrid = () => {
  const itemCount = useResponsiveItemCount();
  const skeletonCards = Array.from({ length: itemCount });

  return (
    <div className="flex flex-col space-y-6">
      {Array.from({ length: 3 }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex space-x-6 justify-center">
          {skeletonCards
            .slice(rowIndex * 4, rowIndex * 4 + 4)
            .map((_, index) => (
              <SkeletonCard key={index} />
            ))}
        </div>
      ))}
    </div>
  );
};

export default SkeletonCardGrid;
