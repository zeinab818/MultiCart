"use client";

import { useState } from "react";
import { SheetClose, SheetContent } from "@/components/ui/sheet";
import { ChevronRight } from "lucide-react";

import ClothingMenu from "./ClothingMenu";
import BagsMenu from "./BagsMenu";
import FootWears from "./FootWears";
import AccMenu from "./AccMenu";
import BeautyMenu from "./BeautyMenu";

export default function LeftNavbar() {
  const [page, setPage] = useState<
    | "menu"
    | "clothing"
    | "bags"
    | "footwear"
    | "accessories"
    | "beauty"
  >("menu");

  return (
    <SheetContent
      side="left"
      className="
        w-80
        p-0
        h-screen
         flex-1 overflow-y-auto
        [&>button]:hidden
        animate-in
        slide-in-from-left
        duration-500
        data-[side=left]:data-starting-style:-translate-x-full
        data-[side=left]:data-ending-style:-translate-x-full
      "
    >
      {/* Header */}
      <div className="flex items-center px-5 py-4">
        {page !== "menu" ? (
          <button
            onClick={() => setPage("menu")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <span className="text-2xl font-light">❮</span>
            <span className="font-montserrat text-2xl">Back</span>
          </button>
        ) : (
          <SheetClose asChild>
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="text-2xl font-light">❮</span>
              <span className="font-montserrat text-2xl">Back</span>
            </div>
          </SheetClose>
        )}
      </div>

      {/* Clothing */}
      <div className="px-5">
        <button
          onMouseEnter={() => setPage("clothing")}
          onClick={() =>
            setPage(page === "clothing" ? "menu" : "clothing")
          }
          className="hidden lg:flex w-full items-center justify-between py-3 font-medium transition-colors hover:text-(--main-color) cursor-pointer"
        >
          <span className="font-montserrat font-medium">Clothing</span>
          <ChevronRight size={20} />
        </button>

        <div className="lg:hidden">
          <ClothingMenu />
        </div>
      </div>

      <div
        className="hidden lg:block"
        onMouseLeave={() => setPage("menu")}
      >
        {page === "clothing" && <ClothingMenu />}
      </div>

      {/* Bags */}
      <div className="px-5">
        <button
          onMouseEnter={() => setPage("bags")}
          onClick={() =>
            setPage(page === "bags" ? "menu" : "bags")
          }
          className="hidden lg:flex w-full items-center justify-between py-3 font-medium transition-colors hover:text-(--main-color) cursor-pointer"
        >
          <span className="font-montserrat font-medium">Bags</span>
          <ChevronRight size={20} />
        </button>

        <div className="lg:hidden">
          <BagsMenu />
        </div>
      </div>

      <div
        className="hidden lg:block"
        onMouseLeave={() => setPage("menu")}
      >
        {page === "bags" && <BagsMenu />}
      </div>

      {/* Footwear */}
      <div className="px-5">
        <button
          onMouseEnter={() => setPage("footwear")}
          onClick={() =>
            setPage(page === "footwear" ? "menu" : "footwear")
          }
          className="hidden lg:flex w-full items-center justify-between py-3 font-medium transition-colors hover:text-(--main-color) cursor-pointer"
        >
          <span className="font-montserrat font-medium">
            Footwear
          </span>
          <ChevronRight size={20} />
        </button>

        <div className="lg:hidden">
          <FootWears />
        </div>
      </div>

      <div
        className="hidden lg:block"
        onMouseLeave={() => setPage("menu")}
      >
        {page === "footwear" && <FootWears />}
      </div>

      {/* Watches */}
      <div className="px-5 py-3 cursor-pointer hover:text-(--main-color)">
        <span className="font-montserrat font-medium">
          Watches
        </span>
      </div>

      {/* Accessories */}
      <div className="px-5">
        <button
          onMouseEnter={() => setPage("accessories")}
          onClick={() =>
            setPage(
              page === "accessories"
                ? "menu"
                : "accessories"
            )
          }
          className="hidden lg:flex w-full items-center justify-between py-3 font-medium transition-colors hover:text-(--main-color) cursor-pointer"
        >
          <span className="font-montserrat font-medium">
            Accessories
          </span>
          <ChevronRight size={20} />
        </button>

        <div className="lg:hidden">
          <AccMenu />
        </div>
      </div>

      <div
        className="hidden lg:block"
        onMouseLeave={() => setPage("menu")}
      >
        {page === "accessories" && <AccMenu />}
      </div>
      {/* House Of Design */}
      <div className="px-5 py-3 cursor-pointer hover:text-(--main-color)">
        <span className="font-montserrat font-medium">
          House Of Design
        </span>
      </div>

      {/* Beauty */}
      <div className="px-5">
        <button
          onMouseEnter={() => setPage("beauty")}
          onClick={() =>
            setPage(page === "beauty" ? "menu" : "beauty")
          }
          className="hidden lg:flex w-full items-center justify-between py-3 font-medium transition-colors hover:text-(--main-color) cursor-pointer"
        >
          <span className="font-montserrat font-medium">
            Beauty & Personal Care
          </span>

          <ChevronRight size={20} />
        </button>

        <div className="lg:hidden">
          <BeautyMenu />
        </div>
      </div>

      <div
        className="hidden lg:block"
        onMouseLeave={() => setPage("menu")}
      >
        {page === "beauty" && <BeautyMenu />}
      </div>

      {/* Home & Decor */}
      <div className="px-5 py-3 cursor-pointer hover:text-(--main-color)">
        <span className="font-montserrat font-medium">
          Home & Decor
        </span>
      </div>

      {/* Kitchen */}
      <div className="px-5 py-3 cursor-pointer hover:text-(--main-color)">
        <span className="font-montserrat font-medium">
          Kitchen
        </span>
      </div>
    </SheetContent>
  );
}