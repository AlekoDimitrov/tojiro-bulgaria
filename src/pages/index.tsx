import type { NextPage } from "next";
import Carousel from "../components/Carousel/Carousel";
import Navbar from "../components/Navbar";
import WeOfferBar from "../components/WeOfferBar";

import Section1 from "../components/CTA/Section1/Section1";
import Blog from "../components/Blog/Blog";
import Subscribe from "../components/Blog/Subscribe/Subscribe";
import PopularKnives from "../components/PopularKnives/PopularKnives";

const Home: NextPage = () => {
  return (
    <>
      <WeOfferBar />
      <Navbar />
      <Carousel />
      <Section1 />
      <Blog />
      <Subscribe />
      <PopularKnives />
    </>
  );
};

export default Home;
