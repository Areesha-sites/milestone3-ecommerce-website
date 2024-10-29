import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoStarSharp } from "react-icons/io5";
import { IoIosStarHalf } from "react-icons/io";
import { Button } from "@headlessui/react";
import { FaCartArrowDown } from "react-icons/fa";
import { PastriesCardProps } from "../../../Types/types";

const PastriesCategory = ({ pastry }: PastriesCardProps) => {
  return (
    <>
      <div className="bg-gradient-to-tl to-[#f4d1b7] from-[#7e5233] border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 xl:h-[60vh] hover:cursor-pointer hover:scale-105 hover:transition-all duration-300 hover:ease-linear shadow-md shadow-[#674632] overflow-hidden">
        <div className="">
          <Link href={`/products/${pastry.id}`}></Link>
        </div>
        <Image
          src={pastry.image}
          alt={pastry.name}
          height={200}
          width={200}
          className="xl:w-[100%] xl:h-[54%] xl:object-contain xxs:ml-[1rem] xl:ml-0 mt-[-0.5rem] xxs:h-[52%]"
        />
        <h2 className="text-center text-[25px] text-[#4b2f1d] font-bold italic pt-[-1rem]">
          {pastry.name}
        </h2>
        <p className="text-center text-[15px] px-[10px]">
          {pastry.description}
        </p>
        <span className="font-bold text-[#804a29] pl-[3rem] mt-6">
          Price: ${pastry.price}
        </span>
        <span className="flex justify-end pr-9 pt-[-2rem] gap-1 ">
          <IoStarSharp className="text-yellow-400 mt-[-1rem]" />
          <IoStarSharp className="text-yellow-400 mt-[-1rem]" />
          <IoStarSharp className="text-yellow-400 mt-[-1rem]" />
          <IoStarSharp className="text-yellow-400 mt-[-1rem]" />
          <IoIosStarHalf className="text-yellow-400 mt-[-1rem]" />
        </span>
        <div className="flex justify-between items-center gap-5 pt-8 mx-[2rem]">
          <Button className="bg-[#2e1609] text-white py-1 px-5 rounded-[5px] font-semibold cursor-pointer hover:bg-white hover:text-[#2e1609] transition-all duration-300 ease-linear">
            <span className="flex items-center gap-2">
              {" "}
              Add to cart <FaCartArrowDown className="text-lg" />
            </span>
          </Button>
          <Button className=" py-1 px-7 rounded-[5px] font-semibold text-white hover:text-[#2e1609] transition-all duration-300 ease-linear underline">
            See More
          </Button>
        </div>
      </div>
    </>
  );
};

export default PastriesCategory;
