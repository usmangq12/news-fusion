import React from "react";
import { ArticlesGrid } from "./components/home/ArticlesGrid";

const Home = async () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <ArticlesGrid />
    </div>
  );
};

export default Home;
