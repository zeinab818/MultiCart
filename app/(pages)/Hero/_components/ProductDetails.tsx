import React from 'react'
import Image from "next/image";
import Link from "next/link";
import DeliveryModal from './DeliveryModal';
import ProductAccordion from './ProductAccordion'
import img from  "../../../../assets/trending.gif";
import {  StarIcon} from 'lucide-react';
import AskQuestionModal from './AskQuestionModal';
export default function ProductDetails() {
  return (
    <div className="font-montserrat">

      <div className="flex gap-2">
         <Image src={img} alt="trending" width={30} height={30} />
         <p className="font-montserrat">Selling fast! 4 people have this in their carts.</p>
      </div>
      <h2 className="text-3xl font-bold ">
        Gym Coords Set (Brown)
      </h2>

      <div className="flex flex-col gap-2 mt-3">
        <div className="flex gap-3">
                <div className="flex stars">
                  {Array.from({ length: 4 }).map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`w-5 h-5 ${
                          i < 5
                            ? "fill-yellow-500 text-yellow-500"
                            : "fill-gray-300 text-gray-300"
                        }`}
                        
                      />
                      
  
                ))}
                <StarIcon className="text-yellow-500 w-5 h-5"/>
                </div>
        
                <span className="text-gray-300">|</span>

                <Link
                  href="#"
                  className="underline text-red-500 transition"
                >
                  20 Reviews
  </Link>

        </div>

        <div className="price  font-montserrat ">
          <p className="text-gray-500 text-2xl">MRP: <span className="text-(--main-color) font-semibold">$15.00</span></p>
          <p className="text-gray-400 text-sm">Inclusive all the text</p>
        </div>
        <div className="delivery">
          <div className="flex flex-wrap gap-6 mt-6">
              <DeliveryModal/>
              <AskQuestionModal/>
          </div>
        </div>
      </div>



      {/* Accordion */}
      <ProductAccordion/>
      

    </div>
  );
}