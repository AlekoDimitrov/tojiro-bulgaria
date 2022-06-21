import React, { useEffect, useState } from "react";
import { Flex, Text, chakra } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { motion, isValidMotionProp } from "framer-motion";

const Navbar = () => {
  const [navShadow, setNavShadow] = useState("");
  const listenToScroll = () => {
    window.scrollY > 30
      ? setNavShadow("0px -14px 20px 0px #000000")
      : setNavShadow("");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  });

  const NavContainer = chakra(motion.div, {
    /**
     * Allow motion props and the children prop to be forwarded.
     * All other chakra props not matching the motion props will still be forwarded.
     */
    shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
  });

  return (
    <NavContainer
      h={"80px"}
      display={"flex"}
      position={"sticky"}
      top={"0px"}
      alignItems={"center"}
      justifyContent={"space-between"}
      backgroundColor={"#fff"}
      padding={["0 10px", "0 20px", "0 40px", "0 80px"]}
      zIndex={2}
      animate={{
        boxShadow: navShadow,
      }}
    >
      <Flex
        w={"72px"}
        justify={"space-between"}
        display={["flex", "flex", "flex", "none"]}
      >
        <Text fontSize={"1.3rem"} color={"black"}>
          <FiMenu />
        </Text>
        <Text fontSize={"1.3rem"} color={"black"}>
          <FiSearch />
        </Text>
      </Flex>
      <Text
        fontSize={["3xl", "3xl", "3xl", "4xl"]}
        fontFamily={"'Joan', 'serif'"}
      >
        TOJIRO
      </Text>
      <Flex
        className="text"
        align={"center"}
        justify={"space-between"}
        w={"55%"}
        fontFamily={"'montserrat', 'serif'"}
        fontSize={"0.85rem"}
        color={"#0d0d0d#000000"}
        display={["none", "none", "none", "flex"]}
        fontWeight={"700"}
      >
        <Text>ЯПОНСКИ НОЖОВЕ</Text>
        <Text>АКСЕСОАРИ</Text>
        <Text>УСЛУГИ</Text>
        <Text>КОНТАКТИ </Text>
      </Flex>
      <Flex w={"72px"} justify={"space-between"}>
        <Text fontSize={"1.3rem"} color={"black"}>
          <FiUser />
        </Text>
        <Text fontSize={"1.3rem"} color={"black"}>
          <FiShoppingCart />
        </Text>
      </Flex>
    </NavContainer>
  );
};

export default Navbar;
