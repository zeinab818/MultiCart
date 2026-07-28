"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, RefreshCw, ChevronLeft, ChevronRight } from "lucide-react";

import image1 from "@/assets/17.jpg";
import image2 from "@/assets/222.jpg";
import image3 from "@/assets/212.jpg";
import { Input } from "@/components/ui/input";
import ShareModal from "./ShareModal";



const images = [image1, image2, image3];
export default function Colors() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-col items-center justify-center gap-6">

      {/* Colors */}
      <div className="w-full flex flex-col items-center justify-center">
        <h4 className="mb-3 font-medium text-xl font-monstres">Colour:</h4>

        <ul className="flex gap-3">
          {images.map((image, index) => (
            <li
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`cursor-pointer overflow-hidden rounded-lg border-2 transition
                ${
                  selectedImage === index
                    ? "border-(--main-color)"
                    : "border-gray-200 hover:border-gray-400"
                }`}
            >
              <Image
                src={image}
                alt=""
                width={70}
                height={70}
                className="object-cover"
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Quantity */}
      <div className="flex items-center bg-gray-100 border">

        <button
          onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
          className="p-3  shadow mx-2 my-2 bg-white cursor-pointer" disabled
        >
          <ChevronLeft size={18} />
        </button>

        <Input
            type="text"
            defaultValue="1"
            min={1}
            value={quantity}
            onChange={(e) => {
              const value = Number(e.target.value);

              if (value >= 1) {
                setQuantity(value);
              } else if (e.target.value === "") {
                setQuantity(1);
              }
            }}
            className="w-14 border-0 bg-transparent text-center shadow-none focus-visible:ring-0"
/>
        <button
          onClick={() => setQuantity((prev) => prev + 1)}
          className="p-3 shadow mx-2 my-2 bg-white cursor-pointer" disabled
        >
          <ChevronRight size={18} />
        </button>

      </div>

      {/* Buttons */}
      <div className="flex justify-center items-center gap-4">
      <button className="relative
        overflow-hidden
        bg-[#F4B897]
        px-6
        py-3
        text-white
        after:absolute
        after:left-0
        after:top-1/2
        after:h-px
        after:w-full
        after:-translate-y-1/2
        after:-rotate-45
        after:bg-[#F4B897]
        after:content-['']  text-[16px] font-montserrat font-semibold">
        Out Of Stock
      </button>

            <button
            className="
              relative
              overflow-hidden
              bg-[#F4B897]
              px-6
              py-3
              text-[16px]
              font-montserrat
              font-semibold
              text-white

              before:absolute
              before:left-0
              before:top-1/2
              before:h-px
              before:w-full
              before:-translate-y-1/2
              before:rotate-45
              before:bg-[#f9b692]
              before:content-['']
              before:z-10

              after:absolute
              after:left-0
              after:top-1/2
              after:h-px
              after:w-full
              after:-translate-y-1/2
              after:-rotate-45
              after:bg-[#f9b692]
              after:content-['']
              after:z-10
                          "
              >
                        Buy Now
              </button>
        </div>

      {/* Progress */}

    <div className="w-full f">

  <p className="mb-2 text-sm font-medium text-[#777] flex justify-center items-center">
   Please Hurry Only 10 Left In Stock
  </p>

  <div className="h-2.5 overflow-hidden rounded-full bg-gray-100">
    <div
      className="h-full rounded-full bg-[linear-gradient(to_left,#438600,#8fd747)]"
      style={{ width: "100%" }}
    />
  </div>
</div>

{/* Wishlist */}
<div className="flex flex-wrap justify-center gap-6 text-sm">

      {/* Wishlist */}
      <div className="flex flex-wrap justify-center gap-6 text-sm">

        <button className="flex items-center gap-2 hover:text-primary">
          <Heart size={18} />
          <span>Add To Wishlist</span>
        </button>

        <button className="flex items-center gap-2 hover:text-primary">
          <RefreshCw size={18} />
          <span>Add To Compare</span>
        </button>

        <div className="flex items-center gap-2 hover:text-primary">
            <ShareModal/>
        </div>

      </div>

   </div>

</div>)}