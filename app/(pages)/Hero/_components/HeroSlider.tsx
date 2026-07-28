"use client";

import * as React from "react";
import Image from "next/image";
import type { CarouselApi } from "@/components/ui/carousel";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import img1 from "../../../../assets/17.jpg";
import img2 from "../../../../assets/18.jpg";
import img3 from "../../../../assets/199.jpg";
import ProductDetails from "./ProductDetails";
import TabsDemo from "./TabsDemo";
import RelatedProducts from "./RelatedProducts";

import Colors from "./Colors";


const images = [img1, img2, img3];

export default function HeroSlider() {
  const [mainApi, setMainApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!mainApi) return;

    setCurrent(mainApi.selectedScrollSnap());

    mainApi.on("select", () => {
      setCurrent(mainApi.selectedScrollSnap());
    });
  }, [mainApi]);

  return <>
  

  <section className="container">
      <div className="flex flex-col lg:flex-row  py-6 sm:py-10 px-2 sm:px-4 gap-6 lg:gap-10">

          <div className="w-full  lg:w-1/3 ">

            <Carousel 
              opts={{
                loop: true,
              }} 
              setApi={setMainApi} 
              className="w-full"
            >

              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="overflow-hidden rounded-xl border">
                      <Image
                        src={image}
                        alt={`Product ${index + 1}`}
                        className="h-80 sm:h-125 w-full object-cover"
                        priority={index === 0}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

             <CarouselPrevious className="left-4 lg:-left-4 cursor-pointer" />
<CarouselNext className="right-4 lg:-right-4 cursor-pointer" />

            </Carousel>


            <div className="mt-4 flex gap-3 justify-center items-center">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => mainApi?.scrollTo(index)}
                  className={`overflow-hidden rounded-lg border-2 transition ${
                    current === index
                      ? "border-blue-600"
                      : "border-gray-300"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    width={90}
                    height={90}
                    className="h-16 w-16 sm:h-20 sm:w-20 object-cover"
                  />
                </button>
              ))}
            </div>
            
          </div>


          <div className="w-full  lg:w-1/3  lg:sticky lg:top-6 self-start">
            <ProductDetails />
          </div>

          <div className="w-full  lg:w-1/3  lg:sticky lg:top-6 self-start">
            <Colors />
          </div>


      </div>
      
      <TabsDemo/>

      <div className="flex py-5 px-2 sm:px-5">
          <RelatedProducts/>
      </div>

  </section> 
  </>




}