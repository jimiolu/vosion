"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { MarqueeItem } from "@/constants";

const Marquee = () => {
  return (
    <div className="py-10 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={MarqueeItem} direction="right" speed="slow" />
    </div>
  );
};

export default Marquee;
