"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { IconPlayerPlayFilled } from "@tabler/icons-react";
import Image from "next/image";

const YOUTUBE_VIDEO_ID = "gicvkCaCnZQ";

export const VideoRecapSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full justify-center mt-0 md:mt-8 md:mb-12 md:px-20 max-md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-md:text-3xl md:text-6xl max-md:pt-4 text-center text-white font-semibold drop-shadow-text"
      >
        <span className="text-color-gradient inline-block md:leading-[5rem]">
          2024 Rewind:&nbsp;
        </span>
        <span className="inline-block">Relive The Highlights</span>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-16 items-center mt-4 md:mt-2">
        {/* --- Left Column: Text Content --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <p className="text-white text-md md:text-lg font-medium text-justify">
            From over 100 teams across the country to a final 10 in the grand
            finale,{" "}
            <span className="text-color-gradient font-bold">
              Hack-A-Venture 2024
            </span>{" "}
            was more than a competition – it was a two-month journey of
            innovation. These bright young minds transformed ambitious ideas
            into impactful tech-driven solutions for a sustainable future in
            Vietnam, blending sharp business acumen with cutting-edge
            technology.
          </p>

          <p className="text-white text-md md:text-lg font-medium mt-4 text-justify">
            We were honored to have our journey featured on the CafeTek program,
            as part of{" "}
            <span className="font-bold text-color-gradient">HTV</span>. This was
            a significant milestone, affirming our mission to create a
            playground that nurtures students' innovative spirits and connects
            them with top industry experts.
          </p>
        </motion.div>

        {/* --- Right Column: In-Page Video Player --- */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <div className="relative w-full aspect-video rounded-lg shadow-2xl overflow-hidden">
            {!isPlaying ? (
              // The Thumbnail View
              <div
                onClick={() => setIsPlaying(true)}
                className="w-full h-full cursor-pointer group"
              >
                <Image
                  src={`https://i.ytimg.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`}
                  layout="fill"
                  objectFit="cover"
                  alt="HAV 2024 Recap Thumbnail"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
                    <IconPlayerPlayFilled size={48} className="text-white" />
                  </div>
                </div>
              </div>
            ) : (
              // The Iframe View (after clicking)
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
      </div>
    </section>
  );
};
