"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AcademicMentorInfo {
  name: string;
  title: string;
  image_path: string;
}

const academicMentorsData: AcademicMentorInfo[] = [
  {
    name: "Assoc. Prof. Huy Pham",
    title: "RMIT Lecturer in Finance / RMIT FinTech-Crypto Hub Founder",
    image_path: "HuyPham.png",
  },
  {
    name: "Dr. Minh Nguyen",
    title: "RMIT Lecturer in Digital Economy",
    image_path: "MinhNguyen.png",
  },
  {
    name: "Dr. Minh Vu",
    title: "RMIT Lecturer in Information Technology",
    image_path: "MinhVu.png",
  },
  {
    name: "Dr. Hoang Van",
    title: "RMIT Lecturer in Information Technology",
    image_path: "HoangVan.png",
  },
];

const AcademicMentorCard = ({
  data,
  index,
}: {
  data: AcademicMentorInfo;
  index: number;
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
      className="w-full h-full"
    >
      <div className="flex flex-col sm:flex-row h-full bg-[#0a0202]/80 backdrop-blur-sm border border-white/5 border-l-[6px] border-l-[#bf0701] rounded-2xl overflow-hidden group hover:border-l-[#e85102] hover:bg-[#140505] hover:shadow-[0_10px_30px_rgba(232,81,2,0.15)] transition-all duration-300">
        <div className="w-full sm:w-[160px] md:w-[180px] h-[220px] sm:h-auto relative overflow-hidden bg-gray-900 shrink-0">
          <Image
            src={`/mentors/${data.image_path}`}
            alt={data.name}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
            width={300}
            height={400}
          />
          {/* Lớp màng mờ mỏng màu Đỏ gradient để hòa trộn ảnh với thẻ */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0202] via-transparent to-transparent sm:bg-gradient-to-r opacity-80 mix-blend-multiply group-hover:opacity-40 transition-opacity duration-500"></div>
        </div>

        {/* Phần Thông tin (Bên phải) */}
        <div className="flex flex-col justify-center flex-grow p-6 sm:p-8 relative">
          {/* Watermark Logo hoặc Icon mờ ở Background (Tùy chọn) */}
          <div className="absolute right-4 bottom-4 text-[60px] font-black text-white/5 pointer-events-none select-none italic tracking-tighter group-hover:text-white/10 transition-colors duration-500">
            RMIT
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 relative z-10">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 group-hover:from-[#ffb09e] group-hover:to-[#e85102] transition-all duration-300">
              {data.name}
            </span>
          </h3>

          <p className="text-sm text-gray-400 font-medium leading-relaxed relative z-10 max-w-[90%]">
            {data.title}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const AcademicMentor = () => {
  return (
    <div className="w-full mx-auto relative">
      {/* Background Decor để tách biệt section */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#bf0701] rounded-full blur-[180px] opacity-10 pointer-events-none -z-10 -translate-y-1/2"></div>

      {/* Tiêu đề & Phụ đề */}
      <div className="text-center mb-12 md:mb-16">
        <h1 className="max-md:text-4xl md:text-6xl text-white font-bold drop-shadow-text mb-4">
          Hack-A-Venture{" "}
          <span className="text-color-gradient"> Academic Mentors</span>
        </h1>
        <p className="text-gray-400 text-sm md:text-base font-medium max-w-4xl mx-auto mt-6 leading-relaxed">
          These Academic Mentors provide advisory for The Hack-A-Venture Organizing Committee, on matters such as Problem Statement Theme, Marking Rubrics, Round 01/02/03 requirements, organization, partner referrals, and event communication.
        </p>
      </div>

      {/* Lưới Danh sách Cố vấn Học thuật (Bento Grid 2x2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-6 md:px-20">
        {academicMentorsData.map((mentor, index) => (
          <AcademicMentorCard key={mentor.name} data={mentor} index={index} />
        ))}
      </div>
    </div>
  );
};
