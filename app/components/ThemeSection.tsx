"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  IconBrain,
  IconChartInfographic,
  IconCurrencyBitcoin,
  IconNetwork,
} from "@tabler/icons-react";

const techData = [
  {
    id: "tech-1",
    icon: <IconBrain size={42} stroke={1.5} className="text-[#e85102]" />,
    title: "Artificial Intelligence",
  },
  {
    id: "tech-2",
    icon: (
      <IconChartInfographic size={42} stroke={1.5} className="text-[#bf0701]" />
    ),
    title: "Data Analytics",
  },
  {
    id: "tech-3",
    icon: (
      <IconCurrencyBitcoin size={42} stroke={1.5} className="text-[#e85102]" />
    ),
    title: "Blockchain Technology",
  },
  {
    id: "tech-4",
    icon: <IconNetwork size={42} stroke={1.5} className="text-[#bf0701]" />,
    title: "Distributed Systems",
  },
];

export const ThemeSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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
    <div className="md:px-20 w-full max-md:px-6 max-md:pt-[30px] relative my-16 md:my-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full flex flex-col items-center gap-10 md:gap-12"
      >
        {/* --- KHỐI 1: THE THEME --- */}
        <div className="w-full flex flex-col items-center">
          <motion.div
            variants={itemVariants}
            className="max-md:text-4xl md:text-6xl text-center text-white font-bold drop-shadow-text mb-8 md:mb-12"
          >
            Hack-A-Venture <span className="text-color-gradient">Theme</span>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full">
            <div className="relative w-full rounded-3xl overflow-hidden border border-[#bf0701]/40 bg-[#080303]/80 backdrop-blur-md p-6 md:p-10 shadow-[0_0_40px_rgba(191,7,1,0.15)] group transition-all duration-500 hover:shadow-[0_0_60px_rgba(232,81,2,0.25)] hover:border-[#e85102]/60">
              <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start text-center md:text-left">
                {/* Icon Container */}
                <div className="shrink-0 p-4 md:p-5 bg-gradient-to-br from-[#240a0a] to-[#140505] rounded-2xl border border-[#bf0701]/30 shadow-inner group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/sustainable-finance.png"
                    alt="Theme Icon"
                    width={60}
                    height={60}
                    className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                  />
                </div>

                {/* Text Container */}
                <div className="flex-1 flex flex-col justify-center">
                  <h1 className="text-2xl md:text-4xl font-extrabold text-white md:leading-normal drop-shadow-lg">
                    Open Innovation for a Resilient and Sustainable Financial
                    System in Vietnam
                  </h1>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- KHỐI 2: TECH FOCUS --- */}
        <div className="w-full flex flex-col items-center">
          <motion.div
            variants={itemVariants}
            className="max-md:text-4xl md:text-6xl text-center text-white font-bold drop-shadow-text mb-4 md:mb-6 mt-8"
          >
            Hack-A-Venture <span className="text-color-gradient">Technology Focus</span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-lg md:text-xl font-medium text-center max-w-3xl mb-8 md:mb-12 px-4"
          >
            Participants are encouraged to explore and leverage any technology
            of their choice, including but not limited to:
          </motion.p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
            {techData.map((tech) => (
              <motion.div
                key={tech.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center text-center p-6 md:p-8 lg:p-10 rounded-3xl bg-[#0a0202]/90 backdrop-blur-sm border border-[#bf0701]/30 shadow-[0_15px_30px_rgba(0,0,0,0.6)] hover:border-[#e85102] hover:bg-gradient-to-t hover:from-[#bf0701]/10 hover:to-[#0a0202] group"
              >
                {/* Icon Wrapper */}
                <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] mb-6 rounded-[2rem] bg-[#140505] border border-[#bf0701]/30 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(232,81,2,0.4)] transition-all duration-300">
                  <div className="drop-shadow-[0_0_8px_rgba(232,81,2,0.6)]">
                    {tech.icon}
                  </div>
                </div>

                {/* Text Wrapper */}
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-200 group-hover:text-white transition-colors duration-300 leading-tight">
                  {tech.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- KHỐI 3: FOOTER TEXT (ESG) --- */}
        <motion.div variants={itemVariants} className="w-full">
          <p className="text-gray-300 text-lg md:text-xl max-md:text-center md:text-justify font-medium leading-relaxed">
            These technologies will be used to develop products or solutions
            that contribute to{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e85102] to-[#bf0701]">
              specific challenges in the Financial System of Vietnam
            </span>
            , while aligning with relevant{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e85102] to-[#bf0701]">
              ESG (Environmental, Social, Governance) standards
            </span>
            . Specific challenges will be revealed at the start of Round 1.
            Teams are expected to create solutions that are not only
            technologically advanced but also highly feasible and impactful in
            the real market.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};
