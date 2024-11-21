"use client";

import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top:0,
    });
  };

  return (
    <div className="fixed bottom-4 right-4">
      {isVisible && (
        <button onClick={scrollToTop} className="bg-customGradient text-white p-3 rounded-full">
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
