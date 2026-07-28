import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import img from "../../../../assets/555.jpg";
import img2 from "../../../../assets/666.jpg";
import img3 from "../../../../assets/777.jpg";
import img4 from "../../../../assets/888.jpg";
import img5 from "../../../../assets/999.jpg";
import img6 from "../../../../assets/1000.jpg";

const cards = [
  {
    image: img,
    
   name: "Glamour Gaze",
                                        
    rate: 4.5,
    reviews: 24,
    price: 120,
 
    badge: "Sale",
    content:"Chic Mini Dress",
  },
  {
    image: img2,
    
   name: "Urban Chic",
    rate: 4.5,
    reviews: 18,
    price: 95,
    oldPrice: 120,
    badge: "New",
    content:"Purple Mini Dress"
  },
  {
    image: img3,
    
   name: "Glamour Gaze",
    rate: 4.5,
    reviews: 12,
    price: 80,

    badge: "Sale",
    content:"Backless Crop Top",
  },
  {
    image: img4,
    
   name: "Glamour Gaze",
    rate: 4.5,
    reviews: 31,
    price: 150,
 
    badge: "Hot",
    content:"Chic Crop Top"
  },
  {
    image: img5,
    
   name: "Urban Chic",
    rate: 4.5,
    reviews: 27,
    price: 130,
    oldPrice: 170,
    badge: "Sale",
    content:"Tie and Dye Chiffon Top"
  },
  {
    image: img6,
    
      name: "Couture Edge",

    rate: 4.5,
    reviews: 40,
    price: 210,
    oldPrice: 250,
    badge: "New",
    content:"Stripped Bodycon Dress"
  },
  {
    image: img,
    
   name: "Glamour Gaze",
                                        
    rate: 4.5,
    reviews: 24,
    price: 120,

    badge: "Sale",
    content:"Chic Mini Dress",
  },
  {
    image: img2,
    
   name: "Urban Chic",
    rate: 4.5,
    reviews: 18,
    price: 95,
    oldPrice: 120,
    badge: "New",
    content:"Purple Mini Dress"
  },
  {
    image: img3,
    
   name: "Glamour Gaze",
    rate: 4.5,
    reviews: 12,
    price: 80,
    oldPrice: 110,
    badge: "Sale",
    content:"Backless Crop Top",
  },
  {
    image: img4,
    
   name: "Glamour Gaze",
    rate: 4.5,
    reviews: 31,
    price: 150,
    oldPrice: 180,
    badge: "Hot",
    content:"Chic Crop Top"
  },
  {
    image: img5,
    
   name: "Urban Chic",
    rate: 4.5,
    reviews: 27,
    price: 130,
    oldPrice: 170,
    badge: "Sale",
    content:"Tie and Dye Chiffon Top"
  },
  {
    image: img6,
    
      name: "Couture Edge",

    rate: 4.5,
    reviews: 40,
    price: 210,

    badge: "New",
    content:"Stripped Bodycon Dress"
  },
 
  
];

export default function RelatedProducts() {
  return (
    <section className="space-y-6 w-full pt-10">
      <h2 className="font-montserrat text-2xl font-semibold  border-b py-2">
        Related Products
      </h2>

      <Carousel opts={{ loop: true }} className="border-none">
        <CarouselContent className="-ml-4  w-full">
          {cards.map((card, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-1/2 lg:basis-1/4 xl:basis-[20%] md:basis-1/3"
            >
              <Card className="w-full overflow-hidden  border-b  px-2 py-2 rounded-none">
                <div className="relative lg:h-80 md:h-60 h-50 w-full overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.name}
                    fill
                    className="object-cover"
                  />

                  <Badge className="absolute left-4 text-[16px] px-1 py-1 bottom-2 rounded-none bg-white text-gray-[#222]">
                    <i className="ri-star-s-fill text-[#ffb321] text-[16px]"></i>
                    {card.rate}
                  </Badge>
                </div>

                <div className="space-y-1 md:p-4">
                  <h3 className="font-semibold md:text-xl text-[16px]">{card.name}</h3>

                  <p className=" md:text-sm text-xs text-gray-500 truncate">{card.content}</p>
<div className="flex items-center gap-2">
  <span className="text-lg font-bold text-black">
    ${card.price}
  </span>

  {card.oldPrice && (
    <>
      <span className="text-sm text-gray-400 line-through">
        ${card.oldPrice}
      </span>

      <span className=" text-xs font-semibold text-(--main-color)">
        -
        {Math.round(
          ((card.oldPrice - card.price) / card.oldPrice) * 100
        )}
        %
      </span>


    </>
  )}
</div>

<div className="offer-container overflow-hidden border-t">
  <div className="offer-marquee flex w-max items-center gap-2 whitespace-nowrap  pt-3 ">
    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-red-500">
      <i className="ri-discount-percent-fill"></i>
    </span>

    <span>Limited Time Offer: 5% off</span>
    <span className="flex h-6 w-6 ml-5 items-center justify-center rounded-full bg-red-100 text-red-500">
      <i className="ri-discount-percent-fill"></i>
    </span>

    <span>Limited Time Offer: 5% off</span>
    <span className="flex h-6 w-6 ml-5 items-center justify-center rounded-full bg-red-100 text-red-500">
      <i className="ri-discount-percent-fill"></i>
    </span>

    <span>Limited Time Offer: 5% off</span>
    <span className="flex h-6 w-6 ml-5 items-center justify-center rounded-full bg-red-100 text-red-500">
      <i className="ri-discount-percent-fill"></i>
    </span>

    <span>Limited Time Offer: 5% off</span>
  </div>
</div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      <CarouselPrevious className="hidden lg:flex" />
<CarouselNext className="hidden lg:flex" />
      </Carousel>
    </section>
  );
}
