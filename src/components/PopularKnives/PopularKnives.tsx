import { Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";

const PopularKnives = () => {
  // Dummy list with knife products
  const featuredKnifeProducts = [];
  for (let i = 0; i < 8; i++) {
    featuredKnifeProducts.push(
      <GridItem key={i}>
        <Flex flexDir={"column"} align={"center"}>
          <Image src="/products/tojiro-gyuto-damascus.png" w={"250px"}></Image>
          <Text>Tojiro Gyuto Damascus</Text>
          <Text>199лв</Text>
        </Flex>
      </GridItem>
    );
  }

  return (
    <Flex
      align={"center"}
      flexDir={"column"}
      fontFamily={"montserrat"}
      m={"50px 0"}
      color={"#3A3D4E"}
    >
      <Text fontSize={"1.8rem"} mb={"20px"} textAlign={"center"}>
        Най-продавани
      </Text>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(4, 1fr)",
        ]}
        gap={"40px"}
        p={"0 30px"}
      >
        {featuredKnifeProducts}
      </Grid>
    </Flex>
  );
};

export default PopularKnives;
