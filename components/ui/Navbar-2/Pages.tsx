import React from "react";

export default function Pages() {
  return (
    <ul className="w-64 p-3 space-y-2 bg-white font-montserrate">

      {/* Vendor */}
      <li className="group relative">
        <div className="flex justify-between items-center link-line-small cursor-pointer">
          Vendor
          <span>›</span>
        </div>

        <ul className="
          hidden
          group-hover:block
          absolute
          right-full
          
          top-0
          w-56
          bg-white
          p-3
          shadow-md
          space-y-2
        ">
          <li className="link-line-small cursor-pointer">
            Vendor Dashboard
          </li>

          <li className="link-line-small cursor-pointer">
            Vendor Profile
          </li>

          <li className="link-line-small cursor-pointer">
            Become Vendor
          </li>
        </ul>
      </li>


      {/* Account */}
      <li className="group relative">

        <div className="flex justify-between items-center link-line-small cursor-pointer">
          Account
          <span>›</span>
        </div>

        <ul className="
          hidden
          group-hover:block
          absolute
          right-full
          
          top-0
          w-56
          bg-white
          p-3
          shadow-md
          space-y-2
        ">
          <li className="link-line-small">Wishlist</li>
          <li className="link-line-small">Cart</li>
          <li className="link-line-small">Dashboard</li>
          <li className="link-line-small">Login</li>
          <li className="link-line-small">Register</li>
          <li className="link-line-small">Contact</li>
          <li className="link-line-small">Forget Password</li>
          <li className="link-line-small">Profile</li>
          <li className="link-line-small">Checkout</li>
          <li className="link-line-small">Order Success</li>

          <li className="link-line-small flex items-center  gap-2">
            Order Tracking
            <span className=" font-bold  text-(--main-color)">
              NEW
            </span>
          </li>
        </ul>

      </li>


      {/* Portfolio */}
      <li className="group relative">

        <div className="flex justify-between items-center link-line-small cursor-pointer">
          Portfolio
          <span>›</span>
        </div>


        <ul className="
          hidden
          group-hover:block
          absolute
          right-full
          top-0
          w-56
          bg-white
          p-3
          shadow-md
          space-y-2
        ">

          <li className="group/sub relative">

            <div className="flex justify-between link-line-small">
              Grid
              <span>›</span>
            </div>

            <ul className="
              hidden
              group-hover/sub:block
              absolute
              left-full
              top-0
              bg-white
              w-40
              p-3
              shadow-md
              space-y-2
            ">
              <li className="link-line-small">Grid 2</li>
              <li className="link-line-small">Grid 3</li>
              <li className="link-line-small">Grid 4</li>
            </ul>

          </li>


          <li className="group/sub relative">

            <div className="flex justify-between link-line-small">
              Masonry
              <span>›</span>
            </div>

            <ul className="
              hidden
              group-hover/sub:block
              absolute
              left-full
              top-0
              bg-white
              w-40
              p-3
              shadow-md
              space-y-2
            ">
              <li className="link-line-small">Grid 2</li>
              <li className="link-line-small">Grid 3</li>
              <li className="link-line-small">Grid 4</li>
              <li className="link-line-small">Full Width</li>
            </ul>

          </li>

        </ul>

      </li>


      <li className="link-line-small">About Us</li>
      <li className="link-line-small">Search</li>
      <li className="link-line-small">Review</li>


      {/* Compare */}
      <li className="group relative">

        <div className="flex justify-between link-line-small">
          Compare
          <span>›</span>
        </div>

        <ul className="
          hidden
          group-hover:block
          absolute
                  right-full

          top-0
          bg-white
          w-40
          p-3
          shadow-md
          space-y-2
        ">
          <li className="link-line-small">Compare</li>
          <li className="link-line-small">Compare-2</li>
        </ul>

      </li>


      <li className="link-line-small">Collection</li>
      <li className="link-line-small">Lookbook</li>
      <li className="link-line-small">Site Map</li>
      <li className="link-line-small">404</li>
      <li className="link-line-small">Coming Soon</li>
      <li className="link-line-small">FAQ</li>


    </ul>
  );
}