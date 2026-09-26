"use client";
import React, { useEffect, useState } from 'react';
import { ChevronUp } from "tabler-icons-react";

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
    <div>
      {backToTopButton && (
        <button
          style={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            width: "60px",
            height: "60px",
            background: "linear-gradient(to bottom, #F37D12, #FDE309)", 
          }}
          onClick={scrollUp}
          className="rounded-full flex justify-center items-center z-50"
        >
          <ChevronUp className='w-auto height-full' />
        </button>
      )}
    </div>
  );
};