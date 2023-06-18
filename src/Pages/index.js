import React from "react";

// import GnbMenu from "../Component/GnbMenu";
import Search from "../Component/Search";
import Carousel from "../Component/Carousel";
import FoodMenu from "../Component/FoodMenu";

export default function Mainpage() {
  return (
    <div>
      {/* <GnbMenu /> */}
      <Search />
      <Carousel />
      <FoodMenu />
    </div>
  );
}
