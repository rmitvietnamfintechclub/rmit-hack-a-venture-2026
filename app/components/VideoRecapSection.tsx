"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconPlayerPlayFilled } from "@tabler/icons-react";
import Image from "next/image";

const YOUTUBE_VIDEO_ID = "gicvkCaCnZQ";

export const VideoRecapSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSeason, setActiveSeason] = useState<"2025" | "2024">("2025"); // State quản lý Tab

  // Style cho Tab buttons
  const activeTabStyle = {
    background: "linear-gradient(to right, #bf0701, #e85102)",
    boxShadow: "0 4px 15px rgba(232, 81, 2, 0.4)",
    color: "#ffffff",
  };
  const inactiveTabStyle = {
    background: "rgba(20, 5, 5, 0.6)",
    border: "1px solid #bf0701",
    color: "#a1a1aa", // text-gray-400
  };

  return (
    <section className="w-full flex flex-col items-center mt-14 md:mb-12 md:px-20 max-md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-md:text-3xl md:text-5xl lg:text-6xl text-center text-white font-semibold drop-shadow-text mb-4 md:mb-8"
      >
        Hack-A-Venture <span className="text-color-gradient">Highlights</span>
      </motion.div>

      {/* --- TAB SWITCHER --- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex gap-4 mb-6 md:mb-10 bg-[#0a0202] p-2 rounded-full border border-[#840602]/50"
      >
        <button
          onClick={() => setActiveSeason("2024")}
          className="px-8 py-2.5 rounded-full font-semibold transition-all duration-300"
          style={activeSeason === "2024" ? activeTabStyle : inactiveTabStyle}
        >
          Season 2024
        </button>

        <button
          onClick={() => {
            setActiveSeason("2025");
            setIsPlaying(false);
          }}
          className="px-8 py-2.5 rounded-full font-semibold transition-all duration-300"
          style={activeSeason === "2025" ? activeTabStyle : inactiveTabStyle}
        >
          Season 2025
        </button>
      </motion.div>

      {/* --- TAB CONTENT AREA --- */}
      <div className="w-full min-h-[400px]">
        <AnimatePresence mode="wait">
          {/* --- CONTENT 2025 (Chỉ dùng Ảnh) --- */}
          {activeSeason === "2025" && (
            <motion.div
              key="season-2025"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid md:grid-cols-2 gap-6 md:gap-16 items-center"
            >
              {/* Text 2025 */}
              <div className="text-center md:text-left order-2 md:order-1">
                <h3 className="text-2xl font-bold text-white mb-4">
                  The Scale Up:{" "}
                  <span className="text-color-gradient">Bigger & Bolder</span>
                </h3>
                <p className="text-gray-300 text-md md:text-lg font-medium text-justify leading-relaxed">
                  Following our explosive debut,{" "}
                  <span className="text-color-gradient font-bold">
                    Hack-A-Venture 2025
                  </span>{" "}
                  set new records. We expanded our reach, bringing together 358
                  talented students across 94 teams from 32 universities
                  nationwide and beyond. The competition elevated from concept
                  pitches to rigorous prototype building, pushing the boundaries
                  of how technology intersects with real-world business
                  applications.
                </p>
                <p className="text-gray-300 text-md md:text-lg font-medium mt-4 text-justify leading-relaxed">
                  Supported by a massive network of 11 sponsors, 14 industry
                  mentors, and 17 esteemed judges, the 2025 season solidified
                  our position as one of the most anticipated student-led
                  innovation arenas in Vietnam.
                </p>
              </div>

              {/* Image Bento Grid 2025 */}
              <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[90px] md:auto-rows-[110px] gap-2 md:gap-3 order-1 md:order-2 w-full">
                <div className="col-span-2 row-span-2 relative w-full h-full rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(191,7,1,0.2)] group">
                  <Image
                    src="/rewind/group_photo.jpg"
                    fill
                    alt="HAV 2025 Grand Finale"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-[#080303]/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <p className="text-white font-bold text-lg">
                      The Grand Finale
                    </p>
                  </div>
                </div>

                {/* ẢNH 2: Ô vuông nhỏ, góc trên phải */}
                <div className="col-span-1 row-span-1 relative w-full h-full rounded-xl overflow-hidden shadow-md group border border-white/5">
                  <Image
                    src="/rewind/hackathon.jpg"
                    fill
                    alt="HAV 2025 Moment 2"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>

                {/* ẢNH 3: Ô vuông nhỏ, giữa phải */}
                <div className="col-span-1 row-span-1 relative w-full h-full rounded-xl overflow-hidden shadow-md group border border-white/5">
                  <Image
                    src="/rewind/mentor.jpg"
                    fill
                    alt="HAV 2025 Moment 3"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>

                {/* ẢNH 4: Ô vuông nhỏ, góc dưới trái */}
                <div className="col-span-1 row-span-1 relative w-full h-full rounded-xl overflow-hidden shadow-md group border border-white/5">
                  <Image
                    src="/rewind/workshop.jpg"
                    fill
                    alt="HAV 2025 Moment 4"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>

                {/* ẢNH 5: Ô vuông nhỏ, góc dưới giữa */}
                <div className="col-span-1 row-span-1 relative w-full h-full rounded-xl overflow-hidden shadow-md group border border-white/5">
                  <Image
                    src="/rewind/judges.jpg"
                    fill
                    alt="HAV 2025 Moment 5"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>

                {/* ẢNH 6: Góc dưới phải (Desktop: vuông, Mobile: Trải ngang) */}
                <div className="max-md:hidden col-span-1 row-span-1 relative w-full h-full rounded-xl overflow-hidden shadow-[0_5px_20px_rgba(232,81,2,0.15)] group border border-white/5">
                  <Image
                    src="/rewind/champion.jpg"
                    fill
                    alt="HAV 2025 Moment 6"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              </div>
            </motion.div>
          )}

          {/* --- CONTENT 2024 (Dùng Video) --- */}
          {activeSeason === "2024" && (
            <motion.div
              key="season-2024"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid md:grid-cols-2 gap-6 md:gap-16 items-center"
            >
              {/* Text 2024 */}
              <div className="text-center md:text-left order-2 md:order-1">
                <h3 className="text-2xl font-bold text-white mb-4">
                  The Genesis:{" "}
                  <span className="text-color-gradient">
                    Where It All Began
                  </span>
                </h3>
                <p className="text-gray-300 text-md md:text-lg font-medium text-justify leading-relaxed">
                  <span className="text-color-gradient font-bold">
                    Hack-A-Venture 2024
                  </span>{" "}
                  wasn’t just a competition, it was the spark that started it
                  all. Over the two-month journey, more than 80 teams across the
                  country stepped up, with the Top 10 reaching the grand finale.
                  Together, they turned raw, ambitious ideas into technology-driven
                  solutions for a sustainable Vietnam, proving that sharp
                  business acumen and technological innovation can truly go hand
                  in hand.
                </p>

                <p className="text-gray-300 text-md md:text-lg font-medium mt-4 text-justify leading-relaxed">
                  We were honored to have our journey featured on the CafeTek
                  program, as part of{" "}
                  <span className="font-bold text-color-gradient">HTV</span>.
                  This was a proud milestone that validated our core mission to
                  create a playground that nurtures students' innovative spirits
                  and connects them with top industry experts.
                </p>
              </div>

              {/* Video Player 2024 */}
              <div className="relative w-full aspect-video rounded-xl shadow-[0_15px_40px_rgba(191,7,1,0.3)] overflow-hidden order-1 md:order-2 border border-[#840602]/50">
                {!isPlaying ? (
                  <div
                    onClick={() => setIsPlaying(true)}
                    className="w-full h-full cursor-pointer group relative"
                  >
                    <Image
                      src={`https://i.ytimg.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`}
                      fill
                      alt="HAV 2024 Recap Thumbnail"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="bg-[#e85102]/80 backdrop-blur-md p-5 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:bg-[#bf0701] shadow-[0_0_20px_rgba(232,81,2,0.6)]">
                        <IconPlayerPlayFilled
                          size={40}
                          className="text-white ml-1"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                    title="HAV 2024 Recap"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
