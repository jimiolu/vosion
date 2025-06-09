import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";

const Section2 = () => {
  return (
    <section className="m-3 bg-primary rounded-md">
      <div className="root-container pt-20 md:pt-5 pb-20 justify-items-center md:-space-y-14 lg:-space-y-20">
        <div className="overflow-hidden w-full">
          <Image
            src="/assets/img.png"
            alt="ProductGrid"
            width={1000}
            height={1000}
            sizes=""
            className="w-full object-cover"
          />
        </div>

        <div className="justify-items-center text-center space-y-5">
          <h2 className="text-2xl md:text-4xl text-white font-semibold leading-tight">
            #1 Mini-Grid Green Energy Provider in West Africa
          </h2>
          <p className="text-neutral-300 md:w-[80%] lg:w-[70%] text-base md:text-lg">
            Due to the rapid growth of the power sector in West Africa, we are
            top #1 Mini-Grid Green Energy Provider in the West.
          </p>
          <div className="flex flex-col md:flex-row gap-5 mt-5">
            <Link href="/get-started">
              <Button className="flex items-center bg-white text-basecolor w-56 py-6 rounded-full cursor-pointer hover:bg-earth hover:text-white transition-all duration-300">
                <span className="text-base">Get Started</span>
                <MoveRight />
              </Button>
            </Link>
            <Link href="/shop">
              <Button className="flex items-center bg-white/25 backdrop-blur-2xl w-56 py-6 rounded-full cursor-pointer hover:bg-white/10 transition-all duration-500">
                <span className="text-base">Learn more</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
