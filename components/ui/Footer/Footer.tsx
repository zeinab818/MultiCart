"use client";

import Image from "next/image";
import Link from "next/link";

import LogoWhite from "../LogoWhite/LogoWhite";
import paymentImage from "../../../assets/payment.png";
import StickyBottomCart from "../Navbar-2/Cart/StickyBottomCart";

export default function Footer() {
  return (
    <footer className="mt-20 bg-[#212121] text-gray-300 ">
    <section className="px-4 sm:px-20 py-15">
  <div
    className="
     grid
    gap-12

    grid-cols-1

    md:grid-cols-3

    lg:grid-cols-5
    "
  >

    {/* Logo */}
    <div className="md:col-span-2 lg:col-span-1">
      <Link href="/">
        <LogoWhite />
      </Link>

      <p className="mt-6 text-[16px]">
        Discover the latest trends and enjoy seamless shopping with our exclusive collections.
      </p>

      <ul className="mt-8 space-y-4 text-sm">
        <li className="flex items-start gap-3">
          <i className="ri-map-pin-line mt-1"></i>
          <span className="hover:text-gray-400 transition link-line">
            Multikart Demo Store, Demo Store 345-659
          </span>
        </li>

        <li className="flex items-center gap-3">
          <i className="ri-phone-line"></i>
          <span className="hover:text-gray-400 transition link-line">
            Call Us: 123-456-7898
          </span>
        </li>

        <li className="flex items-center gap-3">
          <i className="ri-mail-line"></i>
          <span className="hover:text-gray-400 transition link-line">
            Email Us: Support@Multikart.com
          </span>
        </li>
      </ul>
    </div>


    {/* Categories */}
    <div className="md:col-span-1 lg:col-span-1">
      <h3 className="mb-6 text-[16px] font-semibold uppercase font-montserrat text-white">
        Categories
      </h3>

      <ul className="space-y-3 font-montserrat">
        <li><Link href="/" className="link-line">Baby Essentials</Link></li>
        <li><Link href="/" className="link-line">Bag Emporium</Link></li>
        <li><Link href="/" className="link-line">Books</Link></li>
        <li><Link href="/" className="link-line">Christmas</Link></li>
        <li><Link href="/" className="link-line">Classic Furnishings</Link></li>
        <li><Link href="/" className="link-line">Crystal Clarity Optic</Link></li>
      </ul>
    </div>


    {/* Useful Links */}
    <div className="md:col-span-1 lg:col-span-1">
      <h3 className="mb-6 text-[16px] font-semibold uppercase font-montserrat text-white">
        Useful Links
      </h3>

      <ul className="space-y-3 font-montserrat">
        <li><Link href="/" className="link-line">Home</Link></li>
        <li><Link href="/" className="link-line">Collections</Link></li>
        <li><Link href="/" className="link-line">About Us</Link></li>
        <li><Link href="/" className="link-line">Blogs</Link></li>
        <li><Link href="/" className="link-line">Offers</Link></li>
        <li><Link href="/" className="link-line">Search</Link></li>
      </ul>
    </div>


    {/* Help Center */}
    <div className="md:col-span-1 lg:col-span-1">
      <h3 className="mb-6 text-[16px] font-semibold uppercase font-montserrat text-white">
        Help Center
      </h3>

      <ul className="space-y-3 font-montserrat">
        <li><Link href="/account" className="link-line">My Account</Link></li>
        <li><Link href="/orders" className="link-line">My Orders</Link></li>
        <li><Link href="/track-order" className="link-line">Track Order</Link></li>
        <li><Link href="/wishlist" className="link-line">Wishlist</Link></li>
        <li><Link href="/faq" className="link-line">{"FAQ's"}</Link></li>
        <li><Link href="/contact" className="link-line">Contact Us</Link></li>
      </ul>
    </div>


    {/* Follow Us */}
    <div className="md:col-span-1 lg:col-span-1">
      <h3 className="mb-5 text-[16px] font-semibold uppercase font-montserrat text-white">
        Follow Us
      </h3>

      <p className="mb-6 font-montserrat leading-7 text-gray-200">
        Never miss anything from our store by signing up to our newsletter.
      </p>

      <form className="space-y-3 flex flex-col">
        <input
          type="email"
          placeholder="Enter Email Address"
          className="w-fit border text-black border-gray-600 bg-white px-4 py-3"
        />

        <button
          type="submit"
          className="w-fit bg-(--main-color) px-8 py-2 font-semibold text-white border-2 border-(--main-color)"
        >
          Subscribe
        </button>
      </form>

      <div className="mt-8 flex items-center gap-5">
        <a className="bg-[#383838]  px-2 py-1">
          <i className="ri-facebook-fill hover:text-(--main-color) cursor-pointer"></i>
        </a>

        <a className="bg-[#383838]  px-2 py-1">
          <i className="ri-twitter-fill hover:text-(--main-color) cursor-pointer"></i>
        </a>

        <a className="bg-[#383838]  px-2 py-1">
          <i className="ri-instagram-fill hover:text-(--main-color) cursor-pointer"></i>
        </a>

        <a className="bg-[#383838]  px-2 py-1">
          <i className="ri-pinterest-fill hover:text-(--main-color) cursor-pointer"></i>
        </a>
      </div>
    </div>

  </div>
</section>
       <StickyBottomCart />
  {/* Bottom Footer */}
<div className="border-t mb-15 md:mb-0 border-gray-700 bg-[#313131] px-4 sm:px-6 lg:px-20">
  <div
    className="
      mx-auto
      flex
      max-w-7xl
      flex-col
      items-center
      justify-between
      gap-4
      py-5
      md:flex-row
    "
  >
    <p
      className="
        flex
        flex-wrap
        items-center
        justify-center
        gap-2
        text-center
        text-md
        text-gray-400
        sm:text-md
        md:justify-start
        md:text-left
      "
    >
      <i className="ri-copyright-line shrink-0"></i>
      <span>
        2024-25 Themeforest Powered by Pixelstrap
      </span>
    </p>

    <Image
      src={paymentImage}
      alt="Payment Methods"
      width={280}
      height={35}
      className="
        h-auto
        w-70
        sm:w-60
        md:w-64
        lg:w-72
      "
    />
  </div>
</div>
    </footer>
  );
}