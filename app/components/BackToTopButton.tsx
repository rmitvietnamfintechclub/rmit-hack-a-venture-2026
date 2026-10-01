"use client";
import React, { useEffect, useState } from 'react';
import { IconChevronUp } from "@tabler/icons-react";

export const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  
  return (
    <>
      {backToTopButton && (
        <button
          onClick={scrollUp}
          className="fixed bottom-5 right-5 md:bottom-10 md:right-10 w-[50px] h-[50px] bg-gradient-to-b from-[#bf0701] to-[#e85102] rounded-full flex justify-center items-center z-40 shadow-[0_4px_15px_rgba(232,81,2,0.4)] hover:scale-110 hover:shadow-[0_6px_20px_rgba(232,81,2,0.6)] transition-all duration-300"
        >
          <IconChevronUp size={28} stroke={2.5} className="text-white" />
        </button>
      )}
    </>
  );
};