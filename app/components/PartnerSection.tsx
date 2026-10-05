"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IconHeartHandshake } from "@tabler/icons-react";

export const PartnerSection = () => {
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

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="hackaventure-sponsors"
      ref={ref}
      className="w-full flex flex-col items-center mt-16 md:mt-20 md:px-20 px-6"
    >
      {/* --- HEADING SECTION --- */}
      <motion.div animate={controls} initial="hidden" variants={variants}>
        <h1 className="text-4xl md:text-6xl text-center text-white font-bold mb-6 md:mb-12">
          <span className="drop-shadow-text">Hack-A-Venture</span>{" "}
          <span className="text-color-gradient drop-shadow-[0_0_20px_rgba(232,81,2,0.8)]">Sponsors</span>
        </h1>
      </motion.div>

      {/* --- STAY TUNED CONTAINER --- */}
      <motion.div
        animate={controls}
        initial="hidden"
        variants={variants}
        className="w-full relative"
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#bf0701] rounded-full blur-[80px] md:blur-[120px] opacity-15 md:opacity-20 -z-10 animate-pulse"></div>

        {/* Viền Gradient bên ngoài */}
        <div
          className="relative p-[1px] md:p-[2px] rounded-[1.5rem] md:rounded-[2rem] w-full mx-auto shadow-[0_10px_30px_rgba(191,7,1,0.2)] md:shadow-[0_15px_40px_rgba(191,7,1,0.2)] group transition-transform duration-500 hover:scale-[1.02]"
          style={{
            background:
              "linear-gradient(135deg, #0a0202 0%, #bf0701 50%, #e85102 100%)",
          }}
        >
          {/* Box nội dung bên trong */}
          <div
            className="flex flex-col items-center justify-center w-full min-h-[220px] md:min-h-[400px] rounded-[calc(1.5rem-1px)] md:rounded-[calc(2rem-2px)] text-center px-4 py-8 md:px-6 md:py-10"
            style={{
              background: "linear-gradient(to bottom, #140505, #080303)",
            }}
          >
            {/* Cụm Icon */}
            <div className="relative mb-4 md:mb-6">
              <IconHeartHandshake
                stroke={1.2}
                className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] text-[#e85102] relative z-10 drop-shadow-[0_0_15px_rgba(232,81,2,0.5)] group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#bf0701] blur-[20px] md:blur-[30px] opacity-40 z-0 rounded-full"></div>
            </div>

            <h3 className="text-lg md:text-4xl font-black tracking-widest uppercase text-color-gradient drop-shadow-md mb-2 md:mb-4">
              Building a Powerful Network
            </h3>

            <p className="text-gray-300 text-[14px] md:text-lg font-medium max-w-4xl leading-[1.6] md:leading-relaxed px-2">
              We are actively collaborating with leading enterprises and academic institutions to fuel your innovation. With massive prize pools, our upcoming sponsors are bringing the ultimate resources to reward your breakthrough ideas.
            </p>

            <p className="mt-5 md:mt-8 text-[#bf0701] font-bold text-[11px] md:text-base tracking-[0.3em] uppercase bg-[#bf0701]/10 border border-[#bf0701]/30 px-4 py-1.5 md:px-6 md:py-2 rounded-full animate-pulse">
              Announcing Soon
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};