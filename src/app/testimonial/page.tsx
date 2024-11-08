"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";
import "swiper/css/autoplay";
import { IoIosStar } from "react-icons/io";
import { SlSpeech } from "react-icons/sl";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
export default function Testimonial() {
  return (
    <>
      <div className="pb-14 bg-gradient-to-tl to-[#f1dac9] from-[#7f593e]">
        <div className="container">
          <div className="">
            <div className="flex justify-center items-center flex-col xxs:pt-[1.5rem]">
              <div className="flex justify-center xl:ml-[0px] items-center mt-1 mb-[-1.5rem] 2xl:mt-[2rem] xl:mt-[2rem] ">
                <p className="font-medium xs:text-[3.1vw] text-white px-[1rem] rounded-[10px] py-[3px] italic bg-[#654228] 2xl:text-[25px] xl:text-[1vw]  xxs:text-[10px] xs-md:text-[12px] md:text-[12px] sm:text-[13px]  lg:text-[13px]">
                  Brew Your Perfect Cup ☕
                </p>
              </div>
              <div className="flex xl:justify-center xl:items-center xl:mt-[2rem] flex-col xxs:justify-center xxs:items-center">
                <h1 className="text-[#5a3e2b] xl:text-[40px] xl:leading-[20px] font-bold flex xl:items-center xxs:justify-center xxs:text-[33px] xxs:leading-[30px] xxs:text-center xxs:mt-[40px] xs-sm:leading-[33px] xs-sm:text-[33px] sm:text-[35px] md:text-[40px] md:leading-[35px] lg:text-[45px] lg:mt-[30px] lg:leading-[43px]">
                  What Our Customers are Saying!
                  <SlSpeech className="xl:ml-3 xxs:hidden sm:block sm:ml-3 " />
                </h1>
                <p className="mt-[1.5rem] text-center xl:w-[50%] xxs:w-[80%] xxs:text-justify text-[#452b1a] text-[15px] lg:w-[60%]">
                  Discover why our customers love us! From the perfect brew to a
                  welcoming environment, here is what they have to say about
                  their experience with us <br />
                  At our coffee shop, each cup is crafted with love, and every
                  visit creates memories. Read real stories from those who have
                  made us a part of their day. <br />
                  We believe that a great coffee experience is about more than
                  just coffee - it is about connecting with our customers. Here
                  are some of the moments they have shared with us. <br />
                  <b>
                    <i>
                      Every cup tells a story, and our customers are the heart
                      of it. ☕
                    </i>
                  </b>
                </p>
              </div>
            </div>
            <div className="xl:col-start-2 xl:col-span-4 xxs:col-start-1 lg:col-start-2 lg:col-span-4">
  <div className="xl:mt-4 flex xl:items-center xxs:justify-center xl:justify-center xxs:flex-col xl:gap-x-6 lg:flex-row">
    
    <div className="hidden xxs:block sm:block -space-x-2 overflow-hidden xxs:ml-[75px] xs-sm:ml-[100px] xxs:mt-4 xs-md:ml-[130px] sm:ml-[220px] md:ml-[300px] lg:ml-[50px]">
      <Image
        className="inline-block xl:h-10 xl:w-10 lg:h-14 lg:w-14 rounded-full"
        src="/testimonial1.jpg"
        alt="testimonial"
        width={20}
        height={20}
      />
      <Image
        className="inline-block xl:h-10 xl:w-10 lg:h-14 lg:w-14 rounded-full"
        src="/testimonial2.jpg"
        alt="testimonial"
        width={20}
        height={20}
      />
      <Image
        className="inline-block xl:h-10 xl:w-10 lg:h-14 lg:w-14 rounded-full"
        src="/testimonial3.jpg"
        alt="testimonial"
        width={20}
        height={20}
      />
      <Image
        className="inline-block xl:h-10 xl:w-10 lg:h-14 lg:w-14 rounded-full"
        src="/testimonial5.jpg"
        alt="testimonial"
        width={20}
        height={20}
      />
      <Image
        className="inline-block xl:h-10 xl:w-10 lg:h-14 lg:w-14 rounded-full"
        src="/testimonial1.jpg"
        alt="testimonial"
        width={20}
        height={20}
      />
    </div>

    {/* Ensure consistent border display at lg */}
    <div className="border-2 lg:border-2 border-[#452a18] sm:pl-8 lg:pl-8">


      <div className="flex justify-center sm:justify-start xxs:mt-3 lg:absolute lg:left-[38%]">
        <h3 className="text-2xl font-semibold mr-2 text-[#442a19] xxs:ml-10 xs-md:ml-[50px] sm:ml-[250px] md:ml-[320px]">
          4.6
        </h3>
        <i className="bx bxs-star text-[#fccd2a] xxs:mt-1 xxs:pr-[20px]"></i>
      </div>
      <div>
        <h3 className="xl:text-sm text-[#462815] xxs:ml-[90px] xs-sm:ml-[110px] xl:ml-0 xs-md:ml-[150px] sm:ml-[200px] md:ml-[280px] lg:ml-[70px] lg:text-[16px] lg:relative lg:top-[43px]">
          Rated by 25k on google.
        </h3>
      </div>
    </div>
  </div>

  <div className="flex justify-center items-center xl:mt-12 xxs:mt-5">
    <h3 className="text-[#452a19] xl:text-[30px] leading-[20px] font-bold italic xxs:text-[25px] xs-md:text-[30px]">
      Our Customer Reviews!
    </h3>
  </div>
</div>

          </div>
        </div>
        <div className="xl:mt-[2.5rem] xxs:mt-[2rem] xl:w-[80%] xxs:w-[85%] flex justify-center xl:ml-[10%] xs-md:ml-[7%] xxs:ml-[7%] xs-sm:ml-[7%] xs-md:mr-0">
          <Swiper
            slidesPerView={1} // Default view for small screens
            spaceBetween={10}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            freeMode={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="xl:max-w-[18rem] xl:max-h-[100vh] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 xl:ml-9 mb-8">
                <Image
                  className="rounded-t-lg h-[37vh] w-full"
                  src="/customer1.jpg"
                  alt="customer"
                  height={300}
                  width={300}
                />

                <div className="p-5">
                  <h5 className="mb-2 text-[20px] font-bold tracking-tight text-[#442a19] dark:text-white">
                    Sarah Williams
                  </h5>
                  <div className="flex justify-end items-center mt-[-2rem]">
                    <IoIosStar className="text-yellow-400" />
                    <IoIosStar className="text-yellow-400" />
                    <IoIosStar className="text-yellow-400" />
                    <IoIosStar className="text-yellow-400" />
                    <IoIosStar className="text-yellow-400" />
                  </div>
                  <p className="mb-3 text-[13px] font-normal text-[#442a19] dark:text-gray-400 italic pt-5">
                    Absolutely love this place! The ambiance is cozy, and the
                    staff is so friendly. Their latte is the perfect start to my
                    morning. Can not imagine my day without it!
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#442a19] rounded-lg hover:text-[#442a19] duration-300 transition-all ease-linear hover:bg-white focus:outline-none dark:bg-[#442a19] dark:hover:bg-white hover:border-b-2 hover:border-[#442a19] hover:font-semibold"
                  >
                    Leave a Review
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="xl:max-w-[18rem] xl:max-h-[100vh] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 xl:ml-9 mb-8">
                <Image
                  className="rounded-t-lg h-[37vh] w-full"
                  src="/customer2.jpg"
                  alt="customer"
                  height={300}
                  width={300}
                />
                <div className="p-5">
                  <h5 className="mb-2 text-[20px] font-bold tracking-tight text-[#442a19] dark:text-white">
                    Jason Cooper
                  </h5>
                  <div className="flex justify-end items-center mt-[-2rem]">
                    <IoIosStar className="text-yellow-400" />
                    <IoIosStar className="text-yellow-400" />
                    <IoIosStar className="text-yellow-400" />
                    <IoIosStar className="text-yellow-400" />
                    <IoIosStar className="text-yellow-400" />
                  </div>
                  <p className="mb-3 text-[13px] font-normal text-[#442a19] dark:text-gray-400 italic pt-5">
                    Tried the new winter specials, and I am blown away! The hot
                    chocolate with a hint of spice was just perfect. Highly
                    recommend it to anyone looking for warm.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#442a19] rounded-lg hover:text-[#442a19] duration-300 transition-all ease-linear hover:bg-white focus:outline-none dark:bg-[#442a19] dark:hover:bg-white hover:border-b-2 hover:border-[#442a19] hover:font-semibold"
                  >
                    Leave a Review
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="xl:max-w-[18rem] xl:max-h-[100vh] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ml-2 mb-8">
                <Image
                  className="rounded-t-lg h-[37vh] w-full"
                  src="/customer3.jpg"
                  alt="customer"
                  height={300}
                  width={300}
                />

                <div className="p-5">
                  <h5 className="mb-2 text-[20px] font-bold tracking-tight text-[#442a19] dark:text-white">
                    Emily Chen
                  </h5>

                  <div className="flex justify-end items-center mt-[-2rem]">
                    <IoIosStar className="text-yellow-400" />
                    <IoIosStar className="text-yellow-400" />
                    <IoIosStar className="text-yellow-400" />
                    <IoIosStar className="text-yellow-400" />
                    <IoIosStar className="text-yellow-400" />
                  </div>
                  <p className="mb-3 text-[13px] font-normal text-[#442a19] dark:text-gray-400 italic pt-5">
                    Great coffee, wonderful people! Every time I visit, I am
                    welcomed like family. Their cappuccino has become my daily
                    treat. Hands down, the best in town!
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#442a19] rounded-lg hover:text-[#442a19] duration-300 transition-all ease-linear hover:bg-white focus:outline-none dark:bg-[#442a19] dark:hover:bg-white hover:border-b-2 hover:border-[#442a19] hover:font-semibold"
                  >
                    Leave a Review
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="xl:max-w-[18rem] xl:max-h-[100vh] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ml-2 mb-8">
                <Image
                  className="rounded-t-lg h-[37vh] w-full"
                  src="/customer4.jpg"
                  alt="customer"
                  height={300}
                  width={300}
                />

                <div className="p-5">
                  <h5 className="mb-2 text-[20px] font-bold tracking-tight text-[#442a19] dark:text-white">
                    Michael Lee
                  </h5>

                  <div className="flex justify-end items-center mt-[-2rem]">
                    <IoIosStar className="text-yellow-400" />
                    <IoIosStar className="text-yellow-400" />
                    <IoIosStar className="text-yellow-400" />
                    <IoIosStar className="text-yellow-400" />
                    <IoIosStar className="text-yellow-400" />
                  </div>
                  <p className="mb-3 text-[13px] font-normal text-[#442a19] dark:text-gray-400 italic pt-5">
                    I am pretty picky about my coffee, and this place never
                    disappoints. Smooth, rich, and just the right temperature.
                    Plus, the pastries are to die for!
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#442a19] rounded-lg hover:text-[#442a19] duration-300 transition-all ease-linear hover:bg-white focus:outline-none dark:bg-[#442a19] dark:hover:bg-white hover:border-b-2 hover:border-[#442a19] hover:font-semibold"
                  >
                    Leave a Review
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="xl:max-w-[18rem] xl:max-h-[100vh] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ml-2 mb-8">
                <Image
                  className="rounded-t-lg h-[37vh] w-full"
                  src="/customer5.jpg"
                  alt=""
                  height={300}
                  width={300}
                />

                <div className="p-5">
                  <h5 className="mb-2 text-[20px] font-bold tracking-tight text-[#442a19] dark:text-white">
                    Rachel Gomez
                  </h5>

                  <div className="flex justify-end items-center mt-[-2rem]">
                    <IoIosStar className="text-yellow-400" />
                    <IoIosStar className="text-yellow-400" />
                    <IoIosStar className="text-yellow-400" />
                    <IoIosStar className="text-yellow-400" />
                    <IoIosStar className="text-yellow-400" />
                  </div>
                  <p className="mb-3 text-[13px] font-normal text-[#442a19] dark:text-gray-400 italic pt-5">
                    Found this gem last week, and I have already visited four
                    times! The caramel macchiato is my favorite. Such a relaxing
                    spot to unwind with friends.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#442a19] rounded-lg hover:text-[#442a19] duration-300 transition-all ease-linear hover:bg-white focus:outline-none dark:bg-[#442a19] dark:hover:bg-white hover:border-b-2 hover:border-[#442a19] hover:font-semibold"
                  >
                    Leave a Review
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="xl:max-w-[18rem] xl:max-h-[100vh] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ml-2 mb-8">
                <Image
                  className="rounded-t-lg h-[36vh] w-full sm:h-[40vh] md:h-[36vh]"
                  src="/customer6.jpg"
                  alt=""
                  height={300}
                  width={300}
                />
                <div className="p-5">
                  <h5 className="mb-2 text-[20px] font-bold tracking-tight text-[#442a19] dark:text-white">
                    David Singh
                  </h5>

                  <div className="flex justify-end items-center mt-[-2rem]">
                    <IoIosStar className="text-yellow-400" />
                    <IoIosStar className="text-yellow-400" />
                    <IoIosStar className="text-yellow-400" />
                    <IoIosStar className="text-yellow-400" />
                    <IoIosStar className="text-yellow-400" />
                  </div>
                  <p className="mb-3 text-[13px] font-normal text-[#442a19] dark:text-gray-400 italic pt-5">
                    The coffee here is amazing, but the customer service is even
                    better! They remember my order every time, and the
                    attention to detail is outstanding.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#442a19] rounded-lg hover:text-[#442a19] duration-300 transition-all ease-linear hover:bg-white focus:outline-none dark:bg-[#442a19] dark:hover:bg-white hover:border-b-2 hover:border-[#442a19] hover:font-semibold"
                  >
                    Leave a Review
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
