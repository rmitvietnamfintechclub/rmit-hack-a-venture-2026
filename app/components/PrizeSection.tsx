"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  IconTrophy,
  IconMedal,
  IconAward,
  IconStar,
  IconCheck,
} from "@tabler/icons-react";

export const PrizeSection = () => {
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const FeatureListItem = ({ text }: { text: string }) => (
    <li className="flex items-start gap-3 mt-3 text-gray-300 text-sm md:text-base leading-snug">
      <IconCheck size={20} className="text-[#e85102] shrink-0 mt-[2px]" />
      <span>{text}</span>
    </li>
  );

  return (
    <section
      ref={ref}
      id="hackaventure-prizes"
      className="w-full flex flex-col items-center mt-20 md:mt-24 md:px-20 px-4 mb-20"
    >
      {/* --- HEADING SECTION --- */}
      <motion.div
        animate={controls}
        initial="hidden"
        variants={itemVariants}
        className="flex flex-col items-center w-full mb-10"
      >
        <h1 className="text-4xl md:text-6xl text-center text-white font-bold mb-6">
          <span className="drop-shadow-text">Hack-A-Venture</span>{" "}
          <span className="text-color-gradient drop-shadow-[0_0_20px_rgba(232,81,2,0.8)]">
            Exclusive Prizes
          </span>
        </h1>

        {/* Banner Tổng Giải Thưởng (Wow Factor) */}
        <div className="inline-flex items-center gap-2 px-3 md:px-6 py-3 rounded-full bg-gradient-to-r from-[#FFD700]/10 via-[#e85102]/20 to-[#bf0701]/10 border border-[#e85102]/40 text-white shadow-[0_0_20px_rgba(232,81,2,0.3)] backdrop-blur-sm animate-pulse">
          <IconStar size={20} className="text-[#FFD700]" />
          <span className="text-sm md:text-lg font-medium tracking-normal md:tracking-wide">
            Total Prize Pool:
          </span>
          <span className="text-[#FFD700] text-lg md:text-xl font-black ml-1">
            817,291,840 VND
          </span>
          <IconStar size={20} className="text-[#FFD700]" />
        </div>
      </motion.div>

      {/* --- PRIZES GRID --- */}
      <motion.div
        className="w-full flex flex-col items-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* ROW 1: CHAMPION (Bigger, Center) */}
        <motion.div variants={itemVariants} className="w-full mb-8 relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#e85102] rounded-full blur-[100px] opacity-20 -z-10 animate-pulse"></div>
          <div className="p-[2px] rounded-3xl bg-gradient-to-br from-[#FFD700] via-[#e85102] to-[#bf0701] shadow-[0_10px_40px_rgba(232,81,2,0.2)] hover:scale-[1.02] transition-transform duration-500">
            <div className="bg-gradient-to-b from-[#1a0606] to-[#0a0202] rounded-[calc(1.5rem-2px)] p-6 md:p-10 relative overflow-hidden">
              <IconTrophy
                size={160}
                className="absolute -right-10 -bottom-10 text-[#FFD700]/10 rotate-[-15deg] pointer-events-none"
              />

              <div className="flex flex-row gap-6 md:items-center border-b border-white/10 pb-6 md:mb-6 relative z-10">
                <div className="p-3 bg-gradient-to-br from-[#FFD700]/20 to-[#e85102]/20 rounded-2xl w-fit">
                  <IconTrophy
                    size={48}
                    className="text-[#FFD700] drop-shadow-[0_0_15px_rgba(255,215,0,0.8)]"
                  />
                </div>
                <div>
                  <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-wider mb-2">
                    Champion
                  </h3>
                  <p className="text-xl md:text-2xl font-bold text-[#FFD700]">
                    316,258,440 VND
                  </p>
                </div>
              </div>

              <ul className="grid md:grid-cols-2 gap-x-6 relative z-10">
                <FeatureListItem text="04 Got It Vouchers (1,500,000 VND/Member)" />
                <FeatureListItem text="04 Starttrain Business Intelligence Essentials (100%)" />
                <FeatureListItem text="04 Big-O Coding Scholarships (100% for 1 Course)" />
                <FeatureListItem text="04 FES Academy One-course CFA Level 1 (100%)" />
                <FeatureListItem text="04 FES Academy Full-course CFA Level 1 (80%)" />
                <FeatureListItem text="04 ApTech Data & AI Program (90% - 3 Semesters)" />
                <FeatureListItem text="04 UniTrain ACCA or Power BI Scholarships (80%)" />
              </ul>
            </div>
          </div>
        </motion.div>

        {/* ROW 2: 1ST & 2ND RUNNER UP */}
        <div className="w-full grid md:grid-cols-2 gap-8 mb-8">
          {/* 1st Runner Up */}
          <motion.div
            variants={itemVariants}
            className="p-[1.5px] rounded-3xl bg-gradient-to-br from-[#C0C0C0] to-[#e85102] shadow-lg hover:scale-[1.02] transition-transform duration-500"
          >
            <div className="bg-gradient-to-b from-[#140505] to-[#0a0202] rounded-[calc(1.5rem-1.5px)] p-6 h-full relative overflow-hidden">
              <IconMedal
                size={120}
                className="absolute -right-8 -bottom-8 text-[#C0C0C0]/10 rotate-[-15deg] pointer-events-none"
              />
              <div className="flex items-center gap-4 border-b border-white/10 pb-4 mb-4 relative z-10">
                <IconMedal
                  size={40}
                  className="text-[#C0C0C0] drop-shadow-[0_0_10px_rgba(192,192,192,0.6)]"
                />
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-white uppercase">
                    1st Runner-Up
                  </h3>
                  <p className="text-lg font-bold text-[#C0C0C0]">
                    202,454,960 VND
                  </p>
                </div>
              </div>
              <ul className="relative z-10">
                <FeatureListItem text="04 Got It Vouchers (600,000 VND/Member)" />
                <FeatureListItem text="04 Starttrain Excel for Business Analytics (100%)" />
                <FeatureListItem text="04 Big-O Coding Scholarships (75% for 1 Course)" />
                <FeatureListItem text="04 FES Academy One-course CFA Level 1 (100%)" />
                <FeatureListItem text="04 FES Academy Full-course CFA Level 1 (60%)" />
                <FeatureListItem text="04 ApTech Data & AI Program (90% - 2 Semesters)" />
                <FeatureListItem text="04 UniTrain ACCA or Power BI Scholarships (70%)" />
              </ul>
            </div>
          </motion.div>

          {/* 2nd Runner Up */}
          <motion.div
            variants={itemVariants}
            className="p-[1.5px] rounded-3xl bg-gradient-to-br from-[#CD7F32] to-[#bf0701] shadow-lg hover:scale-[1.02] transition-transform duration-500"
          >
            <div className="bg-gradient-to-b from-[#140505] to-[#0a0202] rounded-[calc(1.5rem-1.5px)] p-6 h-full relative overflow-hidden">
              <IconMedal
                size={120}
                className="absolute -right-8 -bottom-8 text-[#CD7F32]/10 rotate-[-15deg] pointer-events-none"
              />
              <div className="flex items-center gap-4 border-b border-white/10 pb-4 mb-4 relative z-10">
                <IconMedal
                  size={40}
                  className="text-[#CD7F32] drop-shadow-[0_0_10px_rgba(205,127,50,0.6)]"
                />
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-white uppercase">
                    2nd Runner-Up
                  </h3>
                  <p className="text-lg font-bold text-[#CD7F32]">
                    121,579,480 VND
                  </p>
                </div>
              </div>
              <ul className="relative z-10">
                <FeatureListItem text="04 Got It Vouchers (400,000 VND/Member)" />
                <FeatureListItem text="04 Big-O Coding Scholarships (50% for 1 Course)" />
                <FeatureListItem text="04 FES Academy One-course CFA Level 1 (100%)" />
                <FeatureListItem text="04 FES Academy Full-course CFA Level 1 (50%)" />
                <FeatureListItem text="04 ApTech Data & AI Program (90% - 1 Semester)" />
                <FeatureListItem text="04 UniTrain ACCA or Power BI Scholarships (60%)" />
              </ul>
            </div>
          </motion.div>
        </div>

        {/* ROW 3: CONSOLIDATION (Centered Full-ish Width) */}
        <div className="w-full mx-auto">
          <motion.div
            variants={itemVariants}
            className="p-[1px] rounded-2xl bg-gradient-to-br from-gray-700 to-[#e85102]/50 hover:scale-[1.02] transition-transform duration-500"
          >
            <div className="bg-[#0a0202] rounded-[calc(1rem-1px)] p-6 md:p-8 h-full relative overflow-hidden">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-2 md:mb-4 relative z-10">
                <IconAward size={32} className="text-[#e85102]" />
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white uppercase">
                    Consolidation (x2)
                  </h3>
                  <p className="text-base font-semibold text-[#e85102]">
                    Total: 176,998,960 VND
                  </p>
                </div>
              </div>
              <ul className="grid md:grid-cols-2 gap-x-6 relative z-10">
                <FeatureListItem text="04 FES Academy One-course CFA Level 1 (100%)" />
                <FeatureListItem text="04 FES Academy Full-course CFA Level 1 (30%)" />
                <FeatureListItem text="04 ApTech Data & AI Program (90% - 1 Semester)" />
                <FeatureListItem text="04 UniTrain ACCA or Power BI Scholarships (50%)" />
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
