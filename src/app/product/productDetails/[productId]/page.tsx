"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import { products, hotBeverages } from "@/app/api/data";
import { useParams } from "next/navigation";
import { BiSolidPlusCircle } from "react-icons/bi";
import { HiMiniMinusCircle } from "react-icons/hi2";
import { IoStarSharp } from "react-icons/io5";
import { IoIosStarHalf } from "react-icons/io";
import { GiConfirmed } from "react-icons/gi";
import Link from "next/link";
import { Button } from "@headlessui/react";
import { GoHeartFill } from "react-icons/go";
const ProductDetails = () => {
  const { productId, hotBeveragesId } = useParams();
  // const {hotBeveragesId} = useParams();
  const product = products.find((item) => item.id === Number(productId));
  const hotBeverage = hotBeverages.find((item) => item.id === Number(hotBeveragesId))
const item = product || hotBeverage

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [flavors, setFlavors] = useState("");
  const [isSweet, setIsSweet] = useState("");
  const [favorite, setfavorite] = useState(false);


  const handleFavoriteClick = () => {
    setfavorite(!favorite);
  };

  if (!item) return <p>Loading...</p>;
  // if (!hotBeverage) return <p>Loading...</p>

  const handleQuantityChange = (type: string) => {
    if (type === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleOrderConfirm = () => {
    alert("Added Successfully");
  };

  const totalAmount = useMemo(
    () => quantity * item.price,
    [quantity, item.price]
  );



  return (
    <>
    
   
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-tl to-[#f4d1b7] from-[#7e5233]  p-4 ">
      <div className="bg-white border border-[#4b2f1d] rounded-lg m-[2rem] shadow-2xl flex w-full max-w-screen-xl h-[80vh] overflow-hidden bg-gradient-to-tl to-[#caa88c] from-[#7d4b26]  shadow-[#8f6c53]">
        {/* Image Section */}
        <div className="relative w-1/2 h-full ">
          <Image
            src={item.image}
            alt={item.name}
            // layout="fill"
            // objectFit="cover"
            height={300}
            width={300}
            className="rounded-l-lg xl:h-[60vh] xl:w-[60vw] mt-[5rem] hover:scale-105 hover:transition-all hover:ease-linear cursor-pointer duration-300"
          />
        </div>

        {/* Content Section */}
        <div className="p-6 w-1/2">
          <div className=" flex justify-between items-center ">
            <h2 className="text-4xl font-bold text-[#4b2f1d] mt-[1rem]">
              {item.name}
            </h2>
            <p
              className=""
              onClick={handleFavoriteClick}
              title="Add to Favorite"
            >
              <GoHeartFill
                className={`h-[1.5rem] w-[1.5rem] mt-6 mr-20 cursor-pointer ${
                  favorite ? "text-red-500" : "text-white"
                }`}
              />
            </p>
          </div>
          <p className="mt-2 text-[#3c2110]">{item.description}</p>

          <span className="flex justify-end xl:pr-9 pt-[-2rem] xxs:pr-[1rem] xl:pt-[-2rem] gap-1   ">
            <IoStarSharp className="text-yellow-400 xl:mt-[-1rem] xxs:mt-[-1.2rem]" />
            <IoStarSharp className="text-yellow-400 xl:mt-[-1rem] xxs:mt-[-1.2rem]" />
            <IoStarSharp className="text-yellow-400 xl:mt-[-1rem] xxs:mt-[-1.2rem]" />
            <IoStarSharp className="text-yellow-400 xl:mt-[-1rem] xxs:mt-[-1.2rem]" />
            <IoIosStarHalf className="text-yellow-400 xl:mt-[-1rem] xxs:mt-[-1.2rem]" />
          </span>
          <div className="mt-4 flex items-center space-x-4">
            <p className="font-bold text-[1rem] text-[#4b2f1d]">Quantity:</p>
            <button
              className="px-2 py-1 text-[#4b2f1d] text-[1.5rem] rounded"
              onClick={() => handleQuantityChange("increase")}
            >
              <BiSolidPlusCircle />
            </button>
            <p className="text-white font-semibold">{quantity}</p>
            <button
              className="px-2 py-1 text-[#4b2f1d] text-[1.5rem] rounded "
              onClick={() => handleQuantityChange("decrease")}
            >
              <HiMiniMinusCircle />
            </button>
          </div>

          {/* Size Selector */}
          <div className="flex justify-start items-center gap-16">
            <div className="mt-4">
              <p className="font-bold text-[1rem] text-[#4b2f1d]">Size:</p>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="mt-2 border text-white border-[#4b2f1d] rounded px-2 py-1 bg-gradient-to-tl to-[#caa88c] from-[#7d4b26] hover:border-[#4b2f1d] font-semibold"
              >
                <option
                  value="Small"
                  className="text-[#4b2f1d] hover:border-none  bg-gradient-to-tl to-[#caa88c] from-[#7d4b26] "
                >
                  Small
                </option>
                <option
                  value="Medium"
                  className="text-[#4b2f1d] hover:border-none bg-gradient-to-tl to-[#caa88c] from-[#7d4b26]"
                >
                  Medium
                </option>
                <option
                  value="Large"
                  className="text-[#4b2f1d] hover:border-none bg-gradient-to-tl to-[#caa88c] from-[#7d4b26]"
                >
                  Large
                </option>
              </select>
            </div>

            <div className="mt-4">
              <p className="font-bold text-[1rem] text-[#4b2f1d]">Flavors:</p>
              <select
                value={flavors}
                onChange={(e) => setFlavors(e.target.value)}
                className="mt-2 border text-white border-[#4b2f1d] rounded px-2 py-1 bg-gradient-to-tl to-[#caa88c] from-[#7d4b26] hover:border-[#4b2f1d] font-semibold"
              >
                <option
                  value="Vanilla"
                  className="text-[#4b2f1d] hover:border-none bg-gradient-to-tl to-[#caa88c] from-[#7d4b26]"
                >
                  Vanilla
                </option>
                <option
                  value="Chocolate"
                  className="text-[#4b2f1d] hover:border-none bg-gradient-to-tl to-[#caa88c] from-[#7d4b26]"
                >
                  Chocolate
                </option>
                <option
                  value="Strawberry"
                  className="text-[#4b2f1d] hover:border-none bg-gradient-to-tl to-[#caa88c] from-[#7d4b26]"
                >
                  Strawberry
                </option>
              </select>
            </div>

            <div className="mt-4">
              <p className="font-bold text-[1rem] text-[#4b2f1d]">
                Sweetess Level:
              </p>
              <select
                value={isSweet}
                onChange={(e) => setIsSweet(e.target.value)}
                className="mt-2 border text-white border-[#4b2f1d] rounded px-2 py-1 bg-gradient-to-tl to-[#caa88c] from-[#7d4b26] hover:border-[#4b2f1d] font-semibold"
              >
                <option
                  value="No Sugar"
                  className="text-[#4b2f1d] hover:border-none bg-gradient-to-tl to-[#caa88c] from-[#7d4b26]"
                >
                  No Sugar
                </option>
                <option
                  value="Less Sweet"
                  className="text-[#4b2f1d] hover:border-none bg-gradient-to-tl to-[#caa88c] from-[#7d4b26]"
                >
                  Less Sweet
                </option>
                <option
                  value="Medium Sweet"
                  className="text-[#4b2f1d] hover:border-none bg-gradient-to-tl to-[#caa88c] from-[#7d4b26]"
                >
                  Medium Sweet
                </option>
                <option
                  value=" Sweet"
                  className="text-[#4b2f1d] hover:border-none bg-gradient-to-tl to-[#caa88c] from-[#7d4b26]"
                >
                  Sweet
                </option>
                <option
                  value="Extra Sweet"
                  className="text-[#4b2f1d] hover:border-none bg-gradient-to-tl to-[#caa88c] from-[#7d4b26]"
                >
                  Extra Sweet
                </option>
              </select>
            </div>
          </div>

          {/* Total Amount */}
          <div className="mt-4">
            <p className="font-bold text-[1rem] text-[#4b2f1d]">
              Total Amount:{" "}
              <span className="text-white text-[0.9rem]">${totalAmount}</span>
            </p>
          </div>

          <div className="flex justify-start gap-2">
            <button
              onClick={handleOrderConfirm}
              className="mt-6 bg-[#2e1609] text-white py-1 xl:px-5 rounded-[5px] font-semibold cursor-pointer hover:bg-white hover:text-[#2e1609] transition-all duration-300 ease-linear xxs:px-2 flex items-center justify-center"
            >
              <span className="text-[14px] font-semibold flex items-center space-x-2">
                <span>Order Confirm</span>
                <GiConfirmed />
              </span>
            </button>
            <Link href={`/product`} passHref>
              <Button className=" py-1 px-7 rounded-[5px] font-semibold text-white hover:text-[#2e1609] transition-all duration-300 ease-linear xl:mt-6  underline xxs:mt-[-1rem]">
                <span className="flex items-center gap-2 xxs:text-[12px] xl:text-[15px]">
                  {" "}
                  Back to the menu
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    {/* =====================hot beverage========================= */}
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-tl to-[#f4d1b7] from-[#7e5233]  p-4 ">
      <div className="bg-white border border-[#4b2f1d] rounded-lg m-[2rem] shadow-2xl flex w-full max-w-screen-xl h-[80vh] overflow-hidden bg-gradient-to-tl to-[#caa88c] from-[#7d4b26]  shadow-[#8f6c53]">
        {/* Image Section */}
        <div className="relative w-1/2 h-full ">
          <Image
            src={item.image}
            alt={item.name}
            // layout="fill"
            // objectFit="cover"
            height={300}
            width={300}
            className="rounded-l-lg xl:h-[60vh] xl:w-[60vw] mt-[5rem] hover:scale-105 hover:transition-all hover:ease-linear cursor-pointer duration-300"
          />
        </div>

        {/* Content Section */}
        <div className="p-6 w-1/2">
          <div className=" flex justify-between items-center ">
            <h2 className="text-4xl font-bold text-[#4b2f1d] mt-[1rem]">
              {item.name}
            </h2>
            <p
              className=""
              onClick={handleFavoriteClick}
              title="Add to Favorite"
            >
              <GoHeartFill
                className={`h-[1.5rem] w-[1.5rem] mt-6 mr-20 cursor-pointer ${
                  favorite ? "text-red-500" : "text-white"
                }`}
              />
            </p>
          </div>
          <p className="mt-2 text-[#3c2110]">{item.description}</p>

          <span className="flex justify-end xl:pr-9 pt-[-2rem] xxs:pr-[1rem] xl:pt-[-2rem] gap-1   ">
            <IoStarSharp className="text-yellow-400 xl:mt-[-1rem] xxs:mt-[-1.2rem]" />
            <IoStarSharp className="text-yellow-400 xl:mt-[-1rem] xxs:mt-[-1.2rem]" />
            <IoStarSharp className="text-yellow-400 xl:mt-[-1rem] xxs:mt-[-1.2rem]" />
            <IoStarSharp className="text-yellow-400 xl:mt-[-1rem] xxs:mt-[-1.2rem]" />
            <IoIosStarHalf className="text-yellow-400 xl:mt-[-1rem] xxs:mt-[-1.2rem]" />
          </span>
          <div className="mt-4 flex items-center space-x-4">
            <p className="font-bold text-[1rem] text-[#4b2f1d]">Quantity:</p>
            <button
              className="px-2 py-1 text-[#4b2f1d] text-[1.5rem] rounded"
              onClick={() => handleQuantityChange("increase")}
            >
              <BiSolidPlusCircle />
            </button>
            <p className="text-white font-semibold">{quantity}</p>
            <button
              className="px-2 py-1 text-[#4b2f1d] text-[1.5rem] rounded "
              onClick={() => handleQuantityChange("decrease")}
            >
              <HiMiniMinusCircle />
            </button>
          </div>

          {/* Size Selector */}
          <div className="flex justify-start items-center gap-16">
            <div className="mt-4">
              <p className="font-bold text-[1rem] text-[#4b2f1d]">Size:</p>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="mt-2 border text-white border-[#4b2f1d] rounded px-2 py-1 bg-gradient-to-tl to-[#caa88c] from-[#7d4b26] hover:border-[#4b2f1d] font-semibold"
              >
                <option
                  value="Small"
                  className="text-[#4b2f1d] hover:border-none  bg-gradient-to-tl to-[#caa88c] from-[#7d4b26] "
                >
                  Small
                </option>
                <option
                  value="Medium"
                  className="text-[#4b2f1d] hover:border-none bg-gradient-to-tl to-[#caa88c] from-[#7d4b26]"
                >
                  Medium
                </option>
                <option
                  value="Large"
                  className="text-[#4b2f1d] hover:border-none bg-gradient-to-tl to-[#caa88c] from-[#7d4b26]"
                >
                  Large
                </option>
              </select>
            </div>

            <div className="mt-4">
              <p className="font-bold text-[1rem] text-[#4b2f1d]">Flavors:</p>
              <select
                value={flavors}
                onChange={(e) => setFlavors(e.target.value)}
                className="mt-2 border text-white border-[#4b2f1d] rounded px-2 py-1 bg-gradient-to-tl to-[#caa88c] from-[#7d4b26] hover:border-[#4b2f1d] font-semibold"
              >
                <option
                  value="Vanilla"
                  className="text-[#4b2f1d] hover:border-none bg-gradient-to-tl to-[#caa88c] from-[#7d4b26]"
                >
                  Vanilla
                </option>
                <option
                  value="Chocolate"
                  className="text-[#4b2f1d] hover:border-none bg-gradient-to-tl to-[#caa88c] from-[#7d4b26]"
                >
                  Chocolate
                </option>
                <option
                  value="Strawberry"
                  className="text-[#4b2f1d] hover:border-none bg-gradient-to-tl to-[#caa88c] from-[#7d4b26]"
                >
                  Strawberry
                </option>
              </select>
            </div>

            <div className="mt-4">
              <p className="font-bold text-[1rem] text-[#4b2f1d]">
                Sweetess Level:
              </p>
              <select
                value={isSweet}
                onChange={(e) => setIsSweet(e.target.value)}
                className="mt-2 border text-white border-[#4b2f1d] rounded px-2 py-1 bg-gradient-to-tl to-[#caa88c] from-[#7d4b26] hover:border-[#4b2f1d] font-semibold"
              >
                <option
                  value="No Sugar"
                  className="text-[#4b2f1d] hover:border-none bg-gradient-to-tl to-[#caa88c] from-[#7d4b26]"
                >
                  No Sugar
                </option>
                <option
                  value="Less Sweet"
                  className="text-[#4b2f1d] hover:border-none bg-gradient-to-tl to-[#caa88c] from-[#7d4b26]"
                >
                  Less Sweet
                </option>
                <option
                  value="Medium Sweet"
                  className="text-[#4b2f1d] hover:border-none bg-gradient-to-tl to-[#caa88c] from-[#7d4b26]"
                >
                  Medium Sweet
                </option>
                <option
                  value=" Sweet"
                  className="text-[#4b2f1d] hover:border-none bg-gradient-to-tl to-[#caa88c] from-[#7d4b26]"
                >
                  Sweet
                </option>
                <option
                  value="Extra Sweet"
                  className="text-[#4b2f1d] hover:border-none bg-gradient-to-tl to-[#caa88c] from-[#7d4b26]"
                >
                  Extra Sweet
                </option>
              </select>
            </div>
          </div>

          {/* Total Amount */}
          <div className="mt-4">
            <p className="font-bold text-[1rem] text-[#4b2f1d]">
              Total Amount:{" "}
              <span className="text-white text-[0.9rem]">${totalAmount}</span>
            </p>
          </div>

          <div className="flex justify-start gap-2">
            <button
              onClick={handleOrderConfirm}
              className="mt-6 bg-[#2e1609] text-white py-1 xl:px-5 rounded-[5px] font-semibold cursor-pointer hover:bg-white hover:text-[#2e1609] transition-all duration-300 ease-linear xxs:px-2 flex items-center justify-center"
            >
              <span className="text-[14px] font-semibold flex items-center space-x-2">
                <span>Order Confirm</span>
                <GiConfirmed />
              </span>
            </button>
            <Link href={`/product`} passHref>
              <Button className=" py-1 px-7 rounded-[5px] font-semibold text-white hover:text-[#2e1609] transition-all duration-300 ease-linear xl:mt-6  underline xxs:mt-[-1rem]">
                <span className="flex items-center gap-2 xxs:text-[12px] xl:text-[15px]">
                  {" "}
                  Back to the menu
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductDetails;
