"use client";





import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Plus, Minus } from "lucide-react";

export default function BagsMenu() {
  return (
  <>
  <div className="hidden lg:block absolute px-3 font-montserrat left-full top-[20%] w-50 bg-white shadow-xl  ">

  <ul className="space-y-3 px-3 py-3">

    <li className="cursor-pointer transition  link-line ">
      Shopper Bags
    </li>

    <li className="cursor-pointer transition  link-line ">
      Laptop Bags
    </li>

    <li className="cursor-pointer transition  link-line ">
      Clutches
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
        <span>Purses</span>
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
            Purses
          </li>

          <li className="cursor-pointer  link-line ">
            Wallets
          </li>

          <li className="cursor-pointer  link-line ">
            Leathers
          </li>

          <li className="cursor-pointer  link-line ">
            Satchels
          </li>

        </ul>
      </div>

    </li>

  </ul>

</div>







<div className="lg:hidden">
  <Accordion>
    <AccordionItem value="bags">
      <AccordionTrigger
        className="
          group
          hover:no-underline
         

          [&_[data-slot=accordion-trigger-icon]]:hidden
        "
      >




        <div className="flex font-montserrat w-full items-center justify-between hover:text-(--main-color) cursor-pointer ">
          <span className="font-montserrat font-medium">
            Bags
          </span>

          <div>
           <Plus size={18} className="block group-aria-expanded:hidden" />
<Minus size={18} className="hidden group-aria-expanded:block" />
          </div>
        </div>
      </AccordionTrigger>

      <AccordionContent>
        <ul className="space-y-3 pt-3 text-gray-600 font-montserrat">

          <li className="before:content-['-'] before:mr-2 hover:scale-110  origin-left  cursor-pointer">
            Shopper Bags
          </li>

          <li className="before:content-['-'] before:mr-2 hover:scale-110  origin-left  cursor-pointer">
            Laptop Bags
          </li>

          <li className="before:content-['-'] before:mr-2 hover:scale-110  origin-left  cursor-pointer">
            Clutches
          </li>

          {/* Purses */}
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
                      Purses
                    </span>

                    <div>
                     <Plus size={18} className="block group-aria-expanded:hidden" />
<Minus size={18} className="hidden group-aria-expanded:block" />
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent>
                  <ul className="space-y-2 pl-6 pt-2 text-gray-500">

                    <li className="before:content-['-'] before:mr-2 hover:scale-110  origin-left  cursor-pointer">
                      Purses
                    </li>

                    <li className="before:content-['-'] before:mr-2 hover:scale-110  origin-left  cursor-pointer">
                      Wallets
                    </li>

                    <li className="before:content-['-'] before:mr-2 hover:scale-110  origin-left  cursor-pointer">
                      Leathers
                    </li>

                    <li className="before:content-['-'] before:mr-2 hover:scale-110  origin-left  cursor-pointer">
                      Satchels
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