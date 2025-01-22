import React from "react";
import CarouselComp from "../Components/CarouselComp";
import Separator from "../Components/Separator";
import ArticleGrid from "../Components/ArticleGrid";

const Home = () => {
  return (
    <>
      <main>
        <CarouselComp />
        <Separator />
        <ArticleGrid />
      </main>
    </>
  );
};

export default Home;
