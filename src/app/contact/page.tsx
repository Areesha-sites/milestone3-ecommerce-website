import React from "react";
import { MdPhoneCallback } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { LuMapPin } from "react-icons/lu";
import { BsFillSendFill } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <div className="bg-gradient-to-tl to-[#f1dac9] from-[#7f593e] pb-[3rem] pt-[2rem] xxs:w-[117.2vw] lg:w-[100vw] ">
        <div className="mt-6 xl:max-w-[74rem] max-lg:max-w-3xl mx-auto bg-[#2e1609] rounded-lg xxs:max-w-[60rem] xxs:mx-[1rem] lg:ml-[2.5rem] xl:h-[125vh]">
          <div className="grid lg:grid-cols-2 lg:h-[150vh] xl:h-[150vh] items-center gap-14 text-white sm:p-8 p-4 font-[sans-serif] ">
            <div className="xl:mt-[-8rem]">
              <h1 className="xl:text-[40px] font-bold text-white mt-[-2rem] flex justify-start items-start pt-[3rem] xxs:text-[26px] xxs:flex xxs:justify-center xxs:items-center xxs:ml-[0rem] xs-sm:text-[28px] md:text-[40px] lg lg:text-[36px] lg:mt-[-10rem]">
                Get in Touch With Us
                <MdPhoneCallback className="ml-2 mt-2 text-[#be6637] xxs:h-6 xxs:w-6 xs-sm:h-7 xs-sm:w-7 xxs:mt-[-2px] md:h-9 md:w-9" />
              </h1>
              <p className="xl:text-sm xl:ml-[1.5rem] text-white mt-4 xxs:w-[90%] md:text-[16px] md:text-center md:ml-[2.5rem] xxs:text-center leading-relaxed xxs:ml-[0.8rem] lg:text-[14px] lg:ml-[0rem] xxs:text-[12px]">
                Looking for more information about our menu, events, or
                services? Drop us a message or give us a call – we are here to
                make your coffee experience even better!
              </p>



              <div className="xl:flex justify-between items-center xl:flex-col gap-5 mt-3 xxs:justify-center xxs:items-center xxs:flex-col lg:flex-col ">
             <div className="xxs:justify-center xxs:flex xxs:flex-col lg:flex-row xxs:gap-y-9">


                <ul className="mt-3 xl:flex xl:flex-row space-x-4 xxs:flex xxs:flex-col xxs:justify-center xxs:items-center xxs:space-x-5 lg:flex-col xl:items-center">


                  <li className="xl:flex xl:flex-row xl:items-center xxs:justify-center xxs:items-center xxs:mb-[10px]">
                    <MdOutlineEmail className="mr-2 xxs:ml-[-1.5rem] xl:h-5 xl:w-5 xxs:h-4 xxs:w-4 md:size-6 text-[#be6637] hover:scale-110 transition-all duration-300 ease-linear cursor-pointer" />
                    <a href="javascript:void(0)" className="text-white xl:text-[12px] xxs:text-[13px] md:text-[15px]">
                      brew22433@gmail.com
                    </a>
                  </li>
                  

                  <li className="flex items-center xxs:mb-[10px]">
                    <FiPhone className="mr-2 xl:h-5 xl:w-5 xxs:h-4 xxs:w-4 md:size-6 text-[#be6637] hover:scale-110 transition-all duration-300 ease-linear cursor-pointer" />
                    <a href="javascript:void(0)" className="text-white xl:text-[12px] xxs:mr-14 xxs:text-[13px] md:text-[15px]">
                      +158 996 888
                    </a>
                  </li>

                  <li className="flex items-center xxs:mb-[10px]">
                    <LuMapPin className="mr-2  xl:h-5 xl:w-5 xxs:h-4 xxs:w-4 md:size-6  text-[#be6637] hover:scale-110 transition-all duration-300 ease-linear cursor-pointer" />
                    <a href="javascript:void(0)" className="text-white xl:text-[12px] xxs:text-[13px] md:text-[15px]">
                      123 Street 256 House
                    </a>
                  </li>
                </ul>
                </div> 
                <div className="flex justify-center xxs:mb-[-1rem] lg:items-center"> 
                  <h3 className="text-center text-[28px] text-white font-bold flex items-center">
                    Our Address
                    <FaMapLocationDot className="h-8 w-8 text-[#be6637] ml-3" />
                  </h3>
                </div>
                {/* ===========map===================== */}
                <div className="relative xl:w-[100%] xl:h-[50vh] xxs:h-[70vh] xxs:w-[100vw] pt-[1rem] xxs:mb-[-3rem] md:w-[105vw] lg:w-[40vw] lg:h-[50vh] xl:ml-[2.5rem]">
                  <iframe
                    className="xl:w-[44vw] xl:h-[55vh] xxs:h-[60vh] xxs:w-[98vw] xxs:mb-[-3rem] xs-sm:w-[100vw] lg:w-[47vw] lg:h-[59vh] lg:ml-[-1.5rem] xxs:ml-[0.3rem] xs-sm:ml-[0rem] md:w-[105vw] "
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="xxs:mr-[0.5rem] xs-sm:mr-0 xxs:ml-[0.6rem] xs-sm:ml-[0.2rem]">
            <div className="bg-white p-6 rounded-lg lg:h-[130vh] xl:h-[100vh] xl:mt-[-10rem]">
              <p className="text-sm font-semibold text-[#2e1609] lg:mt-[2rem] ">
                I'm interested in...
              </p>

              <div className="space-y-4 max-lg:mt-4">
                <button
                  type="button"
                  className="px-4 py-2 rounded-lg bg-[#2e1609] text-white text-sm tracking-wider font-medium outline-none border-2 border-[#2e1609] mr-4"
                >
                  Hot Coffee
                </button>
                <button
                  type="button"
                  className="px-4 py-2 rounded-lg bg-transparent  text-sm tracking-wider font-medium outline-none border border-[#2e1609] mr-4 text-[#2e1609]"
                >
                  Cold Coffee
                </button>
                <button
                  type="button"
                  className="px-4 py-2 rounded-lg bg-transparent text-[#2e1609] text-sm tracking-wider font-medium outline-none border border-[#2e1609] mr-4"
                >
                  Breakfast
                </button>
              </div>
              <form className="mt-8 space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-lg py-3 border border-[#2e1609] px-4 text-[#2e1609] text-sm outline-[#2e1609]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-lg py-3 px-4 border border-[#2e1609] text-gray-800 text-sm outline-[#2e1609]"
                />
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="w-full rounded-lg py-3 px-4 border border-[#2e1609] text-gray-800 text-sm outline-[#2e1609]"
                />
                <textarea
                  placeholder="Message"
                  rows={6}
                  className="w-full rounded-lg px-4 border border-[#2e1609] text-gray-800 text-sm pt-3 outline-[#2e1609]"
                ></textarea>
                <button
                  type="button"
                  className="text-white bg-[#2e1609] hover:bg-white hover:text-[#2e1609] transition-all duration-300 ease-linear border border-[#2e1609] tracking-wide rounded-lg text-sm px-4 py-3 flex items-center justify-center w-full !mt-6"
                >
                  <BsFillSendFill className="mr-2 h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
