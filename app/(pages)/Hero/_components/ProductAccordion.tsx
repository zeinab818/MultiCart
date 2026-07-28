import Image from "next/image";

import paymentImg from "../../../../assets/payments.png";
import securePaymentImg from "../../../../assets/secure_payments.png";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Truck, ArrowLeftRight } from "lucide-react";

export default function ProductAccordion() {
  return (
    <Accordion
      defaultValue={["information"]}
      className="mt-8 w-full gap-2 font-montserrat"
    >
      {/* Product Description */}
      <AccordionItem value="description">
        <AccordionTrigger className="text-lg px-3 boder-  bg-gray-100 font-medium cursor-pointer">
          Product Description
        </AccordionTrigger>

        <AccordionContent className="text-[#777] leading-8">
          &quot;Gym Coords Set&quot; offers a complete workout ensemble for the modern
          fitness enthusiast. This coordinated set includes everything needed
          for a stylish and functional gym session, from moisture-wicking tops
          to supportive leggings, ensuring both comfort and performance during
          workouts.
        </AccordionContent>
      </AccordionItem>
      {/* Information */}
      <AccordionItem value="information">
        <AccordionTrigger className="text-lg px-3 bg-gray-100 font-medium cursor-pointer">
          Information
        </AccordionTrigger>

        <AccordionContent className="space-y-8">

          {/* Product Info */}
          <div >
            <h4 className="mb-2 pt-2 text-lg font-semibold">
              Product Info
            </h4>

           <ul className="grid grid-cols-2 gap-y-3 text-[#777] border border-dashed pb-4">
                <li className="list-disc ml-5">
                  SKU: SP18 (COPY)
                </li>

                <li className="list-disc ml-5">
                  Unit: 1 Item
                </li>

                <li className="list-disc ml-5">
                  Weight: 150 Gms
                </li>

                <li className="list-disc ml-5">
                  Stock Status: In Stock
                </li>

                <li className="list-disc ml-5">
                  Quantity: 40 Items Left
                </li>
              </ul>
          </div>

          {/* Delivery Details */}
          <div>
            <h4 className="mb-2 text-lg font-medium">
              Delivery Details
            </h4>

            <div className="space-y-2 text-[#777]">
              <div className="flex items-center gap-2">
                <Truck className="size-5 " />
                <p>Your order is likely to reach you within 7 days.</p>
              </div>

              <div className="flex items-center gap-2">
                <ArrowLeftRight className="size-5 " />
                <p>Hassle free returns within 7 Days.</p>
              </div>
            </div>
          </div>

          {/* Safe Checkout */}
          
            <div className="relative mt-8 border border-dashed p-6 pt-8">
            <h4 className="absolute -top-4 left-4 bg-white px-2 text-lg font-medium">
              Guaranteed Safe Checkout
            </h4>

            <Image
              src={paymentImg}
              alt="Payments"
              className="w-full max-w-xs"
            />
      
           
          </div>

          {/* Secure Checkout */}
          <div className="relative mt-8 border border-dashed p-6 pt-8">
            <h4 className="absolute -top-4 left-4 bg-white px-2 text-lg font-medium">
              Secure Checkout
            </h4>

            <Image
              src={securePaymentImg}
              alt="Secure Payments"
              className="w-full max-w-xs"
            />
          </div>

        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}