"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import Countdown from "./Countdown";
import { Button } from "@headlessui/react";
import { ArrowRightIcon, TagsIcon } from "lucide-react";
// import BestSellingCoffeeCarousel from "./BestSellingCoffeeCarousel";
const Banner = () => {
  return (
    <>
      <div className="container bg-gradient-to-tl to-[#f1dac9] from-[#7f593e] p-3 mb-[-10rem] w-[100%] xxl:w-[100%] custom-xl:w-[100%] lg:w-[100%] xs:w-[100%] sm:w-[100%] md:w-[100%] xl:w-[100%] xxs:pb-24">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 150000000,
            disableOnInteraction: false,
          }}
          navigation={true}
          speed={300}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="cursor-pointer">
            <div className="container ">
              {/* ================================= */}
              <div className="grid md:grid-cols-1 grid-cols-1 2xl:grid-cols-2 xl:grid xl:grid-cols-2 xxl:grid xxl:grid-cols-2 lg:grid lg:grid-cols-2">
                {/* ================================= */}

                <div className="relative">
                  <div className="flex justify-center items-center mt-1 mb-[-1.5rem] 2xl:mt-[2rem] xl:mt-[1rem] xl:ml-[-9rem]">
                    <p className="font-medium xs:text-[3.1vw] text-white px-[1rem] rounded-[10px] py-[3px] italic bg-[#654228] 2xl:text-[25px] xl:text-[1vw] lg:text-[1.8vw] xxs:text-[10px] xs-md:text-[12px] md:text-[12px]">
                      Brew Your Perfect Cup ☕
                    </p>
                  </div>
                  <h1 className="md:text-[65px] xs:text-[13vw] xs:w-[100%] xs:leading-[50px] font-bold py-4 lg:pl-[2rem] text-[#5a3e2b] mt-[20px] md:mt-0 text-center sm:leading-[86px] 2xl:text-[7vw] 2xl:mt-[1rem] xl:text-[6vw] xl:ml-[-5rem] xl:mt-3 lg:text-[6vw] lg:mt-[1rem] xxs:text-[14vw] xxs:leading-[46px] xs-sm:leading-[50px] xs-md:text-[15vw] xs-md:leading-[68px]">
                    Brew Berry Coffee
                  </h1>

                  <div className="xs:absolute xs:top-[4.7rem] xs:right-[4rem] xs:mt-5 sm:absolute sm:top-[9rem] sm:right-[1rem] sm:h-[10rem] sm:w-[10rem] md:absolute md:top-[0.5rem] md:right-[-3.5rem] md:mt-5 2xl:absolute 2xl:top-[11rem] 2xl:right-[3rem] 2xl:mt-5 xl:absolute xl:top-[7.8rem] xl:right-[6rem] xxl:absolute xxl:top-[17rem] xxl:right-[17rem] custom-xl:absolute custom-xl:top-[7.5rem] custom-xl:right-[8rem] lg:absolute lg:top-[5.5rem] lg:right-[-1rem] xxs:absolute xxs:top-[5.3rem] xxs:right-[1.6rem] xs-sm:absolute xs-sm:top-[5.8rem] xs-sm:right-[2.7rem] xs-md:absolute xs-md:top-[6.8rem] xs-md:rigt-[2.5rem]">
                    <Image
                      src="/vector.png"
                      alt="Coffee-Tag"
                      title="Coffee-vector"
                      width={60}
                      height={60}
                      className="md:h-[5rem] md:w-[5rem] 2xl:h-[8rem] 2xl:w-[8rem] xl:w-[5rem] xl:h-[5rem] xxl:h-[10rem] xxl:w-[10rem] lg:h-[5rem] lg:w-[5rem] custom-xl:h-[6rem] custom-xl:w-[6rem] xxs:h-[3.5rem] xxs:w-[3.5rem] xs-md:h-[4.3rem] xs-md:w-[4.3rem]"
                    />
                  </div>
                  <p className="py-4 text-[#452b1a] lg:pl-[2rem] ml-[20px] xs:ml-[2.5rem] xs:mr-[2.5rem] md:text-[0.9rem] 2xl:text-[1.5rem] xl:text-[1rem] xl:ml-[1rem] xxl:text-[1.6rem] xxl:ml-[5rem] xxs:text-[12px] xxs:mx-[1rem] xxs:mt-[-10px] xs-md:text-[14px]">
                    <b>
                      <i className="text-[#5a3e2b] ">
                        "Where every Sip Tells a Story"
                        <i className="bx bxs-coffee-alt bx-tada bx-flip-horizontal px-2 text-[#5a3e2b]"></i>
                      </i>
                    </b>
                    <br />
                    Welcome to
                    <i className="text-[#5a3e2b] font-bold"> BrewBerry Cafe</i>,
                    Your cozy corner for freshly brewed coffee, delicious
                    snacks, and unforgettable moments. Whether You're here for a
                    quick coffee break, a casual chat, or some quiet work time,
                    we have the perfect cup for you. Our beans are handpicked,
                    our blends are crafted with love, and every cup is brewed to
                    perfection. Come and experience the magic of coffee at
                    <i className="text-[#5a3e2b] font-bold"> BrewBerry!</i> ♡
                  </p>
                  {/* ================================= */}
                  <div className="xs:flex xs:flex-col xs:gap-4 xs:py-1 px-[4rem] xs:px-[6.5rem] sm:flex sm:flex-col sm:gap-4 sm:py-1 sm:px-[11rem] md:flex md:flex-row md:gap-4 md:px-[11rem]  md:ml-[2rem] 2xl:flex 2xl:flex-row 2xl:gap-4 2xl:py-1 2xl:px-[6rem] xl:flex xl:flex-row xl:gap-4 xl:py-1 xl:px-[3rem] xxl:flex xxl:flex-row xxl:gap-4 xxl:py-1 xxl:px-[7rem] lg:flex lg:flex-row lg:gap-4 lg:py-1 lg:px-[4rem] xxs:flex xxs:flex-col xxs:gap-3 xxs:px-[-1rem] xs-sm:flex xs-sm:flex-row ">
                    <Button
                      title="Menu-Button"
                      className="bg-[#2e1609] text-[#f5e0c3] p-5 rounded-xl shadow-md shadow-[#7f593e] font-bold hover:scale-105 transition-all hover:font-bold hover:bg-[#5a3e2b] hover:text-[#eddfcb] md:text-[0.9rem] md:p-4 xl:py-[-7px] xl:text-[13px] xxs:text-[11px] xxs:py-[2px] xs-sm:ml-[-2rem] xs-md:ml-[-1rem] xl:px-[40px] xl:p-[2px] "
                    >
                     <span> Order Now <ArrowRightIcon className="pl-[4px] w-[1.5rem] h-[1.5rem] xxs:h-[1.2rem] xxs:w-[1.2rem]" /></span>
                      
                    </Button>
                    <Button
                      className="p-4 tracking-wide rounded-xl shadow-md shadow-[#7f593e]  hover:scale-105 text-[#2e1609] transition-all hover:font-bold hover:text-[#2e1609] hover:border-spacing-96 font-bold mb-[10px] md:text-[0.9rem] md:p-4 xl:py-[12px] xl:text-[13px] xxs:text-[11px] xxs:py-[2px] bg-white"
                      // variant="outline"
                    >
                      View Special Offer
                      <TagsIcon className="pl-[4px] w-[1.5rem] h-[1.5rem] xxs:h-[1.2rem] xxs:w-[1.2rem]" />
                    </Button>
                  </div>
                  {/* ================================= */}
                </div>
                {/* ================================= */} 
                <div className="xs:relative xs:-top-14 xs:left-[1.5rem] xs:pb-[5rem] sm:relative sm:-top-20 sm:left-[3.5rem] sm:pb-[5rem] md:relative md:top-[-5rem] md:left-[9rem] md:pb-[5rem] 2xl:relative 2xl:top-[-7rem] 2xl:left-[-1.5rem] 2xl:pb-[5rem] xl:relative xl:top-[-7rem] xl:left-[0rem] xl:pb-[5rem] xxl:relative xxl:top-[-6rem] xxl:left-[0rem] lg:relative lg:top-[-6rem] lg:left-[-1rem] custom-xl:relative custom-xl:top-[-6rem] custom-xl:left-[0rem] xxs:relative xxs:top-[-3rem] xxs:left-[1rem] xs-md:relative xs-md:top-[-3rem] xs-md:left-[1.5rem] ">
                  <Image
                    src="/cup1.png"
                    alt="Coffee-cup"
                    width={550}
                    height={550}
                    className="2xl:h-[100vh] 2xl:w-[50vw] xl:h-[120vh] xl:w-[70vw] xxl:h-[100vh] xxl:w-[100vw] lg:h-[70vh] lg:w-[80vw] custom-xl:h-[75vh] custom-xl:w-[70vw] xxs:h-[75vh] xxs:w-[90vw] xs-sm:h-[80vh] xs-sm:w-[85vw] xs-md:h-[85vh] xs-md:w-[85vw] md:h-[120vh] md:w-[60vw]"
                  />
                </div>
                {/* ================================= */}
              </div>
              {/* ==================banner-bottom================ */}
              {/* <div className="flex justify-center items-center relative top-[-10rem] left-[8rem]">
                <h2 className="text-[1.5rem] font-bold italic">
                  Best Selling Coffee
                </h2>
              </div>
              <div className="">
                <h2 className="text-[1.5rem] font-bold flex justify-start items-start relative top-[-12rem] left-[3rem] italic 2xl:relative 2xl:top-[12rem] xl:relative xl:top-[12rem]">
                  Weekend special offer
                </h2>
              </div>
              <div className=" ml-[2rem] flex justify-start items-center ">
                <div className="grid grid-cols-2 gap-x-[14rem] flex-col ">
                  <div className="flex justify-start items-start relative top-[-4rem] xl:relative xl:top-[12rem] 2xl:relative 2xl:top-[12rem]">
                    <div className="bg-[#5a3e2b] h-[22vh] w-[30vw] rounded-[30px] pb-2 ">
                      <main className="container text-center ">
                        <div className=""></div>
                        <Countdown targetDate={`2024-12-31T23:59:59`} />
                      </main>
                    </div>
                  </div>

                  <div className="relative top-[-10.2rem]">
                    <BestSellingCoffeeCarousel />
                  </div>
                </div>
              </div> */}
              {/* ================================= */}
            </div>
            {/* <div className="flex justify-center items-center relative bottom-[36rem] left-[-11.3rem] -z-20">
              <Image src="/tag.jpg" alt="tag-image" height={100} width={100} />
            </div>
            <div className="flex justify-center items-center relative bottom-[45.8rem] right-[-24.4rem]">
              <Image
                src="/star-tag.png"
                alt="star-tag"
                height={130}
                width={130}
              />
            </div> */}
          </SwiperSlide>

          {/* ============================================== */}
          <SwiperSlide className="cursor-pointer">
            <div className="container md:pt-15 md:pb-10">
              {/* ================================= */}
              <div className="grid md:grid-cols-1 grid-cols-1 2xl:grid-cols-2 xl:grid xl:grid-cols-2 xxl:grid xxl:grid-cols-2  lg:grid lg:grid-cols-2">
                {/* ================================= */}
                <div className="relative">
                  <div className="flex justify-center items-center mt-1 mb-[-1.5rem] 2xl:mt-[2rem] xl:mt-[1rem] xl:ml-[-9rem]">
                    <p className="font-medium xs:text-[3.1vw] text-white px-[1rem] rounded-[10px] py-[3px] italic bg-[#654228] 2xl:text-[25px] xl:text-[1vw] lg:text-[1.8vw] xxs:text-[10px] xs-md:text-[12px] md:text-[12px]">
                      Brew Your Perfect Cup ☕
                    </p>
                  </div>
                  <h1 className="md:text-[65px] xs:text-[13vw] xs:w-[100%] xs:leading-[50px] font-bold py-4 lg:pl-[2rem] text-[#5a3e2b] mt-[20px] md:mt-0 text-center sm:leading-[86px] 2xl:text-[7vw] 2xl:mt-[1rem] lg:text-[6vw] lg:mt-[1rem] xl:text-[6vw] xl:ml-[-5rem] xl:mt-3 xxs:text-[14vw] xxs:leading-[46px] xs-sm:leading-[50px] xs-md:text-[15vw] xs-md:leading-[68px]">
                    Brew Berry Coffee
                  </h1>
                  <div className="xs:absolute xs:top-[4.7rem] xs:right-[4rem] xs:mt-5 sm:absolute sm:top-[9rem] sm:right-[1rem] sm:h-[10rem] sm:w-[10rem] md:absolute md:top-[0.5rem] md:right-[-3.5rem] md:mt-5 2xl:absolute 2xl:top-[11rem] 2xl:right-[3rem] 2xl:mt-5 xxl:absolute xxl:top-[17rem] custom-xl:absolute custom-xl:top-[7.5rem] xxl:right-[17rem] lg:absolute lg:top-[5.5rem] lg:right-[-1rem] xl:absolute xl:top-[7.8rem] xl:right-[6rem] xxs:absolute xxs:top-[5.3rem] xxs:right-[1.6rem] xs-sm:absolute xs-sm:top-[5.8rem] xs-sm:right-[2.7rem] xs-md:absolute xs-md:top-[6.8rem] xs-md:rigt-[2.5rem]">
                    <Image
                      src="/vector.png"
                      alt="Coffee-Tag"
                      title="Coffee-vector"
                      width={60}
                      height={60}
                      className="md:h-[5rem] md:w-[5rem] 2xl:h-[8rem] 2xl:w-[8rem] xl:w-[5rem] xl:h-[5rem] xxl:h-[10rem] xxl:w-[10rem] lg:h-[5rem] lg:w-[5rem] custom-xl:h-[6rem] custom-xl:w-[6rem] xxs:h-[3.5rem] xxs:w-[3.5rem] xs-md:h-[4.3rem] xs-md:w-[4.3rem]"
                    />
                  </div>
                  <p className="py-4 text-[#452b1a] lg:pl-[2rem] ml-[20px] xs:ml-[2.5rem] xs:mr-[2.5rem] md:text-[0.9rem] 2xl:text-[1.5rem] xl:text-[1rem] xl:ml-[1rem] xxl:text-[1.6rem] xxl:ml-[5rem] xxs:text-[12px] xxs:mx-[1rem] xxs:mt-[-10px] xs-md:text-[14px]">
                    <b>
                      <i className="text-[#5a3e2b]  ">
                        "Where every Sip Tells a Story"
                        <i className="bx bxs-coffee-alt bx-tada bx-flip-horizontal px-2 text-[#5a3e2b]"></i>
                      </i>
                    </b>
                    <br />
                    Welcome to
                    <i className="text-[#5a3e2b]  font-bold"> BrewBerry Cafe</i>
                    , Your cozy corner for freshly brewed coffee, delicious
                    snacks, and unforgettable moments. Whether You're here for a
                    quick coffee break, a casual chat, or some quiet work time,
                    we have the perfect cup for you. Our beans are handpicked,
                    our blends are crafted with love, and every cup is brewed to
                    perfection. Come and experience the magic of coffee at{" "}
                    <i className="text-[#5a3e2b]  font-bold"> BrewBerry! ♡</i>
                  </p>
                  {/* ================================= */}
                  <div className="xs:flex xs:flex-col xs:gap-4 xs:py-1 px-[4rem] xs:px-[6.5rem] sm:flex sm:flex-col sm:gap-4 sm:py-1 sm:px-[11rem] md:flex md:flex-row md:gap-4 md:px-[11rem] md:ml-[2rem] 2xl:flex 2xl:flex-row 2xl:gap-4 2xl:py-1 2xl:px-[6rem] xl:flex xl:flex-row xl:gap-4 xl:py-1 xl:px-[3rem] xxl:flex xxl:flex-row xxl:gap-4 xxl:py-1 xxl:px-[7rem] lg:flex lg:flex-row lg:gap-4 lg:py-1 lg:px-[4rem] xxs:flex xxs:flex-col xxs:gap-3 xxs:px-[-1rem] xs-sm:flex xs-sm:flex-row ">
                    <Button
                      title="Menu-Button"
                      className="bg-[#2e1609]  text-[#f5e0c3] p-5 tracking-wide rounded-xl shadow-md shadow-[#7f593e] font-bold hover:scale-105 transition-all hover:font-bold hover:bg-[#5a3e2b] hover:text-[#eddfcb] xl:py-[12px] xl:text-[13px]  xxs:text-[11px] xxs:py-[2px] xs-sm:ml-[-2rem] xs-md:ml-[-1rem] md:text-[0.9rem] md:p-4"
                    >
                      Order Now
                      <ArrowRightIcon className="pl-[4px] w-[1.5rem] h-[1.5rem]" />
                    </Button>

                    <Button
                      className="p-4 tracking-wide rounded-xl shadow-md shadow-[#7f593e]  hover:scale-105 text-[#2e1609] transition-all hover:font-bold hover:text-[#2e1609] hover:border-spacing-96 font-bold md:text-[0.9rem] md:p-4 xl:py-[12px] xl:text-[13px] xxs:text-[11px] xxs:py-[2px] "
                      // variant="outline"
                    >
                      View Special Offer
                      <TagsIcon className="pl-[4px] w-[1.5rem] h-[1.5rem]" />
                    </Button>
                  </div>
                  {/* ================================= */}
                </div>
                {/* ================================= */}
                <div className="xs:relative xs:top-[4rem] xs:left-[3rem] xs:pb-[5rem] sm:relative sm:top-[2rem] sm:left-[6rem] sm:pb-[5rem] md:relative md:top-[1rem] md:left-[9rem] md:pb-[5rem] 2xl:relative 2xl:top-[3rem] 2xl:left-[-1.5rem] 2xl:mr-[2rem] 2xl:pb-[5rem] xl:relative xl:top-[2rem] xl:left-[3rem] xl:pb-[5rem] xxl:relative xxl:top-[3rem] xxl:left-[8rem] lg:relative lg:top-[3rem] lg:left-[-1rem] custom-xl:relative custom-xl:top-[2rem] custom-xl:left-[1rem] xxs:relative xxs:top-[1rem] xxs:left-[1.5rem] xs-sm:relative xs-sm:left-[3rem] xs-sm:top-[2rem] xs-md:relative xs-md:top-[3rem] xs-md:left-[3.5rem]">
                  <Image
                    className="xs:h-64 xs:w-80 sm:h-[40vh] sm:w-[70vw] 2xl:h-[60vh] 2xl:w-[50vw] xl:h-[70vh] xl:w-[40vw] xxl:h-[70vh] xxl:w-[40vw] lg:h-[40vh] lg:w-[60vw] custom-xl:h-[50vh] custom-xl:w-[40vw] xxs:h-[45vh] xxs:w-[80vw]  xs-sm:h-[50vh] xs-sm:w-[70vw] md:h-[70vh] md:w-[55vw]"
                    src="/cup2.png"
                    alt="Coffee-cup"
                    width={450}
                    height={450}
                  />
                </div>
                {/* ================================= */}
              </div>
              {/* <div className="flex justify-center items-center relative top-[3.5rem] left-[8rem]">
                <h2 className="text-[1.5rem] font-bold italic">
                  Best Selling Coffee
                </h2>
              </div>
              <div className="">
                <h2 className="text-[1.5rem] font-bold flex justify-start items-start relative top-[2rem] left-[3rem] italic">
                  Weekend special offer
                </h2>
              </div>
              <div className=" ml-[2rem] flex justify-start items-center mt-[15rem] ">
                <div className="grid grid-cols-2 gap-x-[14rem] flex-col ">
                  <div className="flex justify-start items-start relative top-[-4rem]">
                    <div className="bg-[#5a3e2b] h-[22vh] w-[30vw] rounded-[30px] pb-2 ">
                      <main className="container text-center ">
                        <div className=""></div>
                        <Countdown targetDate={`2024-12-31T23:59:59`} />
                      </main>
                    </div>
                  </div>

                  <div className="relative top-[-10.2rem]">
                    <BestSellingCoffeeCarousel />
                  </div>
                </div>
              </div> */}

              {/* ================================= */}
            </div>
            {/* <div className="flex justify-center items-center relative bottom-[42.5rem] right-[-24.2rem]">
              <Image
                src="/star-tag.png"
                alt="star-tag"
                height={130}
                width={130}
              />
            </div>
            <div className="flex justify-center items-center relative bottom-[46rem] left-[-11.3rem] -z-20">
              <Image src="/tag.jpg" alt="tag-image" height={100} width={100} />
            </div>
            <div className="relative top-[2rem] left-[29rem] -z-20 "></div> */}
          </SwiperSlide>
          {/* ============================================== */}
          <SwiperSlide className="cursor-pointer">
            <div className="container md:pt-15 md:pb-10">
              {/* ================================= */}
              <div className="grid md:grid-cols-1 grid-cols-1 2xl:grid-cols-2 xl:grid xl:grid-cols-2 xxl:grid xxl:grid-cols-2 lg:grid lg:grid-cols-2">
                {/* ================================= */}
                <div className="relative">
                  <div className="flex justify-center items-center mt-1 mb-[-1.5rem] 2xl:mt-[2rem] xl:mt-[1rem] xl:ml-[-9rem]">
                    <p className="font-medium xs:text-[3.1vw] text-white px-[1rem] rounded-[10px] py-[3px] italic bg-[#654228] 2xl:text-[25px] xl:text-[1vw] lg:text-[1.8vw] xxs:text-[10px] xs-md:text-[12px] md:text-[12px]">
                      Brew Your Perfect Cup ☕
                    </p>
                  </div>
                  <h1 className="md:text-[65px] xs:text-[13vw] xs:w-[100%] xs:leading-[50px] font-bold py-4 lg:pl-[2rem] text-[#5a3e2b] mt-[20px] md:mt-0 text-center sm:leading-[86px] 2xl:text-[7vw] 2xl:mt-[1rem]  lg:text-[6vw] lg:mt-[1rem] xl:text-[6vw] xl:ml-[-5rem] xl:mt-3 xxs:text-[14vw] xxs:leading-[46px] xs-sm:leading-[50px] xs-md:text-[15vw] xs-md:leading-[68px]">
                    Brew Berry Coffee
                  </h1>

                  <div className="xs:absolute xs:top-[4.7rem] xs:right-[4rem] xs:mt-5 sm:absolute sm:top-[9rem] sm:right-[1rem] sm:h-[10rem] sm:w-[10rem] md:absolute md:top-[0.5rem] md:right-[-3.5rem] md:mt-5 2xl:absolute 2xl:top-[11rem] 2xl:right-[3rem] 2xl:mt-5 xxl:absolute xxl:top-[17rem] xxl:right-[17rem] custom-xl:absolute custom-xl:top-[7.5rem] custom-xl:right-[8rem] lg:absolute lg:top-[5.5rem] lg:right-[-1rem] xl:absolute xl:top-[7.8rem] xl:right-[6rem] xxs:absolute xxs:top-[5.3rem] xxs:right-[1.6rem]  xs-sm:absolute xs-sm:top-[5.8rem] xs-sm:right-[2.7rem] xs-md:absolute xs-md:top-[6.8rem] xs-md:rigt-[2.5rem]">
                    <Image
                      src="/vector.png"
                      alt="Coffee-Tag"
                      title="Coffee-vector"
                      width={60}
                      height={60}
                      className="md:h-[5rem] md:w-[5rem] 2xl:h-[8rem] 2xl:w-[8rem] xl:w-[5rem] xl:h-[5rem] xxl:h-[10rem] xxl:w-[10rem] lg:h-[5rem] lg:w-[5rem] custom-xl:h-[6rem] custom-xl:w-[6rem] xxs:h-[3.5rem] xxs:w-[3.5rem] xs-md:h-[4.3rem] xs-md:w-[4.3rem]"
                    />
                  </div>
                  <p className="py-4 text-[#452b1a] lg:pl-[2rem] ml-[20px] xs:ml-[2.5rem] xs:mr-[2.5rem] md:text-[0.9rem] 2xl:text-[1.5rem] xl:text-[1rem] xl:ml-[1rem] xxl:text-[1.6rem] xxl:ml-[5rem] xxs:text-[12px] xxs:mx-[1rem] xxs:mt-[-10px] xs-md:text-[14px]">
                    <b>
                      <i className="text-[#5a3e2b]  ">
                        "Where every Sip Tells a Story"
                        <i className="bx bxs-coffee-alt bx-tada bx-flip-horizontal px-2 text-[#5a3e2b]"></i>
                      </i>
                    </b>
                    <br />
                    Welcome to
                    <i className="text-[#5a3e2b] font-bold"> BrewBerry Cafe</i>,
                    Your cozy corner for freshly brewed coffee, delicious
                    snacks, and unforgettable moments. Whether You're here for a
                    quick coffee break, a casual chat, or some quiet work time,
                    we have the perfect cup for you. Our beans are handpicked,
                    our blends are crafted with love, and every cup is brewed to
                    perfection. Come and experience the magic of coffee at
                    <i className="text-[#5a3e2b]  font-bold"> BrewBerry! ♡</i>
                  </p>
                  {/* ================================= */}
                  <div className="xs:flex xs:flex-col xs:gap-4 xs:py-1 px-[4rem] xs:px-[6.5rem] sm:flex sm:flex-col sm:gap-4 sm:py-1 sm:px-[11rem] 2xl:flex 2xl:flex-row 2xl:gap-4 2xl:py-1 2xl:px-[6rem] xl:flex xl:flex-row xl:gap-4 xl:py-1 xl:px-[3rem] xxl:flex xxl:flex-row xxl:gap-4 xxl:py-1 xxl:px-[7rem] lg:flex lg:flex-row lg:gap-4 lg:py-1 lg:px-[4rem] xxs:flex xxs:flex-col xxs:gap-3 xxs:px-[-1rem] xs-sm:flex xs-sm:flex-row md:flex md:flex-row md:gap-4 md:px-[11rem] md:ml-[2rem]" >
                    <Button
                      title="Menu-Button"
                      className="bg-[#2e1609]  text-[#f5e0c3] p-5 tracking-wide rounded-xl shadow-md shadow-[#7f593e] font-bold hover:scale-105 transition-all hover:font-bold hover:bg-[#5a3e2b] hover:text-[#eddfcb] md:text-[0.9rem] md:p-4 xl:py-[12px] xl:text-[13px] xxs:text-[11px] xxs:py-[2px] xs-sm:ml-[-2rem] xs-md:ml-[-1rem]"
                    >
                      Order Now
                      <ArrowRightIcon className="pl-[4px] w-[1.5rem] h-[1.5rem]" />
                    </Button>

                    <Button
                      className="p-4 tracking-wide rounded-xl shadow-md shadow-[#7f593e]  hover:scale-105 text-[#2e1609] transition-all hover:font-bold hover:text-[#2e1609] hover:border-spacing-96 font-bold md:text-[0.9rem] md:p-4 xl:py-[12px] xl:text-[13px] xxs:text-[11px] xxs:py-[2px] "
                      // variant="outline"
                    >
                      View Special Offer
                      <TagsIcon className="pl-[4px] w-[1.5rem] h-[1.5rem]" />
                    </Button>
                  </div>
                  {/* ================================= */}
                </div>
                {/* ================================= */}
                <div className="xs:relative xs:top-[3rem] xs:left-[4rem] xs:pb-[5rem] sm:relative sm:top-[2rem] sm:left-[7rem] sm:pb-[5rem] md:relative md:top-[3rem] md:left-[9rem] md:pb-[5rem] 2xl:relative 2xl:top-[2rem] 2xl:left-[3rem] 2xl:pb-[5rem]  xl:relative xl:top-[3rem] xl:left-[6.5rem] xl:pb-[5rem] xxl:relative xxl:top-[4rem] xxl:left-[7rem] lg:relative lg:top-[3rem] lg:left-[-1rem] custom-xl:relative custom-xl:top-[2rem] custom-xl:left-[3rem] xxs:relative xxs:top-[2rem] xxs:left-[1rem] xs-sm:relative xs-sm:left-[3rem] xs-md:relative xs-md:top-[3rem] xs-md:left-[3rem]">
                  <Image
                    className="xs:h-80 xs:w-80 sm:h-[35vh] sm:w-[55vw] md:h-[70vh] md:w-[60vw] 2xl:h-[55vh] 2xl:w-[40vw] xl:h-[60vh] xl:w-[35vw] xxl:h-[70vh] xxl:w-[40vw] lg:h-[40vh] lg:w-[60vw] custom-xl:h-[50vh] custom-xl:w-[40vw] xxs:h-[50vh] xxs:w-[80vw]  xs-sm:h-[50vh] xs-sm:w-[70vw] xs-md:h-[55vh] xs-md:w-[75vw] "
                    src="/coffee-cup4.jpg"
                    alt="Coffee-cup"
                    width={400}
                    height={400}
                  />
                </div>
                {/* ================================= */}
              </div>
              {/* <div className="flex justify-center items-center relative top-[4.2rem] left-[8rem]">
                <h2 className="text-[1.5rem] font-bold italic">
                  Best Selling Coffee
                </h2>
              </div>
              <div className="">
                <h2 className="text-[1.5rem] font-bold flex justify-start items-start relative top-[2rem] left-[3rem] italic">
                  Weekend special offer
                </h2>
              </div>
              <div className="relative top-[4.5rem] left-[24.2rem] -z-20 ">
                <div className=" ">
                  <Image
                    src="/tag.jpg"
                    alt="coffee-cup"
                    height={100}
                    width={100}
                  />
                </div>
              </div>
              <div className=" ml-[2rem] flex justify-start items-center mt-[8rem] ">
                <div className="grid grid-cols-2 gap-x-[14rem] flex-col ">
                  <div className="flex justify-start items-start relative top-[-4rem]">
                    <div className="bg-[#5a3e2b] h-[22vh] w-[30vw] rounded-[30px] pb-2 ">
                      <main className="container text-center ">
                        <div className=""></div>
                        <Countdown targetDate={`2024-12-31T23:59:59`} />
                      </main>
                    </div>
                  </div>

                  <div className="relative top-[-10.2rem]">
                    <BestSellingCoffeeCarousel />
                  </div>
                </div>
              </div> */}
            </div>
            {/* <div className="flex justify-center items-center relative bottom-[42.5rem] right-[-24.2rem]">
              <Image
                src="/star-tag.png"
                alt="star-tag"
                height={130}
                width={130}
              />
            </div> */}
          </SwiperSlide>
          {/* ============================================== */}
        </Swiper>
        {/* </div> */}
      </div>
    </>
  );
};

export default Banner;
