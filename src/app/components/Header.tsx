"use client";
import { useState } from "react";
import { Button } from "@headlessui/react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  PopoverGroup,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { HeaderNavLinksType } from "../../../Types/types";

const Header = () => {
  const headerLinks: HeaderNavLinksType[] = [
    {
      href: "/",
      name: "Home",
    },
    {
      href: "/about",
      name: "About",
    },
    {
      href: "/product",
      name: "Menu",
    },
    {
      href: "/coffeeSell",
      name: "Special Offer",
    },
    {
      href: "/testimonial",
      name: "Testimonials",
    },
    {
      href: "/contact",
      name: "Contact",
    },
  ];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#f5e5ce] w-full">
      <nav
        aria-label="Global"
        className=" flex items-center justify-between lg:px-7 py-[-9px]"
      >
        {/* ========================Logo Section================================= */}
        <div className="flex lg:flex-1">
          <Image
            alt="coffee-logo"
            src="/mainlogo.jpg"
            className=""
            width={120}
            height={120}
          />
        </div>
        {/* ========================================================= */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-mr-[-1rem] inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        {/* ========================Header Links================================= */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {headerLinks.map((link) => (
            <ul>
              <li>
                <Link
                  href={link.href}
                  className="text-md font-bold leading-6 text-[#5a3e2b] hover:border-b-4 hover:border-b-[#c0a278] transition duration-300 "
                >
                  {link.name}
                </Link>
              </li>
            </ul>
          ))}
        </PopoverGroup>
        {/* =================== Header Buttons====================================== */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-5">
          <Link
            href="/product"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            <i
              className="bx bxs-cart color:#5a3e2b bx-flip-horizontal bx-tada hover:cursor-pointer bg-gray-50 hover:bg-gray-100 p-2 rounded-full shadow-md shadow-[#c0a278] hover:shadow-lg  hover:scale-105 transition-all"
              title="Add to cart"
            ></i>
          </Link>
          <button className="bg-[#5a3e2b] hover:bg-[#412818] text-white font-bold py-2 px-4 rounded-[10px]">
            Sign in
          </button>
          <button className="bg-[#5a3e2b] hover:bg-[#412818] text-white font-bold py-2 px-4 rounded-[10px]">
            Log in
          </button>
        </div>
        {/* ========================================================= */}
      </nav>

      {/* ========================= Mobile Header================================ */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Product
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  {/* <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel> */}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
      {/* ========================================================= */}
    </header>
  );
};

/* ========================Header End================================= */
export default Header;
