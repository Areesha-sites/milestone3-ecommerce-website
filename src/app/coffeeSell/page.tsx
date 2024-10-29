import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const SellingCoffee = () => {
  return (
    <>
      <div className="bg-[#f5e0c3] h-auto pb-24  ">
        {/* ==================================== */}
        <div className="grid grid-cols-6 text-center md:pt-6 md:pb-24 ">
          <div className="col-start-2 col-span-4  items-center ">
            <h1 className="text-5xl font-bold text-[#5a3e2b]">
              Best Selling Coffee
            </h1>
            <p className="text-center w-2/4 mx-auto py-4 text-[#876536] text-lg ">
              "Experience the essence of coffee at its finest with our
              best-selling selections. Each cup is a masterpiece, crafted from
              the world's most expuisite beans, blending bold flavors with
              smooth, delicate notes. These customer favorites reflect the heart
              and soul of <b>BrewBerry Cafe</b>, where every brew is a journey
              into taste and aroma. Elevate your coffee Experience and discover
              why these are loved by so many."
              <br />
              <span>
                <i>
                  <b>
                    "Awaken your senses with the timeless elegance of our
                    best-selling brews"
                  </b>
                </i>
              </span>
            </p>
          </div>
        </div>
        <div className="container ">
          <div className="grid grid-cols-3 gap-10 w-11/12 mx-auto">
            {/* =============================== */}
            <div className="shadow-2xl shadow-[#5a3e2b] px-12 py-5 pt-4 hover:scale-105 rounded-2xl hover:border-2 hover:border-[#c0a278] transition-all relative cursor-pointer max-w-xs ">
              {/* =============================== */}
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/selling-coffee2.png"
                  alt="Selling-cup"
                  height={200}
                  width={200}
                  className="absolute -right-12 bottom-64"
                />
                <div className="">
                  <p className="py-2 text-[#876536] text-sm md:text-lg">
                    #1 Selling
                  </p>

                  <h1 className="text-3xl  font-semibold text-[#5a3e2b]">
                    <i> Double Expressoo</i>
                  </h1>
                </div>
              </div>
              <p className="py-10 text-[#876536] text-lg ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Pariatur et accusantium voluptas vitae culpa quam magni sit iure
                fuga laudantium ea, veritatis, ab corporis consectetur?
              </p>
              <div className="grid grid-cols-2 gap-40 items-center  py-2">
                <h3 className="font-semibold text-xl">$59.99</h3>

                <Button className="mt-2 relative right-11 bg-[#5a3e2b] text-[#f5e0c3] px-14  tracking-wide rounded-2xl shadow-xl shadow-[#c0a278] font-normal hover:scale-105 transition-all hover:font-medium hover:bg-[#4b3123]">
                  Order Now
                </Button>
              </div>

              {/* =============================== */}
            </div>
            {/* =============================== */}
            <div className="shadow-2xl shadow-[#5a3e2b] px-12 py-5 pt-4 hover:scale-105 rounded-2xl hover:border-2 hover:border-[#c0a278] transition-all relative cursor-pointer max-w-xs">
              {/* =============================== */}
              <div className="grid grid-cols-2 gap-6 items-end">
                <Image
                  src="/selling-coffee2.png"
                  alt="Selling-cup"
                  height={280}
                  width={280}
                  className="absolute -right-12 bottom-64"
                />
                <div className="">
                  <p className="py-6 text-[#876536] text-lg">#2 Selling</p>
                  <h1 className="text-3xl  font-semibold text-[#5a3e2b]">
                    <i> Double Expressoo</i>
                  </h1>
                </div>
              </div>
              <p className="py-4 text-[#876536] text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Pariatur et accusantium voluptas vitae culpa quam magni sit iure
                fuga laudantium ea, veritatis, ab corporis consectetur?
              </p>
              <div className="grid grid-cols-2 gap-40 items-center  py-2">
                <h3 className="font-semibold text-xl">$59.99</h3>

                <Button className="mt-2 relative right-11 bg-[#5a3e2b] text-[#f5e0c3] px-14  tracking-wide rounded-2xl shadow-xl shadow-[#c0a278] font-normal hover:scale-105 transition-all hover:font-medium hover:bg-[#4b3123]">
                  Order Now
                </Button>
              </div>

              {/* =============================== */}
            </div>
            {/* =============================== */}
            <div className="shadow-2xl shadow-[#5a3e2b] px-12 py-5 pt-4 hover:scale-105 rounded-2xl hover:border-2 hover:border-[#c0a278] transition-all relative cursor-pointer max-w-xs">
              {/* =============================== */}
              <div className="grid grid-cols-2 gap-6 items-end">
                <Image
                  src="/selling-coffee2.png"
                  alt="Selling-cup"
                  height={270}
                  width={270}
                  className="absolute -right-12 bottom-64"
                />
                <div className="">
                  <p className="py-6 text-[#876536] text-lg">#3 Selling</p>
                  <h1 className="text-3xl  font-semibold text-[#5a3e2b]">
                    <i> Double Expressoo</i>
                  </h1>
                </div>
              </div>
              <p className="py-4 text-[#876536] text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Pariatur et accusantium voluptas vitae culpa quam magni sit iure
                fuga laudantium ea, veritatis, ab corporis consectetur?
              </p>
              <div className="grid grid-cols-2 gap-40 items-center  py-2">
                <h3 className="font-semibold text-xl">$59.99</h3>
                <Button className="mt-2 relative right-11 bg-[#5a3e2b] text-[#f5e0c3] px-14  tracking-wide rounded-2xl shadow-xl shadow-[#c0a278] font-normal hover:scale-105 transition-all hover:font-medium hover:bg-[#4b3123]">
                  Order Now
                </Button>
              </div>

              {/* =============================== */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SellingCoffee;
