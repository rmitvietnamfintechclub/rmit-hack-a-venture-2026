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
      <div className="flex flex-col h-full bg-[#080303] border border-white/10 border-t-[#e85102] border-t-4 rounded-2xl overflow-hidden group hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(232,81,2,0.15)] hover:border-white/20 transition-all duration-300 relative">
        {/* Dấu cộng công nghệ (Tech Decor) ở các góc */}
        <div className="absolute top-2 left-2 text-[#bf0701] opacity-50 text-xs font-light">
          +
        </div>
        <div className="absolute top-2 right-2 text-[#bf0701] opacity-50 text-xs font-light">
          +
        </div>

        {/* Cụm Hình ảnh (Avatar) - Nổi bật, bo tròn và tách biệt với viền thẻ */}
        <div className="px-6 pt-8 pb-4 flex justify-center relative">
          {/* Hiệu ứng nhịp thở đằng sau ảnh */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#e85102] rounded-full blur-[40px] opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>

          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-br from-[#bf0701] to-[#e85102] group-hover:rotate-180 transition-transform duration-700 shadow-lg">
            {/* Ảnh nằm trong một khung tròn */}
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

          {/* Label "Mentor" nhỏ đè lên ảnh */}
          <div className="absolute bottom-2 bg-gradient-to-r from-[#bf0701] to-[#e85102] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
            Mentor
          </div>
        </div>

        {/* Cụm Thông tin (Info) */}
        <div className="flex flex-col flex-grow items-center text-center px-4 pb-8 relative z-10">
          <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-[#e85102] transition-colors duration-300">
            {data.name}
          </h3>

          {/* Phân tách chức danh và tên công ty để làm nổi bật tên cty (sau chữ @) */}
          <p className="text-xs md:text-sm text-gray-400 font-medium leading-relaxed">
            {data.title.split("@")[0]}
            {data.title.includes("@") && (
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e85102] to-[#ffb09e]">
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
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-[#e85102] rounded-full blur-[200px] opacity-10 pointer-events-none -z-10"></div>

      {/* Tiêu đề & Phụ đề */}
      <div className="text-center mb-12 md:mb-16">
        <h1 className="max-md:text-4xl md:text-6xl text-white font-bold drop-shadow-text mb-4">
          Hack-A-Venture <span className="text-color-gradient">Mentors</span>
        </h1>

        {/* Câu Subtitle chính xác từ Slide của bạn */}
        <p className="text-gray-400 text-sm md:text-base font-medium max-w-4xl mx-auto mt-6 leading-relaxed">
          We’re excited to introduce our competition mentors, who will provide
          hands-on guidance for teams that successfully enter Round 02/03. The
          list of mentors is growing and will be updated further.
        </p>
      </div>

      {/* Lưới Danh sách Cố vấn (Grid tự động căn giữa) */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        {mentorsList.map((mentor, key) => (
          <div
            key={key}
            className="w-full max-w-[280px] sm:max-w-none sm:w-[calc(50%-12px)] md:w-[calc(33.333%-22px)] lg:w-[calc(25%-24px)]"
          >
            <MentorCard data={mentor} />
          </div>
        ))}
      </div>
    </div>
  );
};
