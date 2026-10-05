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
    title: "Blockchain",
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
    <section className="w-full flex flex-col items-center my-16 md:my-20 px-6 md:px-20 relative">
      {/* Background Glow */}
      <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 w-[300px] h-[300px] bg-[#bf0701] rounded-full blur-[150px] opacity-10 pointer-events-none -z-10"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="w-full flex flex-col items-center gap-16 md:gap-20"
      >
        {/* =========================================
            KHỐI 1: THE THEME
            ========================================= */}
        <div className="w-full flex flex-col items-center">
          <motion.div
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl text-center text-white font-bold mb-8 md:mb-12"
          >
            <span className="drop-shadow-text">Hack-A-Venture</span>{" "}
            <span className="text-color-gradient drop-shadow-[0_0_20px_rgba(232,81,2,0.8)]">Theme</span>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full">
            <div className="relative w-full rounded-[2rem] overflow-hidden border border-[#bf0701]/30 bg-gradient-to-br from-[#140505]/90 to-[#0a0202]/90 backdrop-blur-xl p-8 md:p-12 shadow-[0_15px_40px_rgba(191,7,1,0.2)] group transition-all duration-500 hover:shadow-[0_20px_50px_rgba(232,81,2,0.25)] hover:border-[#e85102]/50 max-md:shadow-[0_20px_50px_rgba(232,81,2,0.25)] max-md:border-[#e85102]/50">
              <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-center text-center md:text-left">
                <div className="w-[80px] min-w-[80px] h-[80px] md:w-[100px] md:min-w-[100px] md:h-[100px] bg-gradient-to-br from-[#2a0b0b] to-[#140505] rounded-full border border-[#bf0701]/40 shadow-inner group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(232,81,2,0.4)] max-md:shadow-[0_0_20px_rgba(232,81,2,0.4)] transition-all duration-500 flex items-center justify-center">
                  <Image
                    src="/sustainable-finance.png"
                    alt="Theme Icon"
                    width={80}
                    height={80}
                    className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                  />
                </div>

                {/* Text Container */}
                <div className="flex-1 flex flex-col justify-center">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-9 md:leading-normal lg:leading-relaxed drop-shadow-md">
                    Open Innovation for a Resilient and Sustainable Financial
                    System in Vietnam
                  </h1>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =========================================
            KHỐI 2: TECH FOCUS
            ========================================= */}
        <div className="w-full flex flex-col items-center">
          <motion.div
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl text-center text-white font-bold mb-6"
          >
            <span className="drop-shadow-text">Technology</span>{" "}
            <span className="text-color-gradient drop-shadow-[0_0_20px_rgba(232,81,2,0.8)]">
              Focus
            </span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-[15px] md:text-lg font-medium text-center max-w-2xl mb-10 px-2 leading-[1.6]"
          >
            Participants are encouraged to explore and leverage any technology
            of their choice, including but not limited to:
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full">
            {techData.map((tech) => (
              <motion.div
                key={tech.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center justify-start text-center p-5 md:p-8 rounded-3xl bg-gradient-to-b from-[#140505] to-[#0a0202] border border-[#bf0701]/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-[#e85102]/60 hover:shadow-[0_15px_40px_rgba(232,81,2,0.2)] max-md:border-[#e85102]/60 max-md:shadow-[0_15px_40px_rgba(232,81,2,0.2)] group transition-all duration-300"
              >
                <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] mb-5 rounded-2xl bg-[#0a0202] border border-[#bf0701]/30 flex items-center justify-center group-hover:bg-[#bf0701]/10 max-md:bg-[#bf0701]/10 group-hover:scale-110 transition-all duration-300">
                  <div className="drop-shadow-[0_0_10px_rgba(232,81,2,0.5)] max-md:drop-shadow-[0_0_15px_rgba(232,81,2,0.8)] group-hover:drop-shadow-[0_0_15px_rgba(232,81,2,0.8)] transition-all duration-300">
                    {tech.icon}
                  </div>
                </div>

                {/* Text Wrapper (Thu nhỏ font xíu để không rớt dòng vô duyên) */}
                <h3 className="text-sm md:text-lg font-bold text-gray-200 group-hover:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#e85102] group-hover:to-[#ffb09e] transition-all duration-300 leading-snug">
                  {tech.title}
                </h3>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="w-full mt-8">
            <p className="text-gray-300 text-[15px] md:text-lg font-medium text-center md:text-justify leading-[1.7] md:leading-relaxed">
              These technologies will be used to develop products or solutions
              that contribute to{" "}
              <span className="font-bold text-color-gradient text-[16px] md:text-xl">
                specific challenges in the Financial System of Vietnam
              </span>
              , while aligning with relevant{" "}
              <span className="font-bold text-color-gradient text-[16px] md:text-xl">
                ESG (Environmental, Social, Governance) standards
              </span>
              . Specific challenges will be revealed at the start of Round 1.
              Teams are expected to create solutions that are not only
              technologically advanced but also highly feasible and impactful in
              the real market.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
