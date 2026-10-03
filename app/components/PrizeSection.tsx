"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IconTrophy, IconSparkles } from "@tabler/icons-react";

export const PrizeSection = () => {
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div
      ref={ref}
      className="w-full flex flex-col items-center mt-16 md:mt-20 md:px-20 max-md:px-6"
    >
      {/* --- HEADING SECTION --- */}
      <motion.div animate={controls} initial="hidden" variants={variants}>
        <h1 className="max-md:text-4xl md:text-6xl text-center text-white font-bold drop-shadow-text mb-8 md:mb-12">
          Hack-A-Venture <span className="text-color-gradient">Prizes</span>
        </h1>
      </motion.div>

      {/* --- STAY TUNED CONTAINER --- */}
      <motion.div 
        animate={controls} 
        initial="hidden" 
        variants={variants}
        className="w-full relative"
      >
        {/* Hào quang phát sáng chìm phía sau */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#e85102] rounded-full blur-[100px] opacity-20 -z-10 animate-pulse"></div>

        {/* Viền Gradient bên ngoài */}
        <div className="relative p-[2px] rounded-[2rem] w-full mx-auto shadow-[0_15px_40px_rgba(191,7,1,0.2)] group transition-transform duration-500 hover:scale-[1.02]"
             style={{ background: "linear-gradient(135deg, #bf0701 0%, #e85102 50%, #0a0202 100%)" }}
        >
          {/* Box nội dung bên trong */}
          <div className="flex flex-col items-center justify-center w-full min-h-[300px] md:min-h-[400px] rounded-[calc(2rem-2px)] text-center px-6 py-10"
               style={{ background: "linear-gradient(to bottom, #140505, #080303)" }}
          >
            {/* Cụm Icon */}
            <div className="relative mb-6">
              <IconTrophy size={80} stroke={1.2} className="text-[#e85102] relative z-10 drop-shadow-[0_0_15px_rgba(232,81,2,0.5)]" />
              <IconSparkles size={40} className="text-yellow-400 absolute -top-4 -right-6 animate-pulse" />
              {/* Bóng sáng phía sau Icon */}
              <div className="absolute inset-0 bg-[#e85102] blur-[30px] opacity-40 z-0 rounded-full"></div>
            </div>
            
            <h3 className="text-2xl md:text-4xl font-black tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#e85102] to-[#ffb09e] drop-shadow-md mb-4">
              Awaiting the Champions
            </h3>
            
            <p className="text-gray-300 text-sm md:text-lg font-medium max-w-4xl leading-relaxed">
              We are finalizing a massive prize pool for the ultimate innovators. 
            </p>
            
            <p className="mt-6 md:mt-8 text-[#e85102] font-bold text-sm md:text-base tracking-[0.3em] uppercase bg-[#e85102]/10 border border-[#e85102]/30 px-6 py-2 rounded-full animate-pulse">
              Unveiling Soon
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};