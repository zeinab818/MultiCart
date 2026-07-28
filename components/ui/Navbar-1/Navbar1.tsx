"use client";

import Link from "next/link";

export default function TopHeader() {
  return (
    <div className="border-b hidden sm:block font-montserrat px-18 py-2 font-thin border-gray-700 bg-[#333333] text-[14px] text-gray-200">
      <div className="mx-auto flex  items-center justify-between  text-[#d9d9d9]">

        {/* Left */}
        <div className="hidden lg:flex items-center gap-8 md:hidden">
          <span>Welcome to Our store Multikart</span>

          <div className="flex items-center gap-3">
            <i className="ri-phone-fill  text-(--main-color)"></i>
            <span>Call Us: 123 - 456 - 7890</span>
          </div>
        </div>


        {/* Right */}
        <div className="ml-auto flex items-center gap-6 ">

          {/* Wishlist */}
          <Link
            href="/wishlist"
            className="transition-colors hover:text-[var(--main-color)]"
          >
            <i className="ri-heart-fill"></i>
          </Link>


          {/* Account Dropdown */}
          <div className="group relative cursor-pointer">

            <div className="flex items-center gap-2 transition-colors hover:text-[var(--main-color)]">
              <i className="ri-user-fill" ></i>
              <span>My Account</span>
            
            </div>


            {/* Dropdown */}
            <div className="absolute right-0 top-full z-50 mt-2 hidden w-40 rounded-md border border-gray-200 bg-white py-2 text-gray-700 shadow-lg group-hover:block">

              <Link
                href="/login"
                className="block px-4 py-2 transition hover:bg-gray-100"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="block px-4 py-2 transition hover:bg-gray-100"
              >
                Register
              </Link>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}