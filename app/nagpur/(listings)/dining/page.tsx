import Restaurants from "@/src/nagpur/components/restuarant/Restaurants";
import Collections from "@/src/home/components/collections/Collections"
import React from "react";

const page = () => {
  return <>
    <Collections />
    <Restaurants title="Best Dining Restaurants near you in Nagpur" />
  </>;
};

export default page;
