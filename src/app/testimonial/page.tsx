"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Default Swiper styles
import "swiper/css/free-mode"; // Importing FreeMode styles
import "swiper/css/pagination"; // Importing Pagination styles
import Image from "next/image";
import "swiper/css/autoplay";

// Import required Swiper modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

export default function Testimonial() {
  return (
    <>
      <div className="pb-14 bg-[#f5e0c3] px-10">
        <div className="container">
          <div className="grid grid-cols-6 text-center md:py-10">
            <div className="col-start-2 col-span-4">
              <h1 className="text-5xl font-bold  text-[#5a3e2b]">
                Client Testimonial
              </h1>
              <p className="py-4 w-2/4 mx-auto text-[#5a3e2b] text-lg">
                "At
                <b className="text-[#835b41]"> BrewBerry cafe,</b> we believe
                the best testment to our craft comes from those who experience
                it firsthand. From the first sip to the last firsthand. "
                <br />
                <b>
                  <i>
                    "Every cup tells a story, and our customers are the heart of
                    it."
                  </i>
                </b>
                ☕
              </p>
              <div className="mt-4 flex items-center justify-center gap-x-6">
                <div className="hidden sm:block -space-x-2 overflow-hidden">
                  <Image
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-[#c0a278] "
                    src="/testimonial1.jpg"
                    alt=""
                    width={20}
                    height={20}
                  />
                  <Image
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-[#c0a278] "
                    src="/testimonial2.jpg"
                    alt=""
                    width={20}
                    height={20}
                  />
                  <Image
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-[#c0a278] "
                    src="/testimonial3.jpg"
                    alt=""
                    width={20}
                    height={20}
                  />
                  <Image
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-[#c0a278] "
                    src="/testimonial5.jpg"
                    alt=""
                    width={20}
                    height={20}
                  />
                  <Image
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-[#c0a278] "
                    src="/testimonial1.jpg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </div>
                <div className="boder-none sm:border-l-2 border-[#5a3e2b] sm:pl-8">
                  <div className="flex justify-center sm:justify-start">
                    <h3 className="text-2xl font-semibold mr-2 text-[#5a3e2b]">
                      4.6
                    </h3>

                    <i className="bx bxs-star text-[#fccd2a]"></i>
                  </div>
                  <div>
                    <h3 className="text-sm text-[#5a3e2b] ">
                      Rated by 25k on google.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className=" rounded-xl hover:border-2 hover:border-[#c0a278] shadow-2xl transition-all hover:scale-105 duration-500 cursor-pointer m-5">
              <div className="bg-[#f5e5ce] text-[#5a3e2b] ">
                <Image
                  src="/girl.png"
                  alt="Laptop"
                  height={200}
                  width={200}
                  className=" rounded-t-md  object-cover mx-auto  rounded-2xl
                "
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h1 className=" text-xl font-semibold text-gray-900 dark:text-gray-100 ">
                    About Macbook
                  </h1>
                </div>
                <div className="flex  gap-1">
                  <i className="bx bxs-star text-[#fccd2a]"></i>
                  <i className="bx bxs-star text-[#fccd2a]"></i>
                  <i className="bx bxs-star text-[#fccd2a]"></i>
                  <i className="bx bxs-star text-[#fccd2a]"></i>
                  <i className="bx bxs-star text-[#fccd2a]"></i>
                </div>
                <p className="py-4 text-[#876536] text-lg pt-4  ">
                  "Transform your mornings with the effortless charm of instant
                  coffee, delivering the rich, full-bodied flavor of freshly
                  brewed beans in just moments. "
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className=" rounded-xl hover:border-2 hover:border-[#c0a278] shadow-2xl transition-all hover:scale-105 duration-500 cursor-pointer m-5">
              <div className="bg-[#f5e5ce] text-[#5a3e2b] ">
                <Image
                  src="/girl.png"
                  alt="Laptop"
                  height={200}
                  width={200}
                  className=" rounded-t-md  object-cover mx-auto  rounded-2xl
                "
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h1 className=" text-xl font-semibold text-gray-900 dark:text-gray-100 ">
                    About Macbook
                  </h1>
                </div>
                <div className="flex  gap-1">
                  <i className="bx bxs-star text-[#fccd2a]"></i>
                  <i className="bx bxs-star text-[#fccd2a]"></i>
                  <i className="bx bxs-star text-[#fccd2a]"></i>
                  <i className="bx bxs-star text-[#fccd2a]"></i>
                  <i className="bx bxs-star text-[#fccd2a]"></i>
                </div>
                <p className="py-4 text-[#876536] text-lg pt-4  ">
                  "Transform your mornings with the effortless charm of instant
                  coffee, delivering the rich, full-bodied flavor of freshly
                  brewed beans in just moments. "
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" rounded-xl hover:border-2 hover:border-[#c0a278] shadow-2xl transition-all hover:scale-105 duration-500 cursor-pointer m-5">
              <div className="bg-[#f5e5ce] text-[#5a3e2b] ">
                <Image
                  src="/girl.png"
                  alt="Laptop"
                  height={200}
                  width={200}
                  className=" rounded-t-md  object-cover mx-auto  rounded-2xl
                "
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h1 className=" text-xl font-semibold text-gray-900 dark:text-gray-100 ">
                    About Macbook
                  </h1>
                </div>
                <div className="flex  gap-1">
                  <i className="bx bxs-star text-[#fccd2a]"></i>
                  <i className="bx bxs-star text-[#fccd2a]"></i>
                  <i className="bx bxs-star text-[#fccd2a]"></i>
                  <i className="bx bxs-star text-[#fccd2a]"></i>
                  <i className="bx bxs-star text-[#fccd2a]"></i>
                </div>
                <p className="py-4 text-[#876536] text-lg pt-4  ">
                  "Transform your mornings with the effortless charm of instant
                  coffee, delivering the rich, full-bodied flavor of freshly
                  brewed beans in just moments. "
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className=" rounded-xl hover:border-2 hover:border-[#c0a278] shadow-2xl transition-all hover:scale-105 duration-500 cursor-pointer m-5">
              <div className="bg-[#f5e5ce] text-[#5a3e2b] ">
                <Image
                  src="/girl.png"
                  alt="Laptop"
                  height={200}
                  width={200}
                  className=" rounded-t-md  object-cover mx-auto  rounded-2xl
                "
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h1 className=" text-xl font-semibold text-gray-900 dark:text-gray-100 ">
                    About Macbook
                  </h1>
                </div>
                <div className="flex  gap-1">
                  <i className="bx bxs-star text-[#fccd2a]"></i>
                  <i className="bx bxs-star text-[#fccd2a]"></i>
                  <i className="bx bxs-star text-[#fccd2a]"></i>
                  <i className="bx bxs-star text-[#fccd2a]"></i>
                  <i className="bx bxs-star text-[#fccd2a]"></i>
                </div>
                <p className="py-4 text-[#876536] text-lg pt-4  ">
                  "Transform your mornings with the effortless charm of instant
                  coffee, delivering the rich, full-bodied flavor of freshly
                  brewed beans in just moments. "
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" rounded-xl hover:border-2 hover:border-[#c0a278] shadow-2xl transition-all hover:scale-105 duration-500 cursor-pointer m-5">
              <div className="bg-[#f5e5ce] text-[#5a3e2b] ">
                <Image
                  src="/girl.png"
                  alt="Laptop"
                  height={200}
                  width={200}
                  className=" rounded-t-md  object-cover mx-auto  rounded-2xl
                "
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h1 className=" text-xl font-semibold text-gray-900 dark:text-gray-100 ">
                    About Macbook
                  </h1>
                </div>
                <div className="flex  gap-1">
                  <i className="bx bxs-star text-[#fccd2a]"></i>
                  <i className="bx bxs-star text-[#fccd2a]"></i>
                  <i className="bx bxs-star text-[#fccd2a]"></i>
                  <i className="bx bxs-star text-[#fccd2a]"></i>
                  <i className="bx bxs-star text-[#fccd2a]"></i>
                </div>
                <p className="py-4 text-[#876536] text-lg pt-4  ">
                  "Transform your mornings with the effortless charm of instant
                  coffee, delivering the rich, full-bodied flavor of freshly
                  brewed beans in just moments. "
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
