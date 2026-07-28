"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function ShopAccordion() {
  const [open, setOpen] = useState(false);

  return (


  
          <ul className="space-y-4 pl-4 text-[14px] text-gray-600">

            <li className="link-line-small before:content-['-'] before:mr-2 cursor-pointer hover:text-(--main-color)">
              Tab Style
                <span className=" font-bold text-sm pl-2 text-(--main-color)">
              NEW
            </span>
            </li>

            <li className="link-line-small before:content-['-'] before:mr-2 cursor-pointer hover:text-(--main-color)">
              Top Filter
            </li>

            <li className="link-line-small before:content-['-'] before:mr-2 cursor-pointer hover:text-(--main-color)">
              Modern
            </li>

            <li className="link-line-small before:content-['-'] before:mr-2 cursor-pointer hover:text-(--main-color)">
              Left Sidebar
            </li>

            <li className="link-line-small before:content-['-'] before:mr-2 cursor-pointer hover:text-(--main-color)">
              Right Sidebar
            </li>

            <li className="link-line-small before:content-['-'] before:mr-2 cursor-pointer hover:text-(--main-color)">
              No Sidebar
            </li>

            <li className="link-line-small before:content-['-'] before:mr-2 cursor-pointer hover:text-(--main-color)">
              Category Slider
            </li>

            <li className="link-line-small before:content-['-'] before:mr-2 cursor-pointer hover:text-(--main-color)">
              Sidebar Popup
            </li>

            <li className="link-line-small before:content-['-'] before:mr-2 cursor-pointer hover:text-(--main-color)">
              Metro
            </li>

            <li className="link-line-small before:content-['-'] before:mr-2 cursor-pointer hover:text-(--main-color)">
              Full Width
            </li>

            <li className="link-line-small before:content-['-'] before:mr-2 cursor-pointer hover:text-(--main-color)">
              Load More
            </li>

            <li className="link-line-small before:content-['-'] before:mr-2 cursor-pointer hover:text-(--main-color)">
              Two Grid
            </li>

            <li className="link-line-small before:content-['-'] before:mr-2 cursor-pointer hover:text-(--main-color)">
              Three Grid
            </li>

            <li className="link-line-small before:content-['-'] before:mr-2 cursor-pointer hover:text-(--main-color)">
              Four Grid
            </li>

            <li className="link-line-small before:content-['-'] before:mr-2 cursor-pointer hover:text-(--main-color)">
              List View
            </li>

          </ul>
    
  );
}