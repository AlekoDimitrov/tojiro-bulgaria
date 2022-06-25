import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";

const Subscribe = () => {
  return (
    <Flex
      flexDir={"column"}
      w={"100%"}
      h={["260px", "220px", "220px", "220px"]}
      background={"#3A3D4E"}
      color={"whiteAlpha.900"}
      fontFamily={"montserrat"}
      align={"center"}
      justify={"center"}
      textAlign={"center"}
      p={"0 15px"}
    >
      <Text fontSize={"1.8rem"} fontWeight={"bold"}>
        Абонирай се
      </Text>
      <Text fontSize={"0.8rem"} fontWeight={"bold"}>
        Запиши се и получавай известия при наличието на специални оферти
      </Text>
      <Flex
        flexDir={["column", "row", "row", "row"]}
        mt={"20px"}
        align={"center"}
        justify={"center"}
      >
        <Input
          mr={"20px"}
          placeholder={"Имейл"}
          _placeholder={{ color: "whiteAlpha.700" }}
        />
        <Button
          w={"fit-content"}
          p={"0 30px"}
          mt={["20px", 0, 0, 0]}
          background={"#50546b"}
        >
          Абонирам се
        </Button>
      </Flex>
    </Flex>
  );
};

export default Subscribe;
