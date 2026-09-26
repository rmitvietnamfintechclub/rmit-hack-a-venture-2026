"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import { IconExternalLink } from "@tabler/icons-react";
import * as Tooltip from "@radix-ui/react-tooltip";

// --- Data for all sponsors, organized by tier ---
const sponsorsData = {
  diamond: [
    {
      name: "U2U Network",
      logoUrl: "/partners/u2u-network.png",
      bgClass: "bg-white",
    },
    {
      name: "NEAX",
      logoUrl: "/partners/neax-New.png",
    },
  ],
  silver: [
    {
      name: "Student Council",
      logoUrl: "/partners/student-council-New.png",
    },
    {
      name: "FPTS",
      logoUrl: "/partners/fpts.png",
    },
    {
      name: "MOORE AISC",
      logoUrl: "/partners/moore-aisc.png",
    },
    {
      name: "Aptos",
      logoUrl: "/partners/aptos.png",
      bgClass: "bg-white",
    },
  ],
  strategic: [
    {
      name: "Chainlink",
      logoUrl: "/partners/chainlink.png",
    },
    {
      name: "AGYRA",
      logoUrl: "/partners/agyra.png",
    },
  ],
  academic: [
    {
      name: "Aptech",
      logoUrl: "/partners/aptech.png",
    },
    {
      name: "UniTrain",
      logoUrl: "/partners/unitrain.png",
    },
    {
      name: "Big-O Coding",
      logoUrl: "/partners/bigo.png",
    },
    {
      name: "SAPP Academy",
      logoUrl: "/partners/sapp.png",
    },
  ],
  fb: [
    {
      name: "ÂME Café & Brunch",
      logoUrl: "/partners/âme.png",
    },
  ],
  livestream: [
    {
      name: "Saigonlive",
      logoUrl: "/partners/saigonlive.png",
      href: "https://saigonlive.vn",
      tooltipText: "Visit Saigonlive.vn",
    },
  ],
};

// --- Reusable Sponsor Card Component ---
const SponsorCard = ({
  logoUrl,
  name,
  className,
  bgClass,
  href,
  tooltipText,
}: {
  logoUrl: string;
  name: string;
  className?: string;
  bgClass?: string;
  href?: string;
  tooltipText?: string;
}) => {
  const CardContent = (
    <>
      <Image
        src={logoUrl}
        alt={`${name} Logo`}
        width={200}
        height={120}
        className={clsx(
          "object-contain w-full h-auto max-h-[100px] p-2 rounded-md",
          bgClass ? bgClass : "bg-[#F9FAFB]"
        )}
      />
      <div className="absolute -inset-px rounded-xl border border-transparent group-hover:border-yellow-400/50 transition-all duration-300" />

      {href && (
        <div className="absolute top-2.5 right-2.5 p-1 rounded-full bg-black/20">
          <IconExternalLink size={16} className="text-white" />
        </div>
      )}
    </>
  );

  if (href && tooltipText) {
    return (
      <Tooltip.Root delayDuration={200}>
        <Tooltip.Trigger asChild>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${name} website (opens in a new tab)`}
            className={clsx(
              "relative group w-full h-full flex items-center justify-center p-4 md:p-6 rounded-xl bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:scale-105",
              className
            )}
          >
            {CardContent}
          </a>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade select-none rounded-md px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] bg-gray-800 text-white text-sm"
            sideOffset={5}
          >
            {tooltipText}
            <Tooltip.Arrow className="fill-gray-800" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${name} website (opens in a new tab)`}
        className={clsx(
          "relative group w-full h-full flex items-center justify-center p-4 md:p-6 rounded-xl bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:scale-105",
          className
        )}
      >
        {CardContent}
      </a>
    );
  }

  // Mặc định: render card dưới dạng thẻ <div>
  return (
    <div
      className={clsx(
        "relative group w-full h-full flex items-center justify-center p-4 md:p-6 rounded-xl bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:scale-105",
        className
      )}
    >
      {CardContent}
    </div>
  );
};

// --- Main Section Component ---
export const PartnerSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    // <-- Quan trọng: Bọc toàn bộ section trong Tooltip.Provider -->
    <Tooltip.Provider>
      <div
        ref={ref}
        className="container mx-auto py-4 md:py-8 px-6 md:px-20 text-center"
        id="hackaventure-sponsors"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-md:text-4xl md:text-6xl text-white font-semibold mb-8 md:mb-12 drop-shadow-text"
        >
          Hack-A-Venture <span className="text-color-gradient">Sponsors</span>
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="space-y-4 md:space-y-16"
        >
          {/* Diamond Sponsor */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-8 text-gradient-diamond drop-shadow-text tracking-wider">
              Diamond Sponsors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              {sponsorsData.diamond.map((sponsor) => (
                <div key={sponsor.name} className="w-full max-w-sm md:max-w-md">
                  <SponsorCard {...sponsor} />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Silver Sponsors */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-8 text-gradient-silver drop-shadow-text tracking-wider">
              Silver Sponsors
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mx-auto">
              {sponsorsData.silver.map((sponsor) => (
                <SponsorCard key={sponsor.name} {...sponsor} />
              ))}
            </div>
          </motion.div>

          {/* Other Tiers - Displayed in a flexible grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:pt-4">
            {/* Strategic Partner */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-color-gradient drop-shadow-text tracking-wider md:h-20 md:flex md:items-center md:justify-center">
                Strategic Advisors
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-4">
                {sponsorsData.strategic.map((sponsor) => (
                  <div key={sponsor.name} className="w-full max-w-xs">
                    <SponsorCard {...sponsor} />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Academic Sponsors */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-color-gradient drop-shadow-text tracking-wider md:h-20 md:flex md:items-center md:justify-center">
                Academic Sponsors
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-4">
                {sponsorsData.academic.map((sponsor) => (
                  <div key={sponsor.name} className="w-full">
                    <SponsorCard {...sponsor} />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* F&B Sponsor */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-color-gradient drop-shadow-text tracking-wider md:h-20 md:flex md:items-center md:justify-center">
                F&B Sponsor
              </h3>
              <div className="flex justify-center">
                {sponsorsData.fb.map((sponsor) => (
                  <div key={sponsor.name} className="w-full max-w-xs">
                    <SponsorCard {...sponsor} />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Livestream Sponsor */}
            <motion.div variants={itemVariants}>
              {/* ADDED: md:h-20 md:flex md:items-center md:justify-center */}
              <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-color-gradient drop-shadow-text tracking-wider md:h-20 md:flex md:items-center md:justify-center">
                Livestream Sponsor
              </h3>
              <div className="flex justify-center">
                {sponsorsData.livestream.map((sponsor) => (
                  <div key={sponsor.name} className="w-full max-w-xs">
                    <SponsorCard {...sponsor} />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Tooltip.Provider>
  );
};
