import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import images from "./carouselImages";
import { motion, isValidMotionProp } from "framer-motion";
import { chakra } from "@chakra-ui/react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const InnerCarousel = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

const Carousel = () => {
  const innerCarousel = useRef(null);

  const [slide, setSlide] = useState(0);
  const [leftButton, setLeftButton] = useState({
    background: "rgba(255, 255, 255, .5)",
    cursor: "default",
    pointerEvents: "none",
  });
  const [rightButton, setRightButton] = useState({
    background: "rgb(255, 255, 255)",
    cursor: "pointer",
    pointerEvents: "all",
  });

  const toggleButton = (buttonDirection) => {
    if (buttonDirection === "left") {
      setLeftButton({
        background: "rgba(255, 255, 255, .5)",
        cursor: "default",
        pointerEvents: "none",
      });
    } else if (buttonDirection === "right") {
      setRightButton({
        background: "rgba(255, 255, 255, .5)",
        cursor: "default",
        pointerEvents: "none",
      });
    } else {
      setRightButton({ background: "rgb(255, 255, 255)", cursor: "pointer" });
      setLeftButton({ background: "rgb(255, 255, 255)", cursor: "pointer" });
    }
  };
  return (
    <Flex w={"100vw"} justify={"center"} mt={["", "", "", "50px"]}>
      <Box
        w={["90%", "90%", "90%", "90%", "80%", "60%"]}
        overflowX={"hidden"}
        cursor={"pointer"}
        position={"relative"}
      >
        <Flex
          justify={"space-between"}
          position={"sticky"}
          w={"100%"}
          top={"52%"}
          left={0}
          right={0}
          display={["none", "none", "flex", "flex"]}
          zIndex={1}
        >
          <Box
            background={leftButton.background}
            cursor={leftButton.cursor}
            pointerEvents={leftButton.pointerEvents}
            borderRadius={"50%"}
            ml={"10px"}
            onClick={() => {
              const currentChild =
                innerCarousel.current.querySelector("#current");
              const prevChild = currentChild.previousSibling;

              // reassign current
              currentChild.removeAttribute("id");
              prevChild.id = "current";
              // move to next slide
              setSlide(parseInt(-prevChild.offsetLeft));
              toggleButton("reset");
              // at last child, disable left button
              if (prevChild === innerCarousel.current.firstChild) {
                toggleButton("left");
              } else {
              }
            }}
          >
            <MdOutlineKeyboardArrowLeft size={32} />
          </Box>
          <Box
            background={rightButton.background}
            cursor={rightButton.cursor}
            pointerEvents={rightButton.pointerEvents}
            borderRadius={"50%"}
            mr={"10px"}
            onClick={() => {
              const currentChild =
                innerCarousel.current.querySelector("#current");
              const nextChild = currentChild.nextSibling;

              // reassign current
              currentChild.removeAttribute("id");
              nextChild.id = "current";
              // move to next slide
              setSlide(parseInt(-nextChild.offsetLeft));
              toggleButton("reset");
              // at last child, disable right button
              if (nextChild === innerCarousel.current.lastChild) {
                toggleButton("right");
              }
            }}
          >
            <MdOutlineKeyboardArrowRight size={32} />
          </Box>
        </Flex>
        <InnerCarousel
          ref={innerCarousel}
          display={"flex"}
          w={"fit-content"}
          animate={{ x: slide }}
        >
          {images.map((image, key) => {
            return (
              <Box
                key={key}
                backgroundImage={image.src}
                backgroundSize={"cover"}
                backgroundPosition={"center"}
                w={["92vw", "92vw", "92vw", "92vw", "82vw", "62vw"]}
                h={"600px"}
                m={"0 20px"}
                // set id on first slide as current
                id={key === 0 ? "current" : ""}
                _first={{ ml: 0 }}
                _last={{ mr: 0 }}
              />
            );
          })}
        </InnerCarousel>
      </Box>
    </Flex>
  );
};

export default Carousel;
