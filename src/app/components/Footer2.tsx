import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
const Footer2 = () => {
  return (
    <>
      <footer className="bg-[#f5e5ce]">
        <div className="max-w-screen-xl py-10 px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <Image
                src="/logo3.jpg"
                className="mr-5"
                alt="logo"
                width={90}
                height={90}
              />
              <p className="max-w-xs mt-4 text-[14px] text-[#5a3e2b] ">
                Brew Berry Coffee: Where every cup is crafted with passion.
                Savor our rich blends and cozy atmosphere, perfect for any
                moment.
              </p>
              <div className="flex mt-8 space-x-6 text-[#5a3e2b] ">
                <Link
                  href="https://www.linkedin.com/in/areesha-sattar-14b48832b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  className="hover:opacity-75"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only "> Linkedin </span>
                  <FaLinkedin className="h-[1.5rem] w-[1.5rem] hover:scale-110 hover:transition-all hover:duration-300" />
                </Link>

                <Link
                  href="https://www.instagram.com/zoxo_emmaaa/?hl=en"
                  className="hover:opacity-75"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Instagram </span>
                  <SiInstagram className="h-[1.5rem] w-[1.5rem]" />
                </Link>

                <Link
                  href="/"
                  className="hover:opacity-75"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Twitter </span>
                  <FaTwitter className="h-[1.5rem] w-[1.5rem]" />
                </Link>
                <Link
                  href="https://github.com/Areesha-sites"
                  className="hover:opacity-75"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> GitHub </span>
                  <FaGithub className="h-[1.5rem] w-[1.5rem]" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="font-medium text-[#5a3e2b] text-[17px]">
                  Company
                </p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-[#5a3e2b] cursor-pointer">
                  <Link href="" className="hover:opacity-75 cursor-pointer">
                    About
                  </Link>
                  <Link href="" className="hover:opacity-75 cursor-pointer">
                    Meet the Team
                  </Link>
                  <Link href="" className="hover:opacity-75 cursor-pointer ">
                    History
                  </Link>
                  <Link href="" className="hover:opacity-75 cursor-pointer">
                    Careers
                  </Link>
                </nav>
              </div>
              <div>
                <p className="font-medium text-[#5a3e2b] text-[17px]">
                  Services
                </p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-[#5a3e2b]">
                  <Link href="" className="hover:opacity-75 cursor-pointer">
                    1on1 Coaching
                  </Link>
                  <Link href="" className="hover:opacity-75 cursor-pointer">
                    Company Review
                  </Link>
                  <Link href="" className="hover:opacity-75 cursor-pointer">
                    Accounts Review
                  </Link>
                  <Link href="" className="hover:opacity-75 cursor-pointer">
                    HR Consulting
                  </Link>
                  <Link href="" className="hover:opacity-75 cursor-pointer">
                    SEO Optimisation
                  </Link>
                </nav>
              </div>
              <div>
                <p className="font-medium text-[#5a3e2b] text-[17px]">
                  Helpful Links
                </p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-[#5a3e2b]">
                  <Link href="" className="hover:opacity-75 cursor-pointer">
                    Contact
                  </Link>
                  <Link href="" className="hover:opacity-75 cursor-pointer">
                    FAQs
                  </Link>
                  <Link href="" className="hover:opacity-75 cursor-pointer">
                    Live Chat
                  </Link>
                </nav>
              </div>

              <div>
                <p className="font-medium text-[#5a3e2b] text-[17px]">Legal</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-[#5a3e2b]">
                  <Link href="" className="hover:opacity-75 cursor-pointer">
                    Privacy Policy
                  </Link>
                  <Link href="" className="hover:opacity-75 cursor-pointer">
                    Terms &amp; Conditions
                  </Link>
                  <Link href="" className="hover:opacity-75 cursor-pointer">
                    Returns Policy
                  </Link>
                  <Link href="" className="hover:opacity-75 cursor-pointer">
                    Accessibility
                  </Link>
                </nav>
              </div>
            </div>
          </div>
          <p className="mt-8 text-[14px] text-[#5a3e2b]">
            © 2024 Brew Berry Coffee
          </p>
        </div>
        {/* =================newsletter============== */}
        <div className="container mx-auto flex items-center justify-center ">
          <div className="pb-[2rem] mt-[-3rem] ">
            <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-[#5a3e2b] mb-4 text-center xl:text-left md:mt-0 mt-4 flex justify-center items-center">
              Subscribe <MdEmail className="h-12 w-12 ml-2 mt-3" />
            </h1>
            <p className="text-base leading-normal text-[#5a3e2b] text-center xl:text-left">
              Join our Brew Berry Coffee community and be the first to savor
              exclusive offers, updates, and rich stories in every cup
            </p>
            <div className="flex items-stretch mt-5">
              <input
                className="bg-gray-100 rounded-lg rounded-r-none text-base leading-none text-[#5a3e2b] p-3 w-4/5 border border-transparent focus:outline-none focus:border-[#5a3e2b]"
                type="email"
                placeholder="Your Email"
              />
              <button className="w-32 rounded-l-none hover:bg-[#8c654b] bg-[#5a3e2b] rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5a3e2b]">
                subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer2;
