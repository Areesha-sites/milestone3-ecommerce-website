// import React from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// const SellingCoffee = () => {
//   return (
//     <>
//       <div className="bg-[#fdefdb] h-auto   ">
//         {/* ==================================== */}
//         <div className="grid grid-cols-6 text-center md:pt-6 md:pb-60 ">
//           <div className="col-start-2 col-span-4">
//             <h1 className="text-5xl font-bold text-[#5a3e2b]">
//               Explore Our Shop Menu
//             </h1>
//             <p className="py-4 w-2/4 mx-auto text-[#876536] text-lg">
//               "At <b>BrewBerry Cafe</b>, we take pride in offering a diverse
//               selection of handcrafted beverages and delicious treats. From
//               rich, aromatic coffees to refreshing teas and freshly baked
//               pastries, there's something for everyone to enjoy. Browse our menu
//               to discover your new favourite indulgence perfect for any time of
//               the day."
//             </p>
//           </div>
//         </div>
//         <div className="container ">
//           <div className="grid grid-cols-3 gap-14 w-11/12 mx-auto">
//             {/* =============================== */}
//             <div className="shadow-2xl shadow-[#5a3e2b] px-6 py-5 pt-4 hover:scale-105 rounded-2xl hover:border-2 hover:border-[#c0a278] transition-all relative cursor-pointer max-w-xs mx-auto">
//               {/* =============================== */}
//               <div className="grid grid-cols-2 gap-4 items-end">
//                 <Image
//                   src="/selling-coffee2.png"
//                   alt="Selling-cup"
//                   height={280}
//                   width={280}
//                   className="absolute -right-12 bottom-64"
//                 />
//                 <div className="">
//                   <p className="py-2 text-[#876536] text-sm md:text-lg">
//                     #1 Selling
//                   </p>

//                   <h1 className="text-3xl font-semibold text-[#5a3e2b]">
//                     Double Expressoo
//                   </h1>
//                 </div>
//               </div>
//               <p className="py-4 text-[#876536] text-lg">
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                 Pariatur et accusantium voluptas vitae culpa quam magni sit iure
//                 fuga laudantium ea, veritatis, ab corporis consectetur?
//               </p>
//               <div className="grid grid-cols-2 gap-40 items-center  py-2">
//                 <h1 className="font-semibold text-2xl">$59.99</h1>

//                 <Button className="mt-2 bg-[#5a3e2b] text-[#f5e0c3] px-14  tracking-wide rounded-2xl shadow-xl shadow-[#c0a278] font-normal hover:scale-105 transition-all hover:font-medium hover:bg-[#4b3123]">
//                   Order Now
//                 </Button>
//               </div>

//               {/* =============================== */}
//             </div>
//             {/* =============================== */}
//             <div className="shadow-2xl shadow-[#5a3e2b] px-12 py-5 pt-4 hover:scale-105 rounded-2xl hover:border-2 hover:border-[#c0a278] transition-all relative cursor-pointer">
//               {/* =============================== */}
//               <div className="grid grid-cols-2 gap-6 items-end">
//                 <Image
//                   src="/selling-coffee2.png"
//                   alt="Selling-cup"
//                   height={280}
//                   width={280}
//                   className="absolute -right-12 bottom-64"
//                 />
//                 <div className="">
//                   <p className="py-6 text-[#876536] text-lg">#1 Selling</p>
//                   <h1 className="text-3xl font-semibold text-[#5a3e2b]">
//                     Double Expressoo
//                   </h1>
//                 </div>
//               </div>
//               <p className="py-4 text-[#876536] text-lg">
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                 Pariatur et accusantium voluptas vitae culpa quam magni sit iure
//                 fuga laudantium ea, veritatis, ab corporis consectetur?
//               </p>
//               <div className="grid grid-cols-2 gap-40 items-center  py-2">
//                 <h1 className="font-semibold text-2xl">$59.99</h1>

//                 <Button className="mt-2 bg-[#5a3e2b] text-[#f5e0c3] px-14  tracking-wide rounded-2xl shadow-xl shadow-[#c0a278] font-normal hover:scale-105 transition-all hover:font-medium hover:bg-[#4b3123]">
//                   Order Now
//                 </Button>
//               </div>

//               {/* =============================== */}
//             </div>
//             {/* =============================== */}
//             <div className="shadow-2xl shadow-[#5a3e2b] px-12 py-5 pt-4 hover:scale-105 rounded-2xl hover:border-2 hover:border-[#c0a278] transition-all relative cursor-pointer">
//               {/* =============================== */}
//               <div className="grid grid-cols-2 gap-6 items-end">
//                 <Image
//                   src="/selling-coffee2.png"
//                   alt="Selling-cup"
//                   height={270}
//                   width={270}
//                   className="absolute -right-12 bottom-64"
//                 />
//                 <div className="">
//                   <p className="py-6 text-[#876536] text-lg">#1 Selling</p>
//                   <h1 className="text-3xl font-semibold text-[#5a3e2b]">
//                     Double Expressoo
//                   </h1>
//                 </div>
//               </div>
//               <p className="py-4 text-[#876536] text-lg">
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                 Pariatur et accusantium voluptas vitae culpa quam magni sit iure
//                 fuga laudantium ea, veritatis, ab corporis consectetur?
//               </p>
//               <div className="grid grid-cols-2 gap-40 items-center  py-2">
//                 <h1 className="font-semibold text-2xl">$59.99</h1>

//                 <Button className="mt-2 bg-[#5a3e2b] text-[#f5e0c3] px-14  tracking-wide rounded-2xl shadow-xl shadow-[#c0a278] font-normal hover:scale-105 transition-all hover:font-medium hover:bg-[#4b3123]">
//                   Order Now
//                 </Button>
//               </div>

//               {/* =============================== */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SellingCoffee;
