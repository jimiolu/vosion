import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";

const Section6 = () => {
  return (
    <section className="m-3">
      <div className="relative w-full h-[30vh]">
        <Image
          src="/assets/img6.png"
          alt="Abstrsct"
          fill
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-slate/80 rounded-lg" />
        <div className="justify-items-center text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-3 w-full px-4 md:px-8">
          <h4 className="text-2xl md:text-3xl font-medium capitalize text-white">
            Folar Palnet Batteries
          </h4>
          <p className="text-neutral-200 text-sm md:text-lg">
            100% energy independence.
          </p>
          <Link href="/get-started" className="mt-5 inline-block">
            <Button className="btn-white">
              <span className="text-sm md:text-base">Get Started</span>
              <MoveRight />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section6;
