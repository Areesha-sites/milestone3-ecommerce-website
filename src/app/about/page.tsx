"use client";
import React, { useState } from "react";
import { Button } from "@headlessui/react";
import { BiSolidHandDown } from "react-icons/bi";
import AboutTeam from "../components/AboutTeam";
import Image from "next/image";
const About = () => {
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const toggleStoryOpen = () => {
    setIsStoryOpen(!isStoryOpen);
  };
  return (
    <>
      <section className="container w-full h-auto bg-gradient-to-tl to-[#f1dac9] from-[#7f593e] pt-[2rem] ">
        <div className="flex justify-center items-center flex-col">
          <p className="bg-[#654228] font-medium text-white px-[1rem] rounded-[10px] py-[3px] italic xl:text-[10px] xxs:text-[10px]">
            Brew Your Perfect Cup ☕
          </p>
          <h1 className="text-center xl:text-[5vw] text-[#5a3e2b] font-bold pt-[-1rem] xxs:text-[40px] xxs:leading-[38px] md:text-[55px] sm:text-[55px] xs-sm:text-[48px] xs-sm:leading-[40px] xs-md:text-[52px] xs-md:leading-[46px] md:mt-3 xl:mt-4">
            About Brew Berry
          </h1>
          <Image
            src="/vector.png"
            alt="vector"
            height={300}
            width={300}
            className="xl:h-24 xl:w-24 absolute xl:top-[9rem] xl:right-[17rem] xxs:top-[11rem] xxs:right-[3rem] xxs:h-16 xxs:w-16 xs-sm:right-[4rem] xs-sm:top-[11.2rem] xs-md:h-20 xs-md:w-20 xs-md:top-[11.2rem] xs-md:right-[4.5rem] md:top-[9.2rem] md:right-[5rem] lg:right-[13rem] custom-xl:right-[20rem]"
          />

          <p className="text-[#452b1a] xl:text-[15px] xxs:text-[13px] xl:w-[60%] xxs:w-[75%]  xxs:mt-3 custom-xl:mt-6 xl:mt-6">
            Welcome to BrewBerry Café! A cozy corner where the aroma of freshly
            brewed coffee meets a passion for perfecting every cup. At
            BrewBerry, we believe coffee is more than just a drink – it is an
            experience. From our carefully sourced beans to the skillful hands
            of our baristas, every detail is crafted to give you a warm,
            comforting experience with every sip. <br /> Whether you are here to
            kick-start your morning, catch up with friends, or simply take a
            moment for yourself, BrewBerry Café is designed for everyone who
            loves good coffee and a welcoming atmosphere. Our mission is simple
            – to create a space where you can relax, recharge, and enjoy a
            little taste of happiness.
          </p>
          <div className="">
            <p className="pt-2 text-[#452b1a] font-semibold flex justify-center items-center w-[100%] flex-row">
              Click and see Our Story <BiSolidHandDown className="ml-2" />
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col py-4 ">
          <Button
            className="text-white font-semibold bg-gradient-to-r from-[#69472e] via-[#7f593e] to-[#ce9e7b] hover:bg-gradient-to-br shadow-lg shadow-[#7f593e] dark:shadow-lg  rounded-lg text-sm px-6 py-1.5 text-center me-2 mb-2"
            onClick={toggleStoryOpen}
          >
            View Story
          </Button>
          {/* =================my story section================ */}
          <div
            className={`transition-all duration-700 ${
              isStoryOpen
                ? "xxs:max-h-[100rem] opacity-100 "
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-gradient-to-tl to-[#f1dac9] from-[#7f593e] mt-4 rounded-lg shadow-lg ">
              <div className="container mx-auto px-4 flex justify-center items-center flex-col custom-xl:pb-[3rem] xxs:pb-[2rem]">
                <h2 className="xl:text-[45px] font-bold text-[#2e1609] mb-4 xxs:text-[37px]">
                  Our Story
                </h2>
                <h3 className="xl:text-[20px] xxs:text-[17px] font-bold italic underline text-[#2e1609] xl:mt-0 xxs:mt-[-1rem]">
                  Background Story
                </h3>
                <p className="text-[#2e1609] mb-4 xl:text-[15px] xxs:text-[15px] xl:w-[60%] xxs:w-[90%] xl:mt-0 xxs:mt-5">
                  BrewBerry Café began as a humble dream of creating a place
                  that brings warmth and inspiration with every cup of coffee.
                  Our founder was captivated by the unique comfort found in a
                  single cup of perfectly brewed coffee, and they wanted to
                  share that same experience with others. With a passion for
                  coffee and a desire to build a space where people can find a
                  little peace in their busy lives, BrewBerry Café was born.
                  From the aroma of freshly ground beans to the cozy ambiance,
                  every detail is designed to make you feel at home.
                </p>
                <h3 className="xl:text-[20px] font-bold italic underline text-[#2e1609] mb-4 xxs:text-[17px]">
                  Founder Vision
                </h3>
                <p className="text-[#2e1609] mb-4 xl:text-[15px] xxs:text-[15px] xxs:mt-[-0.5rem]  xl:w-[60%] xxs:w-[90%] xl:mt-0 ">
                  Our vision goes beyond serving coffee; it is about building a
                  community. The founder envisioned BrewBerry Café as a place
                  where every individual feels welcomed, inspired, and
                  connected. We aim to be more than just a coffee shop a haven
                  where people come together, celebrate life is small moments,
                  and enjoy quality coffee made with heart and soul.
                </p>
                <blockquote className="border-l-4 border-r-4 pr-4 border-[#2e1609] pl-4 italic text-[#2e1609] xl:text-[15px] xl:w-[40%] mt-4 xxs:w-[89%] xxs:text-[14px]">
                  At <b>Brew Berry Cafe</b>, we believe that a great cup of
                  coffee is not just about taste - it is about connection,
                  comfort, and the little moments that make life meaningful,
                  Here, ecery cup tells a story, and every guest is part of our
                  journey.☕
                </blockquote>
              </div>
            </div>
          </div>
          {/* =============================our mission================================ */}
          <div className="">
            <div className="flex justify-center items-center flex-row ">
              <h1 className="xl:text-[30px] xxs:text-[25px] font-bold text-[#2e1609] mb-[-4px] custom-xl:text-[33px]">
                Values and Mission
              </h1>
            </div>
            <div className="flex justify-center items-center flex-col">
              <h1 className="xl:text-[25px] xxs:text-[21px] font-semibold italic text-[#2e1609] mb-2">
                Core Values
              </h1>
              <ul className="list-disc">
                <li>High-Quality Coffee 📈</li>
                <li>Customer Satisfaction 🤎</li>
                <li>Eco-Friendly Practices 🤝</li>
              </ul>

              <div className="flex justify-center items-center flex-col mt-2">
                <h1 className="xl:text-[25px] xxs:text-[21px]  font-semibold italic text-[#2e1609] mb-2">
                  Our Mission
                </h1>
                <p className="italic text-[#2e1609] xl:text-[15px] xxs:text-[15px] xxs:text-center custom-xl:text-[20px]">
                  Providing authentic flavors with a personal touch. ★
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <AboutTeam />
      </div>
    </>
  );
};

export default About;
