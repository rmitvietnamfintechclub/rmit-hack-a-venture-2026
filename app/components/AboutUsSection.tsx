import React from "react";
import Image from "next/image";

export const AboutUsSection = () => {
  return (
    <div className="items-center justify-center w-fit max-md:mt-[40px] text-lg md:text-xl text-white font-medium text-md md:px-20 max-md:px-6">
      <Image
        src="/key-visual.png"
        width={2000}
        height={1000}
        alt="Hack-A-Venture Key Visual"
        className="w-full h-auto rounded-lg"
      />
      <div className="mt-[40px] text-center md:text-justify">
        This competition aims to bridge the gap between technical expertise and
        business strategy by having students leverage cutting-edge technologies
        such as{" "}
        <span className="text-color-gradient font-bold">
          AI, Blockchain, Cybersecurity, etc.
        </span>{" "}
        to develop innovative products that address challenges related to the
        United Nations Sustainable Development Goals (SDGs) in Vietnam. Beyond
        product development, teams are required to create{" "}
        <span className="text-color-gradient font-bold">
          a comprehensive business plan
        </span>{" "}
        that ensures the{" "}
        <span className="text-color-gradient font-bold">
          viability, sustainability, and scalability
        </span>{" "}
        of their solution.
      </div>

      <div className="my-[16px] text-center md:text-justify">
        Over multiple rounds, teams will progress through ideation,
        documentation, technical development, and live demonstration,
        culminating in a final pitch to a panel of esteemed industry judges.
      </div>
    </div>
  );
};
