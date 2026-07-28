"use client";

import Link from "next/link";
import Logo from "../logo/Logo";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  
  SheetTrigger,
} from "@/components/ui/sheet"

import Languages from "./Languages";
import LeftNavbar from "./LeftNavbar"
import RightNavbar from "./RightNavbar";
import Features from "./Featuers";
import Products from "./Products";
import Shop from "./Shop";
import Pages from "./Pages";
import Cart from "./Cart/Cart";

export default function NavbarMenu() {
  return (
    <div className="flex 
      items-center 
      justify-center 
      sm:justify-between

      sm:px-18
      py-4
      sm:py-8
      bg-white 
      shadow-md">


      {/* Left */}
      <div className="flex items-center gap-8 sm:gap-6  cursor-pointer  ">
        <Sheet>
        <SheetTrigger className="cursor-pointer">
          <i className="ri-bar-chart-horizontal-line text-[28px]"></i></SheetTrigger>
        
        <LeftNavbar/>
        </Sheet>
        <Logo />
      </div>



      {/* Center */}
      <NavigationMenu
        className="
       
       ml-10
       sm:ml-auto
        font-montserrat
       
        tracking-wider
        capitalize
        "
      >

        <NavigationMenuList className="flex       
 items-center gap-5  ">


        <>
          {/* Home */}
          <NavigationMenuItem className="hidden lg:block hover:bg-transparent " >
            <NavigationMenuLink
              render={
                <Link
                  href="/"
                  className="transition-colors text-[17px] hover:text-(--main-color) hover:bg-transparent"
                >
                  Home
                </Link>
              }
            />
          </NavigationMenuItem>
            {/* Feature */}
          <NavigationMenuItem className="relative hidden lg:block hover:bg-transparent ">


            <span
              className="
              absolute cursor-pointer
              -top-4
              left-1/2
              -translate-x-1/2
              bg-(--main-color)
              px-2
              py-0.5
              text-[10px]
              font-semibold
              uppercase
              text-white
              "
            >

              New

              <span
                className="
                absolute
                left-2/3
                top-full
                -translate-x-1/2
                border-[5px]
                border-transparent
                border-t-(--main-color)
                cursor-pointer
                "
              />

            </span>



            <NavigationMenuTrigger className="text-[17px] cursor-pointer  hover:text-(--main-color)">
              Feature
            </NavigationMenuTrigger>


<NavigationMenuContent className="!overflow-visible">
  <div className="fixed font-montserrat left-1/2 -translate-x-1/2 bg-white px-10 py-8  w-[80vw] max-w-[1600px]">
    <Features />
  </div>
</NavigationMenuContent>
          </NavigationMenuItem>


       {/* Shop */}
<NavigationMenuItem className="hidden lg:block hover:bg-transparent ">

  <NavigationMenuTrigger className="text-[17px] cursor-pointer  hover:text-(--main-color) hover:bg-transparent">
    Shop
  </NavigationMenuTrigger>


  <NavigationMenuContent className="font-montserrat">

    <Shop/>

  </NavigationMenuContent>

</NavigationMenuItem>
              {/* Product */}
          <NavigationMenuItem className="hidden lg:block hover:bg-transparent">


            <NavigationMenuTrigger className="cursor-pointer hover:bg-transparent text-[17px] hover:text-(--main-color)">
              Product
      </NavigationMenuTrigger>



           <NavigationMenuContent className="!overflow-visible">
              <div className="fixed font-montserrat left-1/2 -translate-x-1/2 bg-white px-10 py-8  w-[80vw] max-w-[1600px]">
                <Products />
              </div>
            </NavigationMenuContent>



          </NavigationMenuItem>
        
          {/* Pages */}
          <NavigationMenuItem className="hidden lg:block hover:bg-transparent">


            <NavigationMenuTrigger className="cursor-pointer hover:bg-transparent text-[17px] hover:text-(--main-color)">
              Pages
            </NavigationMenuTrigger>



        <NavigationMenuContent className="overflow-visible p-0">
  <div className="fixed">
    <Pages />
  </div>
</NavigationMenuContent>

          </NavigationMenuItem>

             <NavigationMenuItem className="hidden lg:block hover:bg-transparent">


            <NavigationMenuTrigger className="cursor-pointer hover:bg-transparent text-[17px] hover:text-(--main-color)">
              Blogs
            </NavigationMenuTrigger>



        <NavigationMenuContent className="overflow-visible p-0">
  <div className="fixed">
    <ul className="w-56 p-3 space-y-3 text-gray-600">

      <li className="link-line-small cursor-pointer ">
        Left Sidebar
      </li>

      <li className="link-line-small cursor-pointer ">
        Right Sidebar
      </li>

      <li className="link-line-small cursor-pointer ">
        No Sidebar
      </li>

      <li className="link-line-small cursor-pointer ">
        Blog Details
      </li>

    </ul>
  </div>
</NavigationMenuContent>

          </NavigationMenuItem>
         
          <NavigationMenuItem className=" lg:hidden ">
          <Sheet >
            <SheetTrigger >
            
        <i className="ri-bar-chart-horizontal-line text-[28px] hover:bg-transparent cursor-pointer text-(--main-color)" />
    
    </SheetTrigger>

    <RightNavbar />
  </Sheet>
</NavigationMenuItem>
        </>
         
        <>
          {/* Search */}
          <NavigationMenuItem className="ml-3 hidden md:block">

            <NavigationMenuLink
              className="p-0 text-2xl text-[#6a6a6a] hover:text-(--main-color)"
              render={
                <Link href="/search">
                  <i className="ri-search-line"></i>
                </Link>
              }
            />

          </NavigationMenuItem>



          {/* Language */}
          <NavigationMenuItem className="hidden md:block">

            <NavigationMenuTrigger
              className="
              bg-transparent
              p-0
              text-2xl
              text-[#6a6a6a]
              [&>svg]:hidden
              hover:text-(--main-color)
              cursor-pointer
           
              "
            >

              <i className="ri-equalizer-2-line"></i>

            </NavigationMenuTrigger>



            <NavigationMenuContent>

              <ul className="w-40 p-2">

                <Languages />

              </ul>

            </NavigationMenuContent>


          </NavigationMenuItem>

          {/* Cart */}
          <NavigationMenuItem className="hidden md:block">
  <Sheet>
    <SheetTrigger>
      <NavigationMenuLink className="p-0 text-2xl text-[#6a6a6a]">
        <div className="relative cursor-pointer">
          <i className="ri-shopping-cart-line"></i>

          <span
            className="
              absolute
              -right-2
              -top-2
              flex
              h-4.5
              w-4.5
              items-center
              justify-center
              rounded-full
              bg-(--main-color)
              text-[10px]
              font-bold
              text-white
            "
          >
            2
          </span>
        </div>
      </NavigationMenuLink>
    </SheetTrigger>

    <Cart />
  </Sheet>
</NavigationMenuItem>

        </>
        </NavigationMenuList>

      </NavigationMenu>
     {/* Mobile Bottom Navigation */}
      <div
        className="
          fixed
          bottom-0
          left-0
          right-0
          z-9999

          items-center
          justify-around
          border-t
          bg-white
          py-3
          shadow-[0_-2px_10px_rgba(0,0,0,0.08)]
          hidden max-md:flex
        "
      >
        {/* Search */}
        <Link
          href="#"
          className="flex flex-col items-center hover:text-(--main-color)"
        >
          <i className="ri-search-line text-[22px]" />
        </Link>

        {/* Wishlist */}
        <Link
          href="#"
          className="flex flex-col items-center hover:text-(--main-color)"
        >
          <i className="ri-heart-line text-[22px]" />
        </Link>


       {/* Cart */}
<Sheet>
  <SheetTrigger
  render={
    <button className="relative flex flex-col items-center hover:text-(--main-color)">
      <i className="ri-shopping-cart-line text-[22px] cursor-pointer" />

      <span className="absolute -top-1 left-3 flex h-4 w-4 items-center justify-center rounded-full bg-(--main-color) text-[10px] text-white">
        2
      </span>
    </button>
  }
/>

  <Cart />
</Sheet>
        {/* User */}
           <div className="group relative cursor-pointer">

            <div className="flex items-center gap-2 transition-colors hover:text-[var(--main-color)]">
              <i className="ri-user-line text-[22px]" ></i>
        
            
            </div>


            {/* Dropdown */}
            <div className="absolute bottom-full hidden z-50 mt-2 right-0 w-40 rounded-md border border-gray-200 bg-white py-2 text-gray-700 shadow-lg group-hover:block">

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

        {/* Menu */}
         <div className="group relative cursor-pointer">

            <div className="flex items-center gap-2 transition-colors hover:text-[var(--main-color)]">
         
                      <i className="ri-equalizer-2-line text-[22px]"></i>

            
            </div>


            {/* Dropdown */}
            <div className="absolute bottom-full right-0  z-50  hidden w-40 rounded-md border border-gray-200 bg-white py-2 text-gray-700 shadow-lg group-hover:block">

                  

                <Languages />

            </div>

          </div>

      </div>
                

    </div>
  );
}





function MenuItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {

  return (
    <li>

      <NavigationMenuLink
        render={
          <Link
            href={href}
            className="
            block
            rounded-md
            px-3
            py-2
            text-sm
            transition-colors
            hover:bg-muted
            "
          >
            {children}
          </Link>
        }
      />

    </li>
  );
}