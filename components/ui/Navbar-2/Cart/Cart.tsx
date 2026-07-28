"use client";

import { useState } from "react";


import Image from "next/image";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Minus, Plus, Pencil, Trash2, Truck, X } from "lucide-react";

import image1 from "@/assets/65.jpg";
import image2 from "@/assets/66.jpg";
import image3 from "@/assets/67.jpg";
import CartEdit from "./CartEdit";

const initialCartItems = [
  {
    id: 1,
    name: "Couture Edge",
    image: image1,
    price: 6.74,
    quantity: 1,
  },
  {
    id: 2,
    name: "Classic Jacket",
    image: image2,
    price: 7.84,
    quantity: 1,
  },
  {
    id: 3,
    name: "Urban Chic",
    image: image3,
    price: 3.84,
    quantity: 2,
  },
];

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems);

const increaseQuantity = (id: number) => {
  setCartItems((prev) =>
    prev.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};

const decreaseQuantity = (id: number) => {
  setCartItems((prev) =>
    prev.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
  );
};
const subtotal = cartItems.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);
  return (
    <SheetContent
      side="right"
      className="[&>[data-slot='sheet-close']]:hidden overflow-y-auto  flex w-105 flex-col p-0 font-montserrat z-[9999999999999999999]"
    >
      {/* Header */}
      <SheetHeader className="border-b px-6 py-5">
        <div className="flex items-center justify-between">
          <SheetTitle className="text-xl font-semibold">
            My Cart ({cartItems.length})
          </SheetTitle>

          <SheetClose  className="cursor-pointer bg-gray-100 px-2 py-2">
          
              <X className="h-4 w-4" />
      
          </SheetClose>
        </div>
      </SheetHeader>

{/* Shipping Progress */}
<div className="border-b px-6 py-5">
  <p className="mb-3 text-sm text-gray-600">
    Spend <span className="font-semibold">$20.96</span> More And Enjoy Free
    Shipping!
  </p>

<div className="h-2 w-full overflow-y-auto rounded-full bg-gray-200">
  <div
    className="relative flex h-full items-center justify-end bg-(--main-color)"
    style={{ width: "58%" }}
  >
    <div
      className="absolute inset-0 animate-pulse opacity-30"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(255,255,255,.35) 8px, rgba(255,255,255,.35) 16px)",
      }}
    />

    <div className="relative z-10 flex h-6 w-6 translate-x-1/2 items-center justify-center rounded-full bg-(--main-color)">
      <i className="ri-truck-line text-sm text-white"></i>
    </div>
  </div>
</div>
</div>

<div className="flex items-center justify-end border-b px-6 py-4">


  <button className="text-sm font-medium text-(--main-color)">
    Clear Cart
  </button>
</div>
  

<div className="flex-1 space-y-5 overflow-y-auto px-6 py-5">
  {cartItems.map((item) => (
    <div key={item.id} className="flex gap-4 border-b pb-5">

      <Image
        src={item.image}
        alt={item.name}
        width={90}
        height={110}
        className="rounded-md object-cover"
      />

  
      <div className="flex flex-1 items-start justify-between">
      
        <div>
          <h4 className="text-md font-semibold">{item.name}</h4>

          <p className="mt-2 text-sm text-gray-500">
            {item.quantity} × ${item.price}
          </p>
        </div>

        <div className="flex flex-col items-end gap-4">
          <div className="flex gap-2 ">
            <div  className="cursor-pointer">
              <CartEdit/>
            </div>

            <Button size="icon" variant="ghost" className="cursor-pointer">
              <Trash2 size={16} />
            </Button>
          </div>

          <div className="flex items-center rounded-md border">
            <Button
  variant="ghost"
  size="icon"
  onClick={() => decreaseQuantity(item.id)}
>
  <Minus size={14} />
</Button>

            <span className="w-8 text-center text-sm">
              {item.quantity}
            </span>

         <Button
  variant="ghost"
  size="icon"
  onClick={() => increaseQuantity(item.id)}
>
  <Plus size={14} />
</Button>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

      {/* Footer */}
      <div className="stricky border-t bg-white px-6 py-5 ">
        <div className="mb-5 flex items-center justify-between">
          <h4 className="text-md font-semibold">Sub Total</h4>

          <span className="text-xl font-bold text-(--main-color)">
            ${subtotal.toFixed(2)}
          </span>
        </div>

       <div className="flex items-center gap-2">
  <Button
    variant="outline"
    className="h-12 flex-1 border-(--main-color) bg-(--main-color) text-white hover:bg-(--main-color) hover:text-white"
  >
    View Cart
  </Button>

  <Button className="h-12 flex-1 bg-(--main-color) text-white hover:bg-(--main-color) hover:text-white">
    Check Out
  </Button>
</div>
      </div>
    </SheetContent>
  );
}