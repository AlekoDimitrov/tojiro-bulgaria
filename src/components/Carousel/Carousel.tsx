import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import images from "./carouselImages";
import { motion, isValidMotionProp } from "framer-motion";
import { chakra } from "@chakra-ui/react";

const InnerCarousel = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

const Carousel = () => {
  const carouselImage = useRef(null);
  const innerCarouselRef = useRef(null);
  const [carouselPosition, setCarouselPosition] = useState(0);
  const [newCarouselSlideDirection, setNewCarouselSlideDirection] =
    useState<number>(0);
  const [oldCarouselSlideDirection, setOldCarouselSlideDirection] =
    useState<number>(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(
      images.length * -carouselImage.current.clientWidth -
        images.length * 15 +
        carouselImage.current.clientWidth
    );
  }, []);

  useEffect(() => {
    if (
      oldCarouselSlideDirection > newCarouselSlideDirection &&
      carouselPosition > width
    ) {
      setCarouselPosition(
        carouselPosition - carouselImage.current.clientWidth - 20
      );
    }
    if (
      oldCarouselSlideDirection < newCarouselSlideDirection &&
      carouselPosition < 0
    ) {
      setCarouselPosition(
        carouselPosition + carouselImage.current.clientWidth + 20
      );
    }
  }, [newCarouselSlideDirection]);

  return (
    <Flex w={"100vw"} justify={"center"}>
      <Box w={"90%"} h={"fit-content"} overflowX={"hidden"} cursor={"pointer"}>
        <InnerCarousel
          animate={{ x: carouselPosition }}
          drag={"x"}
          dragConstraints={{
            right: 0,
            left: width,
          }}
          dragMomentum={false}
          onTapStart={() => {
            setOldCarouselSlideDirection(
              innerCarouselRef.current.style.transform !== "none"
                ? parseFloat(
                    innerCarouselRef.current.style.transform.split(/[()px]+/)[1]
                  )
                : 0
            );
          }}
          onTap={() => {
            setNewCarouselSlideDirection(
              innerCarouselRef.current.style.transform !== "none"
                ? parseFloat(
                    innerCarouselRef.current.style.transform.split(/[()px]+/)[1]
                  )
                : 0
            );
          }}
          onTapCancel={() => {
            setNewCarouselSlideDirection(
              innerCarouselRef.current.style.transform !== "none"
                ? parseFloat(
                    innerCarouselRef.current.style.transform.split(/[()px]+/)[1]
                  )
                : 0
            );
          }}
          ref={innerCarouselRef}
          display={"flex"}
          width={"fit-content"}
        >
          {images.map((image, key) => {
            return (
              <Box
                ref={carouselImage}
                key={key}
                backgroundImage={image.src}
                backgroundSize={"cover"}
                backgroundPosition={"center"}
                w={"92vw"}
                h={"400px"}
                mr={"20px"}
              />
            );
          })}
        </InnerCarousel>
      </Box>
    </Flex>
  );
};

export default Carousel;
