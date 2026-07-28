"use client";

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Minus, Plus } from "lucide-react";

function Item({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={title} className="border-none">

        <AccordionTrigger
          className="
            group
            py-2
            text-[14px]
            font-medium
            no-underline
            hover:no-underline
            hover:text-(--main-color)
            hover:text-[15px]
            transition-all
            duration-200
            [&>svg]:hidden
            [&_[data-slot=accordion-trigger-icon]]:hidden
          "
        >
          <div className="flex w-full items-center justify-between">

            <span>
              {title}
            </span>

            <div className="text-gray-500 group-hover:text-(--main-color)">
              <Plus
                size={15}
                className="block group-aria-expanded:hidden"
              />

              <Minus
                size={15}
                className="hidden group-aria-expanded:block"
              />
            </div>

          </div>
        </AccordionTrigger>


        <AccordionContent>
          <div
            className="
              pl-4
              pt-1
              flex
              flex-col
              gap-1.5
              text-[13px]
            "
          >
            {children}
          </div>
        </AccordionContent>

      </AccordionItem>
    </Accordion>
  );
}



const linkClass = `
  block
  py-1.5
  text-[13px]
  no-underline
  decoration-none
  hover:no-underline
  hover:text-(--main-color)
  hover:text-[14px]
  transition-all
  duration-200
  origin-left
`;



export default function PagesAccordion() {
  return (
    <div className="flex flex-col gap-0.5">


      <Item title="Vendor">

        <Link href="#" className={linkClass}>
          Vendor Dashboard
        </Link>

        <Link href="#" className={linkClass}>
          Vendor Profile
        </Link>

        <Link href="#" className={linkClass}>
          Become Vendor
        </Link>

      </Item>



      <Item title="Account">

        {[
          "Wishlist",
          "Cart",
          "Dashboard",
          "Login",
          "Register",
          "Contact",
          "Forget Password",
          "Profile",
          "Checkout",
          "Order Success",
        ].map((item) => (
          <Link
            key={item}
            href="#"
            className={linkClass}
          >
            {item}
          </Link>
        ))}


        <Link href="#" className={linkClass}>
          Order Tracking

          <span className="ml-2 text-[9px] font-bold text-(--main-color)">
            NEW
          </span>

        </Link>

      </Item>





      <Item title="Portfolio">

        <Item title="Grid">

          <Link href="#" className={linkClass}>
            Grid 2
          </Link>

          <Link href="#" className={linkClass}>
            Grid 3
          </Link>

          <Link href="#" className={linkClass}>
            Grid 4
          </Link>

        </Item>



        <Item title="Masonry">

          <Link href="#" className={linkClass}>
            Grid 2
          </Link>

          <Link href="#" className={linkClass}>
            Grid 3
          </Link>

          <Link href="#" className={linkClass}>
            Grid 4
          </Link>

          <Link href="#" className={linkClass}>
            Full Width
          </Link>

        </Item>

      </Item>





      <Item title="Compare">

        <Link href="#" className={linkClass}>
          Compare
        </Link>

        <Link href="#" className={linkClass}>
          Compare 2
        </Link>

      </Item>





      {[
        "About Us",
        "Search",
        "Review",
        "Collection",
        "Lookbook",
        "Site Map",
        "404",
        "Coming Soon",
        "FAQ",
      ].map((item) => (
        <Link
          key={item}
          href="#"
          className={linkClass}
        >
          {item}
        </Link>
      ))}


    </div>
  );
}