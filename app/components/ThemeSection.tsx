"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react"; // 1. Import useEffect
import { motion, AnimatePresence } from "framer-motion";

const themeData = [
  {
    id: "0",
    type: "theme",
    iconSrc: "/green-footprint.png",
    alt: "green",
    text: "Open Innovation for a Green Vietnam",
    imageSrc: "/ThemeGreen.png",
  },
  {
    id: "1",
    type: "tech",
    iconSrc: "/smart_toy.png",
    alt: "AI",
    text: "Artificial Intelligence",
    imageSrc: "/ArtificialIntelligence.png",
  },
  {
    id: "2",
    type: "tech",
    iconSrc: "/currency_bitcoin.png",
    alt: "bitcoin",
    text: "Blockchain Technology",
    imageSrc: "/BlockchainTechnology.png",
  },
  {
    id: "3",
    type: "tech",
    iconSrc: "/encrypted.png",
    alt: "encrypted",
    text: "Cybersecurity Technology",
    imageSrc: "/CybersecurityTechnology.png",
  },
];

type ThemeItemProps = {
  item: {
    id: string;
    type: string;
    iconSrc: string;
    alt: string;
    text: string;
    imageSrc: string;
  };
  selectedId: string;
  setSelectedId: (id: string) => void;
};

const ThemeItem: React.FC<ThemeItemProps> = ({
  item,
  selectedId,
  setSelectedId,
}) => (
  <div className="flex flex-row items-center gap-11 my-auto max-md:border-[1px] max-md:border-[#374151] max-md:rounded-lg max-md:p-4">
    <Image
      className="w-[30px] h-[30px]"
      src={item.iconSrc}
      alt={item.alt}
      width={20}
      height={20}
    />
    <div
      className={`drop-shadow-container hover:cursor-pointer hover:text-color-gradient ${
        selectedId === item.id ? "drop-shadow-text" : ""
      }`}
      onClick={() => setSelectedId(item.id)}
    >
      <div
        className={`text-[1.5rem] font-semibold ${
          selectedId === item.id
            ? item.id === "0"
              ? "text-[#91DAAE]"
              : "text-color-gradient"
            : "text-white"
        }`}
      >
        {item.text}
      </div>
    </div>
  </div>
);

export const ThemeSection = () => {
  const [selectedId, setSelectedId] = useState("0");

  // Add useEffect to automate the animation
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedId((prevId) => {
        const nextId = (parseInt(prevId, 10) + 1) % themeData.length;
        return nextId.toString();
      });
    }, 5000); // Change item every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this runs only once on mount

  const selectedItem = themeData.find((item) => item.id === selectedId);

  return (
    <div className="md:px-20 md:pb-[20px] w-full max-md:px-6 max-md:pt-[30px]">
      <div className="md:grid md:grid-cols-10 w-full md:pt-[80px]">
        <div className="md:col-span-5 w-full h-full">
          <div className="drop-shadow-container">
            <h1 className="text-green-color-gradient md:text-6xl pb-4 max-md:text-3xl font-bold drop-shadow-green-text">
              Our Theme
            </h1>
          </div>

          <ThemeItem
            item={themeData[0]}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />

          <div className="drop-shadow-container mt-8">
            <h1 className="text-color-gradient md:text-6xl max-md:text-3xl font-bold drop-shadow-text">
              Our Tech Focus
            </h1>
          </div>
          <h3 className="md:mt-4 text-lg text-white font-medium max-md:mt-[16px]">
            Participants are encouraged to explore and leverage any technology
            of their choice, including but not limited to:
          </h3>

          <div className="grid grid-rows-3 md:mt-[25px] md:gap-[20px] max-md:mt-[25px] max-md:gap-[10px]">
            {themeData
              .filter((item) => item.type === "tech")
              .map((item) => (
                <ThemeItem
                  key={item.id}
                  item={item}
                  selectedId={selectedId}
                  setSelectedId={setSelectedId}
                />
              ))}
          </div>
        </div>

        <div className="md:col-span-5 object-cover max-md:hidden md:w-[28rem] ml-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedItem?.id || "default"}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                className="object-cover rounded-[2rem]"
                src={selectedItem?.imageSrc || "/ThemeGreen.png"}
                alt={selectedItem?.alt || "theme"}
                width={1000}
                height={1000}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="md:py-[20px] mt-[30px]">
        <span className="text-white text-lg max-md:text-center md:text-justify md:text-xl font-medium">
          These technologies will be used to develop innovative solutions to
          address social challenges within Vietnam. The specific social issues
          related to{" "}
          <span className="font-bold text-color-gradient">
            Sustainable Development Goals (SDGs)
          </span>{" "}
          will be revealed at the start of Round 1. Teams will be challenged to
          create solutions that are not only technologically sound but also
          practical and scalable in real-world scenarios.
        </span>
      </div>
    </div>
  );
};