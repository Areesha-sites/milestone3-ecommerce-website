import { ProductsTypes } from "../../../Types/types";
import { HotBeveragesCategoryTypes } from "../../../Types/types";
import { ColdBeveragescategoryTypes } from "../../../Types/types";
import { PastriesCategoryTypes } from "../../../Types/types";
import { BreakFastsCategoryTypes } from "../../../Types/types";
import { SnacksCategoryTypes } from "../../../Types/types";
import { DessertsCategoryTypes } from "../../../Types/types";
// import { productDetailsTypes } from "../../../Types/types";
// =========================all category section===========================
export const products: ProductsTypes[] = [
  {
    id: 1,
    name: "Americano",
    price: 120,
    description: "A classic Americano with a bold, smooth taste.",
    image: "/menu1.png",
    category: 1,
    detailDescription: " Enjoy the rich, bold flavor of a classic Americano, made with a smooth blend of espresso and water. Perfect for coffee purists who love a deep, unadulterated coffee experience."
  },
  {
    id: 2,
    name: "Latte",
    price: 150,
    description: "A creamy latte with milk and a shot of espresso.",
    image: "/menu2.jpg",
    category: 2,
     detailDescription: "Indulge in the creamy, comforting taste of a latte, crafted with steamed milk and a shot of espresso. Ideal for those who prefer a softer coffee flavor with a velvety texture."
  },
  {
    id: 3,
    name: "Espresso",
    price: 100,
    description: "Strong and rich espresso shot.",
    image: "/menu3.jpg",
    category: 3,
     detailDescription: "A strong and intense espresso shot with a rich, aromatic profile, delivering a burst of flavor in every sip. Perfect for those who enjoy pure, unfiltered coffee strength."
  },
  {
    id: 4,
    name: "Iced Coffee",
    price: 130,
    description: "Cold-brewed iced coffee with a refreshing taste.",
    image: "/menu4.jpg",
    category: 4,
     detailDescription: " Refresh yourself with our cold-brewed iced coffee, offering a crisp, smooth taste. This brew is steeped slowly to create a flavor that’s less acidic but full of coffee richness."
  },
  {
    id: 5,
    name: "Cold Brew",
    price: 140,
    description: "Smooth and full-bodied cold brew coffee.",
    image: "/menu5.jpg",
    category: 5,
     detailDescription: "Experience the smooth and full-bodied flavor of our cold brew coffee, crafted with a slow extraction process that brings out the natural sweetness and depth of the beans."
  },
  {
    id: 6,
    name: "Croissant",
    price: 80,
    description: "Flaky, buttery croissant, perfect for breakfast.",
    image: "/menu6.jpg",
    category: 6,
     detailDescription: " A golden, flaky croissant with buttery layers, perfect for breakfast or as a light snack. Made fresh daily to give you the perfect balance of crispiness and softness."
  },
  {
    id: 7,
    name: "Muffin",
    price: 90,
    description: "Soft and moist muffin with blueberry flavor.",
    image: "/menu7.jpg",
    category: 7,
     detailDescription: "Soft, fluffy blueberry muffin bursting with flavor in every bite. A delightful treat for a sweet snack or a light breakfast option."
  },
  {
    id: 8,
    name: "Bagel",
    price: 70,
    description: "Freshly baked bagel with a chewy texture.",
    image: "/menu8.jpg",
    category: 8,
     detailDescription: "Freshly baked with a chewy texture, our bagels are perfect with cream cheese or your favorite spread. A classic, satisfying treat that pairs perfectly with coffee."
  },
  {
    id: 9,
    name: "Pancakes",
    price: 100,
    description: "Fluffy pancakes served with maple syrup.",
    image: "/menu9.jpg",
    category: 9,
     detailDescription: " Fluffy and light pancakes served with warm maple syrup. A classic breakfast delight that’s perfect for a cozy morning or a weekend brunch."
  },
  {
    id: 10,
    name: "French Toast",
    price: 120,
    description: "Golden French toast with a hint of cinnamon.",
    image: "/menu10.png",
    category: 10,
     detailDescription: " Golden-brown French toast with a hint of cinnamon and sweetness, served warm. Perfect for a comforting breakfast or brunch, topped with syrup or powdered sugar."
  },

  {
    id: 11,
    name: "Sandwich",
    price: 150,
    description: "A hearty sandwich with fresh ingredients.",
    image: "/menu11.jpg",
    category: 11,
     detailDescription: " A hearty sandwich loaded with fresh ingredients, ideal for lunch or a quick meal. Delicious and filling, offering a perfect balance of flavors."
  },
  {
    id: 12,
    name: "Fries",
    price: 80,
    description: "Crispy and golden fries served with ketchup.",
    image: "/menu12.jpg",
    category: 12,
     detailDescription: "Crispy, golden fries with a light, fluffy interior, served with a side of ketchup. The ultimate snack for any time of day, freshly fried to perfection."
  },
  {
    id: 13,
    name: "Brownie",
    price: 100,
    description: "Rich chocolate brownie with a fudgy center.",
    image: "/menu13.jpg",
    category: 13,
     detailDescription: " A rich, chocolate brownie with a fudgy center and a crisp outer edge. Perfect for chocolate lovers looking for a dense, decadent treat."
  },
  {
    id: 14,
    name: "Cheesecake",
    price: 200,
    description: "Creamy cheesecake with a graham cracker crust.",
    image: "/menu14.png",
    category: 14,
     detailDescription: "Creamy and smooth cheesecake on a graham cracker crust, with just the right amount of sweetness. A classic dessert that’s both rich and satisfying."
  },
  {
    id: 15,
    name: "Snacks",
    price: 100,
    description: "Crunchy and spicy snacks,",
    image: "/menu15.jpg",
    category: 15,
     detailDescription: "Enjoy a variety of crunchy and spicy snacks, perfect for munching at any time. Each bite is packed with flavor, making it a satisfying choice for a quick snack."
  },
];
export const getProductById = (id: number): ProductsTypes | undefined => {
  return products.find((product) => product.id === id);
};

