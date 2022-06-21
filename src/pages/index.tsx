import type { NextPage } from "next";
import Carousel from "../components/Carousel/Carousel";
import Navbar from "../components/Navbar";
import WeOfferBar from "../components/WeOfferBar";

import Section1 from "../components/CTA/Section1/Section1";

const Home: NextPage = () => {
  return (
    <>
      <WeOfferBar />
      <Navbar />
      <Carousel />
      <Section1 />
    </>
  );
};

export default Home;
