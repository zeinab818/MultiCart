"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Plus, Minus } from "lucide-react";

export default function FootWears() {
  return (
    <>
      {/* Desktop */}
      <div className="hidden font-montserrat lg:block absolute left-full w-50 bg-white shadow-xl border-l p-5">
        <ul className="space-y-3">
          <li className="cursor-pointer transition link-line">
            Sport Shoes
          </li>

          <li className="cursor-pointer transition link-line">
            Formal Shoes
          </li>

          <li className="cursor-pointer transition link-line">
            Casual Shoes
          </li>
        </ul>
      </div>

      {/* Mobile */}
      <div className="lg:hidden font-montserrat">
        <Accordion >
          <AccordionItem value="footwear">
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
                  Footwear
                </span>

                <div>
                  <Plus size={18} className="block group-aria-expanded:hidden" />
                  <Minus size={18}  className="hidden group-aria-expanded:block" />
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent>
              <ul className="space-y-3 pt-3 text-gray-600">
                <li className="before:content-['-'] before:mr-2 hover:scale-110 origin-left cursor-pointer">
                  Sport Shoes
                </li>

                <li className="before:content-['-'] before:mr-2 hover:scale-110 origin-left cursor-pointer">
                  Formal Shoes
                </li>

                <li className="before:content-['-'] before:mr-2 hover:scale-110 origin-left cursor-pointer">
                  Casual Shoes
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}