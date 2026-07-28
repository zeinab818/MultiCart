"use client";

import Image from "next/image";
import banner from "../../../assets/fashion22.jpg";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Plus, Minus } from "lucide-react";

export default function ClothingMenu() {
  return (
    <>
      {/* ================= Desktop ================= */}

      <div
        className="
          hidden lg:grid
          absolute left-full top-[20%]
          w-[750px]
          min-h-[420px]
          bg-white
          shadow-xl
          border-l
          p-8
        "
      >
        <div className="grid grid-cols-3 gap-10 h-full">

          {/* Column 1 */}

          <div className="space-y-10">

            <div>

              <h4 className="font-semibold text-lg">
                Women's Fashion
              </h4>

              <div
                className="mt-2 mb-5 h-[2px] w-12"
                style={{
                  background: "var(--main-color)",
                }}
              />

              <ul className="space-y-3 text-gray-600">

                <li className="link-line-small hover:scale-110  origin-left hover:scale-105">Dresses</li>
                <li className="link-line-small hover:scale-110  origin-left hover:scale-105">Skirts</li>
                <li className="link-line-small hover:scale-110  origin-left hover:scale-105">Western Wear</li>
                <li className="link-line-small hover:scale-110  origin-left hover:scale-105">Ethnic Wear</li>
                <li className="link-line-small hover:scale-110  origin-left hover:scale-105">Sport Wear</li>

              </ul>

            </div>

            <div>

              <h4 className="font-semibold text-lg">
                Men's Fashion
              </h4>

              <div
                className="mt-2 mb-5 h-[2px] w-12"
                style={{
                  background: "var(--main-color)",
                }}
              />

              <ul className="space-y-3 text-gray-600">

                <li className="link-line-small hover:scale-110  origin-left hover:scale-105">Sports Wear</li>
                <li className="link-line-small hover:scale-110  origin-left hover:scale-105">Western Wear</li>
                <li className="link-line-small hover:scale-110  origin-left hover:scale-105">Ethnic Wear</li>

              </ul>

            </div>

          </div>

          {/* Column 2 */}

          <div>

            <h4 className="font-semibold text-lg">
              Accessories
            </h4>

            <div
              className="mt-2 mb-5 h-[2px] w-12"
              style={{
                background: "var(--main-color)",
              }}
            />

            <ul className="space-y-3 text-gray-600">

              <li className="link-line-small hover:scale-110  origin-left hover:scale-105">Fashion Jewellery</li>
              <li className="link-line-small hover:scale-110  origin-left hover:scale-105">Caps & Hats</li>
              <li className="link-line-small hover:scale-110  origin-left hover:scale-105">Necklaces</li>
              <li className="link-line-small hover:scale-110  origin-left hover:scale-105">Earrings</li>
              <li className="link-line-small hover:scale-110  origin-left hover:scale-105">Wrist Wear</li>
              <li className="link-line-small hover:scale-110  origin-left hover:scale-105">Ties</li>
              <li className="link-line-small hover:scale-110  origin-left hover:scale-105">Cufflinks</li>
              <li className="link-line-small hover:scale-110  origin-left hover:scale-105">Pocket Squares</li>

            </ul>

          </div>

          {/* Column 3 */}

          <div className="relative overflow-hidden rounded-md  cursor-pointer">

            <Image
              src={banner}
              alt="Fashion"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/25" />

            

          </div>

        </div>
      </div>

      {/* ================= Mobile ================= */}

      <div className="lg:hidden">

        <Accordion
         
        >

          <AccordionItem value="clothing">

            <AccordionTrigger
  className="
    group
    hover:no-underline
    [&_[data-slot=accordion-trigger-icon]]:hidden
  "
>

              <div className="flex w-full items-center justify-between   hover:text-(--main-color) cursor-pointer
          ">

                <span className="font-montserrat font-medium ">
                  Clothing
                </span>

                <div>

                  <Plus size={18} className="block group-aria-expanded:hidden" />

                  <Minus size={18} className="hidden group-aria-expanded:block" />

                </div>

              </div>

            </AccordionTrigger>

            <AccordionContent>

              <div className="space-y-8 pt-4 font-montserrat">

                <div>

                  <h4 className="font-semibold mb-3">
                   {" Women's Fashion"}
                  </h4>

                <ul className="space-y-2 text-gray-600">
  <li className="before:content-['-'] hover:text-(--main-color) cursor-pointer before:mr-2">Dresses</li>
  <li className="before:content-['-'] hover:text-(--main-color) cursor-pointer before:mr-2">Skirts</li>
  <li className="before:content-['-'] hover:text-(--main-color) cursor-pointer before:mr-2">Western Wear</li>
  <li className="before:content-['-'] hover:text-(--main-color) cursor-pointer before:mr-2">Ethnic Wear</li>
  <li className="before:content-['-'] hover:text-(--main-color) cursor-pointer before:mr-2">Sport Wear</li>
</ul>

                </div>

                <div>

                  <h4 className="font-semibold mb-3">
                   {" Men's Fashion"}
                  </h4>

                <ul className="space-y-2 text-gray-600">
  <li className="before:content-['-'] hover:text-(--main-color) cursor-pointer before:mr-2">
    Sports Wear
  </li>

  <li className="before:content-['-'] hover:text-(--main-color) cursor-pointer before:mr-2">
    Western Wear
  </li>

  <li className="before:content-['-'] hover:text-(--main-color) cursor-pointer before:mr-2">
    Ethnic Wear
  </li>
</ul>

                </div>

                <div>

                  <h4 className="font-semibold mb-3">
                    Accessories
                  </h4>

                <ul className="space-y-2 text-gray-600">
  <li className="before:content-['-'] hover:text-(--main-color) cursor-pointer before:mr-2">
    Fashion Jewellery
  </li>

  <li className="before:content-['-'] hover:text-(--main-color) cursor-pointer before:mr-2">
    Caps & Hats
  </li>

  <li className="before:content-['-'] hover:text-(--main-color) cursor-pointer before:mr-2">
    Necklaces
  </li>

  <li className="before:content-['-'] hover:text-(--main-color) cursor-pointer before:mr-2">
    Earrings
  </li>

  <li className="before:content-['-'] hover:text-(--main-color) cursor-pointer before:mr-2">
    Wrist Wear
  </li>
</ul>
                </div>

              </div>

            </AccordionContent>

          </AccordionItem>

        </Accordion>

      </div>
    </>
  );
}