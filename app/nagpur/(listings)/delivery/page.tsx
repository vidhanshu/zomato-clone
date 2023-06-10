import Inspirations from "@/src/nagpur/components/Inspirations";
import Restaurants from "@/src/nagpur/components/restuarant/Restaurants";
import TopBrands from "@/src/nagpur/components/TopBrands"
import React from "react";

const page = () => {
  return <>
    <Inspirations/>
    <TopBrands />
    <Restaurants title="Best Dining Restaurants near you in Nagpur" />
  </>;
};

export default page;
