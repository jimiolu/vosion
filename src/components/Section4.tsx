import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { MoveRight, ShoppingCart } from "lucide-react";

const Section4 = () => {
  return (
    <section className="m-3 bg-primary rounded-md">
      <div className="root-container pt-20 md:pt-5 pb-20 justify-items-center md:-space-y-14 lg:-space-y-20">
        <div className="overflow-hidden w-full">
          <Image
            src="/assets/img3.png"
            alt="ProductGrid"
            width={1000}
            height={1000}
            className="w-full object-cover"
          />
        </div>

        <div className="justify-items-center text-center space-y-5">
          <h2 className="text-2xl md:text-4xl text-white font-semibold leading-tight">
            #GridIndependence
          </h2>
          <p className="text-neutral-300 text-base md:text-lg">
            We have the best storage system now.
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
                <ShoppingCart />
                <span className="text-base">Shop Now</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
