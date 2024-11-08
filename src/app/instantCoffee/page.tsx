import React from "react";
import Image from "next/image";
// import { Button } from "@/components/ui/button";
const InstantCoffee = () => {
  return (
    <>
      <div className=" bg-[#f5e0c3] grid grid-cols-2  items-center pb-24">
        <div className="order-2">
          <Image
            src="/home.png"
            alt="Coffee-Image"
            height={500}
            width={500}
            className="w-full h-auto"
          />
        </div>

        <div className="px-20 order-1">
          <h1 className="text-6xl font-bold text-[#5a3e2b] ">
            Instant Coffee At Your Home
            <i className="bx bxs-home-heart bx-fade-right bx-flip-horizontal text-[#876536] relative left-3 top-2"></i>
          </h1>
          <p className="py-4 text-[#876536] text-lg  ">
            "Transform your mornings with the effortless charm of instant
            coffee, delivering the rich, full-bodied flavor of freshly brewed
            beans in just moments. Whether you're enjoying a quite moment of
            relaxation at home or preparing for a busy day ahead, our instant
            coffee ensures that your favorite cafe-quality brew is always within
            reach."
            <br />
            <br />
            <b className="text-center ">
              <i>
                "Brew comfort, sip serenity, right from the heart of your home."
              </i>
            </b>
            🤎
          </p>

          {/* <div className="">
            <Button className="mt-2  bg-[#5a3e2b] text-[#f5e0c3] px-12 mx-5 tracking-wide rounded-2xl shadow-xl shadow-[#c0a278] font-normal hover:scale-105 transition-all hover:font-medium hover:bg-[#4b3123]">
              Place Order
            </Button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default InstantCoffee;
