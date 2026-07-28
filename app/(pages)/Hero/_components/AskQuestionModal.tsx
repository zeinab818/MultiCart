"use client";

import React from "react";
import Image from "next/image";
import { CircleHelp } from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import img from "../../../../assets/33.jpg";

export default function AskQuestionModal() {
  return (
    <Dialog>
      <DialogTrigger className="flex font-montserrat items-center gap-2 text-[#222] transition cursor-pointer">
       <CircleHelp className="size-5" />
      <span>Ask a Question</span>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg px-5 ">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold font-montserrat">
            Ask A Question
          </DialogTitle>
        </DialogHeader>

        {/* Product */}
      <div className="flex items-center gap-4 border bg-[#F8F8F8] p-4">
  <div className="relative h-28 w-24 overflow-hidden  bg-white">
    <Image
      src={img}
      alt="Wide Leg Shorts"
      fill
      className="object-cover object-top"
      sizes="96px"
    />
  </div>

          <div>
            <h4 className="font-semibold text-lg text-black">
              Wide Leg Shorts
            </h4>
            <p className="text-[#777]">
              $9.00
            </p>
          </div>
        </div>

        {/* Question */}
        <div className="space-y-2">
          <label
            htmlFor="question"
            className="font-medium text-[#777]"
          >
            Your Question <span>*</span>
          </label>

          <Textarea
            className="mt-2"
            id="question"
            rows={6}
            placeholder=" Your Question"
           
          />
        </div>

        <DialogFooter className="gap-2">
          <DialogClose 
          render={
             <Button className="px-5 py-5 cursor-pointer transition border-(--main-color) bg-white hover:bg-(--main-color) hover:text-white text-black">
              Cancel
            </Button>
          } >
           
          </DialogClose>

          <Button className="px-5 py-5  cursor-pointer transition  border-(--main-color) bg-(--main-color) hover:bg-white hover:text-(--main-color)">
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}