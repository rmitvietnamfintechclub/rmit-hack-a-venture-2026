"use client";
import Image from "next/image";
import React, { useState } from "react";
import clsx from "clsx";
import { IconSpeakerphone } from "@tabler/icons-react";

// --- Types ---
interface MentorInfo {
  name: string;
  title: string;
  company: string;
  image_path: string;
}

const allMentors = {
  round2: [
    {
      name: "Hai Anh Gwen",
      title: "Product Management Expert",
      company: "One Mount",
      image_path: "HaiAnhGwen-Round2.png",
    },
    {
      name: "Manroe Tran",
      title: "Solution Expert",
      company: "Techcombank",
      image_path: "ManroeTran-Round2.png",
    },
    {
      name: "Tran Xuan Manh",
      title: "Product Designer | Scrum Master",
      company: "BIDV",
      image_path: "TranXuanManh-Round2.png",
    },
    {
      name: "Dai Truong",
      title: "APAC & Global Program Manager",
      company: "Movement Labs",
      image_path: "DaiTruong-Round2.png",
    },
    {
      name: "Sang Do",
      title: "Product Lead",
      company: "Stably",
      image_path: "SangDo-Round2.png",
    },
  ],
  round3: [
    {
      name: "Khang Nguyen",
      title: "Management Trainee | Business Analyst",
      company: "Avery Dennison",
      image_path: "KhangNguyen-Round3.png",
    },
    {
      name: "Nguyen Trong Nghia",
      title: "Creative Designer",
      company: "Vodafone Business",
      image_path: "NguyenTrongNghia-Round3.png",
    },
    {
      name: "Louis Nguyen",
      title: "Community Manager",
      company: "Chainlink Labs",
      image_path: "LouisNguyen-Round3.png",
    },
    {
      name: "Tuan Pham",
      title: "Co-Founder",
      company: "VertZéro",
      image_path: "TuanPham-Round3.png",
    },
    {
      name: "Chiem Tri Quang",
      title: "AI Expert",
      company: "Bosch Global Software Technologies Vietnam",
      image_path: "ChiemQuangTri-Round3.png",
    },
    {
      name: "Darryl Han",
      title: "Chief of Staff",
      company: "Fly Fairly",
      image_path: "DarrylHan-Round3.png",
    },
    {
      name: "Tien Nguyen",
      title: "Software Engineer",
      company: "Google",
      image_path: "TienNguyen-Round3.png",
    },
    {
      name: "Phuc Pham",
      title: "Senior Product Designer",
      company: "ONUS",
      image_path: "PhucPham-Round3.png",
    },
    {
      name: "Hai Anh Gwen",
      title: "Product Management Expert",
      company: "One Mount",
      image_path: "HaiAnhGwen-Round2.png",
    },
    {
      name: "Manroe Tran",
      title: "Solution Expert",
      company: "Techcombank",
      image_path: "ManroeTran-Round2.png",
    },
    {
      name: "Tran Xuan Manh",
      title: "Product Designer | Scrum Master",
      company: "BIDV",
      image_path: "TranXuanManh-Round2.png",
    },
    {
      name: "Dai Truong",
      title: "APAC & Global Program Manager",
      company: "Movement Labs",
      image_path: "DaiTruong-Round2.png",
    },
    {
      name: "Sang Do",
      title: "Product Lead",
      company: "Stably",
      image_path: "SangDo-Round2.png",
    },
  ],
};

