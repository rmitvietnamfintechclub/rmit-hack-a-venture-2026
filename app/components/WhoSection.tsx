"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

export const WhoSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const swipeVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section 
      className="w-full flex flex-col items-center px-6 md:px-20 relative" 
      ref={ref}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#bf0701] rounded-full blur-[150px] opacity-10 pointer-events-none -z-10"></div>

      {/* --- TIÊU ĐỀ --- */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={titleVariants}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-5xl lg:text-6xl text-center text-white font-bold mb-8 md:mb-10"
      >
        <span className="drop-shadow-text">Target</span>{" "}
        <span className="text-color-gradient drop-shadow-[0_0_20px_rgba(232,81,2,0.8)]">Participants</span>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 w-full max-w-6xl justify-items-center">
        {Array.from({ length: 5 }).map((_, index) => {
          const isLastItem = index === 4;

          return (
            <motion.div
              key={index}
              initial="hidden"
              animate={controls}
              variants={swipeVariants}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={clsx(
                "flex justify-center group",
                isLastItem ? "col-span-2 md:col-span-1 w-full" : "w-full"
              )}
            >
              <div 
                className={clsx(
                  "transition-transform duration-500 group-hover:-translate-y-2", 
                  isLastItem ? "w-[calc(50%-8px)] md:w-full" : "w-full"
                )}
              >
                <div className="p-1.5 md:p-2 border-2 border-dashed border-white/20 group-hover:border-[#e85102]/80 group-hover:shadow-[0_0_20px_rgba(232,81,2,0.3)] rounded-2xl md:rounded-3xl w-full transition-all duration-500 bg-[#0a0202]/50 backdrop-blur-sm">
                  <div className="relative w-full aspect-[3/4] md:aspect-auto overflow-hidden rounded-xl md:rounded-2xl">
                    <Image
                      src={`/whoSection${index + 1}.png`}
                      alt={`Target Participant ${index + 1}`}
                      width={500}
                      height={700}
                      // Dùng object-cover để lấp đầy khung hình mà không bị méo ảnh
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={swipeVariants}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="w-full flex justify-center mt-8"
      >
        <div className="w-full">
          <p className="text-gray-300 text-[15px] md:text-lg font-medium text-center md:text-justify leading-[1.7] md:leading-relaxed">
            Our competition is open to{" "}
            <span className="text-color-gradient font-bold text-[16px] md:text-xl">
              all inspiring students
            </span>{" "}
            who are passionate about driving innovation. While we welcome
            participants from any academic background, our target participants are
            the above. If you want to experiment with building technology-driven
            solutions to tackle real-world financial and sustainability
            challenges, this playground is for you.
          </p>
        </div>
      </motion.div>
    </section>
  );
};
