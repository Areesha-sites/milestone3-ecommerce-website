"use client";
import React from "react";
import Image from "next/image";
import { RiTeamFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import Link from "next/link";
export default function AboutTeam() {
  return (
    <>
      <section className="bg-gradient-to-tl to-[#f1dac9] from-[#7f593e] dark:bg-gray-900 ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 xl:text-[40px] xxs:text-[30px] tracking-tight font-bold text-[#5a3e2b] dark:text-white flex items-center justify-center xs-sm:text-[36px] sm:text-[45px] custom-xl:text-[50px]">
              Meet The Team <RiTeamFill className="ml-2" />
            </h2>
            <p className=" text-[#4a301e] lg:mb-16 text-[14px] leading-[21px] dark:text-gray-400">
              Our team is a blend of passionate professionals dedicated to
              delivering the best experiences for our clients. Each team member
              brings unique skills, expertise, and energy, working together to
              drive our vision forward. Get to know the faces behind our success
              and learn about the incredible talent that powers our journey! ♡
            </p>
            <p className="border-b border border-[#4a301e] xl:mt-[-2rem] xxs:mt-[2rem]"></p>
          </div>
          {/* ================================================cards====================================================== */}
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-1 xs-sm:mx-7 xl:mx-0 lg:grid-cols-2">
            <div className="items-center text-white font-semibold  bg-white sm:flex dark:bg-gray-800 dark:border-gray-700 rounded-lg hover:scale-105 duration-500 transition-all cursor-pointer ease-linear  md:mx-[2rem]">
              <Image
                className="xl:w-[50vw] rounded-lg sm:rounded-none sm:rounded-l-lg xl:h-[48vh] xxs:h-[55vh] xs-sm:w-full xs-sm:h-[60vh] md:w-[83vw] md:h-[50vh] sm:h-[50vh] sm:w-[80vw] lg:h-[51vh] "
                src="/teammember1.jpg"
                alt="Bonnie Avatar"
                height={300}
                width={300}
              />
              <div className="p-5">
                <h3 className="text-[28px] font-bold tracking-tight text-[#361f0e] dark:text-white">
                  Ava
                </h3>
                <span className="text-[#361f0e] text-opacity-55 dark:text-gray-400 text-[14px]">
                  Roaster
                </span>
                <p className="mt-3 mb-4 font-normal text-[#361f0e] dark:text-gray-400 leading-[15px] text-[12px]">
                  Ava is our skilled roaster, dedicated to sourcing the finest
                  coffee beans and roasting them to perfection. Her expertise
                  brings out the unique flavors of each coffee bean.
                </p>
                <ul className="flex space-x-4 sm:mt-0">
                  <li>
                    <Link
                      href="#"
                      className="text-[#804d29]  dark:hover:text-white"
                    >
                     <FaFacebook className="h-6 w-6" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#804d29] dark:hover:text-white"
                    >
                     <FaTwitter className="h-6 w-6" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#804d29]  dark:hover:text-white"
                    >
                      <FaGithub className="h-6 w-6" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#804d29] dark:hover:text-white"
                    >
                     <RiInstagramFill className="h-7 w-7"/>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="items-center text-white font-semibold  bg-white sm:flex dark:bg-gray-800 dark:border-gray-700 rounded-lg hover:scale-105 duration-500 transition-all cursor-pointer ease-linear md:mx-[2rem]">
              <a href="#">
                <Image
                  className="xl:w-[50vw] rounded-lg sm:rounded-none sm:rounded-l-lg xl:h-[48vh] xxs:h-[55vh] xs-sm:w-full xs-sm:h-[60vh] md:w-[80vw] md:h-[50vh] sm:h-[50vh] sm:w-[80vw] lg:h-[51vh] "
                  src="/teammember2.jpg"
                  alt="Jese Avatar"
                  height={300}
                  width={300}
                />
              </a>
              <div className="p-5">
                <h3 className="text-[28px] font-bold tracking-tight text-[#361f0e]  dark:text-white">
                  <a href="#">Olivia</a>
                </h3>
                <span className="text-[#361f0e] text-opacity-55 dark:text-gray-400 text-[14px]">
                  Barista
                </span>
                <p className="mt-3 mb-4 font-normal text-[#361f0e] dark:text-gray-400 leading-[15px] text-[12px]">
                  Olivia is a friendly and efficient barista who loves
                  interacting with customers. Her cheerful personality and quick
                  service make her a favorite among our regulars.
                </p>
                   <ul className="flex space-x-4 sm:mt-0">
                  <li>
                    <Link
                      href="#"
                      className="text-[#804d29]  dark:hover:text-white"
                    >
                     <FaFacebook className="h-6 w-6" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#804d29] dark:hover:text-white"
                    >
                     <FaTwitter className="h-6 w-6" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#804d29]  dark:hover:text-white"
                    >
                      <FaGithub className="h-6 w-6" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#804d29] dark:hover:text-white"
                    >
                     <RiInstagramFill className="h-7 w-7"/>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="items-center text-white font-semibold  bg-white sm:flex dark:bg-gray-800 dark:border-gray-700 rounded-lg hover:scale-105 duration-500 transition-all cursor-pointer ease-linear md:mx-[2rem]">
              <a href="#">
                <Image
                  className="xl:w-[50vw] rounded-lg  sm:rounded-none sm:rounded-l-lg xl:h-[48vh] xxs:h-[55vh] xs-sm:w-full xs-sm:h-[60vh] md:w-[80vw] md:h-[50vh] sm:h-[50vh] sm:w-[80vw]"
                  src="/teammember3.jpg"
                  alt="Michael Avatar"
                  height={300}
                  width={300}
                />
              </a>
              <div className="p-5">
                <h3 className="text-[28px] font-bold tracking-tight text-[#361f0e]  dark:text-white">
                  <a href="#">Ethan</a>
                </h3>
                <span className="text-[#361f0e] text-opacity-55 dark:text-gray-400 text-[14px]">
                  Barista Trainer
                </span>
                <p className="mt-3 mb-4 font-normal text-[#361f0e] dark:text-gray-400 leading-[15px] text-[12px]">
                  Ethan is passionate about sharing his knowledge and training
                  new baristas. His guidance ensures that every cup of coffee
                  meets our high standards.
                </p>
                <ul className="flex space-x-4 sm:mt-0">
                  <li>
                    <Link
                      href="#"
                      className="text-[#804d29]  dark:hover:text-white"
                    >
                     <FaFacebook className="h-6 w-6" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#804d29] dark:hover:text-white"
                    >
                     <FaTwitter className="h-6 w-6" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#804d29]  dark:hover:text-white"
                    >
                      <FaGithub className="h-6 w-6" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#804d29] dark:hover:text-white"
                    >
                     <RiInstagramFill className="h-7 w-7"/>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="items-center text-white font-semibold  bg-white sm:flex dark:bg-gray-800 dark:border-gray-700 rounded-lg hover:scale-105 duration-500 transition-all cursor-pointer ease-linear md:mx-[2rem]">
              <a href="#">
                <Image
                  className="xl:w-[50vw] rounded-lg  sm:rounded-none sm:rounded-l-lg xl:h-[48vh] xxs:h-[55vh] xs-sm:w-full xs-sm:h-[60vh] md:w-[75vw] md:h-[50vh] sm:h-[50vh] sm:w-[80vw]"
                  src="/teammember4.jpg"
                  alt="Sofia Avatar"
                  height={300}
                  width={300}
                />
              </a>
              <div className="p-5">
                <h3 className="text-[28px] font-bold tracking-tight text-[#361f0e]  dark:text-white">
                  <a href="#">Liam</a>
                </h3>
                <span className="text-[#361f0e] text-opacity-55 dark:text-gray-400 text-[14px]">
                  Social Media Manager
                </span>
                <p className="mt-3 mb-4 font-normal text-[#361f0e] dark:text-gray-400 leading-[15px] text-[12px]">
                  Liam is responsible for our social media presence. He creates
                  engaging content to connect with our audience and promote our
                  brand.
                </p>
                <ul className="flex space-x-4 sm:mt-0">
                  <li>
                    <Link
                      href="#"
                      className="text-[#804d29]  dark:hover:text-white"
                    >
                     <FaFacebook className="h-6 w-6" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#804d29] dark:hover:text-white"
                    >
                     <FaTwitter className="h-6 w-6" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#804d29]  dark:hover:text-white"
                    >
                      <FaGithub className="h-6 w-6" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#804d29] dark:hover:text-white"
                    >
                     <RiInstagramFill className="h-7 w-7"/>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
