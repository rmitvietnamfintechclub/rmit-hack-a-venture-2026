"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const DURATION = 0.15;
const STAGGER = 0.015;

export const HeroSection = () => {
  const gradientStyle = {
    background: "linear-gradient(to bottom, #F37D12, #FDE309)",
  };

  return (
    <>
      <div className="max-md:hidden grid grid-cols-2 items-start mb-12 md:px-20">
        <div className="justify-center mx-auto md:w-full md:mt-20">
          <div className="mx-auto">
            <div className="text-[3.5rem] mb-[16px] drop-shadow-container">
              <motion.h1
                initial="initial"
                whileHover="hovered"
                className="overflow-hidden relative w-fit text-white font-bold drop-shadow-text"
                style={{
                  lineHeight: "0.9",
                }}
                transition={{
                  staggerChildren: 0.01,
                }}
              >
                <FlipText>RMIT 2025</FlipText>
              </motion.h1>

              <motion.h1
                initial="initial"
                whileHover="hovered"
                className="overflow-hidden relative w-fit"
                style={{
                  lineHeight: "0.9",
                }}
                transition={{
                  staggerChildren: 0.01,
                }}
              >
                <div className="text-[#FDE309] font-bold drop-shadow-text">
                  <FlipText>Hack-A-Venture</FlipText>
                </div>
              </motion.h1>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="w-full lg:w-[490px] text-white text-xl font-medium text-justify">
                Organized by RMIT Vietnam FinTech Club, <span className="font-bold text-color-gradient">Hack-A-Venture</span> is a
                hackathon-style innovation competition for{" "}
                <span className="font-bold text-color-gradient">
                  Business
                </span>{" "}
                and{" "}
                <span className="font-bold text-color-gradient">
                  Technology
                </span>{" "}
                students nationwide, encouraging them to leverage technologies
                to solve Vietnam's pressing social challenge!
              </div>
            </motion.h1>

            <div className="mt-[40px] flex justify-start gap-4">
              {/* Desktop Button 1 */}
              <button 
                className="w-[14vw] h-[48px] rounded-[12px] justify-items-center flex justify-center items-center text-black font-semibold font-poppins"
                style={gradientStyle}
              >
                <a href="https://bit.ly/RMITHack-A-Venture2025Handbook" target="_blank" className="no-underline">
                  See Handbook
                </a>
              </button>

              {/* Desktop Button 2 */}
              <button 
                className="w-[14vw] h-[48px] rounded-[12px] justify-items-center flex justify-center items-center text-black font-semibold font-poppins"
                style={gradientStyle}
              >
                {/* <Button /> */}
                <a href="https://forms.gle/RCp2kr5zheyp2Gq2A" target="_blank">
                  Register Now
                </a>
                <Image
                  src={"/Arrow.png"}
                  alt="arrow"
                  width={1000}
                  height={1000}
                  className="ml-[5px] w-[20px] h-auto -rotate-45"
                />
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-[40px]">
          <Image
            src={"/graphic.png"}
            alt="HAV Graphic"
            width={1000}
            height={1000}
            className="w-[50vw] h-auto"
          />
        </div>
      </div>

      <div className="md:hidden px-6">
        <div className="mb-[16px] text-[2.25rem] justify-center text-center">
          <h1 className="text-white drop-shadow-text font-extrabold mt-[40px]">
            RMIT 2025
          </h1>
          <h1 className="text-color-gradient drop-shadow-text font-extrabold mt-[10px] md:mt-[20px]">
            Hack-A-Venture
          </h1>
        </div>

        <div className="text-white text-lg mb-[16px] font-medium text-center mt-[24px]">
          Organized by RMIT Vietnam FinTech Club, <span className="font-bold text-color-gradient">Hack-A-Venture</span> is a
          hackathon-style innovation competition for{" "}
          <span className="font-bold text-color-gradient">
            Business
          </span>{" "}
          and{" "}
          <span className="font-bold text-color-gradient">
            Technology
          </span>{" "}
          students nationwide, encouraging them to leverage technologies to
          solve Vietnam's pressing social challenge!
        </div>

        <div className="flex w-full gap-5 justify-center items-center">
          {/* Mobile Button 1 */}
          <button 
            className="w-full h-[48px] rounded-[12px] justify-items-center flex justify-center items-center text-[#000000] font-semibold font-poppins"
            style={gradientStyle}
          >
            <a href="https://bit.ly/RMITHack-A-Venture2025Handbook" target="_blank" className="no-underline">
              See Handbook
            </a>
          </button>

          {/* Mobile Button 2 */}
          <button 
            className="w-full h-[48px] rounded-[12px] justify-items-center flex justify-center items-center text-[#000000] font-semibold font-poppins"
            style={gradientStyle}
          >
            {/* <Button /> */}
            <a href="https://forms.gle/RCp2kr5zheyp2Gq2A" target="_blank">
              Register Now
            </a>
            <Image
              src={"/Arrow.png"}
              alt="arrow"
              width={1000}
              height={1000}
              className="ml-[5px] w-[15px] h-auto -rotate-45"
            />
          </button>
        </div>
      </div>
    </>
  );
};

const FlipText = ({ children }: { children: string }) => {
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
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: index * STAGGER,
            }}
            className="inline-block"
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
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: index * STAGGER,
            }}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </div>
    </>
  );
};