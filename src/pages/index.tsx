import type { NextPage } from "next";
import Carousel from "../components/Carousel/Carousel";
import Navbar from "../components/Navbar";
import WeOfferBar from "../components/WeOfferBar";

import Section1 from "../components/CTA/Section1/Section1";
import Blog from "../components/Blog/Blog";

const Home: NextPage = () => {
  return (
    <>
      <WeOfferBar />
      <Navbar />
      <Carousel />
      <Section1 />
      <Blog />
    </>
  );
};

export default Home;
