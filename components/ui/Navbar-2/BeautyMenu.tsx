"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Plus, Minus } from "lucide-react";

export default function BeautyMenu() {
  return (
    <>
      <div className="hidden lg:block font-montserrat absolute left-full  w-50 bg-white shadow-xl border-l p-5">
        <ul className="space-y-3">
          <li className="cursor-pointer transition  link-line ">Make Up</li>

          <li className="cursor-pointer transition  link-line ">Skin Care</li>

          <li className="cursor-pointer transition  link-line ">
            premium Beauty
          </li>

          {/* Purses */}
          <li className="relative group">
            <button
              className="
          flex
          w-full
          items-center
          justify-between
          transition
           link-line 
        "
            >
              <span>More</span>
              <span>❯</span>
            </button>

            <div
              className="
          invisible
          absolute
          left-full
          top-0
          ml-3
          w-52
          rounded-md
          bg-white
          shadow-xl
          opacity-0
          transition-all
          duration-300
          group-hover:visible
          group-hover:opacity-100
          group-hover:ml-1
        "
            >
              <ul className="p-5 space-y-3">
                <li className="cursor-pointer  link-line ">
                  <a href="#!">fragrances</a>
                </li>

                <li className="cursor-pointer  link-line ">
                  <a href="#!">luxury beauty</a>
                </li>

                <li className="cursor-pointer  link-line ">
                  <a href="#!">hair care</a>
                </li>

                <li className="cursor-pointer  link-line ">
                  <a href="#!">tools &amp; brushes</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div className="lg:hidden font-montserrat">
        <Accordion>
          <AccordionItem value="bags">
            <AccordionTrigger
              className="
          group
          hover:no-underline
          [&_[data-slot=accordion-trigger-icon]]:hidden
        "
            >
              <div className="flex w-full items-center justify-between hover:text-(--main-color) cursor-pointer ">
                <span className="font-montserrat font-medium">
                  Beauty & persinal Care
                </span>

                <div>
                  <Plus
                    size={18}
                    className="block group-aria-expanded:hidden"
                  />
                  <Minus
                    size={18}
                    className="hidden group-aria-expanded:block"
                  />
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent>
              <ul className="space-y-3 pt-3 text-gray-600">
                <li className="before:content-['-'] before:mr-2 hover:scale-110  origin-left  cursor-pointer">
                  Makeup
                </li>

                <li className="before:content-['-'] before:mr-2 hover:scale-110  origin-left  cursor-pointer">
                  Skincare
                </li>

                <li className="before:content-['-'] before:mr-2 hover:scale-110  origin-left  cursor-pointer">
                  Premium Beauty
                </li>

                <li>
                  <Accordion>
                    <AccordionItem value="purses" className="border-none">
                      <AccordionTrigger
                        className="
                    group
                    py-0
                    hover:no-underline
                    [&_[data-slot=accordion-trigger-icon]]:hidden
                  "
                      >
                        <div className="flex w-full items-center justify-between cursor-pointer">
                          <span className="before:content-['-'] before:mr-2 inline-block origin-left hover:scale-110 ">
                            More
                          </span>

                          <div>
                            <Plus
                              className="block group-aria-expanded:hidden"
                              size={16}
                            />
                            <Minus
                              className="hidden group-aria-expanded:block"
                              size={16}
                            />
                          </div>
                        </div>
                      </AccordionTrigger>

                      <AccordionContent>
                        <ul className="space-y-2 pl-6 pt-2 text-gray-500">
                          <li className="before:content-['-'] before:mr-2 hover:scale-110  origin-left  cursor-pointer">
                            Fragrances
                          </li>

                          <li className="before:content-['-'] before:mr-2 hover:scale-110  origin-left  cursor-pointer">
                            Luxury Beauty
                          </li>

                          <li className="before:content-['-'] before:mr-2 hover:scale-110  origin-left  cursor-pointer">
                            Hair Care
                          </li>

                          <li className="before:content-['-'] before:mr-2 hover:scale-110  origin-left  cursor-pointer">
                            Tools & Brushes
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
