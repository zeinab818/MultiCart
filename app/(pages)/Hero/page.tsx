import Link from "next/link";
import HeroSlider from "./_components/HeroSlider";

export default function Hero() {
  return <>
    <div className="bg-[#F8F8F8] py-6 font-montserrat">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h1 className="mb-2 text-2xl sm:text-3xl font-medium text-[#222]">
          Gym Coords Set
        </h1>

        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 uppercase font-medium text-[#555] text-xs sm:text-sm">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>/</li>

            <li>
              <Link
                href="/products"
              >
                Product
              </Link>
            </li>

            <li>/</li>

            <li>
              Gym Coords Set
            </li>
          </ol>
        </nav>
      </div>
    </div>

    <div className="flex px-4 sm:px-18">
      <HeroSlider />
    </div>
  </>
}