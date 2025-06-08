"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Megamenu1 from "./ui/mega-menu1";
import Megamenu2 from "./ui/mega-menu2";
import Megamenu3 from "./ui/mega-menu3";
import Minimenu from "./ui/mini-menu";
import Megamenu4 from "./ui/mega-menu4";
import { Button } from "./ui/button";
import MobileNavigation from "./MobileNavigation";

export default function Header() {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ${
        isSticky ? "bg-primary shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="hidden lg:flex root-container items-center justify-between px-6 py-6">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center">
            {/* <Image src="/logo.svg" alt="Logo" width={30} height={30} className="w-10 h-10" /> */}
            <span className="text-3xl font-semibold text-white lowercase tracking-tight">
              vo<span className="text-earth">sion</span>
            </span>
          </div>
        </Link>

        <div className="flex items-center space-x-5">
          {/* Navigation Links */}
          <Megamenu1 />
          {/* <Megamenu2 /> */}
          <Megamenu3 />
          <Megamenu4 />

          {/* Actions: Language + CTA */}
          <Minimenu className="text-white w-auto focus:outline-none" />

          <Link href="/contact">
            <Button className="bg-white text-basecolor rounded-full cursor-pointer px-6 py-1 hover:bg-transparent hover:border-2 hover:border-earth hover:text-white transition-all duration-500">
              Get Started
            </Button>
          </Link>
        </div>
      </div>

      <div className="root-container lg:hidden">
        <MobileNavigation />
      </div>
    </header>
  );
}
