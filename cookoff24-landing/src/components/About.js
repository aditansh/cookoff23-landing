"use client";
import React from "react";
import { useAppContext } from "@/context/appContext";
import { motion } from "framer-motion";
import useMousePosition from "@/utils/useMousePosition";

const About = () => {
  /*these states help manage the size of cursor*/
  // const [isHovered, setIsHovered] = useState(false);
  // const [isHoveredOnSmall, setIsHoveredOnSmall] = useState(false);

  // const [innerHeight, setInnerHeight] = useState(0);
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const size = isHovered ? 400 : isHoveredOnSmall ? 100 : 40;

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollPosition(window.scrollY || window.pageYOffset);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   setInnerHeight(window.innerHeight);
  // }
  // , []);
  const { x, y } = useMousePosition();
  const {
    isHovered,
    setIsHovered,
    isHoveredOnSmall,
    setIsHoveredOnSmall,
    innerHeight,
    setInnerHeight,
    scrollPosition,
    setScrollPosition,
    size,
  } = useAppContext();

  //basically for cursor we need to keep track of it's size, it's mouse position and the scroll position
  return (
    <div className="h-[100vh] w-[100vw] relative  cursor-default ">
      <div className="body px-[13%] md:px-[10%] flex flex-col justify-center items-stretch gap-[8rem] py-16 h-[100vh] text-grey">
      <p className="text-lg font-normal tracking-[7px]">ABOUT EVENT</p>
        <p
          id="proxima"
          className="text-justify text-4xl tracking-wide font-bold leading-relaxed lg:text-2xl lg:tracking-wide lg:font-semibold sm:text-2xl sm:tracking-wide sm:font-semibold"
        >
          Cook off is <span className="text-orange">CodeChef VIT</span>&apos;s
          flagship competitive coding event that tests the coding skills of tech
          participants to develop their competitive coding skills and test their
          abilities. Cook Off 7.0 will be the seventh edition through which we
          hope to broaden the horizons of the participants.
        </p>
      </div>
    </div>
  );
};

export default About;
