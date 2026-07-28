"use client";

import { useEffect, useState } from "react";

export default function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollToTop}
      className="
        fixed
        right-5
        bottom-12
        z-[9999]
        flex
      
        py-1.5
        w-10
        items-center
        justify-center
     
        bg-(--main-color)
        text-white
        shadow-lg
      "
    >
      <i className="ri-arrow-up-double-line text-2xl"></i>
    </button>
  );
}