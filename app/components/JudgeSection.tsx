"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

interface JudgeInfo {
  name: string;
  title: string;
  image_path: string;
}

const judgesList: JudgeInfo[] = [
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
    name: "Dr. Chung Phan",
    title: "RMIT Lecturer & Researcher in Economics",
    image_path: "ChungPhan.png",
  },
  {
    name: "Dr. Diem Vo",
    title: "RMIT Lecturer in Digital Economy",
    image_path: "DiemVo.png",
  },
  {
    name: "Dr. Timothy McBush Hiele",
    title: "RMIT Lecturer in Digital Business",
    image_path: "TimothyHiele.png",
  },
  {
    name: "Dr. Trinh Nguyen",
    title: "RMIT Interim Senior Program Manager in Digital Economy",
    image_path: "TrinhNguyen.png",
  },
  {
    name: "Dr. Tam Le",
    title: "RMIT Lecturer in Digital Economy",
    image_path: "TamLe.png",
  },
  {
    name: "Dr. Trung Nguyen",
    title: "RMIT Lecturer in Finance | CEO @insAI",
    image_path: "TrungNguyen.png",
  },
  {
    name: "Dr. Chi Pham",
    title: "RMIT Lecturer in Business and Technology",
    image_path: "ChiPham.png",
  },
  {
    name: "Dr. Anh Dao",
    title: "RMIT Senior Lecturer in Finance",
    image_path: "AnhDao.png",
  },
  {
    name: "Dr. Tuan Chu",
    title: "RMIT Senior Lecturer in Economics",
    image_path: "TuanChu.png",
  },
];

const JudgeCard = ({ data }: { data: JudgeInfo }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      className="w-full h-full"
    >
      {/* Khung thẻ chính */}
      <div className="flex flex-col h-full bg-[#0a0202] border border-[#bf0701]/20 rounded-3xl overflow-hidden group hover:shadow-[0_10px_30px_rgba(232,81,2,0.25)] hover:border-[#e85102]/60 transition-all duration-500">
        {/* Image Wrapper - CẬP NHẬT UI SPOTLIGHT Ở ĐÂY */}
        <div className="relative w-full aspect-[4/5] overflow-hidden bg-gradient-to-b from-[#1a0505] to-[#050101]">
          {/* Hiệu ứng Hào quang (Spotlight) sau lưng Giám khảo */}
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <div className="w-[80%] h-[80%] bg-gradient-to-tr from-[#bf0701] to-[#e85102] rounded-full blur-[60px] opacity-20 group-hover:opacity-50 transition-opacity duration-700"></div>
          </div>

          <div
            className="absolute inset-0 opacity-[0.03] z-0"
            style={{
              backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          ></div>

          <Image
            src={`/judges/${data.image_path}`}
            alt={data.name}
            className="w-full h-full object-cover object-top relative z-10 transition-transform duration-700 group-hover:scale-105"
            width={400}
            height={500}
          />

          {/* Lớp phủ bóng gradient để hòa viền ảnh vào thẻ văn bản bên dưới */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0a0202] via-[#0a0202]/60 to-transparent z-10"></div>
        </div>

        {/* Info Wrapper */}
        <div className="flex flex-col flex-grow items-center text-center px-4 pb-6 relative z-20 -mt-4">
          {/* Đường gạch ngang phát sáng khi hover */}
          <div className="h-[2px] w-12 bg-[#bf0701]/50 group-hover:w-20 group-hover:bg-[#e85102] transition-all duration-500 mb-4 rounded-full shadow-[0_0_10px_rgba(232,81,2,0)] group-hover:shadow-[0_0_10px_rgba(232,81,2,0.8)]"></div>

          <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#e85102] group-hover:to-[#ffb09e] transition-all duration-300">
            {data.name}
          </h3>

          <p className="text-xs md:text-sm text-gray-400 font-medium leading-snug uppercase tracking-wider">
            {data.title}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const JudgeSection = () => {
  return (
    <div className="py-16 md:py-20 px-6 md:px-20 w-full mx-auto relative">
      {/* Hiệu ứng Background Phát Sáng */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-[#bf0701] rounded-full blur-[150px] opacity-10 pointer-events-none -z-10"></div>

      {/* Tiêu đề & Phụ đề */}
      <div className="text-center mb-12 md:mb-16">
        <h1 className="max-md:text-4xl md:text-6xl text-white font-bold drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] mb-4">
          Hack-A-Venture{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e85102] to-[#bf0701] drop-shadow-[0_0_20px_rgba(232,81,2,0.8)]">
            Judges
          </span>
        </h1>
        <p className="text-gray-400 text-sm md:text-base font-medium max-w-3xl mx-auto mt-6 leading-relaxed">
          The panel of judges combines a balanced expertise between academia and
          industry insights. Please stay tuned for further updates.
        </p>
      </div>

      {/* Lưới Danh sách Giám khảo (Flex Wrap tự động căn giữa cực đẹp) */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        {judgesList.map((judge, key) => (
          <div
            key={key}
            // Căn chỉnh Width linh hoạt: 1 cột (Mobile) -> 2 cột (Sm) -> 3 cột (Md) -> 4 cột (Lg)
            className="w-full max-w-[280px] sm:max-w-none sm:w-[calc(50%-12px)] md:w-[calc(33.333%-22px)] lg:w-[calc(25%-24px)]"
          >
            <JudgeCard data={judge} />
          </div>
        ))}
      </div>
    </div>
  );
};
