import { CompanyLinks, ProjectLinks, SolutionLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-primary py-10">
      <div className="root-container space-y-20">
        <div>
          <div className="flex flex-col md:flex-row items-start lg:items-center justify-between gap-10">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center">
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={30}
                  height={30}
                  className="w-10 h-10"
                />
                <span className="text-3xl font-semibold text-white lowercase tracking-tight">
                  vosion
                </span>
              </div>
            </Link>

            {/* Social icons  */}
            <div className="flex gap-3 items-center">
              <Link
                href="https://x.com/vosionco"
                className="size-9 bg-white/10 flex items-center justify-center rounded-md hover:bg-white/30"
              >
                <Image
                  src="/icons/x.png"
                  alt="X"
                  width={30}
                  height={30}
                  className="size-5"
                />
              </Link>
              <Link
                href="https://instagram.com/vosioneco"
                className="size-9 bg-white/10 flex items-center justify-center rounded-md hover:bg-white/30"
              >
                <Image
                  src="/icons/ig.png"
                  alt="Instagram"
                  width={30}
                  height={30}
                  className="size-5"
                />
              </Link>
              <Link
                href="https://linkedin.com/in/vosionco"
                className="size-9 bg-white/10 flex items-center justify-center rounded-md hover:bg-white/30"
              >
                <Image
                  src="/icons/lin.png"
                  alt="Linkedin"
                  width={30}
                  height={30}
                  className="size-6"
                />
              </Link>
              <Link
                href="https://facebook.com/vosionco"
                className="size-9 bg-white/10 flex items-center justify-center rounded-md hover:bg-white/30"
              >
                <Image
                  src="/icons/fb.png"
                  alt="Facebook"
                  width={30}
                  height={30}
                  className="size-6"
                />
              </Link>
              <Link
                href="https://youtube.com/@vosionco"
                className="size-9 bg-white/10 flex items-center justify-center rounded-md hover:bg-white/30"
              >
                <Image
                  src="/icons/yt.png"
                  alt="Youtube"
                  width={30}
                  height={30}
                  className="size-6"
                />
              </Link>
            </div>
          </div>

          <div className="border-t border-white/10 my-8 text-white">
            <div className="flex flex-col lg:flex-row justify-between gap-14 lg:gap-10 mt-10">
              <div className="flex-1 space-y-5">
                <h4 className="text-lg font-medium">Contact Info</h4>
                <div className="text-lg font-semibold text-neutral-200">
                  <p>info@vosion.co</p>
                  <p>234 (708) 3432153</p>
                </div>
              </div>

              <div className="flex-3 grid grid-cols-2 lg:flex justify-between gap-10">
                <div className="space-y-5">
                  <h4 className="text-lg font-medium">Solutions</h4>
                  <div className="space-y-4">
                    {SolutionLinks.map((item) => (
                      <div key={item.id} className="text-neutral-400">
                        <Link href={item.link}>{item.title}</Link>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-5">
                  <h4 className="text-lg font-medium">Projects</h4>
                  <div className="space-y-4">
                    {ProjectLinks.map((item) => (
                      <div key={item.id} className="text-neutral-400">
                        <Link href={item.link}>{item.title}</Link>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-5">
                  <h4 className="text-lg font-medium">Company</h4>
                  <div className="space-y-4">
                    {CompanyLinks.map((item) => (
                      <div key={item.id} className="text-neutral-400">
                        <Link href={item.link}>{item.title}</Link>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-5">
                  <h4 className="text-lg font-medium">Shop</h4>
                  <div className="flex flex-col gap-4">
                    <Link href="/shop" className="text-neutral-400">
                      IQ Batteries
                    </Link>
                    <Link href="/shop" className="text-neutral-400">
                      Smart Panel
                    </Link>
                    <Link href="/shop" className="text-neutral-400">
                      Photon Spot
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-white/10">
          <p className="text-sm text-neutral-400">
           Copyright © {new Date().getFullYear()} Vosion. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
