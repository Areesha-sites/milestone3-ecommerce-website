import React from "react";
import Image from "next/image";
// import { Button } from "@/components/ui/button";
import { Button } from "@headlessui/react";
import Link from "next/link";
const OrderCoffee = () => {
  return (
    <>
      <h1>Order Coffee</h1>
      {/* <div className="bg-[#f5e0c3] md:py-13">
        <div className="container">
          <div className="grid grid-cols-2  items-center pb-24">
            <div className="ml-4">
              <Image
                src="/sell2.png"
                alt="Coffee-Image"
                height={500}
                width={500}
                className="w-full h-auto"
              />
            </div>

            <div className="px-20">
              <h1 className="text-5xl font-bold text-[#5a3e2b] ">
                Order Your favourite Coffee
                <i className="bx bx-coffee-togo bx-tada bx-flip-horizontal text-[#876536] relative left-3 top-2"></i>
              </h1>
              <p className="py-4 text-[#876536] text-lg  ">
                "At <b>BrewBerry Cafe</b>, we take pride in offering a diverse
                selection of handcrafted beverages and delicious treats. From
                rich, aromatic coffees to refreshing teas and freshly baked
                pastries, there's something for everyone to enjoy. Browse our
                menu to discover your new favourite indulgence perfect for any
                time of the day."
              </p> */}
      {/* 
              <div className="">
                <Button className="mt-2  bg-[#5a3e2b] text-[#f5e0c3] px-5 mx-5 tracking-wide rounded-2xl shadow-xl shadow-[#c0a278] font-normal hover:scale-105 transition-all hover:font-medium hover:bg-[#4b3123]">
                  Order Now
                </Button>
                <Link href="/menu">
                  <Button
                    className=" mt-2  tracking-wide rounded-2xl shadow-xl shadow-[#c0a278] hover:scale-105 text-[#5a3e2b] transition-all hover:font-bold hover:text-[#5a3e2b] hover:border-spacing-96 hover:border-[#c0a278]"
                    variant="outline"
                  >
                    Choose Menu
                  </Button>
                </Link>
              </div> */}
      {/* </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default OrderCoffee;
