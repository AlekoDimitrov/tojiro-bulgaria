import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { blogsData } from "./Blogs-json";

const Blog = () => {
  return (
    <Flex
      flexDir={"column"}
      align={"center"}
      fontFamily={"montserrat"}
      color={"#3A3D4E"}
    >
      <Text fontSize={"1.8rem"} mb={"20px"}>
        Блог
      </Text>

      <Grid
        w={["90%", "90%", "90%", "90%", "80%", "60%"]}
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={"30px"}
      >
        {blogsData.reverse().map((blog, key) => {
          if (key < 3) {
            return (
              <GridItem maxW={"400px"}>
                <Image src={blog.imgSrc}></Image>
                <Text fontSize={"1.3rem"}>{blog.title}</Text>
                <Flex justify={"space-between"} fontSize={"0.7rem"}>
                  <Text>{blog.date}</Text>
                  <Text>{blog.toRead}</Text>
                </Flex>
                <Button
                  fontSize={"0.7rem"}
                  mt={"20px"}
                  background={"transparent"}
                  border={"1px solid #3A3D4E"}
                >
                  ПРОЧЕТИ
                </Button>
              </GridItem>
            );
          }
        })}
      </Grid>
    </Flex>
  );
};

export default Blog;
