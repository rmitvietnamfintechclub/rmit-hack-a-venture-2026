"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IconHeartHandshake, IconSparkles } from "@tabler/icons-react";
import Image from "next/image";

const sponsorsData = {
  gold: [{ name: "Neax", logo: "/sponsors/neax.png" }],
  silver: [{ name: "BigO", logo: "/sponsors/bigo.png" }],
  academic: [
    { name: "UniTrain", logo: "/sponsors/unitrain.png" },
    { name: "Aptech", logo: "/sponsors/aptech.png" },
  ],
  media: [
    { name: "Advertising Vietnam", logo: "/sponsors/advertising-vietnam.png" },
    { name: "Brands Vietnam", logo: "/sponsors/brands-vietnam.png" },
    { name: "Enijobs", logo: "/sponsors/enijobs.png" },
    { name: "YBOX.VN", logo: "/sponsors/ybox.png" },
  ],
};

export const PartnerSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="hackaventure-sponsors"
      ref={ref}
      className="w-full flex flex-col items-center mt-16 md:mt-24 md:px-20 px-4"
    >
      {/* --- HEADING SECTION --- */}
      <motion.div animate={controls} initial="hidden" variants={itemVariants}>
        <h1 className="text-4xl md:text-6xl text-center text-white font-bold mb-12">
          <span className="drop-shadow-text">Hack-A-Venture</span>{" "}
          <span className="text-color-gradient drop-shadow-[0_0_20px_rgba(232,81,2,0.8)]">
            Sponsors
          </span>
        </h1>
      </motion.div>

      <motion.div
        className="w-full flex flex-col items-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* --- GOLD SPONSOR --- */}
        <motion.div
          variants={itemVariants}
          className="w-full flex flex-col items-center mb-16 relative"
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60%] h-full bg-[#FFD700] rounded-full blur-[80px] opacity-10 z-0"></div>
          <div className="flex items-center gap-2 mb-6">
            <IconSparkles className="text-[#FFD700]" size={24} />
            <h3 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFDF00] to-[#D4AF37] uppercase tracking-[0.2em]">
              Gold Sponsor
            </h3>
            <IconSparkles className="text-[#FFD700]" size={24} />
          </div>

          <div className="relative z-10 w-full max-w-3xl p-[2px] rounded-3xl bg-gradient-to-r from-[#FFDF00] via-[#FDB931] to-[#D4AF37] shadow-[0_10px_40px_rgba(255,215,0,0.15)] group transition-transform duration-500 hover:scale-[1.02]">
            <div className="bg-white rounded-[calc(1.5rem-2px)] p-8 md:p-14 flex items-center justify-center min-h-[16rem] md:min-h-[22rem]">
              <Image
                src={sponsorsData.gold[0].logo}
                alt={sponsorsData.gold[0].name}
                width={500}
                height={250}
                className="w-full max-w-[16rem] md:max-w-[24rem] object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </motion.div>

        {/* --- SILVER SPONSOR --- */}
        <motion.div
          variants={itemVariants}
          className="w-full flex flex-col items-center mb-16"
        >
          <h3 className="text-xl md:text-2xl font-bold text-[#E8E8E8] uppercase tracking-[0.2em] mb-6 drop-shadow-md">
            Silver Sponsor
          </h3>
          <div className="relative z-10 w-full max-w-xl p-[2px] rounded-2xl bg-gradient-to-r from-[#C0C0C0] via-[#E8E8E8] to-[#A9A9A9] shadow-[0_8px_30px_rgba(192,192,192,0.1)] group transition-transform duration-500 hover:scale-[1.03]">
            <div className="bg-white rounded-[calc(1rem-2px)] p-6 md:p-10 flex items-center justify-center min-h-[12rem] md:min-h-[16rem]">
              <Image
                src={sponsorsData.silver[0].logo}
                alt={sponsorsData.silver[0].name}
                width={400}
                height={200}
                className="w-full max-w-[12rem] md:max-w-[16rem] object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </motion.div>

        {/* --- ACADEMIC SPONSORS --- */}
        <motion.div
          variants={itemVariants}
          className="w-full flex flex-col items-center mb-16 relative"
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-full bg-[#bf0701] rounded-full blur-[100px] opacity-10 z-0"></div>
          <h3 className="text-lg md:text-xl font-bold text-[#e85102] uppercase tracking-[0.2em] mb-6 relative z-10">
            Academic Sponsors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl relative z-10">
            {sponsorsData.academic.map((sponsor, idx) => (
              <div
                key={idx}
                className="p-[1.5px] rounded-xl bg-gradient-to-br from-[#bf0701] to-[#e85102] group transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="bg-white rounded-[calc(0.75rem-1.5px)] p-6 flex items-center justify-center h-32 md:h-40">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={300}
                    height={150}
                    className="w-full max-w-[10rem] object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* --- MEDIA SPONSORS --- */}
        <motion.div
          variants={itemVariants}
          className="w-full flex flex-col items-center mb-8 md:mb-16"
        >
          <h3 className="text-base md:text-lg font-semibold text-gray-400 uppercase tracking-[0.2em] mb-6">
            Media Sponsors
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-6xl">
            {sponsorsData.media.map((sponsor, idx) => (
              <div
                key={idx}
                className="p-[1px] rounded-lg bg-gradient-to-b from-gray-700 to-gray-900 group transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="bg-white/95 rounded-[calc(0.5rem-1px)] p-4 md:p-6 flex items-center justify-center h-24 md:h-32">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={200}
                    height={100}
                    className="w-full max-w-[7rem] md:max-w-[9rem] object-contain transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* --- STAY TUNED CONTINUOUS UPDATE --- */}
        <motion.div
          variants={itemVariants}
          className="w-full mx-auto mt-4"
        >
          <div className="relative p-[1px] rounded-full bg-gradient-to-r from-transparent via-[#bf0701] to-transparent">
            <div className="bg-[#080303] px-6 py-4 rounded-full flex flex-col md:flex-row items-center justify-center gap-3">
              <div className="flex items-center gap-2">
                <IconHeartHandshake
                  stroke={1.5}
                  className="text-[#e85102] w-5 h-5 md:w-6 md:h-6"
                />
                <span className="text-gray-300 text-sm md:text-base font-medium">
                  We are actively partnering with more organizations.
                </span>
              </div>
              <div className="flex items-center gap-2 mt-2 md:mt-0 bg-[#bf0701]/10 border border-[#bf0701]/30 px-4 py-1.5 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FFD700] animate-pulse"></div>
                <span className="text-[#e85102] font-bold uppercase tracking-[0.15em] text-[10px] md:text-xs">
                  Updating Soon
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
