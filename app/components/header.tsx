"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IconArrowUpRight } from "@tabler/icons-react";

export const Header = () => {
  return (
    <>
      <LaptopNav />
      <MobileNav />
    </>
  );
};

const LaptopNav = () => {
  return (
    <nav
      id="header"
      className="px-10 lg:px-20 fixed left-0 z-50 top-0 w-full h-[80px] bg-[#050101]/95 backdrop-blur-md border-b border-[#bf0701]/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)] text-[15px] hidden lg:flex justify-between items-center transition-all duration-300"
    >
      {/*----------------------------- Left Side: Logo & Links ------------------------*/}
      <div className="flex items-center gap-[60px] xl:gap-[80px]">
        <a className="no-underline block shrink-0" href="/">
          <img
            className="w-auto h-[3.5rem] transition-transform duration-300 hover:scale-105"
            src="/hackaventure-logo.png"
            alt="Hack-A-Venture Logo"
          />
        </a>

        <div className="flex items-center gap-8 xl:gap-12 font-medium tracking-wide">
          <a
            href="https://canva.link/m8fk2y9xm9lnud9"
            target="_blank"
            className="relative group flex items-center text-gray-200 hover:text-white transition-colors duration-300"
          >
            Handbook
            <IconArrowUpRight
              size={18}
              stroke={2.5}
              className="ml-1 opacity-70 group-hover:opacity-100 group-hover:-translate-y-[2px] group-hover:translate-x-[2px] transition-all duration-300"
            />
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-[#bf0701] to-[#e85102] transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="https://canva.link/kxcxqtlug3qsw1c"
            target="_blank"
            className="relative group flex items-center text-gray-200 hover:text-white transition-colors duration-300"
          >
            Rules & Regulations
            <IconArrowUpRight
              size={18}
              stroke={2.5}
              className="ml-1 opacity-70 group-hover:opacity-100 group-hover:-translate-y-[2px] group-hover:translate-x-[2px] transition-all duration-300"
            />
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-[#bf0701] to-[#e85102] transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#hackaventure-sponsors"
            className="relative group text-gray-200 hover:text-white transition-colors duration-300"
          >
            Sponsors & Partners
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-[#bf0701] to-[#e85102] transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#footer"
            className="relative group text-gray-200 hover:text-white transition-colors duration-300"
          >
            Contact Us
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-[#bf0701] to-[#e85102] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </div>

      {/*----------------------------- Right Side: CTA Button ------------------------*/}
      <div className="flex justify-end items-center gap-6 shrink-0">
        <button
          style={{
            background: "linear-gradient(to right, #bf0701, #e85102)",
            boxShadow: "0 4px 20px rgba(232, 81, 2, 0.4)",
          }}
          className="px-[28px] py-[10px] rounded-full text-white font-bold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_25px_rgba(232,81,2,0.6)]"
        >
          <a href="" target="_blank" className="flex items-center gap-2">
            Register Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </button>
      </div>
    </nav>
  );
};

const useDimensions = (ref: any) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);
  return dimensions.current;
};

// CẬP NHẬT UI: Làm nét vẽ thanh mảnh hơn (strokeWidth="1.5") để nút X nhìn sang trọng
const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="1.5"
    stroke="white"
    strokeLinecap="round"
    {...props}
  />
);

const MobileNav = () => {
  const [hamburgerBarIsActive, setHamburgerBarIsActive] = useState(false);
  const toggle = () => setHamburgerBarIsActive(!hamburgerBarIsActive);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <section className="lg:hidden flex w-full justify-between items-center fixed left-0 top-0 z-50">
      <motion.nav
        initial={false}
        animate={hamburgerBarIsActive ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        className="w-full h-[80px] bg-[#050101]/95 backdrop-blur-md border-b border-[#bf0701]/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)] flex justify-between items-center pr-6"
      >
        {/*---------- mobile logo ----------*/}
        <a className="no-underline block ml-6" href="/">
          <img
            className="h-[3.25rem]"
            src="/hackaventure-logo.png"
            alt="Mobile logo"
          />
        </a>

        {/*---------- hamburger bar --------*/}
        <div
          title="Menu"
          onClick={toggle}
          className="flex flex-col justify-center items-center cursor-pointer p-2"
        >
          {/* CẬP NHẬT UI: Thu nhỏ viewBox và kích thước icon để nó gọn gàng hơn */}
          <svg width="30" height="30" viewBox="0 0 20 20">
            <Path
              variants={{
                closed: { d: "M 2 4 L 18 4" },
                open: { d: "M 4 16 L 16 4" },
              }}
            />
            <Path
              d="M 2 10 L 18 10"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
            />
            <Path
              variants={{
                closed: { d: "M 2 16 L 18 16" },
                open: { d: "M 4 4 L 16 16" },
              }}
            />
          </svg>
        </div>
        <Navigation hamburgerBarIsActive={hamburgerBarIsActive} />
      </motion.nav>
    </section>
  );
};

const Navigation = ({
  hamburgerBarIsActive,
}: {
  hamburgerBarIsActive: boolean;
}) => {
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    if (hamburgerBarIsActive) {
      setMenuVisible(true);
    } else {
      const timer = setTimeout(() => {
        setMenuVisible(false);
      }, 750);
      return () => clearTimeout(timer);
    }
  }, [hamburgerBarIsActive]);

  const variantsNav = {
    open: {
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 30,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <section
      className={`absolute top-[80px] w-full h-[calc(100vh-80px)] mx-auto ${
        menuVisible ? "left-0" : "left-full hidden"
      } bg-[#050202] backdrop-blur-xl border-t border-[#bf0701]/20 z-50 duration-500 text-[18px] font-medium`}
    >
      <motion.ul
        variants={variantsNav}
        className="mt-12 mx-auto w-[85%] flex flex-col items-center gap-[32px]"
      >
        <motion.li
          variants={variants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="https://canva.link/m8fk2y9xm9lnud9"
            target="_blank"
            className="flex items-center text-gray-200 hover:text-[#e85102] transition-colors"
          >
            Handbook
            <IconArrowUpRight
              size={18}
              stroke={2.5}
              className="ml-1 opacity-70"
            />
          </a>
        </motion.li>

        <motion.li
          variants={variants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="https://canva.link/kxcxqtlug3qsw1c"
            target="_blank"
            className="flex items-center text-gray-200 hover:text-[#e85102] transition-colors"
          >
            Rules & Regulations
            <IconArrowUpRight
              size={18}
              stroke={2.5}
              className="ml-1 opacity-70"
            />
          </a>
        </motion.li>

        <motion.li
          variants={variants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="#footer"
            className="no-underline font-semibold text-color-gradient block cursor-pointer"
          >
            Contact Us
          </a>
        </motion.li>

        <motion.li
          variants={variants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full mt-4"
        >
          <button
            style={{
              background: "linear-gradient(to right, #bf0701, #e85102)",
              boxShadow: "0 4px 15px rgba(232, 81, 2, 0.3)",
            }}
            className="px-[24px] py-[12px] rounded-full text-white text-[18px] font-bold w-full max-w-[220px] mx-auto block"
          >
            <a
              href=""
              target="_blank"
              className="flex items-center justify-center gap-2 w-full"
            >
              Register Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </button>
        </motion.li>
      </motion.ul>
    </section>
  );
};
