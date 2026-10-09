"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const DURATION = 0.15;
const STAGGER = 0.015;

export const HeroSection = () => {
  const primaryButtonStyle = {
    background: "linear-gradient(to right, #bf0701, #e85102)",
    boxShadow: "0 4px 20px rgba(232, 81, 2, 0.4)",
    color: "#ffffff",
  };

  const secondaryButtonStyle = {
    background: "linear-gradient(to right, #2a0b0b, #4a0d0d)",
    border: "1px solid #bf0701",
    color: "#ffffff",
  };

  return (
    <>
      <div className="max-md:hidden grid grid-cols-2 gap-8 items-center min-h-[85vh] mb-12 md:pl-20 md:pr-16 relative">
        <div className="absolute top-1/4 left-10 w-[400px] h-[400px] bg-[#e85102] rounded-full blur-[150px] opacity-20 -z-10"></div>

        <div className="justify-center mx-auto md:w-full z-10">
          <div className="mx-auto">
            <div className="text-[3.5rem] mb-[16px] drop-shadow-container">
              {/* DÒNG 1: RMIT 2026 */}
              <motion.h1
                initial="initial"
                whileHover="hovered"
                className="overflow-hidden relative w-fit font-bold drop-shadow-text"
                style={{ lineHeight: "0.9", paddingBottom: "0.1rem" }}
                transition={{ staggerChildren: 0.01 }}
              >
                <FlipText
                  classFront="text-white"
                  classBack="text-color-gradient"
                >
                  RMIT 2026
                </FlipText>
              </motion.h1>

              {/* DÒNG 2: Hack-A-Venture */}
              <motion.h1
                initial="initial"
                whileHover="hovered"
                className="overflow-hidden relative w-fit mt-2 drop-shadow-text"
                style={{ lineHeight: "0.9", paddingBottom: "0.1rem" }}
                transition={{ staggerChildren: 0.01 }}
              >
                <div className="font-bold">
                  <FlipText
                    classFront="text-color-gradient"
                    classBack="text-white"
                  >
                    Hack-A-Venture
                  </FlipText>
                </div>
              </motion.h1>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="w-full lg:w-[490px] text-gray-300 leading-relaxed text-xl font-medium text-justify">
                Organized by RMIT Vietnam FinTech Club,{" "}
                <span className="font-bold text-color-gradient">
                  Hack-A-Venture
                </span>{" "}
                is a hackathon-style innovation competition for{" "}
                <span className="font-bold text-color-gradient">Business</span>{" "}
                and{" "}
                <span className="font-bold text-color-gradient">
                  Technology
                </span>{" "}
                students nationwide, encouraging them to leverage technologies
                to{" "}
                <span className="font-bold text-color-gradient">
                  address real-world challenges in Vietnam’s financial system
                </span>
                .
              </div>
            </motion.h1>

            <div className="mt-[40px] flex justify-start gap-4">
              <button
                className="w-[14vw] h-[48px] rounded-full justify-items-center flex justify-center items-center font-semibold font-poppins transition-transform hover:scale-105"
                style={secondaryButtonStyle}
              >
                <a
                  href="https://canva.link/m8fk2y9xm9lnud9"
                  target="_blank"
                  className="no-underline"
                >
                  See Handbook
                </a>
              </button>

              <button
                className="w-[14vw] h-[48px] rounded-full justify-items-center flex justify-center items-center gap-2 font-semibold font-poppins transition-transform hover:scale-105"
                style={primaryButtonStyle}
              >
                <a href="https://byvn.net/ZMu6" target="_blank">
                  Register Now
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <motion.div className="flex justify-end relative w-full z-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#bf0701] rounded-full blur-[140px] opacity-40 -z-10"></div>
          <Image
            src={"/graphic1.png"}
            alt="HAV Graphic"
            width={1200}
            height={1200}
            className="w-full max-w-[800px] h-auto object-contain xl:scale-110 origin-right"
          />
        </motion.div>
      </div>

      {/* MOBILE VIEW */}
      <div className="md:hidden px-6 relative flex flex-col items-center pb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full flex justify-center mt-4"
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-[#bf0701] rounded-full blur-[80px] opacity-40 -z-10"></div>
          <Image
            src={"/graphic1.png"}
            alt="HAV Graphic"
            width={800}
            height={800}
            className="w-[90%] max-w-[320px] h-auto object-contain"
            priority
          />
        </motion.div>

        {/* Tiêu đề Mobile */}
        <div className="text-center mt-8 mb-4">
          <h1 className="text-white text-4xl drop-shadow-text font-black tracking-tight leading-none mb-1">
            RMIT 2026
          </h1>
          <h1 className="text-color-gradient text-4xl drop-shadow-text font-black tracking-tight leading-none">
            Hack-A-Venture
          </h1>
        </div>

        <div className="text-gray-300 leading-[1.6] text-[15px] font-medium text-center mt-2 px-2 max-w-[400px]">
          Organized by RMIT Vietnam FinTech Club,{" "}
          <span className="font-bold text-color-gradient">Hack-A-Venture</span>{" "}
          is a hackathon-style innovation competition for{" "}
          <span className="font-bold text-white">Business</span> and{" "}
          <span className="font-bold text-white">Technology</span>{" "}
          students nationwide, encouraging them to leverage technologies to{" "}
          <span className="font-bold text-color-gradient">
            address real-world challenges in Vietnam’s financial system
          </span>.
        </div>

        {/* Cụm nút bấm Mobile */}
        <div className="flex flex-col w-full gap-3 justify-center items-center mt-8 max-w-[350px]">
          <button
            className="w-full h-[52px] rounded-full flex justify-center items-center font-bold text-[16px] tracking-wide group"
            style={primaryButtonStyle}
          >
            <a
              href="https://byvn.net/ZMu6"
              target="_blank"
              className="flex items-center gap-2 w-full justify-center"
            >
              Register Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </button>

          <button
            className="w-full h-[52px] rounded-full flex justify-center items-center font-bold text-[16px] tracking-wide"
            style={secondaryButtonStyle}
          >
            <a
              href="https://canva.link/m8fk2y9xm9lnud9"
              target="_blank"
              className="w-full h-full flex items-center justify-center"
            >
              See Handbook
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

const FlipText = ({
  children,
  classFront = "",
  classBack = "",
}: {
  children: string;
  classFront?: string;
  classBack?: string;
}) => {
  const characters = children
    .split("")
    .map((char) => (char === " " ? "\u00A0" : char));
  return (
    <>
      <div>
        {characters.map((char, index) => (
          <motion.span
            key={index}
            variants={{
              initial: { y: 0 },
              hovered: { y: "-110%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: index * STAGGER,
            }}
            style={{ willChange: "transform" }}
            className={`inline-block ${classFront}`}
          >
            {char}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {characters.map((char, index) => (
          <motion.span
            key={index}
            variants={{
              initial: { y: "110%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: index * STAGGER,
            }}
            style={{ willChange: "transform" }}
            className={`inline-block ${classBack}`}
          >
            {char}
          </motion.span>
        ))}
      </div>
    </>
  );
};
