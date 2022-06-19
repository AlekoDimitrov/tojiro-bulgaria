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
      {/* <Navbar />
      <Navbar />
      <Navbar />
      <Navbar /> */}
    </>
  );
};

export default Home;
