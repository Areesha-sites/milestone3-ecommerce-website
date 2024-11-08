"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  products,
  hotBeverages,
  coldBeverages,
  pastries,
  breakfasts,
  snacks,
  desserts,
} from "../api/data";
import ProductCard from "../components/ProductCard";
import HotBeverageCategory from "../components/HotBeverageCategory";
import ColdBeverageCategory from "../components/ColdBeverageCategory";
import PastriesCategory from "../components/PastriesCategory";
import BreakFastCategory from "../components/BreakFastCategory";
import SnacksCategory from "../components/SnacksCategory";
import DessertsCategory from "../components/DessertsCategory";
const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const categorySelectedClick = (tabIndex: number) => {
    setSelectedCategory(tabIndex);
  };
  const getFilteredItems = () => {
    switch (selectedCategory) {
      case 1: 
      return [
        ...products,
        ...hotBeverages,
        ...coldBeverages,
        ...pastries,
        ...breakfasts,
        ...snacks,
        ...desserts,
      ]
      case 2:
        return hotBeverages;
      case 3:
        return coldBeverages;
      case 4:
        return pastries;
      case 5:
        return breakfasts;
      case 6:
        return snacks;
      case 7:
        return desserts;
      case 8:
        return products;
    }
  };
  const categoryContent = () => {
    const items = getFilteredItems();
    switch (selectedCategory) {
      case 2:
        return items?.map((item) => (
          <HotBeverageCategory key={item.id} hotBeverage={item} />
        ));
      case 3:
        return items?.map((item) => (
          <ColdBeverageCategory key={item.id} coldBeverage={item} />
        ));
      case 4:
        return items?.map((item) => (
          <PastriesCategory key={item.id} pastry={item} />
        ));
      case 5:
        return items?.map((item) => (
          <BreakFastCategory key={item.id} breakfast={item} />
        ));
      case 6:
        return items?.map((item) => (
          <SnacksCategory key={item.id} snack={item} />
        ));
      case 7:
        return items?.map((item) => (
          <DessertsCategory key={item.id} dessert={item} />
        ));
      default:
        return items?.map((item) => (
          <ProductCard key={item.id} product={item} />
        ));
    }
  };
  return (
    <div className="container bg-gradient-to-tl to-[#f1dac9] from-[#7f593e] p-3 mb-[-10rem] w-[100%] min-h-screen">
      <div className="container py-5 pb-[9rem]">
        <div className="flex justify-center items-center flex-col mt-[-1rem] ">
          <h1 className="py-4 md:text-5xl md:w-2/4 xl:text-[5.2vw] font-bold text-[#5a3e2b] xxs:text-[34px] xxs:leading-[38px] xxs:text-center">
            Step Into Our Flavor World
            <div className="xl:absolute xl:top-[10.3rem] xl:right-[20rem] mt-5 md:px-6 xxs:absolute xxs:top-[8.5rem] xxs:right-[1rem]">
              <Image
                src="/vector.png"
                alt="Coffee-Tag"
                title="Coffee-vector"
                width={90}
                height={90}
                className="xxs:h-[50px] xxs:w-[50px] xl:h-[90px] xl:w-[90px]"
              />
            </div>
          </h1>
          <p className="py-2 text-[#5a3e2b] xl:text-[1rem] xl:text-center w-[60%] xxs:text-[13px] xxs:text-center">
            At <b className="text-[#5a3e2b]">BrewBerry Cafe</b>, we take pride
            in offering a diverse selection of handcrafted beverages and
            delicious treats. From rich, aromatic coffees to refreshing teas and
            freshly baked pastries, there's something for everyone to enjoy.
          </p>
          <h3 className="mt-[1rem] xl:text-[30px] font-bold italic text-[#5a3e2b] xxs:text-[21px] xxs:text-center">
            Find Your Flavor
            <i className="bx bxs-coffee-togo ml-1"></i>
          </h3>
        </div>

        <nav
          className="flex justify-center items-center space-x-3 mt-6 xxs:text-center"
          role="tablist"
        >
          <div className=" border-b border-[#f1dac9] w-[50%]  ">
            {[
              { id: 1, label: "All" },
              { id: 2, label: "Hot Beverages" },
              { id: 3, label: "Cold Beverages" },
              { id: 4, label: "Pastries" },
              { id: 5, label: "Breakfast" },
              { id: 6, label: "Snacks" },
              { id: 7, label: "Desserts" },
            ].map((category) => (
              <button
                key={category.id}
                className={`text-white transition-all font-medium text-sm px-2 text-center mb-2 py-1.5 mr-[10px] rounded-md ${
                  selectedCategory === category.id
                    ? "bg-[#4b2f1d] text-white"
                    : "hover:bg-[#4b2f1d] hover:text-white hover:scale-110"
                }`}
                role="tab"
                aria-selected={
                  selectedCategory === category.id ? "true" : "false"
                }
                onClick={() => categorySelectedClick(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </nav>

        <div className="mt-6">
          <div className="grid grid-cols-1 gap-6 m-8 pb-10">
            <div className="xl:grid xl:grid-cols-3 xl:gap-7 xxs:grid xxs:grid-cols-1">
              {categoryContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
