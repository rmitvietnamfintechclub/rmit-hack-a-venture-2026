import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <footer
      id="footer"
      style={{
        background: "linear-gradient(to right, #bf0701, #e85102)",
      }}
      className="pt-[3px] mt-12 md:mt-20"
    >
      <div className="bg-[#050101] py-12 px-6 md:px-12 lg:px-20 flex flex-col justify-center items-center">
        
        {/* Dùng Grid 3 cột để đảm bảo Layout luôn cân đối trên Desktop */}
        <section className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 justify-items-start">
          <SocialMediaList />
          <OrganizerList />
          <ContactList />
        </section>

        <div className="w-full max-w-7xl mt-12 pt-6 border-t border-white/10 text-center text-gray-500 text-sm font-medium">
          © Property of RMIT Vietnam FinTech Club 2026
        </div>
      </div>
    </footer>
  );
};

const SocialMediaList = () => {
  return (
    <div className="flex flex-col w-full gap-6">
      {/* Title */}
      <div className="relative pb-2">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#e85102] to-[#bf0701] text-xl font-bold uppercase tracking-wider drop-shadow-md">
          Our Socials
        </h2>
        <span className="absolute bottom-0 left-0 w-16 h-[2px] bg-gradient-to-r from-[#e85102] to-[#bf0701]"></span>
      </div>

      <div className="flex flex-col gap-4">
        {/* Fanpage Hack-A-Venture - Highlight */}
        <a
          href="https://www.facebook.com/rmit.hackaventure"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 text-gray-300 hover:text-white transition-colors duration-300"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#240a0a] to-[#140505] border border-[#bf0701]/30 flex items-center justify-center group-hover:bg-[#e85102] group-hover:border-[#e85102] shadow-md transition-all duration-300">
            <TiSocialFacebook className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="font-semibold text-white group-hover:text-[#e85102] transition-colors">RMIT Hack-A-Venture 2026</p>
            <p className="text-xs text-gray-500">Official Competition Page</p>
          </div>
        </a>

        {/* Fanpage FinTech Club */}
        <a
          href="https://www.facebook.com/rmitfintechclub"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 text-gray-300 hover:text-white transition-colors duration-300"
        >
          <div className="w-10 h-10 rounded-xl bg-[#0a0202] border border-white/10 flex items-center justify-center group-hover:border-[#e85102] group-hover:text-[#e85102] transition-all duration-300">
            <TiSocialFacebook className="w-6 h-6 text-current" />
          </div>
          <span className="font-medium">RMIT Vietnam FinTech Club</span>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/rmitfintechclub/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 text-gray-300 hover:text-white transition-colors duration-300"
        >
          <div className="w-10 h-10 rounded-xl bg-[#0a0202] border border-white/10 flex items-center justify-center group-hover:border-[#e85102] group-hover:text-[#e85102] transition-all duration-300">
            <IoLogoInstagram className="w-5 h-5 text-current" />
          </div>
          <span className="font-medium">Instagram</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/company/rmit-vietnam-fintech-club/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 text-gray-300 hover:text-white transition-colors duration-300"
        >
          <div className="w-10 h-10 rounded-xl bg-[#0a0202] border border-white/10 flex items-center justify-center group-hover:border-[#e85102] group-hover:text-[#e85102] transition-all duration-300">
            <FaLinkedinIn className="w-4 h-4 text-current" />
          </div>
          <span className="font-medium">LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

const OrganizerList = () => {
  return (
    <div className="flex flex-col w-full gap-6">
      {/* Title */}
      <div className="relative pb-2">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#e85102] to-[#bf0701] text-xl font-bold uppercase tracking-wider drop-shadow-md">
          Organizers
        </h2>
        <span className="absolute bottom-0 left-0 w-16 h-[2px] bg-gradient-to-r from-[#e85102] to-[#bf0701]"></span>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex gap-4 items-center group">
          <div className="w-14 h-14 bg-white/5 rounded-xl p-2 border border-white/10 group-hover:border-[#bf0701]/50 transition-colors">
            <img
              className="w-full h-full object-contain"
              src="/alignVerticalLogo.svg"
              alt="FinTech Club Logo"
            />
          </div>
          <h2 className="text-base font-medium text-gray-200 group-hover:text-white transition-colors">
            RMIT Vietnam FinTech Club
          </h2>
        </div>

        <div className="flex gap-4 items-center group">
          <div className="w-14 h-14 bg-white/5 rounded-xl p-2 border border-white/10 group-hover:border-[#bf0701]/50 transition-colors">
            <img
              className="w-full h-full object-contain"
              src="/student_life.png"
              alt="Student Life Logo"
            />
          </div>
          <h2 className="text-base font-medium text-gray-200 group-hover:text-white transition-colors">
            RMIT Student Club Program
          </h2>
        </div>
      </div>
    </div>
  );
};

const ContactList = () => {
  return (
    <div className="flex flex-col w-full gap-6">
      {/* Title */}
      <div className="relative pb-2">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#e85102] to-[#bf0701] text-xl font-bold uppercase tracking-wider drop-shadow-md">
          Contacts
        </h2>
        <span className="absolute bottom-0 left-0 w-16 h-[2px] bg-gradient-to-r from-[#e85102] to-[#bf0701]"></span>
      </div>

      <div className="flex flex-col gap-6">
        
        {/* --- Yêu cầu thiết kế: Gom nhóm Official Emails --- */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Official Emails</h3>
          <a
            href="mailto:rmithackaventure0108@gmail.com"
            className="flex items-center gap-3 text-base font-medium text-white hover:text-[#e85102] transition-colors"
          >
            <MdEmail className="text-xl text-[#e85102]" />
            rmithackaventure0108@gmail.com
          </a>
          <a
            href="mailto:fintechclub.sgs@rmit.edu.vn"
            className="flex items-center gap-3 text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            <MdEmail className="text-lg text-gray-500" />
            fintechclub.sgs@rmit.edu.vn (Backup)
          </a>
        </div>

        {/* --- Yêu cầu thiết kế: Gom nhóm Emergency Contacts --- */}
        <div className="flex flex-col gap-4 mt-2">
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Project Co-Leaders</h3>
          
          {/* Giang Nguyen */}
          <div className="flex flex-col gap-1">
            <div className="text-white font-semibold">
              Nguyen Truong Giang
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-1">
              <a href="tel:0902601368" className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#e85102] transition-colors">
                <BiSolidPhoneCall className="text-lg" />
                0902601368
              </a>
              <a href="mailto:s4118021@rmit.edu.vn" className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#e85102] transition-colors">
                <MdEmail className="text-lg" />
                s4118021@rmit.edu.vn
              </a>
            </div>
          </div>

          {/* Hoa Pham */}
          <div className="flex flex-col gap-1">
            <div className="text-white font-semibold">
              Pham Thi Khanh Hoa
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-1">
              <a href="tel:0859311655" className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#e85102] transition-colors">
                <BiSolidPhoneCall className="text-lg" />
                0859311655
              </a>
              <a href="mailto:s4127091@rmit.edu.vn" className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#e85102] transition-colors">
                <MdEmail className="text-lg" />
                s4127091@rmit.edu.vn
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};