"use client";
import Image from "next/image";
import React, { useState } from "react";
import clsx from "clsx";
import { IconSparkles } from "@tabler/icons-react";

interface JudgeInfo {
  name: string;
  title: string;
  image_path: string;
}

const allJudges = {
  round1: [
    {
      name: "Dr. Huy Pham",
      title: "Lecturer, Finance, RMIT Vietnam",
      image_path: "HuyPham-Round1.png",
    },
    {
      name: "Dr. Minh Nguyen",
      title: "Lecturer, Blockchain Enabled Business, RMIT Vietnam",
      image_path: "MinhNguyen-Round1.png",
    },
    {
      name: "Dr. Tam Le",
      title: "Lecturer, Blockchain Enabled Business, RMIT Vietnam",
      image_path: "TamLe-Round1.png",
    },
    {
      name: "Dr. Tuan Chu",
      title: "Associate Program Manager, Undergraduate Business Programs, RMIT Vietnam",
      image_path: "TuanChu-Round1.png",
    },
    {
      name: "Dr. Timothy McBush Hiele",
      title: "Lecturer, Digital Business, RMIT Vietnam",
      image_path: "TimothyHiele-Round1.png",
    },
    {
      name: "Dr. Hieu Thai",
      title: "Lecturer, Blockchain Enabled Business, RMIT Vietnam",
      image_path: "HieuThai-Round1.png",
    },
    {
      name: "Dr. Tri Dang",
      title: "Associate Program Manager, Computing Technologies, RMIT Vietnam",
      image_path: "TriDang-Round1.png",
    },
    {
      name: "Dr. Cherry Narumon Sriratanaviriyakul",
      title: "Lecturer, Entrepreneurship, RMIT Vietnam",
      image_path: "CherryNarumon-Round1.png",
    },
    {
      name: "Dr. Hoang Phan",
      title: "Lecturer, STEM for Sustainable Development, RMIT Vietnam",
      image_path: "HoangPhan-Round1.png",
    },
    {
      name: "Dr. Yen Nguyen",
      title: "Lecturer, Entrepreneurship, RMIT Vietnam",
      image_path: "YenNguyen-Round1.png",
    },
  ],
  round2: [],
  round3: [
    {
      name: "Ms. Tien Tran",
      title: "Corporate Sustainability Manager, PWC Vietnam",
      image_path: "TienTran-Round3.png",
    },
    {
      name: "Mr. Bach Do",
      title: "Principal Product Manager, Vingroup JSC",
      image_path: "BachDo-Round3.png",
    },
    {
      name: "Dr. Khanh Nguyen",
      title: "Co-Founder & CEO of NEAX & HiliosAI",
      image_path: "KhanhNguyen-Round3.png",
    },
    {
      name: "Dr. Tri Dang",
      title: "Associate Program Manager, Computing Technologies, RMIT Vietnam",
      image_path: "TriDang-Round3.png",
    },
    {
      name: "Dr. Hoang Phan",
      title: "Lecturer, STEM for Sustainable Development, RMIT Vietnam",
      image_path: "HoangPhan-Round3.png",
    },
    {
      name: "Dr. Minh Nguyen",
      title: "Lecturer, Blockchain Enabled Business, RMIT Vietnam",
      image_path: "MinhNguyen-Round3.png",
    },
    {
      name: "Dr. Huy Pham",
      title: "Lecturer, Finance, RMIT Vietnam",
      image_path: "HuyPham-Round3.png",
    },
  ],
};

