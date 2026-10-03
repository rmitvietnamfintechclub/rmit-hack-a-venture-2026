import React from "react";
import Image from "next/image";

export const AboutUsSection = () => {
  return (
    <div className="items-center justify-center w-fit max-md:mt-[40px] text-lg md:text-xl text-white font-medium text-md md:px-20 max-md:px-6">
      {/* <Image
        src="/key-visual.png"
        width={2000}
        height={1000}
        alt="Hack-A-Venture Key Visual"
        className="w-full h-auto rounded-lg"
      /> */}
      <div className="mt-[40px] text-gray-300 leading-relaxed text-justify">
        With Vietnam’s rapidly evolving digital economy,{" "}
        <span className="text-color-gradient font-bold">
          Hack-A-Venture 2026
        </span>{" "}
        aims to bridge technical capabilities with market and strategic thinking
        by having students leverage emerging technologies such as{" "}
        <span className="text-color-gradient font-bold">
          AI, Data Analytics, Blockchain, Distributed Systems, etc.
        </span>{" "}
        to develop innovative products or solutions that{" "}
        <span className="text-color-gradient font-bold">
          address specific challenges in Vietnam's financial system
        </span>
        , while contributing to{" "}
        <span className="text-color-gradient font-bold">
          relevant ESG (Environmental, Social, and Governance) standards
        </span>
        . Beyond product development, teams are required to create{" "}
        <span className="text-color-gradient font-bold">
          a comprehensive business plan
        </span>{" "}
        that ensures the{" "}
        <span className="text-color-gradient font-bold">
          feasibility, scalability, and sustainability
        </span>{" "}
        of their solution, taking into account real-world constraints and{" "}
        <span className="text-color-gradient font-bold">
          regulatory alignment
        </span>
        .
      </div>

      <div className="my-[16px] text-gray-300 leading-relaxed text-justify">
        Providing a{" "}
        <span className="text-color-gradient font-bold">
          startup-like environment
        </span>
        , the competition guides teams through multiple rounds of idea proposal,
        documentation, prototype building, and live demonstration. This journey
        culminates in a final pitch to a panel of esteemed industry judges,
        empowering students to develop practical, scalable, and impactful
        solutions.
      </div>
    </div>
  );
};
