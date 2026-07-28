"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import productImage from "@/assets/17.jpg";
import { Button } from "@/components/ui/button";

export default function StickyBottomCart() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
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

  return (
    <div
      className={`
        hidden
        md:block
        fixed
        bottom-5
        left-0
        right-0
        z-50
        mx-10
        md:mx-30
        lg:mx-50
        overflow-auto
        bg-white
        shadow-lg
        transition-all
        duration-300
        ${
          show
            ? "translate-y-0 opacity-100"
            : "translate-y-32 opacity-0 pointer-events-none"
        }
      `}
    >
      <div className="container mx-auto px-4">
        <div
          className="
            flex
            items-center
            justify-between
            gap-5
            py-2
          "
        >
          {/* Product */}
          <div className="flex items-center gap-4 shrink-0">
            <Image
              src={productImage}
              alt="Gym Coords Set"
              width={70}
              height={70}
              className="rounded-md object-cover hidden md:block"
            />

            <div className="hidden lg:block">
              <h5 className="font-semibold text-gray-800">
                Gym Coords Set
              </h5>

              <h6 className="mt-1 text-sm font-semibold">
                $32.96{" "}
                <del className="text-gray-400">
                  $459.00
                </del>

                <span className="ml-2 text-(--main-color)">
                  55% off
                </span>
              </h6>
            </div>
          </div>


          {/* Variants */}
          <div
            className="
              flex
              items-center
              gap-4
              text-black
              shrink-0
            "
          >
            <h4 className="hidden xl:block font-semibold">
              Variants:
            </h4>

            <select
              className="
                h-10
                rounded-md
                border
                px-3
                text-sm
                outline-none
                w-28
              "
            >
              <option>Color</option>
              <option>Pink</option>
              <option>Blue</option>
              <option>Grey</option>
            </select>


            <select
              className="
                h-10
                rounded-md
                border
                px-3
                text-sm
                outline-none
                w-28
              "
            >
              <option>Size</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>


          {/* Button */}
          <Button
            className="
              h-10
              bg-(--main-color)
              px-8
              text-white
              uppercase
              hover:bg-white
              border
              border-(--main-color)
              hover:text-(--main-color)
              rounded-none
              cursor-pointer
              shrink-0
            "
          >
            Add To Cart
          </Button>

        </div>
      </div>
    </div>
  );
}