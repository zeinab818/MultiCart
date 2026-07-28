"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Minus, Plus } from "lucide-react";

export default function AccMenu() {
  return (
    <>
  

      <div className="hidden lg:block font-montserrat  absolute left-full  w-56 bg-white shadow-xl border-l p-5">
        <ul className="space-y-3">
          <li className="cursor-pointer link-line">
            fashion jewellery
          </li>

          <li className="cursor-pointer link-line">
            caps and hats
          </li>

          <li className="cursor-pointer link-line">
            precious jewellery
          </li>

          {/* more */}
          <li className="relative group">
            <button className="flex w-full items-center justify-between link-line">
              <span>more..</span>
              <span>❯</span>
            </button>

            <div
              className="
                invisible
                absolute
                left-full
                top-0
                ml-3
                w-56
                bg-white
                shadow-xl
                p-5
                opacity-0
                transition-all
                duration-300
                group-hover:visible
                group-hover:opacity-100
                group-hover:ml-1
              "
            >
              <ul className="space-y-3">
                <li className="cursor-pointer link-line">
                  necklaces
                </li>

                <li className="cursor-pointer link-line">
                  earrings
                </li>

                <li className="cursor-pointer link-line">
                  wrist wear
                </li>

                {/* accessories */}
                <li className="relative group">
                  <button className="flex w-full items-center justify-between link-line">
                    <span>accessories</span>
                    <span>❯</span>
                  </button>

                  <div
                    className="
                      invisible
                      absolute
                      left-full
                      top-0
                      ml-3
                      w-56
                      bg-white
                      shadow-xl
                      p-5
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:visible
                      group-hover:opacity-100
                      group-hover:ml-1
                    "
                  >
                    <ul className="space-y-3">
                      <li className="cursor-pointer link-line">
                        ties
                      </li>

                      <li className="cursor-pointer link-line">
                        cufflinks
                      </li>

                      <li className="cursor-pointer link-line">
                        pockets squares
                      </li>

                      <li className="cursor-pointer link-line">
                        helmets
                      </li>

                      <li className="cursor-pointer link-line">
                        scarves
                      </li>

                      {/* more... */}
                      <li className="relative group">
                        <button className="flex w-full items-center justify-between link-line">
                          <span>more...</span>
                          <span>❯</span>
                        </button>

                        <div
                          className="
                            invisible
                            absolute
                            left-full
                            top-0
                            ml-3
                            w-56
                            bg-white
                            shadow-xl
                            p-5
                            opacity-0
                            transition-all
                            duration-300
                            group-hover:visible
                            group-hover:opacity-100
                            group-hover:ml-1
                          "
                        >
                          <ul className="space-y-3">
                            <li className="cursor-pointer link-line">
                              accessory gift sets
                            </li>

                            <li className="cursor-pointer link-line">
                              travel accessories
                            </li>

                            <li className="cursor-pointer link-line">
                              phone cases
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="cursor-pointer link-line">
                  belts & more
                </li>

                <li className="cursor-pointer link-line">
                  wearable
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

 

      <div className="lg:hidden">
        <Accordion >
          <AccordionItem value="accessories">
            <AccordionTrigger
              className="
                group
                hover:no-underline
               [&_[data-slot=accordion-trigger-icon]]:hidden
               py-3
              "
            >
              <div className="flex w-full items-center justify-between hover:text-(--main-color) cursor-pointer">
                <span className="font-montserrat  font-medium">
                  Accessories
                </span>

                <div>
                  <Plus size={18} className="block group-aria-expanded:hidden" />
                  <Minus size={18} className="hidden group-aria-expanded:block" />
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent>
              <ul className="space-y-3 pt-3 text-gray-600">

                <li className="before:content-['-'] before:mr-2 hover:scale-110 origin-left cursor-pointer">
                  fashion jewellery
                </li>

                <li className="before:content-['-'] before:mr-2 hover:scale-110 origin-left cursor-pointer">
                  caps and hats
                </li>

                <li className="before:content-['-'] before:mr-2 hover:scale-110 origin-left cursor-pointer">
                  precious jewellery
                </li>

                {/* more */}
                <li>
                  <Accordion >
                    <AccordionItem value="more" className="border-none">
                      <AccordionTrigger
                        className="
                          group
                          py-0
                          hover:no-underline
                         [&_[data-slot=accordion-trigger-icon]]:hidden
                        "
                      >
                        <div className="flex w-full items-center justify-between">
                          <span className="before:content-['-'] before:mr-2">
                            more..
                          </span>

                          <div>
                           <Plus size={18} className="block group-aria-expanded:hidden" />
<Minus size={18} className="hidden group-aria-expanded:block" />
                          </div>
                        </div>
                      </AccordionTrigger>

                      <AccordionContent>
                        <ul className="space-y-2 pl-6">

                          <li className="before:content-['-'] before:mr-2 hover:scale-110 origin-left cursor-pointer">
                            necklaces
                          </li>

                          <li className="before:content-['-'] before:mr-2 hover:scale-110 origin-left cursor-pointer">
                            earrings
                          </li>

                          <li className="before:content-['-'] before:mr-2 hover:scale-110 origin-left cursor-pointer">
                            wrist wear
                          </li>

                          {/* accessories */}
                          <li>
                            <Accordion >
                              <AccordionItem
                                value="sub-accessories"
                                className="border-none"
                              >
                                <AccordionTrigger
                                  className="
                                    group
                                    py-0
                                    hover:no-underline
                                   [&_[data-slot=accordion-trigger-icon]]:hidden
                                  "
                                >
                                  <div className="flex w-full items-center justify-between">
                                    <span className="before:content-['-'] before:mr-2">
                                      accessories
                                    </span>

                                    <div>
                                    <Plus size={18} className="block group-aria-expanded:hidden" />
<Minus size={18} className="hidden group-aria-expanded:block" />
                                    </div>
                                  </div>
                                </AccordionTrigger>

                                <AccordionContent>
                                  <ul className="space-y-2 pl-6">

                                    <li className="before:content-['-'] before:mr-2">
                                      ties
                                    </li>

                                    <li className="before:content-['-'] before:mr-2">
                                      cufflinks
                                    </li>

                                    <li className="before:content-['-'] before:mr-2">
                                      pockets squares
                                    </li>

                                    <li className="before:content-['-'] before:mr-2">
                                      helmets
                                    </li>

                                    <li className="before:content-['-'] before:mr-2">
                                      scarves
                                    </li>

                                    {/* more... */}
                                    <li>
                                      <Accordion
                                   
                                 
                                      >
                                        <AccordionItem
                                          value="last-more"
                                          className="border-none"
                                        >
                                          <AccordionTrigger
                                            className="
                                              group
                                              py-0
                                              hover:no-underline
                                             [&_[data-slot=accordion-trigger-icon]]:hidden
                                            "
                                          >
                                            <div className="flex w-full items-center justify-between">
                                              <span className="before:content-['-'] before:mr-2">
                                                more...
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
                                            <ul className="space-y-2 pl-6">
                                              <li className="before:content-['-'] before:mr-2">
                                                accessory gift sets
                                              </li>

                                              <li className="before:content-['-'] before:mr-2">
                                                travel accessories
                                              </li>

                                              <li className="before:content-['-'] before:mr-2">
                                                phone cases
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
                          </li>

                          <li className="before:content-['-'] before:mr-2 hover:scale-110 origin-left cursor-pointer">
                            belts & more
                          </li>

                          <li className="before:content-['-'] before:mr-2 hover:scale-110 origin-left cursor-pointer">
                            wearable
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