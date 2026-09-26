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

// Data is now separated from presentation, making it easy to manage.
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
    color: "text-[#F37D12]",
    suffix: "+",
  },
  {
    value: 40,
    label: "Academic & Industry Partners",
    color: "text-color-gradient",
    suffix: "+",
    isFeatured: true,
  },
  { value: 50, label: "Club Projects", color: "text-[#FDE309]", suffix: "+" },
  {
    value: 5,
    label: "Best Club Of Semester",
    color: "text-[#F37D12]",
    suffix: "X",
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
    color: "text-[#FDE309]",
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
      <div className="w-full flex flex-col md:flex-row items-center justify-start md:gap-[60px] md:px-20 max-md:mt-8">
        <div className="w-full md:w-[45vw]">
          <h1 className="text-color-gradient text-center md:text-left text-[1.75rem] md:text-[2rem] font-semibold drop-shadow-text mb-8 max-md:mb-4">
            Competition Organizer
          </h1>
          <h1 className="text-[#2C305F] drop-shadow-club-text text-4xl md:text-[4rem] text-center md:text-left font-black uppercase md:mb-[2rem] mb-[0.75rem]">
            <span className="text-[#DCB968]">Fin</span>Tech Club
          </h1>
          <h1 className="text-white drop-shadow-text text-3xl md:text-[4rem] text-center md:text-left font-black uppercase md:mb-[1.5rem] mb-[0.75rem]">
            Who are we?
          </h1>
          <p className="text-white leading-relaxed md:text-justify text-center text-lg md:text-xl font-medium md:text-[1.25rem]">
            We are the first ever student-led Financial Technology initiative in
            Vietnam. Founded in early 2020, RMIT FinTech Club aims to unite
            students across diverse degree programs and offer valuable insights
            into the dynamic realm of Financial Technology. Through a wide range
            of initiatives, we empower our members with the necessary skills,
            mindset, and confidence to engage in the fast-growing FinTech
            industry.
          </p>
        </div>

        {/* Image and Core Activities */}
        <div className="md:w-[40vw]">
          <Image
            className="max-md:hidden w-full object-cover rounded-3xl"
            src="https://d2uq10394z5icp.cloudfront.net/home/assets/IntroPhoto-ODay.png"
            alt="Intro Photo - Orientation Day"
            width={1000}
            height={1000}
            priority
          />
          <div className="mt-4 flex flex-col items-center md:items-start">
            <p className="text-color-gradient text-[1.75rem] md:text-[1.5rem] font-semibold text-center md:text-left">
              Our Core Activities
            </p>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-6 md:gap-4 mt-2 w-full">
              {coreActivities.map((activity) => (
                <div
                  key={activity}
                  style={{
                    background: "linear-gradient(to bottom, #F37D12, #FDE309)",
                  }}
                  className="px-2 py-3 text-center text-black text-base md:text-sm"
                >
                  {activity}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- UNIFIED IMAGES ROW --- */}
      <div className="md:flex hidden flex-row justify-between items-center w-full h-fit my-4 md:my-8 md:px-20">
        <Image
          src="https://d2uq10394z5icp.cloudfront.net/global/Mascot+-+M%E1%BA%B7t+tr%C6%B0%E1%BB%9Bc.svg"
          alt="Bear Mascot"
          width={1000}
          height={200}
          priority
          className="rounded-xl object-cover w-[20vw]"
        />
        <Image
          src="https://d2uq10394z5icp.cloudfront.net/home/assets/IntroPhoto-EOSTrip.png"
          alt="Intro Photo - EOS Trip"
          width={1000}
          height={200}
          priority
          className="rounded-xl object-cover w-[27vw]"
        />
        <Image
          src="https://d2uq10394z5icp.cloudfront.net/home/assets/IntroPhoto-ClubDay.png"
          alt="Intro Photo - Club Day"
          width={1000}
          height={200}
          priority
          className="rounded-xl object-cover w-[35vw]"
        />
      </div>

      {/* --- UNIFIED STATISTICS SECTION --- */}

      <h1 className="text-[1.75rem] md:text-6xl font-semibold text-center text-color-gradient md:py-2 max-md:mt-8">
        Our key metrics
      </h1>
      <div
        ref={ref}
        className="grid md:grid-cols-3 grid-cols-1 md:px-[10vw] mt-[20px] md:mt-[40px] gap-y-2 md:gap-y-16 w-full justify-items-center"
      >
        {statsData.map((stat) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center justify-start h-full px-2 text-center w-full ${
              stat.isFeatured
                ? "md:border-r-[1.5px] md:border-l-[1.5px] border-[#91DAAE] py-4 md:py-[42px] drop-shadow-container"
                : ""
            }`}
          >
            <span
              className={`${stat.color} ${
                stat.isFeatured
                  ? "md:text-6xl text-3xl"
                  : "md:text-4xl text-3xl"
              } font-semibold drop-shadow-text`}
            >
              <CountUp start={0} end={inView ? stat.value : 0} duration={5}>
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
              {stat.suffix}
            </span>
            <span className="text-xl font-semibold text-[#9CA3AF] md:mt-[32px] mt-2 md:mb-0 mb-[10px]">
              {stat.label}
            </span>
            <hr className="text-[#91DAAE] h-[10px] w-[30vw] block md:hidden" />
          </div>
        ))}
      </div>

      {/* --- PREVIOUS ACTIVITIES SECTION --- */}
      <div className="w-full md:px-20">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={titleVariants}
          transition={{ duration: 1.3 }}
        >
          <h1 className="text-[1.75rem] md:text-6xl font-semibold text-center text-color-gradient max-md:my-[24px] md:my-[48px]">
            Our previous activities
          </h1>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 grid-flow-row gap-4">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={titleVariants}
            transition={{ duration: 1.3, delay: 0.5 }}
          >
            <Image
              src="/activities_1.png"
              alt="About FinTech Club 1"
              width={4000}
              height={4000}
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
              alt="About FinTech Club 2"
              width={4000}
              height={4000}
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
              alt="About FinTech Club 3"
              width={4000}
              height={4000}
              className="rounded-md"
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
              alt="About FinTech Club 4"
              width={4000}
              height={4000}
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
          <div className="w-full">
            <Slider {...activitiesSettings}>
              <div>
                <Image
                  src="/activities_1.png"
                  alt="About FinTech Club 1"
                  width={4000}
                  height={4000}
                />
              </div>
              <div>
                <Image
                  src="/activities_2.png"
                  alt="About FinTech Club 2"
                  width={4000}
                  height={4000}
                />
              </div>
              <div>
                <Image
                  src="/clubactivities_3.png"
                  alt="About FinTech Club 3"
                  width={4000}
                  height={4000}
                />
              </div>
              <div>
                <Image
                  src="/activities_4.png"
                  alt="About FinTech Club 4"
                  width={4000}
                  height={4000}
                />
              </div>
            </Slider>
          </div>
        </motion.div>

        {/* Paragraph */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={titleVariants}
          transition={{ duration: 1.3, delay: 1.8 }}
        >
          <p className="text-lg md:text-xl md:text-justify text-center text-white font-medium max-md:mt-[32px] md:mt-[48px]">
            Through various initiatives such as workshops, events, training
            programs, and competitions like{" "}
            <span className="text-color-gradient font-bold">
              Hack-A-Venture
            </span>
            , the club empowers students to explore the future of financial
            technology and make a meaningful impact in the community.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
