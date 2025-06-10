import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Section3 = () => {
  return (
    <section className="m-3 bg-[url(/assets/img2.jpg)] h-[60vh] rounded-md">
      <div className="root-container flex flex-col gap-5 items-center justify-center text-center h-full">
        <Image
          src="/logo.svg"
          alt="logo"
          width={100}
          height={100}
          className="w-10 h-10"
        />
        <h2 className="text-2xl md:text-4xl text-white font-semibold leading-tight md:w-[80%]">
          C&I PV Installations
        </h2>
        <p className="text-neutral-300 md:w-[80%] lg:w-[50%] text-sm md:text-lg">
          Advanced photovoltaic solutions tailored for medium to high voltage
          infrastructure.
        </p>
        <div className="flex flex-col md:flex-row gap-5 mt-5">
          <Link href="/get-started">
            <Button className="flex items-center bg-white text-basecolor w-56 py-6 rounded-full cursor-pointer hover:bg-earth hover:text-white transition-all duration-300">
              <span className="text-sm md:text-base">Schedule a Call</span>
              <MoveRight />
            </Button>
          </Link>
          <Link href="/shop">
            <Button className="flex items-center bg-white/25 backdrop-blur-2xl w-56 py-6 rounded-full cursor-pointer hover:bg-white/10 transition-all duration-500">
              <span className="text-sm md:text-base">Learn more</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section3;
