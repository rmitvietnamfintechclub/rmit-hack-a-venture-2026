"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface MentorInfo {
  name: string;
  title: string;
  image_path: string;
}

const mentorsList: MentorInfo[] = [
  {
    name: "Ha Nguyen",
    title: "Director Information Security @Techcombank",
    image_path: "HaNguyen.png",
  },
  {
    name: "Tu Nguyen",
    title: "CEO & Co-founder @Kyons",
    image_path: "TuNguyen.png",
  },
  {
    name: "Au Nguyen",
    title: "Business Advisor @Startups",
    image_path: "AuNguyen.png",
  },
  {
    name: "George Nguyen",
    title: "Co-founder @10XLAB | Investor @Legal3 Venture Studio",
    image_path: "GeorgeNguyen.png",
  },
  {
    name: "Manroe Tran",
    title: "Senior Manager @Tiki",
    image_path: "ManroeTran.png",
  },
  {
    name: "Duc Nguyen",
    title: "CEO @Gaian Network",
    image_path: "DucNguyen.png",
  },
  {
    name: "Tony Nguyen",
    title: "Product Owner @VnDirect",
    image_path: "TonyNguyen.png",
  },
  {
    name: "Quynh Nguyen",
    title: "Deputy Director & Director of Training Programs @CBS",
    image_path: "QuynhNguyen.png",
  },
];

const MentorCard = ({ data }: { data: MentorInfo }) => {
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
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={controls}
      variants={{
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
      }}
      className="w-full h-full"
    >
      <div className="flex flex-col h-full bg-[#080303] border border-white/10 border-t-[#e85102] border-t-[3px] md:border-t-4 rounded-xl md:rounded-2xl overflow-hidden group hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(232,81,2,0.15)] hover:border-white/20 transition-all duration-300 relative">
        
        {/* Dấu cộng công nghệ (Tech Decor) ở các góc - Ẩn trên Mobile cho đỡ rối */}
        <div className="hidden md:block absolute top-2 left-2 text-[#bf0701] opacity-50 text-xs font-light">
          +
        </div>
        <div className="hidden md:block absolute top-2 right-2 text-[#bf0701] opacity-50 text-xs font-light">
          +
        </div>

        {/* Cụm Hình ảnh (Avatar) */}
        {/* FIX MOBILE: Giảm padding px-4 pt-6 thay vì px-6 pt-8 */}
        <div className="px-4 pt-6 pb-4 md:px-6 md:pt-8 flex justify-center relative">
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-24 md:h-24 bg-[#e85102] rounded-full blur-[30px] md:blur-[40px] opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>

          {/* FIX MOBILE: Thu nhỏ size Avatar từ w-32 h-32 xuống w-20 h-20 */}
          <div className="relative w-20 h-20 md:w-40 md:h-40 rounded-full p-[3px] md:p-1 bg-gradient-to-br from-[#bf0701] to-[#e85102] group-hover:rotate-180 transition-transform duration-700 shadow-lg">
            <div className="w-full h-full rounded-full overflow-hidden bg-gray-900 group-hover:-rotate-180 transition-transform duration-700">
              <Image
                src={`/mentors/${data.image_path}`}
                alt={data.name}
                className="w-full h-full object-cover object-top transition-all duration-500"
                width={200}
                height={200}
              />
            </div>
          </div>

          {/* Label "Mentor" */}
          <div className="absolute bottom-1 md:bottom-2 bg-gradient-to-r from-[#bf0701] to-[#e85102] text-white text-[8px] md:text-[10px] font-black px-2 md:px-3 py-0.5 md:py-1 rounded-full uppercase tracking-widest shadow-md">
            Mentor
          </div>
        </div>

        {/* Cụm Thông tin (Info) */}
        {/* FIX MOBILE: Giảm padding pb-6 */}
        <div className="flex flex-col flex-grow items-center text-center px-2 pb-6 md:px-4 md:pb-8 relative z-10">
          {/* FIX MOBILE: Giảm size tên (text-[15px]) */}
          <h3 className="text-[15px] md:text-xl font-bold text-white mb-1 md:mb-2 group-hover:text-[#e85102] transition-colors duration-300">
            {data.name}
          </h3>

          {/* FIX MOBILE: Giảm size chức danh (text-[10px]) và line-clamp để thẻ đều nhau */}
          <p className="text-[10px] md:text-sm text-gray-400 font-medium leading-[1.4] md:leading-relaxed line-clamp-3 md:line-clamp-none">
            {data.title.split("@")[0]}
            {data.title.includes("@") && (
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e85102] to-[#ffb09e]">
                <br className="md:hidden"/> {/* Ép tên công ty xuống dòng trên mobile cho dễ nhìn */}
                @{data.title.split("@")[1]}
              </span>
            )}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const MentorSection = () => {
  return (
    <div className="pb-12 md:pb-20 px-6 md:px-20 w-full mx-auto relative">
      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-[300px] md:w-[500px] h-[200px] md:h-[300px] bg-[#e85102] rounded-full blur-[150px] md:blur-[200px] opacity-10 pointer-events-none -z-10"></div>

      {/* Tiêu đề & Phụ đề */}
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-4xl md:text-6xl text-white font-bold mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          <span className="drop-shadow-text">Hack-A-Venture</span> <br className="md:hidden" />
          <span className="text-color-gradient drop-shadow-[0_0_20px_rgba(232,81,2,0.8)]">
            Mentors
          </span>
        </h1>

        {/* FIX MOBILE: Dùng text-center và nới lỏng leading */}
        <p className="text-gray-400 text-[14px] md:text-base font-medium max-w-4xl mx-auto mt-4 md:mt-6 leading-[1.6] md:leading-relaxed">
          We’re excited to introduce our competition mentors, who will provide
          hands-on guidance for teams that successfully enter Round 02/03. The
          list of mentors is growing and will be updated further.
        </p>
      </div>

      {/* Lưới Danh sách Cố vấn */}
      {/* Cấu trúc Grid đã rất ổn, giữ nguyên */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        {mentorsList.map((mentor, key) => (
          <div
            key={key}
            // Mobile: 2 cột (gap-4) -> Sm: 2 cột -> Md: 3 cột -> Lg: 4 cột
            className="w-[calc(50%-8px)] sm:w-[calc(50%-12px)] md:w-[calc(33.333%-22px)] lg:w-[calc(25%-24px)]"
          >
            <MentorCard data={mentor} />
          </div>
        ))}
      </div>
    </div>
  );
};