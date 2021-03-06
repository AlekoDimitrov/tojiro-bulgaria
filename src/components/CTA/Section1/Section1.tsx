import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import Images from "./Images";

const Section1 = () => {
  return (
    <Flex
      w={"100%"}
      flexDir={"column"}
      align={"center"}
      m={"45px 0"}
      p={"0 20px"}
      fontFamily={"montserrat"}
      fontSize={"1.2rem"}
      color={"#3A3D4E"}
    >
      <Box textAlign={"center"}>
        <text>
          TOJIRO продължава да се стреми към баланс между наследената традиция и
          техническите иновации.
        </text>
      </Box>
      <Grid
        w={["90%", "90%", "90%", "90%", "80%", "60%"]}
        h={"200px"}
        templateColumns={[
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(4, 1fr)",
        ]}
        gap={[10, 20, 30, 30, 50]}
        fontSize={"0.9rem"}
        letterSpacing={"1px"}
        mt={"45px"}
        textAlign={"center"}
      >
        {Images.map((img, key) => {
          if (img === Images[Images.length - 1]) {
            return (
              <GridItem colSpan={[2, 2, 1, 4]} key={key}>
                <Image
                  src={img.src}
                  display={"inline-grid"}
                  h={["50px", "70px", "70px", "70px"]}
                />
                <Text>{img.text}</Text>
              </GridItem>
            );
          } else {
            return (
              <GridItem key={key}>
                <Image src={img.src} />
                <Text mt={"15px"}>{img.text}</Text>
              </GridItem>
            );
          }
        })}
      </Grid>
    </Flex>
  );
};

export default Section1;