// =========================Hot beverage category section===========================
export const hotBeverages: HotBeveragesCategoryTypes[] = [
  {
    id: 16,
    name: "Cappuccino",
    price: 150,
    description:
      "A classic Italian drink made with espresso and milk..",
    image: "/hotbeverage1.jpg",
    category: 1,
  },
  {
    id: 17,
    name: "Latte",
    price: 160,
    description:
      "Similar to a cappuccino, but with more steamed milk.",
    image: "/hotbeverage2.jpg",
    category: 2,
  },
  {
    id: 18,
    name: "Mocha",
    price: 180,
    description:
      "A rich drink made with espresso and chocolate syrup",
    image: "/hotbeverage3.jpg",
    category: 3,
  },
  {
    id: 19,
    name: "Americano",
    price: 120,
    description: "A drink made by diluting espresso with hot water.",
    image: "/menu1.png",
    category: 4,
  },
  {
    id: 20,
    name: "Flat White",
    price: 170,
    description:
      "An Australian favorite, made with microfoam milk.",
    image: "/hotbeverage4.jpg",
    category: 5,
  },
  {
    id: 21,
    name: "Macchiato",
    price: 140,
    description:
      "A small drink with espresso and a dollop of milk.",
    image: "/hotbeverage5.jpg",
    category: 6,
  },
];
export const getHotBeverageById = (
  id: number
): HotBeveragesCategoryTypes | undefined => {
  return hotBeverages.find((hotBeverage) => hotBeverage.id === id);
};
// =========================cold beverage category section===========================
export const coldBeverages: ColdBeveragescategoryTypes[] = [
  {
    id: 22,
    name: "Iced Tea",
    price: 100,
    description:
      "A refreshing drink made by cooling hot tea.",
    image: "/coldbeverage1.jpg",
    category: 1,
  },
  {
    id: 23,
    name: "Soda",
    price: 90,
    description:
      "Carbonated water flavored with syrups and herbs.",
    image: "/coldbeverage2.jpg",
    category: 2,
  },
  {
    id: 24,
    name: "Juice",
    price: 110,
    description:
      "A beverage made from fruits or vegetables.",
    image: "/coldbeverage3.jpg",
    category: 3,
  },
  {
    id: 25,
    name: "Smoothie",
    price: 150,
    description:
      "A thick, blended drink made from fruits, vegetables.",
    image: "/coldbeverage4.jpg",
    category: 4,
  },
  {
    id: 26,
    name: "Lemonade",
    price: 95,
    description: "A refreshing drink made from lemons and sugar.",
    image: "/coldbeverage5.jpg",
    category: 5,
  },
  {
    id: 27,
    name: "Milkshake",
    price: 130,
    description:
      "A cold, drink with milk, ice cream, strawberry, vanilla.",
    image: "/coldbeverage6.jpg",
    category: 6,
  },
];
export const getColdBeverageById = (
  id: number
): ColdBeveragescategoryTypes | undefined => {
  return coldBeverages.find((coldBeverage) => coldBeverage.id === id);
};
// =========================Pastries category section===========================
export const pastries: PastriesCategoryTypes[] = [
  {
    id: 28,
    name: "Croissant",
    price: 80,
    description:
      "A buttery pastry with a golden, perfect for breakfast.",
    image: "/pastries1.jpg",
    category: 1,
  },
  {
    id: 29,
    name: "Donuts",
    price: 50,
    description:
      "A soft, fried dough pastry, with sugar and filling.",
    image: "/pastries2.jpg",
    category: 1,
  },
  {
    id: 30,
    name: "Muffin",
    price: 60,
    description:
      "A fluffy, baked in various flavors, chocolate chip.",
    image: "/pastries3.jpg",
    category: 1,
  },
  {
    id: 31,
    name: "Eclair",
    price: 90,
    description:
      "A pastry filled with cream and layer of chocolate.",
    image: "/pastries4.jpg",
    category: 1,
  },
  {
    id: 32,
    name: "Danish Pastry",
    price: 85,
    description:
      "A layered pastry filled with custard,and buttery taste.",
    image: "/pastries5.jpg",
    category: 1,
  },
  {
    id: 33,
    name: "Cookie",
    price: 40,
    description:
      "A sweet baked, available chocolate chip and more.",
    image: "/pastries6.jpg",
    category: 1,
  },
];
export const getPastriesById = (
  id: number
): PastriesCategoryTypes | undefined => {
  return pastries.find((pastry) => pastry.id === id);
};
// =========================Breakfast category section===========================
export const breakfasts: BreakFastsCategoryTypes[] = [
  {
    id: 34,
    name: "Oatmeal",
    price: 60,
    description:
      "A healthy breakfast made from oats, water and milk.",
    image: "/breakfast1.jpg",
    category: 1,
  },
  {
    id: 35,
    name: "Pancakes",
    price: 80,
    description:
      "Fluffy, flat cakes made from syrup, or fruit.",
    image: "/breakfast2.jpg",
    category: 2,
  },
  {
    id: 36,
    name: "Eggs",
    price: 40,
    description:
      "A versatile food like scrambled, fried, or boiled.",
    image: "/breakfast3.jpg",
    category: 3,
  },
  {
    id: 37,
    name: "Toast",
    price: 30,
    description:
      "Sliced bread spread with butter, jam, or avocado.",
    image: "/breakfast4.jpg",
    category: 4,
  },
  {
    id: 38,
    name: "Yogurt",
    price: 50,
    description:
      "A creamy dairy product with fruits, nuts, or honey.",
    image: "/breakfast5.jpg",
    category: 5,
  },
  {
    id: 39,
    name: "Breakfast Burrito",
    price: 100,
    description: "A tortilla filled with eggs, meat, and vegetables.",
    image: "/breakfast6.jpg",
    category: 6,
  },
];
export const getBreakfastById = (
  id: number
): BreakFastsCategoryTypes | undefined => {
  return breakfasts.find((breakFast) => breakFast.id === id);
};
// =========================Snacks category section===========================
export const snacks: SnacksCategoryTypes[] = [
  {
    id: 40,
    name: "Chips",
    price: 20,
    description:
      "Crispy, fried or baked snacks made from potatoes.",
    image: "/snack1.jpg",
    category: 1,
  },
  {
    id: 41,
    name: "Popcorn",
    price: 25,
    description:
      "A snack made from popped corn with butterand salt.",
    image: "/snack2.jpg",
    category: 2,
  },
  {
    id: 42,
    name: "Nuts",
    price: 50,
    description:
      "A healthy snack, almonds, walnuts, or cashews.",
    image: "/snack3.jpg",
    category: 3,
  },
  {
    id: 43,
    name: "Pretzels",
    price: 15,
    description:
      "A salty snack made from dough in various shapes.",
    image: "/snack4.jpg",
    category: 4,
  },
  {
    id: 44,
    name: "Fruit",
    price: 40,
    description:
      "A natural snack, such as apples, bananas, or berries.",
    image: "/snack5.jpg",
    category: 5,
  },
  {
    id: 45,
    name: "Chocolate",
    price: 35,
    description:
      "A treat made from beans. such as bars and candies.",
    image: "/snack6.jpg",
    category: 6,
  },
];
export const getSnacksById = (id: number): SnacksCategoryTypes | undefined => {
  return snacks.find((snack) => snack.id === id);
};
// =========================desserts category section===========================
export const desserts:DessertsCategoryTypes[] = [
  {
    id: 46,
    name: "Ice Cream",
    price: 50,
    description: "A cold, sweet dessert from milk, cream, and sugar.",
    image: "/desserts1.jpg",
    category:1,
  },
  {
    id: 47,
    name: "Cake",
    price: 100,
    description: "A sweet baked, with frosting and special occasions.",
    image: "/dessert2.jpg",
    category: 2,
  },
  {
    id: 48,
    name: "Cookies",
    price: 30,
    description: "Small, baked treats with chocolate, sugar, or nuts.",
    image: "/dessert3.jpg",
    category: 3,
  },
  {
    id: 49,
    name: "Pie",
    price: 80,
    description: "A baked with a pastry filled with fruits or custard.",
    image: "/dessert4.jpg",
    category: 4,
  },
  {
    id: 50,
    name: "Cheesecake",
    price: 120,
    description: "A dessert made from cream cheese, sugar, and eggs.",
    image: "/dessert5.jpg",
    category: 5,
  },
  {
    id: 51,
    name: "Chocolate",
    price: 40,
    description: "A sweet treat made from cocoa, candies or truffles.",
    image: "/dessert6.jpg",
    category: 6,
  },
]

export const getDessertsById = (id: number): DessertsCategoryTypes | undefined => {
  return desserts.find((dessert) => dessert.id === id);
};


// ==================products details data==========

// export const productDetails: productDetailsTypes[] = [
//   {
//     id:1,
//     name: 'Product 1',
//     description: 'This is the first product.',
//     ingredients: ['Ingredient 1', 'Ingredient 2'],
//     flavors: ['Flavor A', 'Flavor B'],
//     image: 'path/to/image1.jpg', 
//   },
//   {
//     id:2,
//     name: 'Product 1',
//     description: 'This is the first product.',
//     ingredients: ['Ingredient 1', 'Ingredient 2'],
//     flavors: ['Flavor A', 'Flavor B'],
//     image: 'path/to/image1.jpg', 
//   }
// ]
// export const getProductsDetailById = (id: number): productDetailsTypes | undefined => {
//   return productDetails.find((pro) => pro.id === id);
// };