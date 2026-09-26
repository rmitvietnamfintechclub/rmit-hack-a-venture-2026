"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const SponsoredPrizeSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const slideVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
  <motion.div
    animate={controls}
    initial="hidden"
    variants={variants}
    transition={{ duration: 1.3, delay: 0.5 }}
    className="w-full px-6 md:px-20"
    ref={ref}
  >
    <h1 className="mt-[30px] md:mt-[50px] text-3xl font-semibold text-white drop-shadow-text md:text-6xl text-center">
      Special Category <span className="text-color-gradient">Awards</span>
    </h1>

    <div className="flex w-full flex-col gap-4 md:gap-8 text-[#FBF6FD] md:flex-row">
      <div className="flex flex-1 flex-col items-center text-center">
        <Image
          src="/MostTechnicallyAdvancedProject.png"
          alt="Most Technically Advanced Project"
          className="h-[250px] w-auto rounded-xl object-contain py-4 mt-4"
          width={200}
          height={150}
        />
        <div className="drop-shadow-container">
          <h3 className="text-2xl font-semibold drop-shadow-text md:text-3xl mb-2">
            Most Technically Advanced Project
          </h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center text-center">
        <Image
          src="/MostMarketPotentialProject-New.png"
          alt="Most Market Potential Project"
          className="h-[250px] w-auto rounded-xl object-contain py-4 mt-4"
          width={200}
          height={150}
        />
        <div className="drop-shadow-container">
          <h3 className="text-2xl font-semibold drop-shadow-text md:text-3xl mb-2 hidden md:block">
            Most Market<br/>Potential Project
          </h3>
          <h3 className="text-2xl font-semibold drop-shadow-text md:text-3xl mb-2 md:hidden block">
            Most Market Potential Project
          </h3>
        </div>
      </div>

	  <div className="flex flex-1 flex-col items-center text-center">
        <Image
          src="/PeopleChoiceAward-New.png"
          alt="People Choice Award"
          className="h-[250px] w-auto rounded-xl object-contain py-4 mt-4"
          width={200}
          height={150}
        />
        <div className="drop-shadow-container">
          <h3 className="text-2xl font-semibold drop-shadow-text md:text-3xl mb-2">
            People Choice Award
          </h3>
        </div>
      </div>
    </div>
  </motion.div>
);
};
