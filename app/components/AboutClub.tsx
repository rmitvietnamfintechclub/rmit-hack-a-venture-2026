"use client";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const coreActivities = [
  "Projects",
  "Events",
  "Workshops",
  "Competitions",
  "Training",
  "Networking",
  "Media",
  "Bonding",
];

const statsData = [
  {
    value: 80,
    label: "Active Club Members",
    color: "text-[#e85102]",
    suffix: "+",
  },
  {
    value: 40,
    label: "Academic & Industry Partners",
    color: "text-color-gradient",
    suffix: "+",
    isFeatured: true,
  },
  { value: 50, label: "Club Projects", color: "text-[#bf0701]", suffix: "+" },
  {
    value: 5,
    label: "Best Club Of Semester",
    color: "text-[#e85102]",
    suffix: "",
  },
  {
    value: 300,
    label: "Fund Raised For Projects (VND)",
    color: "text-color-gradient",
    suffix: "M+",
    isFeatured: true,
  },
  {
    value: 7000,
    label: "Social Media Followings",
    color: "text-[#eb7c30]",
    suffix: "+",
  },
];

export const AboutClub = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center md:gap-[60px] md:px-20 px-6 mt-14 md:mt-8">
        {/* NỬA TRÁI: TEXT */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-[#e85102] text-lg md:text-xl font-bold tracking-widest uppercase mb-2">
            Competition Organizer
          </h2>

          <h1 className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] text-5xl md:text-6xl font-black uppercase mb-6 tracking-tight">
            <span className="text-color-gradient">Fin</span>Tech Club
          </h1>

          <p className="text-gray-300 leading-[1.7] md:leading-relaxed text-[15px] md:text-lg font-medium text-center md:text-justify max-w-[450px] md:max-w-none mb-8">
            We are the first-ever student-led Financial Technology initiative in
            Vietnam. Founded in early 2020, RMIT FinTech Club is dedicated to
            bridging the gap between business, finance, and technology. By
            uniting students across diverse disciplines, we create opportunities
            to learn, innovate, and build together through workshops, events,
            training programs, and competitions. Through a wide range of
            initiatives, we empower our members with the necessary skills and
            mindset to shape the future of the fast-growing FinTech industry and
            make a meaningful impact in the community.
          </p>
        </div>

        {/* NỬA PHẢI: IMAGE & CORE ACTIVITIES */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <Image
            className="max-md:hidden w-full object-cover rounded-3xl mb-4 border border-white/5 shadow-[0_10px_40px_rgba(191,7,1,0.2)]"
            src="https://d2uq10394z5icp.cloudfront.net/home/assets/IntroPhoto-ODay2026A.jpg"
            alt="Intro Photo - Orientation Day"
            width={1000}
            height={1000}
            priority
          />

          <div className="w-full max-w-[500px]">
            <h3 className="text-white text-2xl font-bold text-center md:text-left mb-5">
              <span className="drop-shadow-text">Our</span>{" "}
              <span className="text-color-gradient drop-shadow-[0_0_20px_rgba(232,81,2,0.8)]">Core Activities</span>
            </h3>

            {/* LƯỚI HOẠT ĐỘNG: Gọn gàng hơn, không bị lấn chữ trên Mobile */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
              {coreActivities.map((activity) => (
                <div
                  key={activity}
                  className="px-2 py-3 text-center text-white font-semibold text-sm rounded-xl border border-[#bf0701]/40 max-md:border-[#e85102] bg-gradient-to-br from-[#1a0505] to-[#0a0202] shadow-[0_4px_15px_rgba(0,0,0,0.5)] hover:border-[#e85102] transition-colors duration-300"
                >
                  {activity}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          2. IMAGES ROW (DESKTOP ONLY)
          ========================================= */}
      <div className="hidden md:flex flex-row justify-between items-center w-full h-[250px] mt-8 px-20 gap-6">
        <div className="relative w-[20%] h-full rounded-3xl overflow-hidden border border-white/5 shadow-lg group">
          <Image
            src="https://d2uq10394z5icp.cloudfront.net/global/Mascot+-+M%E1%BA%B7t+tr%C6%B0%E1%BB%9Bc.svg"
            alt="Bear Mascot"
            fill
            className="object-cover scale-105"
          />
        </div>
        <div className="relative w-[35%] h-full rounded-3xl overflow-hidden border border-white/5 shadow-lg group">
          <Image
            src="https://d2uq10394z5icp.cloudfront.net/home/assets/IntroPhoto-Picnic2026A.jpg"
            alt="Picnic"
            fill
            className="object-cover scale-105"
          />
        </div>
        <div className="relative w-[40%] h-full rounded-3xl overflow-hidden border border-white/5 shadow-lg group">
          <Image
            src="https://d2uq10394z5icp.cloudfront.net/home/assets/IntroPhoto-ClubDay2026A.jpg"
            alt="Club Day"
            fill
            className="object-cover scale-105"
          />
        </div>
      </div>

      {/* =========================================
          3. STATISTICS SECTION
          ========================================= */}
      <div className="w-full mt-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-6 md:mb-12 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          <span className="drop-shadow-text">Our</span>{" "}
          <span className="text-color-gradient drop-shadow-[0_0_20px_rgba(232,81,2,0.8)]">Key Metrics</span>
        </h2>

        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-4 md:gap-y-16 px-6 md:px-20 max-w-6xl mx-auto"
        >
          {statsData.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center text-center p-4 rounded-2xl ${
                stat.isFeatured
                  ? "bg-gradient-to-b from-[#140505] to-transparent border border-[#bf0701]/20 shadow-[0_10px_30px_rgba(191,7,1,0.1)]"
                  : ""
              }`}
            >
              <div
                className={`${stat.color} text-4xl md:text-6xl font-black drop-shadow-md mb-2`}
              >
                <CountUp start={0} end={inView ? stat.value : 0} duration={3}>
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
                {stat.suffix}
              </div>
              <span className="text-sm md:text-base font-semibold text-gray-400 uppercase tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================
          4. PREVIOUS ACTIVITIES (NO CAROUSEL)
          ========================================= */}
      <div className="w-full mt-12 max-md:mb-4">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={titleVariants}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-6 md:mb-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] px-6">
            <span className="drop-shadow-text">Our</span>{" "}
            <span className="max-md:hidden text-color-gradient drop-shadow-[0_0_20px_rgba(232,81,2,0.8)]">Previous Activities</span>
            <span className="md:hidden text-color-gradient drop-shadow-[0_0_20px_rgba(232,81,2,0.8)]">Activities</span>
          </h2>
        </motion.div>

        <div className="w-full overflow-x-auto pb-8 md:pb-0 hide-scrollbar px-6 md:px-20">
          <div className="flex md:grid md:grid-cols-2 gap-4 md:gap-6 min-w-max md:min-w-0 mx-auto max-w-6xl">
            {[
              "/activities_1.png",
              "/activities_4.png",
              "/clubactivities_3.png",
              "/activities_2.png",
            ].map((src, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.6, delay: index * 0.1 },
                  },
                }}
                className="relative w-[300px] md:w-full aspect-[16/6] rounded-2xl overflow-hidden border border-[#bf0701]/20 shadow-lg group shrink-0"
              >
                <Image
                  src={src}
                  alt={`Activity ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#050101]/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
