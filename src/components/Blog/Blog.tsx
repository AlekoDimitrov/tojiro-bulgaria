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
      mb={"50px"}
    >
      <Text fontSize={"1.8rem"} mb={"50px"}>
        Блог
      </Text>

      <Grid
        w={["90%", "90%", "90%", "90%", "80%", "60%"]}
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={"50px"}
      >
        {blogsData.reverse().map((blog, key) => {
          if (key < 4) {
            if (key === 0) {
              return (
                <GridItem
                  maxW={["400px", "400px", "100%", "100%"]}
                  colSpan={[1, 1, 3, 3]}
                >
                  <Flex flexDir={["column", "column", "row"]} w={"100%"}>
                    <Image
                      src={blog.imgSrc}
                      w={["100%", "100%", "50%"]}
                      objectFit={"cover"}
                    />
                    <Flex
                      flexDir={"column"}
                      justify={"space-between"}
                      w={["100%", "100%", "45%"]}
                      ml={["0", "0", "5%"]}
                    >
                      <Text fontSize={"1.3rem"}>{blog.title}</Text>
                      <Text
                        fontSize={["0rem", "0rem", ".9rem"]}
                        m={["0", "0", "25px 0", "25px 0"]}
                      >
                        {blog.description}
                      </Text>
                      <Flex
                        m={"10px 0"}
                        justify={"space-between"}
                        fontSize={"0.7rem"}
                      >
                        <Text>{blog.date}</Text>
                        <Text>{blog.toRead}</Text>
                      </Flex>
                      <Button
                        w={"100px"}
                        fontSize={"0.7rem"}
                        mt={"20px"}
                        background={"transparent"}
                        border={"1px solid #3A3D4E"}
                      >
                        ПРОЧЕТИ
                      </Button>
                    </Flex>
                  </Flex>
                </GridItem>
              );
            } else {
              return (
                <GridItem maxW={"400px"}>
                  <Image src={blog.imgSrc}></Image>
                  <Text fontSize={"1.3rem"}>{blog.title}</Text>
                  <Flex
                    justify={"space-between"}
                    fontSize={"0.7rem"}
                    m={"10px 0"}
                  >
                    <Text>{blog.date}</Text>
                    <Text>{blog.toRead}</Text>
                  </Flex>
                  <Button
                    w={"100px"}
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
          }
        })}
      </Grid>
    </Flex>
  );
};

export default Blog;
