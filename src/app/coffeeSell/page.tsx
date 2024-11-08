import React from "react";
import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";
import { IoIosStarHalf } from "react-icons/io";
import Link from "next/link";
import { FaTag } from "react-icons/fa6";
import { FaGift } from "react-icons/fa";
import { IoMdSnow } from "react-icons/io";
// import { Button } from "@/components/ui/button";

const SellingCoffee = () => {
  return (
    <>
      <div className="bg-gradient-to-tl to-[#f1dac9] from-[#7f593e] h-auto pb-24  pt-5 ">
        {/* ==================================== */}
        <div className="">
          <div className="">
            <div className="flex justify-center items-center flex-col pt-1 mb-[-1.5rem] 2xl:mt-[2rem] ">
              <p className="font-medium xs:text-[3.1vw] text-white px-[1rem] rounded-[10px] py-[3px] italic bg-[#654228] xl:text-[1vw]  xxs:text-[10px] xs-md:text-[12px] md:text-[12px] lg:text-[12px] 2xl:text-[13px] ">
                Brew Your Perfect Cup ☕
              </p>
              <h1 className="xl:text-[55px] font-bold text-[#5a3e2b] mt-1 xxs:text-[35px] xxs:text-center xxs:leading-[40px] md:text-[45px] lg:text-[48px] lg:mt-3 custom-xl:text-[60px] xs-md:text-[47px] xs-md:leading-[50px] ">
                Fantastic Selling Coffee
              </h1>
              <Image src="/vector.png" alt="vector" height={100} width={100} className="xl:h-24 xl:w-24 absolute xl:top-[8.3rem] xl:right-[15rem] xxs:h-16 xxs:w-16 xxs:right-[3rem] xxs:top-[10.7rem] xs-sm:right-[4.5rem] xs-md:h-20 xs-md:w-20 xs-md:right-[4rem] xs-md:top-[11.4rem] md:top-[8.3rem] lg:h-20 lg:w-20 lg:right-[11rem] lg:top-[8.7rem] custom-xl:h-24 custom-xl:w-24 custom-xl:right-[19rem] custom-xl:top-[8.6rem]"/>
              <p className="text-center xl:w-[60%] xl:mx-auto xl:py-4 text-[#452b1a] xl:text-[16px] xxs:text-[14px] xxs:w-[80%] md:mt-4 custom-xl:text-[18px] xs-md:mt-5 xxs:mt-4">
                "Experience the essence of coffee at its finest with our
                best-selling selections. Each cup is a masterpiece, crafted from
                the world's most expuisite beans, blending bold flavors with
                smooth, delicate notes. These customer favorites reflect the
                heart and soul of <b>BrewBerry Cafe</b>, where every brew is a
                journey into taste and aroma. Elevate your coffee Experience and
                discover why these are loved by so many."
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
              <p className="border-b border border-[#4a301e] mt-[1rem]"></p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <h3 className="xl:text-[30px] xl:ml-5 xl:w-[70%] italic font-extrabold text-[#4a301e] mt-7 xxs:w-[80%] flex xxs:text-[22px] justify-center items-center md:text-[22px] lg:text-[26px] custom-xl:text-[30px]">
            Discover Our Latest & Greatest - Special Deals For You!
          </h3>
        </div>
        {/* winter section*/}
        <div className="mt-[2rem] mb-[7rem] flex justify-center items-center">
          <h4 className="xl:text-left xxs:text-left xl:text-[25px] xxs:text-[15px] xs-md:text-[17px] font-bold text-[#4a301e] flex items-center italic xxs:pb-[-2rem] md:text-[20px] lg:text-[22px]">
            Warm Up with Our Winter Specials! <IoMdSnow className="ml-3" />
          </h4>
        </div>
        {/* winter section cards */}
        <div className="xl:w-[95%] grid xl:grid-cols-3 xl:gap-10 xxs:gap-y-7 xxs:grid-cols-1 xl:mx-7 xxs:mt-[-2.7rem] xxs:mx-7 xs-md:mx-[3rem] md:mx-[9rem] lg:grid lg:grid-cols-3 lg:gap-x-10 lg:mx-[1.3rem] lg:mt-[-6rem]">
          {/* winter card 1 */}
          <div className="relative bg-gradient-to-tl to-[#f1dac9] from-[#7f593e] rounded-xl px-10 py-20  shadow-lg shadow-[#7c5e48] xl:h-[50vh] xxs:h-[48vh] xs-sm:h-[45vh] md:h-[47vh] lg:mt-[65px] lg:h-[53vh] custom-xl:h-[58vh] xs-md:h-[45vh]">
            <Image
              src="/hotbeverage1.jpg"
              alt="image"
              height={200}
              width={200}
              className="w-40 absolute -top-20 left-0 transition-all duration-300 hover:scale-105 ease-linear xxs:w-[150px] xxs:h-[150px] md:w-[170px] md:h-[170px] lg:w-[150px] lg:h-[150px] custom-xl:w-[175px] custom-xl:h-[180px] xl:w-[180px] xl:h-[180px]"
            />
            <div className="xl:space-y-4 xxs:space-y-2">
              <h2 className="text-[#4a301e] xl:text-[27px] xxs:text-[24px] xxs:-mt-5 xl:mt-0 font-bold md:text-[27px] md:mt-[5px] custom-xl:w-[175px] custom-xl:text-[28px] custom-xl:mt-[0.5rem]">
                Cappuccino
              </h2>
              <p className="text-[#4a301e] xxs:text-[12px] xs-sm:text-[15px] custom-xl:text-[18px]">
                A classic Italian drink made with espresso and milk.
              </p>
            </div>
            <div className="flex justify-between items-center gap-2  xxs:flex-col xl:flex-row xs-sm:flex-row">
              <p className="font-bold text-[#472713] xl:text-[20px] xxs:text-[20px] pt-3 custom-xl:text-[25px]">
                $150
              </p>
              <span className="flex justify-end xl:pr-4 xl:mt-[3rem] xxs:pr-[1rem] gap-1 mt-[3rem] xxs:ml-[2rem] xxs:mt-[1rem] xxs:mr-[1rem] xs-sm:mt-[2rem] ">
                <IoStarSharp className="text-yellow-400  xl:mt-[-1.6rem] xxs:mt-[-1.2rem] xxs:h-4 xxs:w-4 custom-xl:h-5 custom-xl:w-5" />
                <IoStarSharp className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem] xxs:h-4 xxs:w-4 custom-xl:h-5 custom-xl:w-5" />
                <IoStarSharp className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem] xxs:h-4 xxs:w-4 custom-xl:h-5 custom-xl:w-5" />
                <IoStarSharp className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem] xxs:h-4 xxs:w-4 custom-xl:h-5 custom-xl:w-5" />
                <IoIosStarHalf className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem] xxs:h-4 xxs:w-4 custom-xl:h-5 custom-xl:w-5" />
                <span className="mt-[-1rem] ml-1">
                  <p className="mr-2 xl:mt-[-8px] xxs:mt-[-2px] xl:ml-3 rounded bg-[#58321a] text-white px-2.5 py-0.5 xl:text-xs font-semibold xxs:ml-5 custom-xl:text-[15px] xxs:text-[11px]">
                    5.0
                  </p>
                </span>
              </span>
            </div>
            <div className="flex justify-center items-center xl:pt-5 xxs:pt-2">
              <Link
                href="/product"
                className="text-[#422412] underline hover:text-white duration-300 font-semibold transition-all ease-linear xl:text-[17px] xxs:text-[14px] lg:mt-[12px] custom-xl:mt-[-0.4rem] custom-xl:text-[18px] md:text-[17px]"
              >
                View Product
              </Link>
            </div>
          </div>
          <div className="relative bg-gradient-to-tl to-[#f1dac9] from-[#7f593e] rounded-xl px-10 py-20 shadow-lg shadow-[#7c5e48] xl:h-[50vh] xxs:h-[50vh] xxs:mt-[4rem] xs-sm:h-[47vh] md:h-[48vh] lg:h-[53vh] custom-xl:h-[58vh] xs-md:h-[46vh]">
            <Image
              src="/hotbeverage2.jpg"
              alt="image"
              height={200}
              width={200}
              className="w-40 absolute -top-20 left-0 transition-all duration-300 hover:scale-105 ease-linear xxs:w-[150px] xxs:h-[150px] md:w-[170px] md:h-[170px] lg:w-[150px] lg:h-[150px] custom-xl:w-[175px] custom-xl:h-[180px] xl:w-[180px] xl:h-[180px]"
            />
            <div className="xl:space-y-4 xxs:space-y-2">
              <h2 className="text-[#4a301e]  xl:text-[27px] xxs:text-[24px] xxs:-mt-5 xl:mt-3 font-bold md:text-[27px] md:mt-[5px] custom-xl:text-[28px] custom-xl:mt-[0.5rem] ">
                Latte
              </h2>
              <p className="text-[#4a301e] xxs:text-[12px] xs-sm:text-[15px] custom-xl:text-[18px] ">
                Similar to a cappuccino, but with more steamed milk.
              </p>
            </div>
            <div className="flex justify-between items-center gap-2  xxs:flex-col xl:flex-row xs-sm:flex-row">
              <p className="font-bold text-[#472713] xl:text-[20px] xxs:text-[20px] pt-3 custom-xl:text-[25px]">
                $160
              </p>
              <span className="flex justify-end xl:pr-4 xl:mt-[3rem] xxs:pr-[1rem] gap-1 mt-[3rem] xxs:ml-[2rem] xxs:mt-[1rem] xxs:mr-[1rem] xs-sm:mt-[2rem] ">
                <IoStarSharp className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem] custom-xl:h-5 custom-xl:w-5" />
                <IoStarSharp className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem] custom-xl:h-5 custom-xl:w-5" />
                <IoStarSharp className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem] custom-xl:h-5 custom-xl:w-5" />
                <IoStarSharp className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem] custom-xl:h-5 custom-xl:w-5" />
                <IoIosStarHalf className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem] custom-xl:h-5 custom-xl:w-5" />
                <span className="mt-[-1rem] ml-1">
                  <p className="mr-2 xl:mt-[-8px] xxs:mt-[-2px] xl:ml-3 rounded bg-[#58321a] text-white px-2.5 py-0.5 text-xs font-semibold xxs:ml-5 custom-xl:text-[15px] xxs:text-[11px]">
                    5.0
                  </p>
                </span>
              </span>
            </div>
            <div className="flex justify-center items-center pt-5">
              <Link
                href="/product"
                className="text-[#422412] underline hover:text-white duration-300 font-semibold transition-all ease-linear xl:text-[17px] xxs:text-[14px] custom-xl:mt-[-0.4rem] custom-xl:text-[18px] md:text-[17px]"
              >
             
                View Product
              </Link>
            </div>
          </div>
          <div className="relative bg-gradient-to-tl to-[#f1dac9] from-[#7f593e] rounded-xl px-10 py-20 shadow-lg shadow-[#7c5e48] xl:h-[50vh] xxs:h-[50vh] xxs:mt-[4rem] xs-sm:h-[47vh]  md:h-[48vh] lg:h-[53vh] custom-xl:h-[58vh] xs-md:h-[46vh]">
            <Image
              src="/hotbeverage3.jpg"
              alt="image"
              height={200}
              width={200}
              className="w-40 absolute -top-20 left-0 transition-all duration-300 hover:scale-105 ease-linear xxs:w-[150px] xxs:h-[150px] md:w-[170px] md:h-[170px] lg:w-[150px] lg:h-[150px] custom-xl:w-[175px] custom-xl:h-[180px] xl:w-[180px] xl:h-[180px]"
            />
            <div className="xl:space-y-4 xxs:space-y-2">
              <h2 className="text-[#4a301e]  xl:text-[27px] xxs:text-[24px] xxs:-mt-5  font-bold md:text-[27px] md:mt-[5px] custom-xl:text-[28px]  custom-xl:mt-[1rem] xl:mt-[10px]">
                Mocha
              </h2>
              <p className="text-[#4a301e] xxs:text-[12px] xs-sm:text-[15px] custom-xl:text-[18px]">
                A rich drink made with espresso and chocolate syrup
              </p>
            </div>
            <div className="flex justify-between items-center gap-2  xxs:flex-col xl:flex-row xs-sm:flex-row">
              <p className="font-bold text-[#472713] xl:text-[20px] xxs:text-[20px] pt-3 custom-xl:text-[25px]">
                $180
              </p>
              <span className="flex justify-end xl:pr-4 xl:mt-[3rem] xxs:pr-[1rem] gap-1 mt-[3rem] xxs:ml-[2rem] xxs:mt-[1rem] xxs:mr-[1rem] xs-sm:mt-[2rem] ">
                <IoStarSharp className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem] custom-xl:h-5 custom-xl:w-5" />
                <IoStarSharp className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem] custom-xl:h-5 custom-xl:w-5" />
                <IoStarSharp className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem] custom-xl:h-5 custom-xl:w-5" />
                <IoStarSharp className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem] custom-xl:h-5 custom-xl:w-5" />
                <IoIosStarHalf className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem] custom-xl:h-5 custom-xl:w-5" />
                <span className="mt-[-1rem] ml-1">
                  <p className="mr-2 xl:mt-[-8px] xxs:mt-[-2px] xl:ml-3 rounded bg-[#58321a] text-white px-2.5 py-0.5 text-xs font-semibold xxs:ml-5 custom-xl:text-[15px] xxs:text-[11px]">
                    5.0
                  </p>
                </span>
              </span>
            </div>
            <div className="flex justify-center items-center pt-5">
              <Link
                href="/product"
                className="text-[#422412] underline hover:text-white duration-300 font-semibold transition-all ease-linear xl:text-[17px] xxs:text-[14px] custom-xl:mt-[-0.8rem] custom-xl:text-[18px] md:text-[17px]"
              >
                View Product
              </Link>
            </div>
          </div>
        </div>

        {/* Dicount Items */}
        <div className="xl:mt-[5rem] xxs:mt-[2rem] mb-[7rem] flex justify-center items-center">
          <h4 className="xl:text-left xl:text-[28px] xxs:text-left xxs:text-[15px] xs-md:text-[17px] font-bold text-[#4a301e] flex items-center italic xxs:pb-[-2rem]  md:text-[20px] lg:text-[22px]">
            Unbeatable Coffee Deals Just For You! <FaTag className="ml-3" />
          </h4>
        </div>

        <div className="xl:w-[95%] grid xl:grid-cols-3 xl:gap-10 xl:mx-7 xxs:grid-cols-1 xxs:mt-[-2rem] xxs:mx-5 xs-md:mx-[3rem]  md:mx-[9rem] lg:grid lg:grid-cols-3 lg:gap-x-10 lg:mx-[1.3rem]  lg:mt-[-6rem]">
          {/* discount card 1 */}
          <div className="relative bg-gradient-to-tl to-[#f1dac9] from-[#7f593e] rounded-xl px-10 py-20  shadow-lg shadow-[#7c5e48] xl:h-[50vh] xxs:h-[48vh]  xs-sm:h-[45vh] md:h-[47vh] lg:mt-[95px] lg:h-[52vh] custom-xl:h-[58vh] xs-md:h-[44vh]">
            <Image
              src="/coldbeverage3.jpg"
              alt="image"
              height={200}
              width={200}
              className="w-40 absolute -top-20 left-0 transition-all duration-300 hover:scale-105 ease-linear xxs:w-[130px] xxs:h-[125px] md:w-[170px] md:h-[170px] lg:w-[150px] lg:h-[150px] custom-xl:w-[175px] custom-xl:h-[180px] xl:w-[180px] xl:h-[180px]"
            />
            <div className="flex xl:justify-end items-start mt-[-4rem] xl:ml-0 xxs:ml-[6rem] xs-sm:justify-end">
              <span className="me-2 rounded bg-[#573218] text-white xxs:px-[4px]  xl:px-3 bg-opacity-70 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300 xl:ml-0 xs-sm:px-3 custom-xl:text-[15px]">
                Up to 35% off
              </span>
            </div>
            <div className="xl:space-y-4 xl:pt-10 xxs:space-y-2">
              <h2 className="text-[#4a301e] text-2xl font-bold xxs:text-[24px] xxs:mt-4 md:text-[27px] md:mt-[3rem] custom-xl:text-[28px] custom-xl:mt-[1.5rem] xl:mt-[20px]">
                Juice
              </h2>
              <p className="text-[#4a301e] xxs:text-[12px] xs-sm:text-[15px] custom-xl:text-[18px]">
                A beverage made from fruits or vegetables.
              </p>
            </div>
            <div className="flex justify-between items-center gap-2 xl:flex-row xxs:flex-col xs-sm:flex-row">
              <p className="font-bold text-[#472713] xl:text-[20px] pt-3 xxs:text-[20px] custom-xl:text-[25px]">
                $110
              </p>
              <span className="flex justify-end xl:pr-4  xxs:pr-[1rem] gap-1 xl:mt-[3rem] xxs:mt-[1rem]  xxs:ml-[2rem] xs-sm:mt-[2rem] ">
                <IoStarSharp className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem] custom-xl:h-5 custom-xl:w-5" />
                <IoStarSharp className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem] custom-xl:h-5 custom-xl:w-5" />
                <IoStarSharp className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem] custom-xl:h-5 custom-xl:w-5" />
                <IoStarSharp className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem] custom-xl:h-5 custom-xl:w-5" />
                <IoIosStarHalf className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem] custom-xl:h-5 custom-xl:w-5" />
                <span className="mt-[-1rem] ml-1">
                  <p className="mr-2 xl:mt-[-8px] xxs:mt-[-2px] xl:ml-3 rounded bg-[#58321a] text-white px-2.5 py-0.5 text-xs font-semibold xxs:ml-5 custom-xl:text-[15px] xxs:text-[11px]">
                    5.0
                  </p>
                </span>
              </span>
            </div>
            <div className="flex justify-center items-center pt-5">
              <Link
                href="/product"
                className="text-[#422412] underline hover:text-white duration-300 font-semibold transition-all ease-linear text-[17px] xxs:text-[14px] custom-xl:mt-[1.4rem] custom-xl:text-[18px] md:text-[17px] xl:mt-[1.2rem]"
              >
                View Product
              </Link>
            </div>
          </div>
          <div className="relative bg-gradient-to-tl to-[#f1dac9] from-[#7f593e] rounded-xl px-10 py-20 shadow-lg shadow-[#7c5e48]  xl:h-[50vh] xxs:h-[48vh] xxs:mt-[6rem] xs-sm:h-[45vh]  md:h-[47vh] lg:h-[52vh] custom-xl:h-[58vh] xs-md:h-[44vh]">
            <Image
              src="/coldbeverage6.jpg"
              alt="image"
              height={200}
              width={200}
              className="w-40 absolute -top-20 left-0 transition-all duration-300 hover:scale-105 ease-linear xxs:w-[130px] xxs:h-[125px] md:w-[170px] md:h-[170px] lg:w-[150px] lg:h-[150px] custom-xl:w-[175px] custom-xl:h-[180px] xl:w-[180px] xl:h-[180px]" 
            />
            <div className="flex xl:justify-end items-start mt-[-4rem] xl:ml-0 xxs:ml-[6rem] xs-sm:justify-end">
              <span className="me-2 rounded bg-[#573218] text-white xxs:px-[4px]  xl:px-3 bg-opacity-70 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300 xl:ml-0 xs-sm:px-3 custom-xl:text-[15px]">
                Up to 35% off
              </span>
            </div>
            <div className="xl:space-y-4 xl:pt-10 xxs:space-y-2">
              <h2 className="text-[#4a301e] text-2xl font-bold xxs:text-[24px] xxs:mt-4 md:text-[27px] md:mt-[3rem] custom-xl:text-[28px] custom-xl:mt-[1.5rem] xl:mt-[20px]">
                Milkshake
              </h2>
              <p className="text-[#4a301e] xxs:text-[12px] xs-sm:text-[15px] custom-xl:text-[18px] ">
                A cold, drink with milk, ice cream, strawberry, vanilla.
              </p>
            </div>
            <div className="flex justify-between items-center gap-2 xl:flex-row xxs:flex-col xs-sm:flex-row">
              <p className="font-bold text-[#472713] xl:text-[20px] pt-3 xxs:text-[20px] custom-xl:text-[25px]">
                $130
              </p>
              <span className="flex justify-end xl:pr-4 xl:mt-[3rem] xxs:pr-[1rem] gap-1  xxs:mt-[1rem]  xxs:ml-[2rem] xs-sm:mt-[2rem] ">
                <IoStarSharp className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem] custom-xl:h-5 custom-xl:w-5" />
                <IoStarSharp className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem] custom-xl:h-5 custom-xl:w-5" />
                <IoStarSharp className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem] custom-xl:h-5 custom-xl:w-5" />
                <IoStarSharp className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem] custom-xl:h-5 custom-xl:w-5" />
                <IoIosStarHalf className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem] custom-xl:h-5 custom-xl:w-5" />
                <span className="mt-[-1rem] ml-1">
                  <p className="mr-2 xl:mt-[-8px] xxs:mt-[-2px] xl:ml-3 rounded bg-[#58321a] text-white px-2.5 py-0.5 text-xs font-semibold xxs:ml-5 custom-xl:text-[15px] xxs:text-[11px]">
                    5.0
                  </p>
                </span>
              </span>
            </div>
            <div className="flex justify-center items-center pt-5">
              <Link
                href="/product"
                className="text-[#422412] underline hover:text-white duration-300 font-semibold transition-all ease-linear text-[17px] xxs:text-[14px] custom-xl:mt-[-0.4rem] custom-xl:text-[18px] md:text-[17px]"
              >
                View Product
              </Link>
            </div>
          </div>
          <div className="relative bg-gradient-to-tl to-[#f1dac9] from-[#7f593e] rounded-xl px-10 py-20 shadow-lg shadow-[#7c5e48]  xl:h-[50vh] xxs:h-[48vh] xxs:mt-[6rem] xs-sm:h-[45vh]  md:h-[47vh] lg:h-[52vh] custom-xl:h-[58vh] xs-md:h-[44vh]">
            <Image
              src="/snack2.jpg"
              alt="image"
              height={200}
              width={200}
              className="w-40 absolute -top-20 left-0 transition-all duration-300 hover:scale-105 ease-linear xxs:w-[130px] xxs:h-[125px] md:w-[170px] md:h-[170px] lg:w-[150px] lg:h-[150px] custom-xl:w-[175px] custom-xl:h-[180px] xl:w-[180px] xl:h-[180px]"
            />
            <div className="flex xl:justify-end items-start mt-[-4rem] xl:ml-0 xxs:ml-[6rem] xs-sm:justify-end">
              <span className="me-2 rounded bg-[#573218] text-white xxs:px-[4px]  xl:px-3 bg-opacity-70 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300 xl:ml-0 xs-sm:px-3 custom-xl:text-[15px]">
                Up to 35% off
              </span>
            </div>
            <div className="xl:space-y-4 xl:pt-10 xxs:space-y-2">
              <h2 className="text-[#4a301e] text-2xl font-bold xxs:text-[24px] xxs:mt-4 md:text-[27px] md:mt-[3rem] custom-xl:text-[28px] custom-xl:mt-[1.5rem] xl:mt-[20px]">
                Popcorn
              </h2>
              <p className="text-[#4a301e] xxs:text-[12px] xs-sm:text-[15px] custom-xl:text-[18px]">
                A snack made from popped corn with butterand salt.
              </p>
            </div>
            <div className="flex justify-between items-center gap-2 xl:flex-row xxs:flex-col xs-sm:flex-row">
              <p className="font-bold text-[#472713] xl:text-[20px] pt-3 xxs:text-[20px] custom-xl:text-[25px]">
                $25
              </p>
              <span className="flex justify-end xl:pr-4 xxs:pr-[1rem] gap-1 xl:mt-[3rem] xxs:mt-[1rem] xxs:ml-[2rem] xs-sm:mt-[2rem] ">
                <IoStarSharp className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem] custom-xl:h-5 custom-xl:w-5" />
                <IoStarSharp className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem] custom-xl:h-5 custom-xl:w-5" />
                <IoStarSharp className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem] custom-xl:h-5 custom-xl:w-5" />
                <IoStarSharp className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem] custom-xl:h-5 custom-xl:w-5" />
                <IoIosStarHalf className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem] custom-xl:h-5 custom-xl:w-5" />
                <span className="mt-[-1rem] ml-1">
                  <p className="mr-2 xl:mt-[-8px] xxs:mt-[-2px] xl:ml-3 rounded bg-[#58321a] text-white px-2.5 py-0.5 text-xs font-semibold xxs:ml-5 custom-xl:text-[15px] xxs:text-[11px]">
                    5.0
                  </p>
                </span>
              </span>
            </div>
            <div className="flex justify-center items-center pt-5">
              <Link
                href="/product"
                className="text-[#422412] underline hover:text-white duration-300 font-semibold transition-all ease-linear text-[17px] xxs:text-[14px] custom-xl:mt-[-0.4rem] custom-xl:text-[18px] md:text-[17px]"
              >
                View Product
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-[5rem] mb-[7rem] flex justify-center items-center xxs:mt-[2rem]">
          <h4 className="text-left xxs:text-left xl:text-[28px] xxs:text-[17px] xs-md:text-[17px] font-bold text-[#4a301e] flex items-center italic  md:text-[20px] lg:text-[22px]">
            Get Ready For Something New! <FaGift className="ml-3" />
          </h4>
        </div>

        <div className="xl:w-[95%] grid xl:grid-cols-3 xl:gap-10 xl:mx-7 xxs:grid-cols-1 xxs:mt-[-2rem] xxs:mx-5 xs-md:mx-[3rem]  md:mx-[9rem] lg:grid lg:grid-cols-3 lg:gap-x-10 lg:mx-[1.3rem] lg:mt-[-6rem]">
          {/* discount card 1 */}
          <div className="relative bg-gradient-to-tl to-[#f1dac9] from-[#7f593e] rounded-xl px-10 py-20 shadow-lg shadow-[#7c5e48] xl:h-[48vh] xxs:h-[51vh]  xs-sm:h-[45vh] lg:mt-[95px] lg:h-[53vh] custom-xl:h-[58vh] xs-md:h-[45vh] md:h-[50vh]">
            <Image
              src="/launching1.jpg"
              alt="image"
              height={200}
              width={200}
              className="w-40 absolute -top-20 left-0 transition-all duration-300 hover:scale-105 ease-linear xxs:w-[130px] xxs:h-[125px] md:w-[170px] md:h-[170px] lg:w-[150px] lg:h-[150px] custom-xl:w-[175px] custom-xl:h-[180px] xl:w-[180px] xl:h-[180px]"
            />
            <div className="flex justify-end items-start mt-[-4rem]">
              <span className="me-2 rounded bg-[#573218] text-white px-3 bg-opacity-70 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300 custom-xl:text-[15px]">
                Coming Soon
              </span>
            </div>
            <div className="xl:space-y-4 xl:pt-10 xxs:space-y-2 xl:mt-0 xxs:mt-6 ">
              <h2 className="text-[#4a301e] xl:text-2xl xxs:text-[18px] font-bold md:text-[27px] md:mt-[3rem] lg:text-[22px] custom-xl:text-[28px] custom-xl:mt-[1.5rem] xl:mt-[17px]">
                Pumpkin Spice Latte
              </h2>
              <p className="text-[#4a301e] xxs:text-[13px] xs-sm:text-[15px] custom-xl:text-[18px]">
                Embrace the warmth of fall with this seasonal favorite. Coming
                Soon!
              </p>
            </div>
            <div className="flex justify-between items-center gap-2 xl:flex-row xxs:flex-col xs-sm:flex-row">
              <p className="font-bold text-[#472713] text-[20px] pt-3 custom-xl:text-[25px]">$130</p>
              <span className="flex justify-end xl:pr-4 xxs:pr-[1rem] gap-1 xl:mt-[3rem] xxs:mt-[1.2rem] xs-sm:mt-[2rem] xs-sm:ml-[2rem]">
                <IoStarSharp className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem] custom-xl:h-5 custom-xl:w-5" />
                <IoStarSharp className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem] custom-xl:h-5 custom-xl:w-5" />
                <IoStarSharp className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem] custom-xl:h-5 custom-xl:w-5" />
                <IoStarSharp className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem] custom-xl:h-5 custom-xl:w-5" />
                <IoIosStarHalf className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem] custom-xl:h-5 custom-xl:w-5" />
                <span className="mt-[-1rem] ml-1">
                  <p className="mr-2 xl:mt-[-8px] xxs:mt-[-2px] xl:ml-3 rounded bg-[#58321a] text-white px-2.5 py-0.5 text-xs font-semibold xxs:ml-5 custom-xl:text-[15px] xxs:text-[11px]">
                    5.0
                  </p>
                </span>
              </span>
            </div>
            <div className="flex justify-center items-center pt-5">
              <Link
                href="#"
                className="text-[#422412] underline hover:text-white duration-300 font-semibold transition-all ease-linear xl:text-[17px] xxs:text-[15px] xxs:mt-[-10px] custom-xl:mt-[-0.4rem] custom-xl:text-[18px] md:text-[17px]"
              >
                Notify Me
              </Link>
            </div>
          </div>
          <div className="relative bg-gradient-to-tl to-[#f1dac9] from-[#7f593e] rounded-xl px-10 py-20 shadow-lg shadow-[#7c5e48]  xl:h-[48vh] xxs:h-[51vh] xxs:mt-[6rem] xs-sm:h-[47vh] lg:h-[53vh] custom-xl:h-[58vh] xs-md:h-[48vh] md:h-[50vh]">
            <Image
              src="/launching2.jpg"
              alt="image"
              height={200}
              width={200}
              className="w-40 absolute -top-20 left-0 transition-all duration-300 hover:scale-105 ease-linear xxs:w-[120px] xxs:h-[125px] md:w-[170px] md:h-[170px] lg:w-[150px] lg:h-[150px] custom-xl:w-[175px] custom-xl:h-[180px] xl:w-[180px] xl:h-[180px]"
            />
            <div className="flex justify-end items-start mt-[-4rem] xl:ml-0 ">
              <span className="me-2 rounded bg-[#573218] text-white px-3 bg-opacity-70 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300 custom-xl:text-[15px]">
                Coming Soon
              </span>
            </div>
            <div className="xl:space-y-4 xl:pt-10 xxs:space-y-2 xl:mt-0 xxs:mt-6 ">
              <h2 className="text-[#4a301e] xl:text-2xl xxs:text-[14px] font-bold md:text-[27px] md:mt-[3rem] lg:text-[18px] xs-md:text-[18px] custom-xl:text-[28px] custom-xl:mt-[1.5rem] xl:mt-[17px]">
                Honey Almond Cold Brew
              </h2>
              <p className="text-[#4a301e] xxs:text-[13px] xs-sm:text-[15px] custom-xl:text-[18px]">
                A smooth, refreshing brew with a hint of honey and almond.
                Launching soon!
              </p>
            </div>
            <div className="flex justify-between items-center gap-2 xl:flex-row xxs:flex-col xs-sm:flex-row">
              <p className="font-bold text-[#472713] text-[20px] pt-3 custom-xl:text-[25px]">$160</p>
              <span className="flex justify-end xl:pr-4 xxs:pr-[1rem] gap-1 xl:mt-[3rem] xxs:mt-[1.2rem] xs-sm:mt-[2rem] xs-sm:ml-[2rem]">
                <IoStarSharp className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem] custom-xl:h-5 custom-xl:w-5" />
                <IoStarSharp className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem] custom-xl:h-5 custom-xl:w-5" />
                <IoStarSharp className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem] custom-xl:h-5 custom-xl:w-5" />
                <IoStarSharp className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem] custom-xl:h-5 custom-xl:w-5" />
                <IoIosStarHalf className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem] custom-xl:h-5 custom-xl:w-5" />
                <span className="mt-[-1rem] ml-1">
                  <p className="mr-2 xl:mt-[-8px] xxs:mt-[-2px] xl:ml-3 rounded bg-[#58321a] text-white px-2.5 py-0.5 text-xs font-semibold xxs:ml-5 custom-xl:text-[15px] xxs:text-[11px]">
                    5.0
                  </p>
                </span>
              </span>
            </div>
            <div className="flex justify-center items-center pt-5">
              <Link
                href="#"
                className="text-[#422412] underline hover:text-white duration-300 font-semibold transition-all ease-linear text-[17px] xxs:text-[15px] xxs:mt-[-10px] custom-xl:mt-[-0.4rem] custom-xl:text-[18px] md:text-[17px]"
              >
                Notify Me
              </Link>
            </div>
          </div>
          <div className="relative bg-gradient-to-tl to-[#f1dac9] from-[#7f593e] rounded-xl px-10 py-20 shadow-lg shadow-[#7c5e48] xl:h-[48vh] xxs:h-[51vh] xxs:mt-[6rem] xs-sm:h-[45vh] lg:h-[53vh] custom-xl:h-[58vh] xs-md:h-[45vh] md:h-[50vh]">
            <Image
              src="/lanuching3.jpg"
              alt="image"
              height={200}
              width={200}
              className="w-40 absolute -top-20 left-0 transition-all duration-300 hover:scale-105 ease-linear xxs:w-[130px] xxs:h-[125px] md:w-[170px] md:h-[170px] lg:w-[150px] lg:h-[150px] custom-xl:w-[175px] custom-xl:h-[180px] xl:w-[170px] xl:h-[170px]"
            />
            <div className="flex justify-end items-start mt-[-4rem]">
              <span className="me-2 rounded bg-[#573218] text-white px-3 bg-opacity-70 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300 custom-xl:text-[15px]">
                Coming Soon
              </span>
            </div>
            <div className="xl:space-y-4 xl:pt-10 xxs:space-y-2 xl:mt-0 xxs:mt-6 ">
              <h2 className="text-[#4a301e] xl:text-2xl xxs:text-[18px] font-bold md:text-[27px] md:mt-[3rem] lg:text-[22px] custom-xl:text-[28px] custom-xl:mt-[1.5rem] xl:mt-[17px]">
                Mocha Mint Delight
              </h2>
              <p className="text-[#4a301e] xxs:text-[13px] xs-sm:text-[15px] custom-xl:text-[18px]">
                Minty freshness meets rich mocha. Get ready for a taste of
                winter magic!
              </p>
            </div>
            <div className="flex justify-between items-center gap-2 xl:flex-row xxs:flex-col xs-sm:flex-row">
              <p className="font-bold text-[#472713] text-[20px] pt-3 custom-xl:text-[25px]">$140</p>
              <span className="flex justify-end xl:pr-4 xxs:pr-[1rem] gap-1 xl:mt-[3rem] xxs:mt-[1.2rem] xs-sm:mt-[2rem] xs-sm:ml-[2rem] ">
                <IoStarSharp className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem] custom-xl:h-5 custom-xl:w-5" />
                <IoStarSharp className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem] custom-xl:h-5 custom-xl:w-5" />
                <IoStarSharp className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem] custom-xl:h-5 custom-xl:w-5" />
                <IoStarSharp className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem] custom-xl:h-5 custom-xl:w-5" />
                <IoIosStarHalf className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem] custom-xl:h-5 custom-xl:w-5" />
                <span className="mt-[-1rem] ml-1">
                  <p className="mr-2 xl:mt-[-8px] xxs:mt-[-2px] xl:ml-3 rounded bg-[#58321a] text-white px-2.5 py-0.5 text-xs font-semibold xxs:ml-5 custom-xl:text-[15px] xxs:text-[11px]">
                    5.0
                  </p>
                </span>
              </span>
            </div>
            <div className="flex justify-center items-center pt-5">
              <Link
                href="#"
                className="text-[#422412] underline hover:text-white duration-300 font-semibold transition-all ease-linear text-[17px] xxs:text-[15px] xxs:mt-[-10px] custom-xl:mt-[-0.4rem] custom-xl:text-[18px] md:text-[17px]"
              >
                Notify Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SellingCoffee;
