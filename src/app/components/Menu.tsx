// import { Button } from "@headlessui/react";
// import React from "react";
// import Image from "next/image";

// const Menu = () => {
//   return (
//     <>
//       <div className="container py-2">
//         {/* ========================================== */}
//         <div className="grid grid-cols-6 text-center md:py-16 ">
//           <div className="col-start-2 col-span-4">
//             <h1 className="text-5xl font-bold text-[#5a3e2b]">
//               Explore Our Shop Menu
//             </h1>
//             <p className="py-2 text-[#876536] text-lg">
//               "At <b>BrewBerry Cafe</b>, we take pride in offering a diverse
//               selection of handcrafted beverages and delicious treats. From
//               rich, aromatic coffees to refreshing teas and freshly baked
//               pastries, there's something for everyone to enjoy. Browse our menu
//               to discover your new favourite indulgence perfect for any time of
//               the day."
//             </p>
//           </div>
//         </div>

//         {/* ========================================== */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-10 ">
//           <div className="shadow-2xl p-2  flex flex-col items-center hover:scale-105 rounded-2xl hover:border-2 hover:border-[#c0a278] transition-all cursor-pointer ">
//             <h1 className="text-3xl text-[#5a3e2b] font-semibold text-center">
//               Hot Drinks!
//             </h1>
//             <p className="py-2 text-[#876536] text-md text-center">
//               "Warm beverages that uplift and Comfort <br /> you."
//             </p>
//             <div className="py-1 text-[#876536] text-md text-center">
//               <ul className="list-disc">
//                 <li>Espresso - $3.00</li>
//                 <li>Latte - $4.00</li>
//                 <li>Cappuccino - $4.50</li>
//                 <li>Hot Chocolate - $3.50</li>
//               </ul>
//             </div>
//             <div className="w-[150px] h-[150px] overflow-hidden rounded-full mx-auto  cursor-pointer">
//               <Image
//                 src="/icon1.jfif"
//                 alt="Hot-Drinks"
//                 width={150}
//                 height={150}
//                 className="rounded-full w-full h-full"
//               />
//             </div>
//             <Button className="mt-4 bg-[#5a3e2b] text-[#f5e0c3] p-2 px-4 tracking-wide rounded-2xl shadow-xl shadow-[#c0a278] font-normal hover:scale-105 transition-all hover:font-medium hover:bg-[#4b3123]">
//               Buy Now
//             </Button>
//           </div>
//           <div className="shadow-2xl p-2  flex flex-col items-center hover:scale-105 rounded-2xl hover:border-2 hover:border-[#c0a278] transition-all cursor-pointer  ">
//             <h1 className="text-3xl text-[#5a3e2b] font-semibold text-center">
//               Cold Drinks!
//             </h1>
//             <p className="py-2 text-[#876536] text-md text-center">
//               "Chilled refreshments to quench your thirst perfectly."
//             </p>
//             <div className="py-1 text-[#876536] text-md text-center">
//               <ul className="list-disc">
//                 <li>Iced vanilla - $4.25</li>
//                 <li>Cold brew coffee - $3.75</li>
//                 <li>Matcha Iced Latte - $4.50</li>
//                 <li>Berry Smoothie - $4.50</li>
//               </ul>
//             </div>
//             <div className="w-[150px] h-[150px] overflow-hidden rounded-full mx-auto  cursor-pointer">
//               <Image
//                 src="/icon2.jfif"
//                 alt="Hot-Drinks"
//                 width={150}
//                 height={150}
//                 className="rounded-full w-full h-full"
//               />
//             </div>
//             <Button className="mt-2 bg-[#5a3e2b] text-[#f5e0c3] p-2 px-4 tracking-wide rounded-2xl shadow-xl shadow-[#c0a278] font-normal hover:scale-105 transition-all hover:font-medium hover:bg-[#4b3123]">
//               Buy Now
//             </Button>
//           </div>
//           <div className="shadow-2xl p-2  flex flex-col items-center hover:scale-105 rounded-2xl hover:border-2 hover:border-[#c0a278] transition-all cursor-pointer  ">
//             <h1 className="text-3xl text-[#5a3e2b] font-semibold text-center">
//               Pastries!
//             </h1>
//             <p className="py-2 text-[#876536] text-md text-center">
//               "Flaky and delicious treats to pair with <br />
//               coffee."
//             </p>
//             <div className="py-1 text-[#876536] text-md text-center">
//               <ul className="list-disc">
//                 <li>Almond Croissant - $3.00</li>
//                 <li>BlueBerry Muffin - $2.50</li>
//                 <li>Cinnamon Roll - $3.25</li>
//                 <li>Chocolate chip - $2.00</li>
//               </ul>
//             </div>
//             <div className="w-[150px] h-[150px] overflow-hidden rounded-full mx-auto  cursor-pointer">
//               <Image
//                 src="/icon3.jfif"
//                 alt="Hot-Drinks"
//                 width={150}
//                 height={150}
//                 className="rounded-full w-full h-full"
//               />
//             </div>
//             <Button className="mt-2 bg-[#5a3e2b] text-[#f5e0c3] p-2 px-4 tracking-wide rounded-2xl shadow-xl shadow-[#c0a278] font-normal hover:scale-105 transition-all hover:font-medium hover:bg-[#4b3123]">
//               Buy Now
//             </Button>
//           </div>
//         </div>
//       </div>
//       {/* ============================================ */}

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-10">
//         <div className="shadow-2xl p-2  flex flex-col items-center hover:scale-105 rounded-2xl hover:border-2 hover:border-[#c0a278] transition-all cursor-pointer  ">
//           <h1 className="text-3xl text-[#5a3e2b] font-semibold text-center">
//             Snacks!
//           </h1>
//           <p className="py-2 text-[#876536] text-md text-center">
//             "Tasty bites for a quick energy boost anytime."
//           </p>
//           <div className="py-1 text-[#876536] text-md text-center">
//             <ul className="list-disc">
//               <li>veggie Chips - $2.50</li>
//               <li>Cheese Sticks - $3.00</li>
//               <li>Spicy Chips - $2.50</li>
//               <li>Sour Chips - $2.00</li>
//             </ul>
//           </div>
//           <div className="w-[150px] h-[150px] overflow-hidden rounded-full mx-auto  cursor-pointer">
//             <Image
//               src="/icon4.jpg"
//               alt="Hot-Drinks"
//               width={150}
//               height={150}
//               className="rounded-full w-full h-full cursor-pointer hover:scale-105 shadow-2xl shadow-[#4b3123] transition-all"
//             />
//           </div>
//           <Button className="mt-2 bg-[#5a3e2b] text-[#f5e0c3] p-2 px-4 tracking-wide rounded-2xl shadow-xl shadow-[#c0a278] font-normal hover:scale-105 transition-all hover:font-medium hover:bg-[#4b3123]">
//             Buy Now
//           </Button>
//         </div>
//         <div className="shadow-2xl p-2  flex flex-col items-center hover:scale-105 rounded-2xl hover:border-2 hover:border-[#c0a278] transition-all cursor-pointer  ">
//           <h1 className="text-3xl text-[#5a3e2b] font-semibold text-center">
//             Cookies!
//           </h1>
//           <p className="py-2 text-[#876536] text-md text-center">
//             " Freshly baked delights that melt in your mouth."
//           </p>
//           <div className="py-1 text-[#876536] text-md text-center">
//             <ul className="list-disc">
//               <li>Oatmeal Raisin - $2.50</li>
//               <li>Peanut Butter - $3.00</li>
//               <li>Choclate Cookies - $2.50</li>
//               <li>StrawBerry Cokkeis - $2.00</li>
//             </ul>
//           </div>
//           <div className="w-[150px] h-[150px] overflow-hidden rounded-full mx-auto  cursor-pointer">
//             <Image
//               src="/icon5.jpg"
//               alt="Hot-Drinks"
//               width={150}
//               height={150}
//               className="rounded-full w-full h-full"
//             />
//           </div>
//           <Button className="mt-2 bg-[#5a3e2b] text-[#f5e0c3] p-2 px-4 tracking-wide rounded-2xl shadow-xl shadow-[#c0a278] font-normal hover:scale-105 transition-all hover:font-medium hover:bg-[#4b3123]">
//             Buy Now
//           </Button>
//         </div>
//         <div className="shadow-2xl p-2  flex flex-col items-center hover:scale-105 rounded-2xl hover:border-2 hover:border-[#c0a278] transition-all cursor-pointer  ">
//           <h1 className="text-3xl text-[#5a3e2b] font-semibold text-center">
//             Sandwich!
//           </h1>
//           <p className="py-2 text-[#876536] text-md text-center">
//             " Hearty options packed with flavors, freshness."
//           </p>
//           <div className="py-1 text-[#876536] text-md text-center">
//             <ul className="list-disc">
//               <li>Turkey Sandwich - $2.50</li>
//               <li>Veggie Sandwich - $3.00</li>
//               <li> Spicy Sandwich - $2.50</li>
//               <li>Ginger Sandwich - $2.00</li>
//             </ul>
//           </div>
//           <div className="w-[150px] h-[150px] overflow-hidden rounded-full mx-auto  cursor-pointer">
//             <Image
//               src="/icon6.jpg"
//               alt="Hot-Drinks"
//               width={150}
//               height={150}
//               className="rounded-full w-full h-full"
//             />
//           </div>
//           <Button className="mt-2 bg-[#5a3e2b] text-[#f5e0c3] p-2 px-4 tracking-wide rounded-2xl shadow-xl shadow-[#c0a278] font-normal hover:scale-105 transition-all hover:font-medium hover:bg-[#4b3123]">
//             Buy Now
//           </Button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Menu;
