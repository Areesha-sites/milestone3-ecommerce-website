"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import BestSellingCoffeeCards from "./BestSellingCoffeeCards";

export default function BestSellingCoffeeCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="w-[65vh]">
      <div>
        <BestSellingCoffeeCards
          title="Morning Bliss"
          description="A smooth and gentle light roast to brighten your mornings."
          price="$599"
          imageUrl="/product1.jpg"
        />
      </div>
      <div>
        <BestSellingCoffeeCards
          title="Cinnamon Spice Latte"
          description="A cozy blend of coffee with a hint of warm cinnamon spice."
          price="$650"
          imageUrl="/product2.jpg"
        />
      </div>
      <div>
        <BestSellingCoffeeCards
          title="Caramel Delight"
          description="A sweet and silky coffee with rich caramel undertones."
          price="$499"
          imageUrl="/product3.jpg"
        />
      </div>
      <div>
        <BestSellingCoffeeCards
          title="Nutty Caramel Crunch
"
          description="A perfect harmony of nutty and caramel flavors for a sweet, crunchy finish."
          price="$599"
          imageUrl="/product4.jpg"
        />
      </div>
    </Slider>
  );
}
