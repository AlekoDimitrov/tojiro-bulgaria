import { Box, Flex, Button, ButtonGroup } from "@chakra-ui/react";
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
  const indicators = useRef(null);

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

  const toggleButton = (buttonDirection: any) => {
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
      setRightButton({
        background: "rgb(255, 255, 255)",
        cursor: "pointer",
        pointerEvents: "all",
      });
      setLeftButton({
        background: "rgb(255, 255, 255)",
        cursor: "pointer",
        pointerEvents: "all",
      });
    }
  };

  const updateCarousel = (
    currentChild: any,
    targetChild: any,
    currentIndicator: any,
    targetIndicator: any
  ) => {
    // reassign "current" to target
    currentChild.removeAttribute("id");
    targetChild.id = "current";

    // move to next slide
    setSlide(
      slide === -targetChild.offsetLeft
        ? -targetChild.offsetLeft - 0.00001
        : -targetChild.offsetLeft
    );
    toggleButton("reset");

    // move to target indicator
    currentIndicator.removeAttribute("id");
    targetIndicator.id = "current";

    // if on first/last slide, disable left/right button
    if (targetChild === innerCarousel.current?.["firstChild"]) {
      toggleButton("left");
    } else if (targetChild === innerCarousel.current?.["lastChild"]) {
      toggleButton("right");
    }
  };

  let startDrag: any = null;
  let startPosition: any = null;
  return (
    <Flex w={"100%"} justify={"center"} mt={["", "", "", "10px"]}>
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
          top={"51%"}
          left={0}
          right={0}
          display={["none", "none", "flex", "flex"]}
          zIndex={1}
        >
          <Box
            background={leftButton.background}
            cursor={leftButton.cursor}
            pointerEvents={leftButton.pointerEvents === "none" ? "none" : "all"}
            borderRadius={"50%"}
            ml={"10px"}
            onClick={() => {
              const currentChild =
                innerCarousel.current?.querySelector("#current");
              const prevChild = currentChild.previousSibling;
              const currentIndicator =
                indicators.current.querySelector("#current");
              const prevIndicator = currentIndicator.previousSibling;

              updateCarousel(
                currentChild,
                prevChild,
                currentIndicator,
                prevIndicator
              );
            }}
          >
            <MdOutlineKeyboardArrowLeft size={28} />
          </Box>
          <Box
            background={rightButton.background}
            cursor={rightButton.cursor}
            pointerEvents={
              rightButton.pointerEvents === "none" ? "none" : "all"
            }
            borderRadius={"50%"}
            mr={"10px"}
            onClick={() => {
              const currentChild =
                innerCarousel.current.querySelector("#current");
              const nextChild = currentChild.nextSibling;
              const currentIndicator =
                indicators.current.querySelector("#current");
              const nextIndicator = currentIndicator.nextSibling;

              updateCarousel(
                currentChild,
                nextChild,
                currentIndicator,
                nextIndicator
              );
            }}
          >
            <MdOutlineKeyboardArrowRight size={28} />
          </Box>
        </Flex>
        <InnerCarousel
          ref={innerCarousel}
          display={"flex"}
          w={"fit-content"}
          animate={{ x: slide }}
          drag={"x"}
          onDragStart={() => {
            startDrag = Date.now();
            startPosition = parseInt(
              innerCarousel.current.style.transform.split(/[()px]+/)[1]
            );
          }}
          onDragEnd={() => {
            const endDrag = Date.now() - startDrag;
            const endPosition =
              parseInt(
                innerCarousel.current.style.transform.split(/[()px]+/)[1]
              ) - startPosition;
            const currentChild =
              innerCarousel.current.querySelector("#current");
            const currentIndicator =
              indicators.current.querySelector("#current");

            let targetIndicator = currentIndicator.nextSibling;
            let targetChild = currentChild.nextSibling;

            if (
              ((endDrag < 100 && endPosition < 0) ||
                endPosition < -currentChild.clientWidth / 6) &&
              currentChild.nextSibling !== null
            ) {
              targetChild = currentChild.nextSibling;
              targetIndicator = currentIndicator.nextSibling;
            } else if (
              ((endDrag < 100 && endPosition > 0) ||
                endPosition > currentChild.clientWidth / 6) &&
              currentChild.previousSibling !== null
            ) {
              targetChild = currentChild.previousSibling;
              targetIndicator = currentIndicator.previousSibling;
            } else {
              targetChild = currentChild;
              targetIndicator = currentIndicator;
            }

            updateCarousel(
              currentChild,
              targetChild,
              currentIndicator,
              targetIndicator
            );
          }}
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
        <Flex justify={"center"} mt={"18px"}>
          <ButtonGroup ref={indicators} gap={1} cursor={"default"}>
            {images.map((image, key) => {
              return (
                <Button
                  h={1}
                  size={"xs"}
                  key={key}
                  // set id on first button as current and id as key for identification
                  id={`${key === 0 ? "current" : ""}`}
                  className={key + 1}
                  onClick={() => {
                    const currentChild =
                      innerCarousel.current.querySelector("#current");
                    const targetChild = innerCarousel.current.childNodes[key];
                    const currentIndicator =
                      indicators.current.querySelector("#current");
                    const targetIndicator = indicators.current.childNodes[key];

                    updateCarousel(
                      currentChild,
                      targetChild,
                      currentIndicator,
                      targetIndicator
                    );
                  }}
                ></Button>
              );
            })}
          </ButtonGroup>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Carousel;
