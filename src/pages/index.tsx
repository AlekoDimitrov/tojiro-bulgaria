import type { NextPage } from "next";
import Carousel from "../components/Carousel/Carousel";
import Navbar from "../components/Navbar";
import WeOfferBar from "../components/WeOfferBar";
import "@fontsource/joan";
import "@fontsource/montserrat";

const Home: NextPage = () => {
  return (
    <>
      <WeOfferBar />
      <Navbar />
      <Carousel />
    </>
  );
};

export default Home;
