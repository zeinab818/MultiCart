"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import { useState } from "react";
import DesTab from "./_tabsDemo/DesTab";
import ReviewsTab from "./_tabsDemo/ReviewsTab";
import QuestionsTab from "./_tabsDemo/QuestionsTab";

export default function TabsDemo() {
  const [value, setValue] = useState("description");

  const tabs = ["description", "review", "question"];

  return (
    <section className="font-montserrat">
      <Tabs
        value={value}
        onValueChange={setValue}
        className="border"
      >
        <TabsList
        className="  flex
    w-full
    justify-between
    md:justify-start
    gap-2
    md:gap-5
    border
    rounded-none
    bg-[#F8F8F8]
    px-2
    md:px-5
    py-9
    md:py-9
    md:*:flex-none!"

          onKeyDown={(e) => {
            const current = tabs.indexOf(value);

            if (e.key === "ArrowRight") {
              e.preventDefault();
              setValue(tabs[(current + 1) % tabs.length]);
            }

            if (e.key === "ArrowLeft") {
              e.preventDefault();
              setValue(tabs[(current - 1 + tabs.length) % tabs.length]);
            }
          }}
        >
          <TabsTrigger
            value="description"
            className="
              rounded-none
              border-b-2
              border-transparent
              px-3
              md:px-5
              py-5
              md:py-6
              text-ms
              md:text-lg
              font-semibold
              text-black
              bg-white
              data-active:border-[#EC8951]
              data-active:bg-[#EC8951]
              data-active:text-white
              data-active:shadow-none
            "
          >
            Description
          </TabsTrigger>

          <TabsTrigger
            value="review"
            className="
              rounded-none
              border-b-2
              border-transparent
              px-3
              md:px-5
              py-5
              md:py-6
              text-ms
              md:text-lg
              font-semibold
              text-black
              bg-white
data-active:border-[#EC8951]
              data-active:bg-[#EC8951]
              data-active:text-white
              data-active:shadow-none
            "
          >
            Review
          </TabsTrigger>

          <TabsTrigger
            value="question"
            className="
              rounded-none
              border-b-2
              border-transparent
              px-3
              md:px-5
              py-5
              md:py-6
              text-ms
              md:text-lg
              font-semibold
              text-black
              bg-white

           data-active:border-[#EC8951]
              data-active:bg-[#EC8951]
              data-active:text-white
              data-active:shadow-none
            "
          >
            Q &amp; A
          </TabsTrigger>
        </TabsList>

        <div className="px-2">
          <TabsContent value="description" className="mt-8">
            <DesTab />
          </TabsContent>

          <TabsContent value="review" className="mt-8">
            <ReviewsTab />
          </TabsContent>

          <TabsContent value="question" className="mt-8">
            <QuestionsTab />
          </TabsContent>
        </div>
      </Tabs>
    </section>
  );
}