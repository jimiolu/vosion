"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { slides } from "@/constants";
import Link from "next/link";
import { Button } from "./ui/button";
import { MoveRight, ShoppingCart } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="brightness-75 object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center text-center text-white px-4 md:w-[80%] lg:w-1/2 mx-auto">
                <h1 className="text-3xl md:text-5xl font-medium leading-tight lg:w-[80%]">
                  {slide.title}
                </h1>
                <p className="text-sm md:text-lg text-neutral-300 w-[90%] lg:w-[80%]">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col md:flex-row gap-5 mt-5">
                  <Link href="/get-started">
                    <Button className="btn-white">
                      <span className="text-sm md:text-base">Get Started</span>
                      <MoveRight />
                    </Button>
                  </Link>
                  <Link href="/shop">
                    <Button className="btn-transparent">
                      <ShoppingCart />
                      <span className="text-sm md:text-base">Shop Now</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
