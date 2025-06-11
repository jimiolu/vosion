"use client";

import { CompanyLinks } from "@/constants";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Megamenu4 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center text-base font-normal text-white hover:text-button/80 cursor-pointer">
        <span className="text-base">Company</span>
        <ChevronDown className="size-4 text-neutral-300" />
      </button>

      {/* Mega dropdown full screen  */}
      <div
        className={`mega-menu ${
          isOpen
            ? "scale-y-100 opacity-100 visible h-auto py-10"
            : "scale-y-0 opacity-0 invisible h-0"
        }`}
      >
        <div className="root-container flex py-10 gap-10 h-full">
          <div className="flex-1 space-y-10">
            <div className="space-y-3">
              <h3 className="text-2xl font-medium text-primary">Company</h3>
              <span className="text-neutral-600 font-light">
                Turning bold ideas into lasting impact through smart innovation
                and solid implementation.
              </span>
            </div>
            <div className="max-w-96 h-1/2 overflow-hidden rounded-lg shadow-sm">
              <Image
                src="https://images.pexels.com/photos/7078666/pexels-photo-7078666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="solutions"
                width={500}
                height={500}
                className="size-full object-cover"
              />
            </div>
          </div>
          <div className="flex-2 pl-10">
            <div className="grid grid-cols-2 gap-y-15 gap-x-10">
              {CompanyLinks.map((item) => (
                <div key={item.id} className="flex flex-col gap-3">
                  <Link
                    href={item.link}
                    className="text-primary text-lg font-medium hover:underline"
                  >
                    {item.title}
                  </Link>
                  <span className="text-sm text-neutral-500 font-light">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Megamenu4;
