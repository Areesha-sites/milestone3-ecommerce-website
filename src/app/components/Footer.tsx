import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import {
  CompanyFooterLinkTypes,
  FooterNavLinkTypes,
  FooterSocialIconsTypes,
  HelpfullFooterLinkTypes,
  LegalFooterLinkTypes,
} from "../../../Types/types";
const Footer2 = () => {
  const footerLinks: FooterNavLinkTypes[] = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/about",
      name: "About",
    },
    {
      link: "/product",
      name: "Menu",
    },
    {
      link: "/coffeeSell",
      name: "Special Offers",
    },
    {
      link: "/testimonial",
      name: "Testimonials",
    },
    {
      link: "/contact",
      name: "Contact",
    },
  ];
  const footerSocialLinks: FooterSocialIconsTypes[] = [
    {
      url: "https://www.linkedin.com/in/areesha-sattar-14b48832b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      label: "Linkedin",
      icon: (
        <FaLinkedin className="h-[1.5rem] w-[1.5rem] text-[#5a3e2b] hover:text-[#3f2a1b]  hover:scale-110 hover:transition-all ease-linear hover:duration-300" />
      ),
    },
    {
      url: "https://www.instagram.com/zoxo_emmaaa/?hl=en",
      label: "Instagram",
      icon: (
        <SiInstagram className="h-[1.5rem] w-[1.5rem] text-[#5a3e2b] hover:text-[#3f2a1b]  hover:scale-110 hover:transition-all ease-linear hover:duration-300" />
      ),
    },
    {
      url: "/",
      label: "Twitter",
      icon: (
        <FaTwitter className="h-[1.5rem] w-[1.5rem] text-[#5a3e2b] hover:text-[#3f2a1b]  hover:scale-110 hover:transition-all ease-linear hover:duration-300" />
      ),
    },
    {
      url: "https://github.com/Areesha-sites",
      label: "Github",
      icon: (
        <FaGithub className="h-[1.5rem] w-[1.5rem] text-[#5a3e2b] hover:text-[#3f2a1b]  hover:scale-110 hover:transition-all ease-linear hover:duration-300" />
      ),
    },
  ];
  const companyFooterLinks: CompanyFooterLinkTypes[] = [
    {
      link: "#",
      name: "1on1 Coaching",
    },
    {
      link: "#",
      name: "Company Review",
    },
    {
      link: "#",
      name: "Accounts Review",
    },
    {
      link: "#",
      name: "HR Consulting",
    },
    {
      link: "#",
      name: "SEO Optimization",
    },
  ];
  const footerHelpfulLinks: HelpfullFooterLinkTypes[] = [
    {
      link: "#",
      name: "Contact",
    },
    {
      link: "#",
      name: "FAQs",
    },
    {
      link: "#",
      name: "Live Chat",
    },
  ];
  const footerLegalLinks: LegalFooterLinkTypes[] = [
    {
      link: "#",
      name: "Privacy Policy",
    },
    {
      link: "#",
      name: "Terms & Conditions",
    },
    {
      link: "#",
      name: "Returns Policy",
    },
    {
      link: "#",
      name: "Accessibility",
    },
  ];
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
              <p className="max-w-xs mt-4 text-[14px] text-[#5a3e2b] font-lato">
                Brew Berry Coffee: Where every cup is crafted with passion.
                Savor our rich blends and cozy atmosphere, perfect for any
                moment.
              </p>
              {/* ==================================social Icons============================================= */}
              <div className="flex mt-8 space-x-6 text-[#5a3e2b] ">
                {footerSocialLinks.map((icon) => (
                  <ul>
                    <li>
                      <Link
                        href={icon.url}
                        className="text-[#5a3e2b] "
                        target="_blank"
                        rel="noreferrer"
                      >
                        {icon.icon}
                      </Link>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4 ">
              {/* ==================================Footer Nav Links============================================= */}
              <nav>
                <p className="font-bold text-[#5a3e2b] text-[23px] font-playfair ">
                  Links
                </p>
                <ul className="flex flex-col mt-4 space-y-4 text-sm text-[#5a3e2b] cursor-pointer">
                  {footerLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.link}
                        className="relative font-semibold w-fit block text-[#5a3e2b] hover:font-bold
                                                              after:content-[''] after:absolute after:left-0 after:-bottom-1
          after:h-[3px] after:bg-[#ac8062] after:w-full after:scale-x-0
          hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-right"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              {/* ==================================Footer Company Links============================================= */}
              <div>
                <p className="font-bold text-[#5a3e2b] text-[23px] font-playfair ">
                  Services
                </p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-[#5a3e2b]">
                  {companyFooterLinks.map((link) => (
                    <ul>
                      <li>
                        <Link
                          href={link.link}
                          className="hover:opacity-75 cursor-pointer"
                        >
                          {link.name}
                        </Link>
                      </li>
                    </ul>
                  ))}
                </nav>
              </div>
              {/* ==================================Footer Helpful Links============================================= */}
              <div>
                <p className="font-bold text-[#5a3e2b] text-[23px] font-playfair">
                  Helpful Links
                </p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-[#5a3e2b]">
                  {footerHelpfulLinks.map((link) => (
                    <ul>
                      <li>
                        <Link
                          href={link.link}
                          className="hover:opacity-75 cursor-pointer"
                        >
                          {link.name}
                        </Link>
                      </li>
                    </ul>
                  ))}
                </nav>
              </div>
              {/* ==================================Footer Legal Links============================================= */}

              <div>
                <p className="font-bold text-[#5a3e2b] text-[23px] font-playfair ">
                  Legal
                </p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-[#5a3e2b]">
                  {footerLegalLinks.map((link) => (
                    <ul>
                      <li>
                        <Link
                          className="hover:opacity-75 cursor-pointer"
                          href={link.link}
                        >
                          {link.name}
                        </Link>
                      </li>
                    </ul>
                  ))}
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
            <h1 className="text-[28px] md:text-4xl xl:text-5xl font-bold leading-10 text-[#5a3e2b] mb-4 text-center xl:text-left md:mt-0 mt-4 flex justify-center items-center">
              Subscribe{" "}
              <MdEmail className="md:h-12 md:w-12 h-9 w-9 ml-2 mt-[11px]" />
            </h1>
            <p className="md:text-base text-[13px] mx-4 leading-normal text-[#5a3e2b] text-center xl:text-left">
              Join our Brew Berry Coffee community and be the first to savor
              exclusive offers, updates, and rich stories in every cup
            </p>
            <div className="flex items-stretch justify-center mx-auto mt-5">
              <input
                className="bg-gray-100 rounded-lg rounded-r-none text-base leading-none text-[#5a3e2b] p-3 md:w-4/5 w-[50%] border border-transparent focus:outline-none focus:border-[#5a3e2b]"
                type="email"
                placeholder="Your Email"
              />
              <button className="md:w-32 rounded-l-none hover:bg-[#8c654b] bg-[#5a3e2b] rounded md:text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5a3e2b]">
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
