"use client";

import Image from "next/image";
import logoImage from "../../../assets/logo.png";

export default function Logo() {
    return (
       <Image
  src={logoImage}
  alt="Logo"
  className="h-7 sm:h-8 lg:h-10 w-auto"
  priority
/>
    );
}