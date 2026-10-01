"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const WhoSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const swipeVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const slideVariants = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="md:px-20 md:mt-[10px] max-md:px-6" ref={ref}>
      <div className="max-md:text-3xl md:text-6xl max-md:pb-6 text-center text-white font-semibold drop-shadow-text">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={slideVariants}
          transition={{ duration: 1.3, delay: 0.5 }}
          className="text-color-gradient inline-block md:leading-[5rem]"
        >
          Who can join&nbsp;
        </motion.div>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={swipeVariants}
          transition={{ duration: 1.3, delay: 0.5 }}
          className="inline-block"
        >
          Hack-A-Venture?
        </motion.div>
      </div>

      <div className="grid md:grid-cols-5 max-md:grid-cols-2 max-md:grid-flow-row md:gap-10 max-md:gap-6 md:mt-[48px] justify-items-center">
        {Array.from({ length: 5 }).map((_, index) => {
          const isLastItem = index === 4;

          return (
            <div
              key={index}
              className={
                isLastItem
                  ? "max-md:col-span-2 flex justify-center w-full" // On mobile, span 2 cols and center
                  : "w-full"
              }
            >
              <div className={`w-full ${isLastItem ? "max-md:w-1/2" : ""}`}>
                <motion.div
                  initial="hidden"
                  animate={controls}
                  variants={swipeVariants}
                  transition={{ duration: 1.3, delay: 0.5 + index * 0.2 }}
                  className="p-1 border-[0.25rem] border-dashed border-white rounded-3xl w-full"
                >
                  <Image
                    src={`/whoSection${index + 1}.png`}
                    alt="who"
                    width={5000}
                    height={5000}
                    className="rounded-lg w-full h-auto p-2"
                  />
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={swipeVariants}
        transition={{ duration: 1.3, delay: 1.8 }}
        className="w-full flex justify-center mt-8 md:mt-12"
      >
        <p className="text-lg md:text-xl font-medium text-center md:text-justify text-gray-300 leading-relaxed">
          Our competition is open to{" "}
          <span className="text-color-gradient font-bold">
            all inspiring students
          </span>{" "}
          who are passionate about driving innovation. While we welcome
          participants from any academic background, our core target audiences
          are the above. If you want to experiment with building technology-driven
          solutions to tackle real-world financial and sustainability
          challenges, this playground is for you.
        </p>
      </motion.div>
    </div>
  );
};
