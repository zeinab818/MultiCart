import { ThumbsDown, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const questions = [
  {
    question: "Does the dress offer any UV protection?",
    answer:
      "Yes, the dress offers UV protection. It blocks harmful UV rays, providing an additional layer of sun safety.",
  },
  {
    question:
      "Are there any pockets, and if so, how many and where are they located?",
    answer:
      "Yes, there are two pockets, one on each side of the garment.",
  },
  {
    question: "Is the fabric breathable and quick-drying?",
    answer:
      "Yes, the fabric is breathable, allowing excellent airflow. It is also quick-drying, ensuring comfort during and after activities.",
  },
];

export default function QuestionsTab() {
  return (
    <div className="space-y-6 font-montserrat">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h3 className="text-[16px] font-medium text-[#222] md:text-2xl">
          Have Doubts Regarding This Product?
        </h3>

        <Button
          className="
            w-full
            md:w-fit
            rounded-none
            bg-[#F8F8F8]
            px-5
            py-3
            text-base
            text-black
            hover:bg-[#F8F8F8]
          "
        >
          Post Your Question
        </Button>
      </div>

      {/* Questions */}
      <div className="space-y-8">
        {questions.map((item, index) => (
          <div key={index} className="border-b last:border-none gap-1">
            {/* Question */}
            <div className="flex items-start  justify-between gap-1">
              <div className="flex gap-3">
                <span className=" self-start border bg-[#F8F8F8] px-2 py-1 text-sm font-semibold">
                  Q{index + 1}
                </span>

                <h4 className=" font-semibold  text-[#222] text-sm md:text-xl ">
                  {item.question}
                </h4>
              </div>

              <div className="flex shrink-0 items-center gap-5 text-[#777]">
                <button className="flex cursor-pointer items-center gap-1">
                  <ThumbsUp className="size-4 fill-current" />
                  <span>0</span>
                </button>

                <button className="flex cursor-pointer items-center gap-1">
                  <ThumbsDown className="size-4 fill-current" />
                  <span>0</span>
                </button>
              </div>
            </div>

            {/* Answer */}
            <div className="mt-5 flex gap-3">
              <span className="self-start shrink-0 bg-(--main-color) px-2 py-1.5 font-bold text-white">
                A{index + 1}
              </span>

              <p className="text-sm leading-7 text-[#777] md:text-base md:leading-8">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}