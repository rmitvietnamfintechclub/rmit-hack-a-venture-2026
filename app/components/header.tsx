"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <>
      <LaptopNav />
      <MobileNav />
    </>
  );
};

const LaptopNav = () => {
  const [hoverItemNumber, setHoverItemNumber] = useState(-1);

  return (
    <nav
      id="header"
      className="px-12 sticky z-50 top-0 w-full h-[72px] backdrop-blur-sm bg-black/60 border-b-[1px] border-solid border-[#374051] text-[14px] hidden lg:flex justify-between items-center gap-[80px]"
    >
      {/*-----------------------------left side ------------------------*/}
      <div className="h-[100%] w-[650px] flex justify-between items-center">
        <a className="no-underline block" href="/">
          <img
            className="w-auto h-[5rem]"
            src="/hackaventure-logo.png"
            alt="Laptop logo"
          />
        </a>
        <a
          href="/"
          className={`hover:text-[#F59011] text-white font-normal cursor-pointer`}
        >
          <h1>About Hack-A-Venture</h1>
        </a>
        <a
          href="https://bit.ly/RMITHack-A-Venture2025RulesandRegulations"
          target="_blank"
          className={`hover:text-[#F59011] text-white font-normal cursor-pointer`}
        >
          <h1>Rules & Regulations</h1>
        </a>
        <a
          className={`hover:text-[#F59011] text-white font-normal cursor-pointer`}
          href="#hackaventure-sponsors"
        >
          <h1>Our Sponsors & Partners</h1>
        </a>
      </div>

      {/*-----------------------------right side ------------------------*/}
      <div className="h-full w-[400px] flex justify-start items-center gap-8">
        <a
          href="https://bit.ly/RMITHack-A-Venture2025Handbook"
          target="_blank"
          className="no-underline font-semibold text-color-gradient"
        >
          See Handbook
        </a>
        <a
          href="mailto:rmithackaventure0108@gmail.com"
          className="no-underline font-semibold  text-color-gradient"
        >
          Contact Us
        </a>
        <button
          style={{
            background: "linear-gradient(to bottom, #F37D12, #FDE309)",
          }}
          className="px-[15px] py-[5px] rounded-2xl text-white font-semibold"
        >
          <a href="https://forms.gle/RCp2kr5zheyp2Gq2A" target="_blank">
            Register Now
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

const Path = (props: any) => (
  <motion.path
    fill="white"
    strokeWidth="2"
    stroke="white"
    strokeLinecap="round"
    {...props}
  />
);

const MobileNav = () => {
  const [hamburgerBarIsActive, setHamburgerBarIsActive] = useState(false);
  const [hoverItemNumber, setHoverItemNumber] = useState(-1);
  const toggle = () => setHamburgerBarIsActive(!hamburgerBarIsActive);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <section className="lg:hidden flex justify-between items-center sticky top-0 z-50">
      <motion.nav
        initial={false}
        animate={hamburgerBarIsActive ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        className="w-full h-[72px] backdrop-blur-sm bg-black/30 border-b-[1px] border-solid border-[#374051] flex justify-between items-center pr-6"
      >
        {/*---------- mobile logo ----------*/}
        <a className="no-underline block" href="/">
          <img
            className="h-[6rem]"
            src="/hackaventure-logo.png"
            alt="Mobile logo"
          />
        </a>

        {/*---------- hamburger bar --------*/}
        <div
          title="Menu"
          onClick={toggle}
          className="flex flex-col justify-center items-center cursor-pointer"
        >
          <svg width="45" height="40" viewBox="0 0 20 20" fill="#000000">
            <Path
              variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
              }}
            />
            <Path
              d="M 2 9.423 L 20 9.423"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
            />
            <Path
              variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" },
              }}
            />
          </svg>
        </div>
        <Navigation hamburgerBarIsActive={hamburgerBarIsActive} />
      </motion.nav>
      {/*----------------------- navbar body ---------------*/}
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
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.09, staggerDirection: -1 },
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
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <section
      className={`absolute top-[72px] w-full h-screen mx-auto ${
        menuVisible ? "left-0" : "left-full hidden"
      } top-[75px] bg-black z-50 duration-500 text-[25px]`}
    >
      <motion.ul
        variants={variantsNav}
        className=" my-[30px] mx-auto w-[90%] flex flex-col gap-[50px]"
      >
        <motion.li
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="/" className={`text-white font-normal cursor-pointer`}>
            <h1>About Hack-A-Venture</h1>
          </a>
        </motion.li>

        <motion.li
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="https://bit.ly/RMITHack-A-Venture2025RulesandRegulations"
            target="_blank"
            className={`text-white font-normal cursor-pointer`}
          >
            <h1>Rules & Regulations</h1>
          </a>
        </motion.li>

        <motion.li
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            className={`text-white font-normal cursor-pointer`}
            href="#hackaventure-sponsors"
          >
            <h1>Our Sponsors & Partners</h1>
          </a>
        </motion.li>

        <motion.li
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="https://bit.ly/RMITHack-A-Venture2025Handbook"
            target="_blank"
            className="no-underline font-semibold  text-color-gradient block cursor-pointer"
          >
            See Handbook
          </a>
        </motion.li>

        <motion.li
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="mailto:rmithackaventure0108@gmail.com"
            className="no-underline font-semibold  text-color-gradient block cursor-pointer"
          >
            Contact Us
          </a>
        </motion.li>

        <motion.li
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            style={{
              background: "linear-gradient(to bottom, #F37D12, #FDE309)",
            }}
            className="px-[24px] py-[8px] rounded-2xl text-white font-semibold"
          >
            <a href="https://forms.gle/RCp2kr5zheyp2Gq2A" target="_blank">
              Register Now
            </a>
          </button>
        </motion.li>
      </motion.ul>
    </section>
  );
};
