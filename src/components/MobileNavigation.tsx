"use client";

import { ChevronLeft, ChevronRight, Logs, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Minimenu from "./ui/mini-menu";
import { CompanyLinks, ProjectLinks, SolutionLinks } from "@/constants";

const MobileNavigation = () => {
  const [open, setOpen] = useState<null | string>(null);

  return (
    <nav className="relative">
      {/* Main menu trigger  */}
      <div className="root-container flex items-center justify-between py-6">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center ">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={30}
              height={30}
              className="w-6 h-6"
            />
            <span className="text-3xl font-medium text-white lowercase tracking-tight">
              vosion
            </span>
          </div>
        </Link>

        <button onClick={() => setOpen("main")}>
          <Logs className="text-white" size={30} />
        </button>
      </div>

      {/* Full Screen overlay  */}
      {open && (
        <div className="fixed inset-0 bg-white shadow-sm p-6 z-50 overflow-y-auto h-screen">
          {/* close button  */}
          <div>
            {open === "main" && (
              <h2 className="text-sm font-medium uppercase text-neutral-500 pt-5">
                Menu
              </h2>
            )}
            <button
              onClick={() => setOpen(null)}
              className="absolute top-4 right-4 text-neutral-600 pt-5"
            >
              <X size={30} />
            </button>
          </div>

          {/* Back Button */}
          {open !== "main" && (
            <button
              onClick={() => setOpen("main")}
              className="absolute top-4 left-4 text-neutral-600 pt-5"
            >
              <ChevronLeft size={30} />
            </button>
          )}

          {/* Main menu  */}
          {open === "main" && (
            <div className="flex flex-col justify-between h-[calc(100vh-200px)]">
              <ul className="mt-10 space-y-15">
                <li>
                  <button
                    className="flex gap-2 items-center justify-center text-basecolor"
                    onClick={() => setOpen("solutions")}
                  >
                    <span className="text-xl">Services</span>
                    <ChevronRight className="size-4" />
                  </button>
                </li>
                <li>
                  <button
                    className="flex gap-2 items-center justify-center text-basecolor"
                    onClick={() => setOpen("projects")}
                  >
                    <span className="text-xl">Projects</span>
                    <ChevronRight className="size-4" />
                  </button>
                </li>
                <li>
                  <button
                    className="flex gap-2 items-center justify-center text-basecolor"
                    onClick={() => setOpen("company")}
                  >
                    <span className="text-xl">Company</span>
                    <ChevronRight className="size-4" />
                  </button>
                </li>
              </ul>

              {/* Lang option  */}
              <Minimenu className="text-basecolor w-auto focus:outline-none text-lg font-medium" />
            </div>
          )}

          {/* Solutions menu  */}
          {open === "solutions" && (
            <div className="mt-20">
              <div className="space-y-2 border-b border-gray-200 pb-6">
                <h2 className="text-xl font-medium text-primary">Solutions</h2>
                <p className="text-neutral-500 font-light text-sm">
                  Solving global problems through local implementation.
                </p>
              </div>

              <div className="mt-10 space-y-8">
                {SolutionLinks.map((item) => (
                  <div key={item.id} className="flex flex-col gap-3">
                    <Link href={item.link}>
                      <h4 className="text-primary text-lg font-medium hover:underline hover:text-earth">
                        {item.title}
                      </h4>
                      <span className="text-sm text-neutral-500 font-light">
                        {item.desc}
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects menu  */}
          {open === "projects" && (
            <div className="mt-20">
              <div className="space-y-2 border-b border-gray-200 pb-6">
                <h2 className="text-xl font-medium text-primary">Projects</h2>
                <p className="text-neutral-500 font-light text-sm">
                  Addressing global challenges through focused, locally driven
                  projects.
                </p>
              </div>

              <div className="mt-10 space-y-8">
                {ProjectLinks.map((item) => (
                  <div key={item.id} className="flex flex-col gap-3">
                    <Link href={item.link}>
                      <h4 className="text-primary text-lg font-medium hover:underline hover:text-earth">
                        {item.title}
                      </h4>
                      <span className="text-sm text-neutral-400 font-light">
                        {item.desc}
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Company menu  */}
          {open === "company" && (
            <div className="mt-20">
              <div className="space-y-2 border-b border-gray-200 pb-6">
                <h2 className="text-xl font-medium text-primary">Company</h2>
                <p className="text-neutral-400 font-ligh text-sm">
                  Turning bold ideas into lasting impact through smart
                  innovation and solid implementation.
                </p>
              </div>

              <div className="mt-10 space-y-8">
                {CompanyLinks.map((item) => (
                  <div key={item.id} className="flex flex-col gap-3">
                    <Link href={item.link}>
                      <h4 className="text-primary text-lg font-medium hover:underline hover:text-earth">
                        {item.title}
                      </h4>
                      <span className="text-sm text-neutral-400 font-light">
                        {item.desc}
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default MobileNavigation;
