import { ReactNode } from "react";

export interface CountdownTimerProps {
  targetDate: string;
}
export interface TimeLeftTypes {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}
export interface BestSellingCoffeeCardsTypes {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}
export interface ProductsTypes {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: number;
  detailDescription?: string;
}
export interface ProductsCardProps {
  product: ProductsTypes;
}
export interface CategoriesTypes {
  name: string;
  href: string;
  // component: React.ReactNode; // Add this line to include the component property
}
export interface HotBeveragesCategoryTypes {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: number;
}
export interface HotBeverageCardProps {
  hotBeverage: HotBeveragesCategoryTypes;
}

export interface ColdBeveragescategoryTypes {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: number;
}
export interface ColdBeverageCardProps {
  coldBeverage: ColdBeveragescategoryTypes;
}

export interface PastriesCategoryTypes {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: number;
}
export interface PastriesCardProps {
  pastry: PastriesCategoryTypes;
}
export interface BreakFastsCategoryTypes {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: number;
}
export interface BreakFastCardProps {
  breakfast: BreakFastsCategoryTypes;
}
export interface SnacksCategoryTypes {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: number;
}
export interface SnacksCardProps {
  snack: SnacksCategoryTypes;
}

export interface DessertsCategoryTypes {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: number;
}
export interface DessertsCardProps {
  dessert: DessertsCategoryTypes;
}

// // product details types
export interface productDetailsTypes {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  image: string;
  flavors: string[];
}
export interface ingredientsTypes {
  ingredients: productDetailsTypes;
}

export interface AboutTeamMembersTypes {
  name: string;
  role: string;
  image: string;
  description: string;
}
export interface AboutTeamMembercards {
  image: string;
  name: string;
  role: string;
  description: string;
}






// ========================Footer Types======================
export interface FooterNavLinkTypes {
  link: string;
  name: string;
}
export interface FooterSocialIconsTypes {
  url: string;
  label: string;
  icon: ReactNode;
}
export interface CompanyFooterLinkTypes {
  link: string;
  name: string;
}
export interface HelpfullFooterLinkTypes {
  link: string;
  name: string;
}
export interface LegalFooterLinkTypes {
  link: string,
  name: string,
}
// ========================Header Types======================
export interface HeaderNavLinksType {
  href: string,
  name: string
}