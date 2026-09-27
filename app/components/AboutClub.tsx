"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import "../css/AboutClub.css";
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

// Đã cập nhật lại toàn bộ mã màu cũ sang Palette 2026
const statsData = [
  {
    value: 80,
    label: "Active Club Members",
    color: "text-[#e85102]", // Cam
    suffix: "+",
  },
  {
    value: 40,
    label: "Academic & Industry Partners",
    color: "text-color-gradient", // Gradient Đỏ Cam
    suffix: "+",
    isFeatured: true,
  },
  { value: 50, label: "Club Projects", color: "text-[#bf0701]", suffix: "+" }, // Đỏ
  {
    value: 5,
    label: "Best Club Of Semester",
    color: "text-[#e85102]", // Cam
    suffix: "",
  },
  {
    value: 300,
    label: "Fund Raised For Projects (VND)",
    color: "text-color-gradient", // Gradient Đỏ Cam
    suffix: "M+",
    isFeatured: true,
  },
  {
    value: 7000,
    label: "Social Media Followings",
    color: "text-[#eb7c30]", // Cam sáng
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

  const activitiesSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 140 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 md:px-0">
      {/* --- UNIFIED "WHO ARE WE" SECTION --- */}
      <div className="w-full flex flex-col md:flex-row items-start justify-start md:gap-[60px] md:px-20 max-md:mt-8">
        <div className="w-full md:w-[45vw]">
          <h1 className="text-color-gradient text-center md:text-left text-[1.75rem] md:text-[2rem] font-semibold drop-shadow-text mb-8 max-md:mb-4">
            Competition Organizer
          </h1>

          {/* CẬP NHẬT UI: Fix lỗi mù màu, chuyển sang Trắng + Cam, thêm tracking-tight để chữ cứng cáp hơn */}
          <h1 className="text-white drop-shadow-container text-4xl md:text-[4rem] text-center md:text-left font-black uppercase md:mb-[2.25rem] mb-[0.75rem] tracking-tight">
            <span className="text-[#e85102]">Fin</span>Tech Club
          </h1>

          <p className="text-gray-300 leading-relaxed md:text-justify text-center text-lg md:text-xl font-medium md:text-[1.25rem]">
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

        {/* Image and Core Activities */}
        <div className="md:w-[40vw]">
          <Image
            className="max-md:hidden w-full object-cover rounded-3xl border border-white/5 shadow-[0_10px_40px_rgba(191,7,1,0.2)]"
            src="https://d2uq10394z5icp.cloudfront.net/home/assets/IntroPhoto-ODay2026A.jpg"
            alt="Intro Photo - Orientation Day"
            width={1000}
            height={1000}
            priority
          />
          <div className="mt-6 flex flex-col items-center md:items-start">
            <p className="text-white text-[1.75rem] md:text-[1.5rem] font-semibold text-center md:text-left drop-shadow-text">
              Our Core <span className="text-color-gradient">Activities</span>
            </p>

            <div className="grid md:grid-cols-4 grid-cols-2 gap-4 md:gap-3 mt-4 w-full">
              {coreActivities.map((activity) => (
                <div
                  key={activity}
                  className="px-2 py-3 text-center text-white font-medium text-base md:text-sm rounded-xl border border-[#e85102]/60 bg-gradient-to-br from-[#bf0701]/30 to-[#1a0505]/80 backdrop-blur-sm shadow-[0_4px_15px_rgba(232,81,2,0.15)] hover:from-[#bf0701]/60 hover:to-[#e85102]/40 hover:border-[#eb7c30] hover:shadow-[0_8px_25px_rgba(232,81,2,0.4)] hover:-translate-y-1 transition-all duration-300 cursor-default"
                >
                  {activity}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- UNIFIED IMAGES ROW --- */}
      <div className="hidden md:flex flex-row justify-between items-center w-full h-48 md:h-64 my-4 md:my-12 md:px-20 gap-4">
        <Image
          src="https://d2uq10394z5icp.cloudfront.net/global/Mascot+-+M%E1%BA%B7t+tr%C6%B0%E1%BB%9Bc.svg"
          alt="Bear Mascot"
          width={1000}
          height={200}
          priority
          className="rounded-2xl object-cover h-full w-[20vw] border border-white/5 shadow-lg"
        />
        <Image
          src="https://d2uq10394z5icp.cloudfront.net/home/assets/IntroPhoto-Picnic2026A.jpg"
          alt="Intro Photo - Picnic"
          width={1000}
          height={200}
          priority
          className="rounded-2xl object-cover h-full w-[27vw] border border-white/5 shadow-lg"
        />
        <Image
          src="https://d2uq10394z5icp.cloudfront.net/home/assets/IntroPhoto-ClubDay2026A.jpg"
          alt="Intro Photo - Club Day"
          width={1000}
          height={200}
          priority
          className="rounded-2xl object-cover h-full w-[35vw] border border-white/5 shadow-lg"
        />
      </div>

      {/* --- UNIFIED STATISTICS SECTION --- */}
      <h1 className="text-[1.75rem] md:text-6xl font-semibold text-center text-white md:py-2 max-md:mt-8 drop-shadow-text">
        Our <span className="text-color-gradient">Key Metrics</span>
      </h1>

      <div
        ref={ref}
        className="grid md:grid-cols-3 grid-cols-1 md:px-[10vw] mt-[20px] md:mt-[40px] gap-y-6 md:gap-y-16 w-full justify-items-center"
      >
        {statsData.map((stat) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center justify-start h-full px-2 text-center w-full ${
              stat.isFeatured
                ? // CẬP NHẬT UI: Viền phân cách chuyển sang màu viền Đỏ (#bf0701) với opacity 30%
                  "md:border-r md:border-l border-[#bf0701]/30 py-4 md:py-[42px]"
                : ""
            }`}
          >
            <span
              className={`${stat.color} ${
                stat.isFeatured
                  ? "md:text-6xl text-4xl"
                  : "md:text-5xl text-4xl"
              } font-bold drop-shadow-container`}
            >
              <CountUp start={0} end={inView ? stat.value : 0} duration={4}>
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
              {stat.suffix}
            </span>
            <span className="text-lg md:text-xl font-medium text-gray-300 md:mt-[24px] mt-2 md:mb-0 mb-[10px]">
              {stat.label}
            </span>
            {/* Đường gạch ngang ở Mobile cũng đổi sang màu viền Đỏ mờ */}
            <div className="h-[1px] w-[40vw] bg-gradient-to-r from-transparent via-[#bf0701]/50 to-transparent block md:hidden mt-4" />
          </div>
        ))}
      </div>

      {/* --- PREVIOUS ACTIVITIES SECTION --- */}
      <div className="w-full md:px-20 mt-12">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={titleVariants}
          transition={{ duration: 1.3 }}
        >
          <h1 className="text-[1.75rem] md:text-6xl font-semibold text-center text-white max-md:mb-[24px] md:mb-[48px] drop-shadow-text">
            Our <span className="text-color-gradient">Previous Activities</span>
          </h1>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 grid-flow-row gap-6">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={titleVariants}
            transition={{ duration: 1.3, delay: 0.5 }}
          >
            <Image
              src="/activities_1.png"
              alt="RMIT Business Plan Competition 2023"
              width={4000}
              height={4000}
              className="rounded-2xl border border-white/5 shadow-lg object-cover"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            animate={controls}
            variants={titleVariants}
            transition={{ duration: 1.3, delay: 1.4 }}
          >
            <Image
              src="/activities_4.png"
              alt="RMIT The FinTech Forum 2024"
              width={4000}
              height={4000}
              className="rounded-2xl border border-white/5 shadow-lg object-cover"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            animate={controls}
            variants={titleVariants}
            transition={{ duration: 1.3, delay: 1.1 }}
          >
            <Image
              src="/clubactivities_3.png"
              alt="RMIT Hack-A-Venture 2024"
              width={4000}
              height={4000}
              className="rounded-2xl border border-white/5 shadow-lg object-cover"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={titleVariants}
            transition={{ duration: 1.3, delay: 0.8 }}
          >
            <Image
              src="/activities_2.png"
              alt="RMIT Hack-A-Venture 2025"
              width={4000}
              height={4000}
              className="rounded-2xl border border-white/5 shadow-lg object-cover"
            />
          </motion.div>
        </div>

        {/* Mobile Slider */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={titleVariants}
          transition={{ duration: 1.3 }}
          className="md:hidden"
        >
          <div className="w-full pb-8">
            <Slider {...activitiesSettings}>
              <div className="px-2">
                <Image
                  src="/activities_1.png"
                  alt="About FinTech Club 1"
                  width={4000}
                  height={4000}
                  className="rounded-xl object-cover h-[250px]"
                />
              </div>
              <div className="px-2">
                <Image
                  src="/activities_2.png"
                  alt="About FinTech Club 2"
                  width={4000}
                  height={4000}
                  className="rounded-xl object-cover h-[250px]"
                />
              </div>
              <div className="px-2">
                <Image
                  src="/clubactivities_3.png"
                  alt="About FinTech Club 3"
                  width={4000}
                  height={4000}
                  className="rounded-xl object-cover h-[250px]"
                />
              </div>
              <div className="px-2">
                <Image
                  src="/activities_4.png"
                  alt="About FinTech Club 4"
                  width={4000}
                  height={4000}
                  className="rounded-xl object-cover h-[250px]"
                />
              </div>
            </Slider>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
