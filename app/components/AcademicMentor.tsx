"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const mentorsData = [
  {
    name: "DR. MINH NGUYEN",
    imageSrc: "/Mentor-MinhNguyen.png",
    title: "LECTURER OF BLOCKCHAIN ENABLED BUSINESS, RMIT VIETNAM",
  },
  {
    name: "DR. HOANG PHAN",
    imageSrc: "/Mentor-HoangPhan.png",
    title: "LECTURER OF STEM FOR SUSTAINABLE DEVELOPMENT, RMIT VIETNAM",
  },
  {
    name: "DR. TRI DANG",
    imageSrc: "/Mentor-TriDang.png",
    title: "ACTING ASSOCIATE PROGRAM MANAGER, IT&SE, RMIT VIETNAM",
  },
];

type Mentor = {
  name: string;
  imageSrc: string;
  title: string;
  // contactLink: string;
  // contactIcon: React.ReactNode;
};

const MentorCard = ({ mentor }: { mentor: Mentor }) => (
  <div className="flex flex-col items-center">
    <div className="font-bold text-2xl text-green-color-gradient">
      <span>{mentor.name}</span>
    </div>
    <div
      style={{
        background: "linear-gradient(to bottom, #F37D12, #FDE309)",
      }}
      className="p-[5px] mt-2 rounded-[50px]"
    >
      <div
        style={{
          background: "linear-gradient(to right, #89D957, #C9E265)",
        }}
        className="w-[60vw] max-w-[250px] md:w-[20vw] h-auto overflow-hidden rounded-[50px]"
      >
        <Image
          src={mentor.imageSrc}
          alt={`Mentor ${mentor.name}`}
          className="w-full h-auto object-cover"
          width={400}
          height={400}
          priority={true}
        />
      </div>
    </div>
    <div className="relative mt-6">
      <div
        style={{
          background: "linear-gradient(to bottom, #F37D12, #FDE309)",
        }}
        className="rounded-[50px] w-[300px] h-[86px] flex items-center p-4"
      >
        <p className="text-sm font-medium text-center flex-grow">
          {mentor.title}
        </p>
        {/* <div className="transition duration-300 transform hover:scale-110 hover:brightness-150 pl-2">
          <a
            href={mentor.contactLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {mentor.contactIcon}
          </a>
        </div> */}
      </div>
    </div>
  </div>
);

export const AcademicMentor = () => {
  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="md:px-20 px-4 pb-10">
      <h1 className="max-md:hidden md:block md:text-6xl text-center text-white font-semibold mb-8 drop-shadow-text">
        Hack-A-Venture{" "}
        <span className="text-color-gradient">Academic Mentors</span>
      </h1>

      <h1 className="max-md:block md:hidden max-md:text-4xl text-center text-white font-semibold mb-8 drop-shadow-text">
        Hack-A-Venture
        <br />
        <span className="text-color-gradient">Academic Mentors</span>
      </h1>

      {/* Desktop View: Flex layout */}
      <div className="hidden md:flex flex-row items-end justify-between gap-6">
        {mentorsData.map((mentor) => (
          <MentorCard key={mentor.name} mentor={mentor} />
        ))}
      </div>

      {/* Mobile View: Slider */}
      <div className="md:hidden">
        <Slider {...sliderSettings}>
          {mentorsData.map((mentor) => (
            <div key={mentor.name}>
              <MentorCard mentor={mentor} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
