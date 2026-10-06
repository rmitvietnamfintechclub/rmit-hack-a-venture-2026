import React from "react";
import Image from "next/image";

export const AboutUsSection = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center px-6 md:px-20 mt-4 md:mt-12 mx-auto">
      <Image
        src="/key-visual.png"
        width={2000}
        height={1000}
        alt="Hack-A-Venture Key Visual"
        className="w-full h-auto rounded-lg"
      />
      <div className="text-gray-300 leading-[1.6] md:leading-relaxed text-[15px] md:text-lg font-medium text-center md:text-justify w-full mt-8 md:mt-12">
        With Vietnam’s rapidly evolving digital economy,{" "}
        <span className="font-bold text-color-gradient">
          Hack-A-Venture 2026
        </span>{" "}
        aims to bridge technical capabilities with market and strategic thinking
        by having students leverage emerging technologies such as{" "}
        <span className="font-bold text-white">
          AI, Data Analytics, Blockchain, Distributed Systems, etc.
        </span>{" "}
        to develop innovative products or solutions that{" "}
        <span className="font-bold text-color-gradient">
          address specific challenges in Vietnam's financial system
        </span>
        , while contributing to{" "}
        <span className="font-bold text-white">
          relevant ESG (Environmental, Social, and Governance) standards
        </span>
        . Beyond product development, teams are required to create{" "}
        <span className="font-bold text-color-gradient">
          a comprehensive business plan
        </span>{" "}
        that ensures the{" "}
        <span className="font-bold text-white">
          feasibility, scalability, and sustainability
        </span>{" "}
        of their solution, taking into account real-world constraints and{" "}
        <span className="font-bold text-color-gradient">
          regulatory alignment
        </span>
        .
      </div>

      <div className="mt-5 md:mt-6 text-gray-300 leading-[1.6] md:leading-relaxed text-[15px] md:text-lg font-medium text-center md:text-justify w-full">
        Providing a{" "}
        <span className="font-bold text-color-gradient">
          startup-like environment
        </span>
        , the competition guides teams through multiple rounds of idea proposal,
        documentation, prototype building, and live demonstration. This journey
        culminates in a final pitch to a panel of esteemed industry judges,
        empowering students to develop practical, scalable, and impactful
        solutions.
      </div>
    </section>
  );
};
