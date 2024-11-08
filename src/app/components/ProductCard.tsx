"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import { ProductsCardProps } from "../../../Types/types";
import Image from "next/image";
import Link from "next/link";
import { IoStarSharp } from "react-icons/io5";
import { IoIosStarHalf } from "react-icons/io";
import { Button } from "@headlessui/react";
import { FaCartArrowDown } from "react-icons/fa";
const ProductCard = ({ product }: ProductsCardProps) => {
  return (
    <>
      <div className="bg-gradient-to-tl to-[#f4d1b7] from-[#7e5233] border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 xl:h-[60vh] xxs:h-[70vh] hover:cursor-pointer hover:scale-105 hover:transition-all duration-300 hover:ease-linear shadow-md shadow-[#674632] overflow-hidden">
        <div className="">
          <Link href={`/product/${product.id}`}></Link>
        </div>
        <Image
          src={product.image}
          alt={product.name}
          height={200}
          width={200}
          className="xl:w-[100%] xl:h-[54%] xl:object-contain xxs:ml-[1rem] xl:ml-0 mt-[-0.5rem] xxs:h-[52%]"
        />
        <h2 className="text-center xl:text-[25px] text-[#4b2f1d] font-bold italic pt-[-1rem] xxs:text-[20px]">
          {product.name}
        </h2>
        <p className="text-center xl:text-[15px] xl:px-[10px] xxs:text-[13px] xl:pb-1">
          {product.description}
        </p>
        <span className="font-bold text-[#472713] xl:mt-[10px] xl:pl-[3rem] xl:text-center mt-6 xxs:text-left xxs:pl-[1rem] xxs:text-[13px] xl:text-[22px]">
          ${product.price}
        </span>

        <span className="flex justify-end xl:pr-4 pt-[-2rem] xxs:pr-[1rem] xl:pt-[-2rem] gap-1   ">
          <IoStarSharp className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem]" />
          <IoStarSharp className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem]" />
          <IoStarSharp className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem]" />
          <IoStarSharp className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem]" />
          <IoIosStarHalf className="text-yellow-400 xl:mt-[-1.6rem] xxs:mt-[-1.2rem]" />
          <span className="mt-[-1rem] ml-1">
            <p className="mr-2 mt-[-8px] ml-3 rounded bg-[#58321a] text-white px-2.5 py-0.5 text-xs font-semibold">
              5.0
            </p>
          </span>
        </span>
        <div className="xl:flex xl:justify-between xl:items-center xl:flex-row xl:gap-5 xl:pt-8 xl:mx-[2rem] xxs:flex xxs:flex-col xxs:pt-3 ">
          <Button className="bg-[#2e1609] text-white py-1 xl:px-5 rounded-[5px] font-semibold cursor-pointer hover:bg-white hover:text-[#2e1609] transition-all duration-300 ease-linear xxs:px-2">
            <span className="xl:flex xl:items-center xl:gap-2 xl:text-[15px] xxs:text-[12px]">
              {" "}
              {/* Flex container for text and icon */}
              Add to cart <FaCartArrowDown className="text-lg" />
            </span>
          </Button>
          <Link href={`/product/${product.id}`} passHref>
            <Button className=" py-1 px-7 rounded-[5px] font-semibold text-white hover:text-[#2e1609] transition-all duration-300 ease-linear xl:mt-0  underline xxs:mt-[-1rem]">
              <span className="flex items-center gap-2 xxs:text-[12px] xl:text-[15px]">
                {" "}
                View Details
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default ProductCard;
