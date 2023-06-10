"use client";

import Container from "@/src/common/components/Container";
import React, { FC, useLayoutEffect, useState } from "react";
import { RESTAURANTS } from "./../../utils/constants";
import RestaurantCard from "./RestaurantCard"
import RestuarantCardSkeleton from "./RestuarantCardSkeleton"

const Restaurants: FC<{
  title: string;
}> = ({ title }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useLayoutEffect(() => {
    const id = setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
    return () => clearTimeout(id);
  }, []);

  return (
    <Container className="py-4">
      <h1 className="mb-6 text-2xl font-medium">{title}</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {RESTAURANTS.map((e) =>
          isLoaded ? (
            <RestaurantCard key={e.id} {...e} />
          ) : (
            <RestuarantCardSkeleton key={e.id} />
          )
        )}
      </div>
    </Container>
  );
};

export default Restaurants;
