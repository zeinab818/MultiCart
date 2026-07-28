"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import productImage from "@/assets/23.jpg";

export default function RecentlyPurchaseToast() {
  const [show, setShow] = useState(false);

useEffect(() => {
  const showToast = () => {
    setShow(true);

    setTimeout(() => {
      setShow(false);
    }, 3000);
  };


  const firstTimer = setTimeout(showToast, 3000);


  const interval = setInterval(showToast, 60000);

  return () => {
    clearTimeout(firstTimer);
    clearInterval(interval);
  };
}, []);
if (!show) return null;
  return (
    <div
      className="
        fixed
        bottom-12
        left-0
        md:left-5
        z-[999999999]
        flex
        w-80
        md:w-120
        items-center
        gap-3
        
        font-montserrat
     
        bg-white
        px-5
        py-5
        shadow-xl
        border
        animate-in
        slide-in-from-bottom-5
      "
    >
      <Image
        src={productImage}
        alt="Floral Dress"
        width={60}
        height={60}
        className="rounded-md object-cover"
      />

      <div className="flex-1">
        <p className="text-md font-semibold text-gray-600">
          Some recently purchased this item
        </p>

        <p
        
          className="
            block
         
            text-gray-800
            text-(--main-color)
          "
        >
          Floral Dress
        </p>

        <small className="text-xs text-gray-400">
          50 minutes ago
        </small>
      </div>

      <button
        onClick={() => setShow(false)}
        className="
          self-start
          text-gray-400
          hover:text-gray-700
          cursor-pointer
        "
      >
        ✕
      </button>
    </div>
  );
}