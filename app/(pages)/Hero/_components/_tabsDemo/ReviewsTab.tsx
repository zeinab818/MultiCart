
import { Button } from "@/components/ui/button";

const ratings = [
  { star: 5, percent: 90, total: 9, color: "#19a340" }, 
  { star: 4, percent: 75, total: 7, color: "#19a340" }, 
  { star: 3, percent: 50, total: 5, color: "#19a340" }, 
  { star: 2, percent: 25, total: 3, color: "#ffb321" }, 
  { star: 1, percent: 10, total: 1, color: "#ff4d4f" },
];
const reviews = [
  {
    name: "John Due",
    date: "10 Aug 2024 11:05 AM",
    rating: 3,
    comment:
      "Wow! This fashion product exceeded all my expectations! From the moment I opened the package, I could tell it was something special. The quality of the materials is outstanding.",
  },
  {
    name: "Rhoda Mayer",
    date: "10 Aug 2024 11:05 AM",
    rating: 5,
    comment:
      "Nice! The attention to detail in the craftsmanship is truly impressive. Not only does it look fabulous, but it feels incredibly comfortable too. I've received so many compliments whenever I wear it.",
  },
  {
    name: "Jack Deo",
    date: "10 Aug 2024 11:05 AM",
    rating: 4,
    comment:
      "The product boasts impressive craftsmanship,  meticulous attention to detail, and a stunning appearance, resulting in a comfortable feel and numerous compliments.",
  },
];
export default function ReviewsTab() {
  return (
    <div className="grid gap-10 xl:grid-cols-12 font-montserrat">


      <div className="xl:col-span-5">

        <div className="border border-gray-100 p-4">

          <div className="flex items-center gap-4 border-b border-gray-100 pb-2">

            <h2 className="text-4xl font-bold text-[#222]">
              4.00
            </h2>

            <div>

            <div className="mb-1 flex gap-1 text-[#ffb321]">
  {Array.from({ length: 4 }).map((_, i) => (
    <i key={i} className="ri-star-s-fill text-2xl"></i>
  ))}

  <i className="ri-star-s-line text-2xl"></i>
</div>

              <p className="text-[#777] text-[16px] ">
                Based on 25 Ratings
              </p>

            </div>

          </div>

          <div className="mt-3">

            <h4 className="text-xl font-semibold">
              Review this product
            </h4>

            <p className="mt-1 text-[#777]">
              Let other customers know what you think.
            </p>

            <div className="mt-1 space-y-1">

              {ratings.map((item) => (
                <div
                  key={item.star}
                  className="flex items-center gap-2"
                >

                  <div className="flex w-10 items-center gap-1">

                    <span>{item.star}</span>

                    <i className="ri-star-s-fill text-2xl"></i>

                  </div>

                  <div className="h-2 flex-1  rounded-full bg-gray-200">

                   <div
                          className="h-full rounded-full"
                          style={{
                            width: `${item.percent}%`,
                            backgroundColor: item.color,
                          }}
                        />
                                          </div>

                  <span className="w-5 text-right text-[#777]">
                    {item.total}
                  </span>

                </div>
              ))}

            </div>

            <Button
              className="mt-8 w-full bg-(--main-color) px-8 hover:bg-white hover:text-(--main-color) rounded-none py-6"
            >
              Write Review
            </Button>

          </div>

        </div>

      </div>


  <div className="xl:col-span-7 overflow-auto h-100">
  <div className="space-y-6">
    {reviews.map((review, index) => (
      <div
        key={index}
        className="
          flex
          flex-col
          md:flex-row
          gap-4
          border
          border-gray-200
          bg-[#F8F8F8]
          p-4
          md:p-5
        "
      >
        {/* Avatar */}
        <div
          className="
            flex
            h-14
            w-full
            md:h-14
            md:w-14
            shrink-0
            items-center
            justify-center
            bg-white
            text-3xl
            md:text-4xl
            font-bold
            text-black
          "
        >
          {review.name.charAt(0)}
        </div>

        {/* Content */}
        <div className="flex-1">
          <div
            className="
              flex
              flex-col
              gap-2
              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            <div>
              <h4 className="text-base md:text-lg font-semibold text-[#222]">
                {review.name}
              </h4>

              <span className="text-xs md:text-sm text-[#999]">
                {review.date}
              </span>
            </div>

            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <i
                  key={i}
                  className={`text-lg ${
                    i < review.rating
                      ? "ri-star-fill text-[#ffb321]"
                      : "ri-star-line text-[#ffb321]"
                  }`}
                ></i>
              ))}
            </div>
          </div>

          <p className="mt-3 text-sm md:text-base leading-7 text-[#777]">
            {review.comment}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
    </div>
  );
}