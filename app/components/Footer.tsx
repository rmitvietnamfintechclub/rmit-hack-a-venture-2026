import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(to right, #F37D12, #FDE309)",
      }}
      className="pt-[2px] gap-[50px] mt-[50px] "
    >
      <div className="bg-[#000000] py-[25px] px-[50px] flex flex-col justify-center items-center">
        <section className="w-full flex flex-col gap-[50px] md:flex-row md:justify-between">
          <SocialMediaList />
          <OrganizerList />
          <ContactList />
        </section>
        <div className="text-[#9da3af] pt-6">
          © Property of FinTech Club 2025
        </div>
      </div>
    </footer>
  );
};

const SocialMediaList = () => {
  return (
    <div className="flex flex-col items-center md:items-start gap-[20px]">
      {/*--------- text effect ---------*/}
      <div className="relative">
        <h2 className="inline-block text-color-gradient drop-shadow-text text-[18px] font-semibold">
          Our Socials
        </h2>
        <span
          className="absolute bottom-0 left-0 w-[120px] h-[2px]"
          style={{
            background:
              "linear-gradient(to right, #F37D12, #FDE309, transparent)",
          }}
        ></span>
      </div>

      {/*---------------------------- icon link section ---------------------*/}
      <div className="flex gap-[20px]">
        {/* -- Facebook (Fintech Club) -- */}
        <div className="relative flex flex-col items-center group">
          <a
            href="https://www.facebook.com/rmitfintechclub"
            target="_blank"
            rel="noopener noreferrer" // Good practice for security
            className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center"
          >
            <TiSocialFacebook className="w-full h-full text-black" />
          </a>
          <div className="absolute bottom-full mb-2 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-nowrap bg-black shadow-lg rounded-md">
              RMIT Fintech Club
            </span>
            <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
          </div>
        </div>

        {/* -- Facebook (Hackaventure) -- */}
        <div className="relative flex flex-col items-center group">
          <a
            href="https://www.facebook.com/rmit.hackaventure"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center"
          >
            <TiSocialFacebook className="w-full h-full text-black" />
          </a>
          <div className="absolute bottom-full mb-2 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-nowrap bg-black shadow-lg rounded-md">
              RMIT Hack-A-Venture 2025
            </span>
            <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
          </div>
        </div>

        {/* -- Instagram -- */}
        <div className="relative flex flex-col items-center group">
          <a
            href="https://www.instagram.com/rmitfintechclub/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center"
          >
            <IoLogoInstagram className="w-[80%] h-[80%] text-black" />
          </a>
          <div className="absolute bottom-full mb-2 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-nowrap bg-black shadow-lg rounded-md">
              Instagram
            </span>
            <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
          </div>
        </div>

        {/* -- LinkedIn -- */}
        <div className="relative flex flex-col items-center group">
          <a
            href="https://www.linkedin.com/company/rmit-vietnam-fintech-club/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center"
          >
            <FaLinkedinIn className="w-[50%] h-[50%] text-black" />
          </a>
          <div className="absolute bottom-full mb-2 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-nowrap bg-black shadow-lg rounded-md">
              LinkedIn
            </span>
            <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OrganizerList = () => {
  return (
    <div className="flex flex-col items-center md:items-start gap-[20px]">
      {/*--------- text effect ---------*/}
      <div className="relative">
        <h2 className="inline-block text-color-gradient drop-shadow-text text-[18px] font-semibold">
          Organizers
        </h2>
        <span
          className="absolute bottom-0 left-0 w-[120px] h-[2px]"
          style={{
            background:
              "linear-gradient(to right, #F37D12, #FDE309, transparent)",
          }}
        ></span>
      </div>

      {/*---------------------------- organizers list section ---------------------*/}
      <div className="flex flex-col gap-[20px]">
        <div className="flex gap-[15px] items-center">
          <img
            className="w-[60px] h-[60px]"
            src="/alignVerticalLogo.svg"
            alt="FinTech Club Logo"
          />
          <h2 className="text-[18px] text-white">RMIT Vietnam Fintech Club</h2>
        </div>

        <div className="flex gap-[15px] items-center">
          <img
            className="w-[60px] h-[60px]"
            src="/student_life.png"
            alt="Student Life Logo"
          />
          <h2 className="text-[18px] text-white">RMIT Student Club Program</h2>
        </div>
      </div>
    </div>
  );
};
const ContactList = () => {
  return (
    <div className="flex flex-col items-center md:items-start gap-[20px]">
      {/*--------- text effect ---------*/}
      <div className="relative">
        <h2 className="inline-block text-color-gradient drop-shadow-text text-[18px] font-semibold">
          Contacts
        </h2>
        <span
          className="absolute bottom-0 left-0 w-[95px] h-[2px]"
          style={{
            background:
              "linear-gradient(to right, #F37D12, #FDE309, transparent)",
          }}
        ></span>
      </div>

      {/*---------------------------- contact list section ---------------------*/}
      <div className="flex flex-col items-center md:items-start gap-[20px]">
        <div className="flex gap-[15px] items-start lg:items-center">
          <BiSolidPhoneCall className="text-[24px] mt-[5px] lg:m-0 text-white" />
          <div className="text-[16px]">
            <div>
              <span className="text-white"> Truong Quoc Tri </span>
              <span className="text-[#9da3af] hidden lg:inline"> - </span>
              <span className="text-[#9da3af] block lg:inline">
                Co-Project Leader
              </span>
            </div>
            <a href="tel:0983889442" className="text-white">
              0983889442
            </a>
          </div>
        </div>
        <div className="flex gap-[15px] items-start lg:items-center">
          <BiSolidPhoneCall className="text-[24px] mt-[5px] lg:m-0 text-white" />
          <div className="text-[16px]">
            <div>
              <span className="text-white"> Nguyen Van Khue </span>
              <span className="text-[#9da3af] hidden lg:inline"> - </span>
              <span className="text-[#9da3af] block lg:inline">
                Co-Project Leader
              </span>
            </div>
            <a href="tel:0912292895" className="text-white">
              0912292895
            </a>
          </div>
        </div>
        <div className="flex gap-[15px] items-center">
          <MdEmail className="text-[24px] text-white" />
          <a
            href="mailto:rmithackaventure0108@gmail.com"
            className="text-[16px] text-white"
          >
            rmithackaventure0108@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};