const MentorItem = (props: MentorInfo & { className?: string }) => {
  const { name, title, company, image_path, className } = props;

  return (
    <div className={clsx("relative group h-full", className)}>
      {/* --- Tech Borders Animation --- */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-green-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-green-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>

      {/* --- Card Content --- */}
      <div className="flex flex-col h-full bg-gray-900/90 p-4 text-center backdrop-blur-sm transition-all duration-300 group-hover:bg-gray-800 rounded-lg border border-gray-800 group-hover:border-gray-700 shadow-xl">
        <div className="relative mb-4 mx-auto w-full max-w-[200px]">
          {/* Image Container with Clip Path */}
          <div className="relative w-full aspect-square">
            <Image
              src={`/mentors/${image_path}`}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              width={200}
              height={200}
              style={{
                clipPath: "polygon(0 20px, 20px 0, 100% 0, 100% 100%, 0 100%)",
              }}
            />
          </div>
          {/* Gradient Line under image - Converted to Style */}
          <div
            className="absolute bottom-0 left-0 h-[2px] w-full opacity-75 group-hover:opacity-100 group-hover:animate-pulse"
            style={{
              background:
                "linear-gradient(to right, transparent, #4ade80, transparent)",
            }}
          ></div>
        </div>

        <div className="flex flex-col flex-grow items-center justify-start">
          <h3 className="text-lg font-bold mb-1 text-green-color-gradient uppercase tracking-wide">
            {name}
          </h3>
          <p className="text-sm text-yellow-500 font-semibold mb-2">
            {title} | {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export const MentorSection = () => {
  const [activeRound, setActiveRound] = useState(2);

  const renderContent = () => {
    const currentMentors =
      activeRound === 2 ? allMentors.round2 : allMentors.round3;
    const isRound2 = activeRound === 2;

    if (currentMentors && currentMentors.length > 0) {
      return (
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {currentMentors.map((mentor, key) => (
            <MentorItem
              key={key}
              name={mentor.name}
              title={mentor.title}
              company={mentor.company}
              image_path={mentor.image_path}
              className={clsx(
                "w-full sm:w-[calc(50%-1.5rem)] min-w-[200px]",

                isRound2
                  ? 
                    "md:w-[calc(33.33%-1.5rem)] lg:w-[calc(30%-1.5rem)]"
                  :
                    "md:w-[calc(33.33%-1.5rem)] lg:w-[calc(20%-1.6rem)]"
              )}
            />
          ))}
        </div>
      );
    } else {
      // Empty State
      return (
        <div
          className="relative h-48 md:h-64 p-px rounded-lg w-full mx-auto"
          style={{
            background: "linear-gradient(to bottom, #F37D12, #FDE309)",
          }}
        >
          <div
            className="flex flex-col items-center justify-center w-full h-full rounded-[7px] text-center px-4 shadow-2xl"
            style={{
              background: "linear-gradient(to bottom, #10382C, #0A1B15)",
            }}
          >
            <IconSpeakerphone
              size={65}
              className="max-md:w-[50px] text-yellow-400 max-md:mb-2 md:mb-4 animate-pulse"
            />
            <h3 className="max-md:text-2xl md:text-3xl font-bold tracking-wider uppercase text-color-gradient drop-shadow-sm">
              Mentors Incoming
            </h3>
            <p className="mt-3 max-md:text-sm md:text-lg font-medium text-gray-400 max-w-lg">
              We are finalizing the list of industry experts for Round{" "}
              {activeRound}. Stay tuned for the reveal!
            </p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="py-12 md:py-20 px-6 md:px-16 w-full relative overflow-hidden">
      {/* Background Radial Gradient */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(20, 83, 45, 0.4), transparent, transparent)",
        }}
      ></div>

      <div className="relative z-10">
        <h1 className="max-md:text-4xl md:text-6xl text-center text-white font-semibold mb-8 drop-shadow-text">
          Hack-A-Venture <span className="text-color-gradient">Mentors</span>
        </h1>

        {/* Tab Navigation */}
        <div className="flex justify-center items-center gap-4 md:gap-6 mb-10 md:mb-16">
          {[2, 3].map((round) => (
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
                "py-2 px-6 md:px-8 rounded-full text-sm md:text-lg font-bold tracking-wide transition-all duration-300 border",
                activeRound === round
                  ? "text-black border-transparent shadow-[0_0_15px_rgba(243,125,18,0.5)] transform scale-105"
                  : "bg-gray-900/60 text-gray-400 border-gray-700 hover:border-gray-500 hover:text-white backdrop-blur-md",
              )}
            >
              Round {round}
            </button>
          ))}
        </div>

        {/* Content Container */}
        <div className="container mx-auto w-full animate-fadeIn">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};