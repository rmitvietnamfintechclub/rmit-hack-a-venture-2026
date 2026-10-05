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
      {/* FIX KHUNG THẺ: Luôn luôn là flex-row (nằm ngang) cho cả Mobile lẫn Desktop */}
      <div className="flex flex-row h-full bg-[#0a0202]/90 backdrop-blur-sm border border-white/5 border-l-[4px] md:border-l-[6px] border-l-[#bf0701] rounded-xl md:rounded-2xl overflow-hidden group hover:border-l-[#e85102] hover:bg-[#140505] hover:shadow-[0_10px_30px_rgba(232,81,2,0.15)] transition-all duration-300">
        
        {/* FIX ẢNH: Ép chiều rộng cứng (w-[110px] cho Mobile, w-[180px] cho Desktop) để giữ tỷ lệ Portrait */}
        <div className="w-[110px] md:w-[180px] shrink-0 relative overflow-hidden bg-gradient-to-b from-[#1a0505] to-[#050101]">
          <Image
            src={`/mentors/${data.image_path}`}
            alt={data.name}
            // Bỏ object-top, dùng object-cover mặc định để khuôn mặt luôn ở trung tâm
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            width={300}
            height={400}
          />
          {/* Màng mờ xử lý lại màu Đỏ đen cho chuẩn Theme */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0202]/50 to-transparent mix-blend-multiply group-hover:opacity-40 transition-opacity duration-500"></div>
        </div>

        {/* PHẦN THÔNG TIN (Bên phải) */}
        <div className="flex flex-col justify-center flex-grow p-4 md:p-8 relative">
          
          {/* Watermark Logo RMIT nằm chìm tinh tế */}
          <div className="absolute right-2 bottom-0 md:right-4 md:bottom-2 text-[40px] md:text-[60px] font-black text-white/5 pointer-events-none select-none italic tracking-tighter group-hover:text-white/10 transition-colors duration-500">
            RMIT
          </div>

          <h3 className="text-base md:text-2xl font-bold text-white mb-1 md:mb-2 relative z-10 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 group-hover:from-[#ffb09e] group-hover:to-[#e85102] transition-all duration-300">
              {data.name}
            </span>
          </h3>

          <p className="text-[11px] md:text-[14px] text-gray-400 font-medium leading-[1.5] md:leading-relaxed relative z-10 max-w-[95%]">
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
      <div className="absolute top-1/2 left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#bf0701] rounded-full blur-[120px] md:blur-[180px] opacity-10 pointer-events-none -z-10 -translate-y-1/2"></div>

      <div className="text-center mb-8 md:mb-16 px-5">
        <h1 className="text-4xl md:text-6xl text-white font-bold mb-3 md:mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          <span className="drop-shadow-text">Hack-A-Venture</span> <br className="md:hidden" />
          <span className="text-color-gradient drop-shadow-[0_0_20px_rgba(232,81,2,0.8)]">
            Academic Mentors
          </span>
        </h1>

        <p className="max-md:hidden text-gray-400 text-[13px] md:text-base font-medium max-w-4xl mx-auto mt-4 md:mt-6 leading-[1.6] md:leading-relaxed text-center px-2">
          These Academic Mentors provide advisory for The Hack-A-Venture
          Organizing Committee, on matters such as Problem Statement Theme,
          Marking Rubrics, Round 01/02/03 requirements, organization, partner
          referrals, and event communication.
        </p>
      </div>

      {/* Lưới Danh sách Cố vấn: 1 cột (Mobile), 2 cột (Desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8 px-6 md:px-20 mx-auto">
        {academicMentorsData.map((mentor, index) => (
          <AcademicMentorCard key={mentor.name} data={mentor} index={index} />
        ))}
      </div>
    </div>
  );
};