const JudgeItem = (props: JudgeInfo & { className?: string }) => {
  const { name, title, image_path, className } = props;
  return (
    <div className={clsx("relative group", className)}>
      <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-yellow-400 opacity-60 group-hover:opacity-100 transition-all duration-300 z-10"></div>
      <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-yellow-400 opacity-60 group-hover:opacity-100 transition-all duration-300 z-10"></div>
      <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-green-400 opacity-60 group-hover:opacity-100 transition-all duration-300 z-10"></div>
      <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-green-400 opacity-60 group-hover:opacity-100 transition-all duration-300 z-10"></div>

      {/* Card Content */}
      <div className="flex flex-col h-full bg-[#0A0F18] border border-gray-800 group-hover:border-gray-600 transition-all duration-300 overflow-hidden relative rounded-sm shadow-xl">
        
        {/* Image Container */}
        <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-900">
          <Image
            src={`/judges/${image_path}`}
            alt={name}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
            width={400}
            height={500}
          />
          
          <div 
            className="absolute bottom-0 left-0 w-full h-2/5 pointer-events-none"
            style={{ background: "linear-gradient(to top, #0A0F18 10%, transparent)" }}
          ></div>
        </div>

        {/* Info Container */}
        <div className="flex flex-col flex-grow px-3 py-4 text-center bg-[#0A0F18] z-20 relative -mt-2">
          {/* Gradient Line ngăn cách */}
           <div
            className="h-[1px] w-1/2 mx-auto mb-3 opacity-50 group-hover:opacity-100 transition-all duration-300"
            style={{
              background: "linear-gradient(to right, transparent, #FDE309, transparent)",
            }}
          ></div>

          <h3 className="text-lg font-bold mb-1"
          >
             <span className="bg-clip-text text-transparent opacity-100" 
                   style={{ backgroundImage: "linear-gradient(to right, #4ade80, #FDE309)" }}>
                {name}
             </span>
          </h3>
          <p className="text-sm text-gray-400 font-medium leading-snug">{title}</p>
        </div>
      </div>
    </div>
  );
};

export const JudgeSection = () => {
  const [activeRound, setActiveRound] = useState(1);

  const currentJudges =
    activeRound === 1
      ? allJudges.round1
      : activeRound === 2
      ? allJudges.round2
      : allJudges.round3;

  const renderContent = () => {
    if (currentJudges && currentJudges.length > 0) {
      
      const isSevenJudges = currentJudges.length === 7;
      
      return (
        <div className={clsx(
            "w-full gap-6 md:gap-8",
            isSevenJudges 
                ? "flex flex-wrap justify-center" 
                : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5" 
        )}>
          {currentJudges.map((judge, key) => (
            <JudgeItem
              key={key}
              name={judge.name}
              title={judge.title}
              image_path={judge.image_path}
              className={isSevenJudges ? "w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33.333%-1.5rem)] lg:w-[calc(20%-1.5rem)] min-w-[220px]" : ""}
            />
          ))}
        </div>
      );
    } else {
      return (
        <div
          className="relative h-48 md:h-64 p-px rounded-lg w-full mx-auto"
          style={{
            background: "linear-gradient(to bottom, #F37D12, #FDE309)",
          }}
        >
          <div
            className="flex flex-col items-center justify-center w-full h-full rounded-[7px] text-center px-4"
            style={{
              background: "linear-gradient(to bottom, #10382C, #0A1B15)",
            }}
          >
            <IconSparkles
              size={65}
              className="max-md:w-[50px] text-yellow-400 max-md:mb-2 md:mb-4 animate-pulse"
            />
            <h3 className="max-md:text-2xl md:text-3xl font-bold tracking-wider uppercase text-color-gradient">
              Stay Tuned
            </h3>
            <p className="mt-2 max-md:text-lg md:text-xl font-medium text-gray-400">
              The judges for Round {activeRound} will be unveiled shortly.
            </p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="py-8 md:pt-20 px-6 md:px-16 w-full">
      <h1 className="max-md:text-4xl md:text-6xl text-center text-white font-semibold mb-8 drop-shadow-text">
        Hack-A-Venture <span className="text-color-gradient">Judges</span>
      </h1>
      
      {/* Tab Buttons */}
      <div className="flex justify-center items-center gap-4 md:gap-6 mb-10 md:mb-16">
        {[1, 2, 3].map((round) => (
          <button
            key={round}
            onClick={() => setActiveRound(round)}
            style={{
              background:
                activeRound === round
                  ? "linear-gradient(to right, #F37D12, #FDE309)"
                  : undefined,
            }}
            className={clsx(
              "py-2 px-6 md:px-8 rounded-full text-sm md:text-lg font-bold tracking-wide transition-all duration-300 border border-gray-700",
              activeRound === round
                ? "text-black border-transparent shadow-lg transform scale-105"
                : "bg-gray-900/60 text-gray-400 hover:border-gray-500 hover:text-white backdrop-blur-md"
            )}
          >
            Round {round}
          </button>
        ))}
      </div>

      <div className="container mx-auto w-full">{renderContent()}</div>
    </div>
  );
};