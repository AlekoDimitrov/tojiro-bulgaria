import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const WeOfferBar = () => {
  return (
    <Flex
      align={"center"}
      justify={"center"}
      backgroundColor={"#3A3D4E"}
      h={"30px"}
    >
      <Text fontSize={"0.7rem"} color={"#ffff"}>
        БЕЗПЛАТНА ДОСТАВКА В ЦЯЛАТА СТРАНА
      </Text>
    </Flex>
  );
};

export default WeOfferBar;
