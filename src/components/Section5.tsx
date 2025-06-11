import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";

const Section5 = () => {
  return (
    <section className="m-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="relative w-full h-[40vh] lg:h-[50vh]">
          <video
            src="/assets/video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-lg"
          ></video>
          <div className="absolute inset-0 bg-slate-900/30 rounded-lg" />
          <div className="flex flex-col items-center text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-3 w-full px-4 md:px-8">
            <h4 className="text-xl md:text-2xl font-medium capitalize text-white">
              Explore our Modern Grid Plants.
            </h4>
            <p className="text-neutral-200 text-sm md:text-lg">
              Discover our installation gallery.
            </p>
            <Link href="/get-started" className="mt-5">
              <Button className="btn-white">
                <span className="text-sm md:text-base">View Gallery</span>
                <MoveRight />
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative w-full h-[40vh] lg:h-[50vh]">
          <Image
            src="/assets/img.jpg"
            alt="PayApp"
            fill
            sizes="auto"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-blue-900/60 rounded-lg" />
          <div className="justify-items-center text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-3 w-full px-4 md:px-8">
            <h4 className="text-xl md:text-2xl font-medium capitalize text-white">
              Pay and monitor your energy usage.
            </h4>
            <p className="text-neutral-200 text-sm md:text-lg">
              VosionPay app allows you to pay and monitor your energy usage at a
              go.
            </p>
            <Link href="/get-started" className="mt-5 inline-block">
              <Button className="btn-white">
                <span className="text-sm md:text-base">Download App</span>
                <MoveRight />
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative w-full h-[40vh] lg:h-[50vh]">
          <Image
            src="/assets/img4.png"
            alt="PayApp"
            fill
            sizes="auto"
            className="w-full h-full object-cover rounded-lg"
          />
          {/* <div className="absolute inset-0 bg-blue-900/60 rounded-lg" /> */}
          <div className="justify-items-center text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-3 w-full px-4 md:px-8">
            <h4 className="text-xl md:text-2xl font-medium capitalize text-basecolor">
              Discover our IQ battery
            </h4>
            <p className="text-neutral-600 text-sm md:text-lg">
              Discover the future of energy saving with our IQ battery.
            </p>
            <Link href="/get-started" className="mt-5 inline-block">
              <Button className="btn-white">
                <span className="text-sm md:text-base">Discover Now</span>
                <MoveRight />
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative w-full h-[40vh] lg:h-[50vh]">
          <Image
            src="/assets/img5.jpg"
            alt="PayApp"
            fill
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-teal-900/60 rounded-lg" />
          <div className="justify-items-center text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-3 w-full px-4 md:px-8">
            <h4 className="text-xl md:text-2xl font-medium capitalize text-white">
              See our success stories
            </h4>
            <p className="text-neutral-200 text-sm md:text-lg">
              See what customers say about us.
            </p>
            <Link href="/get-started" className="mt-5 inline-block">
              <Button className="btn-white">
                <span className="text-sm md:text-base">See Reviews</span>
                <MoveRight />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
