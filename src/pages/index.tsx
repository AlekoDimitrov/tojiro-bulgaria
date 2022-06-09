import { Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Navbar from "../components/Navbar";
import WeOfferBar from "../components/WeOfferBar";

const Home: NextPage = () => {
  return (
    <>
      <WeOfferBar />
      <Navbar />
    </>
  );
};

export default Home;
