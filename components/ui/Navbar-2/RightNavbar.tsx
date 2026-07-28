"use client";

import {
  SheetClose,
  SheetContent,
} from "@/components/ui/sheet";

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import FeaturesAccordion from "./FeaturesAccordion"
import ShopAccordion from "./ShopAccordion ";
import ProductsAccordion from "./ProductsAccordion"
import PagesAccordion from "./PagesAccordion";

function MenuAccordion({
  title,
  badge = false,
  children,
}: {
  title: string;
  badge?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Accordion >
      <AccordionItem value={title}>
        <AccordionTrigger
          className="
            group
            px-5
            py-4
            cursor-pointer
            hover:text-(--main-color)
            no-underline
            [&>svg]:hidden
            [&_[data-slot=accordion-trigger-icon]]:hidden
          "
        >
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-medium">{title}</span>

              {badge && (
                <span className="relative bg-(--main-color) text-white text-[9px] font-semibold uppercase px-2 py-[2px]">
                  New
                </span>
              )}
            </div>

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

        <AccordionContent className="pb-2">
          <div className="flex flex-col gap-2 pl-8">
            {children}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
export default function RightNavbar() {
  return (
    <SheetContent side="right"   className="w-[320px] p-0 h-screen  font-montserrat cursor-pointer ">

      {/* Header */}
      <div className="border-b px-5 py-4">
        <h2 className="text-lg font-montserrat font-semibold text-(--main-color)">
          MENU
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto">

        <SheetClose asChild>
          <Link
            href="#"
            className="block border-b px-5 py-4 hover:text-(--main-color)"
          >
            Home
          </Link>
        </SheetClose>

     
     <MenuAccordion title="Feature" badge>
      <FeaturesAccordion />
    </MenuAccordion>


       <MenuAccordion title="Shop">
        <ShopAccordion />
      </MenuAccordion>

          <MenuAccordion title="Product">
              <ProductsAccordion/>
        </MenuAccordion>

        <MenuAccordion title="Pages">
          <PagesAccordion/>
        </MenuAccordion>


         <MenuAccordion title="Blogs">
           <ul className="w-56 p-3 space-y-3 text-gray-600">

      <li className="hover:text-(--main-color) hover:scale-x-[1.05]
    origin-left
    cursor-pointer
    transition-all
    duration-200 ">
        Left Sidebar
      </li>

      <li className="hover:text-(--main-color) hover:scale-x-[1.05]
    origin-left
    cursor-pointer
    transition-all
    duration-200  ">
        Right Sidebar
      </li>

      <li className="hover:text-(--main-color) hover:scale-x-[1.05]
    origin-left
   transition-all
    duration-200 cursor-pointer ">
        No Sidebar
      </li>

      <li className="hover:text-(--main-color) hover:scale-x-[1.05]
    origin-left

    transition-all
    duration-200 cursor-pointer ">
        Blog Details
      </li>

    </ul>
        </MenuAccordion>


        
      </div>

    </SheetContent>
    
  );
}

