import { useState, useEffect } from "react";

function useResponsiveItemCount() {
  const [itemCount, setItemCount] = useState(1);

  useEffect(() => {
    const updateItemCount = () => {
      const width = window.innerWidth;

      if (width >= 1024) {
        setItemCount(12);
      } else if (width >= 768) {
        setItemCount(4);
      } else if (width >= 640) {
        setItemCount(2);
      } else {
        setItemCount(2);
      }
    };

    updateItemCount();

    window.addEventListener("resize", updateItemCount);

    return () => window.removeEventListener("resize", updateItemCount);
  }, []);

  return itemCount;
}

export default useResponsiveItemCount;
