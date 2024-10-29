"use client";
import React from "react";
import Image from "next/image";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { BestSellingCoffeeCardsTypes } from "../../../Types/types";
const BestSellingCoffeeCards = ({
  title,
  description,
  price,
  imageUrl,
}: BestSellingCoffeeCardsTypes) => {
  return (
    <>
      <div className="">
        <div className="w-full max-w-sm bg-gradient-to-t to-[#9a7860] from-[#e0c1ab] border border-[#5a3e2b] rounded-3xl cursor-pointer ">
          <a href="#">
            <Image
              className=" ml-[3.3rem] mt-[-2rem] mb-[-2rem] py-[10px] rounded-t-lg "
              src={imageUrl}
              alt="product image"
              height={280}
              width={280}
            />
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-[1.3rem] font-bold tracking-tight text-center text-[#5a3e2b] ">
                {title}
              </h5>
              <p className="text-[0.8rem] text-center mt-2 text-[#5a3e2b]">
                {description}
              </p>
            </a>
            <div className="flex items-center mt-2.5 mb-5">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStarHalfAlt className="text-yellow-400" />
              </div>
              <span className="bg-[#7f593e] text-white text-xs font-semibold px-2.5 py-0.5 rounded  ms-3">
                5.0
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[1.2rem] font-bold text-[#5a3e2b] dark:text-white">
                {price}
              </span>
              <a
                href="#"
                className="text-white bg-[#2e1609] hover:bg-[#925839] focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Add to Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSellingCoffeeCards;
