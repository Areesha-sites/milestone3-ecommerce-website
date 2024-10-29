import React from "react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div className="bg-[#f5e5ce]">
        <div className="max-w-screen-xl py-10 px-4 sm:px-6  sm:flex justify-between mx-auto">
          <div className="p-5 sm:w-8/12">
            <Image
              alt="BrewBerry-Shop"
              src="/logo2.png"
              className=""
              width={150}
              height={150}
            />

            <div className="flex overflow-hidden lg:flex lg:gap-9">
              <Link
                href="/"
                className="text-md font-bold leading-6 text-[#5a3e2b] hover:border-b-4 hover:border-b-[#c0a278] transition duration-300 "
              >
                Home
              </Link>

              <Link
                href="/menu"
                className="text-md font-bold leading-6 text-[#5a3e2b] hover:border-b-4 hover:border-b-[#c0a278] transition duration-300 "
              >
                Menu
              </Link>

              <Link
                href="/orderCoffee"
                className="text-md font-bold leading-6 text-[#5a3e2b] hover:border-b-4 hover:border-b-[#c0a278] transition duration-300"
              >
                Order
              </Link>

              <Link
                href="/coffeeSell"
                className="text-md font-bold leading-6 text-[#5a3e2b] hover:border-b-4 hover:border-b-[#c0a278] transition duration-300"
              >
                Sale
              </Link>
              <Link
                href="/instantCoffee"
                className="text-md font-bold leading-6 text-[#5a3e2b] hover:border-b-4 hover:border-b-[#c0a278] transition duration-300"
              >
                DIY Coffee
              </Link>
              <Link
                href="/testimonial"
                className="text-md font-bold leading-6 text-[#5a3e2b] hover:border-b-4 hover:border-b-[#c0a278] transition duration-300"
              >
                Testimonial
              </Link>
            </div>
          </div>
          <div className="p-5 sm:w-4/12">
            <h3 className="font-medium text-lg text-[#5a3e2b] mb-4">
              Subscribe to our Newsletter
            </h3>
            <form className="mt-4">
              <input
                className="border rounded w-full px-4 py-3 text-[#5a3e2b]  leading-tight focus:outline-none focus:shadow-outline placeholder:text-[#c49c64]"
                type="email"
                placeholder="username@email.com"
              />
            </form>
          </div>
        </div>
        <div className="flex py-5 m-auto text-sm flex-col items-center border-t text-[#876536]">
          <p>
            © Copyright 2024{" "}
            <span className="text-[#5a3e2b] font-bold">Areesha</span>. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
