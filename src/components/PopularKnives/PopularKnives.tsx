import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";

const PopularKnives = () => {
  return (
    <Flex
      align={"center"}
      flexDir={"column"}
      fontFamily={"montserrat"}
      m={"50px 0"}
      color={"#3A3D4E"}
    >
      <Text fontSize={"1.8rem"} mb={"20px"}>
        Най-продавани
      </Text>
      <Grid>
        <GridItem mb={"20px"}>
          <Flex flexDir={"column"} align={"center"}>
            <Image
              src="/products/tojiro-gyuto-damascus.png"
              w={"250px"}
            ></Image>
            <Text>Tojiro Gyuto Damascus</Text>
            <Text>$199</Text>
          </Flex>
        </GridItem>{" "}
        <GridItem mb={"20px"}>
          <Flex flexDir={"column"} align={"center"}>
            <Image
              src="/products/tojiro-gyuto-damascus.png"
              w={"250px"}
            ></Image>
            <Text>Tojiro Gyuto Damascus</Text>
            <Text>$199</Text>
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default PopularKnives;
