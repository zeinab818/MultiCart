"use client";

import Image from "next/image";
import logoImage from "../../../assets/logo-white.png";

export default function LogoWhite() {
    return (
        <Image
        src={logoImage}
        alt="Logo"
        className="h-6 sm:h-7 lg:h-8 w-auto"
        priority
        />
    );
}