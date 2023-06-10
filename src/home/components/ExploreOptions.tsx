import Accordion from "@/src/common/components/Accordion";
import React from "react";
import { NSHome } from "../home";
import Container from "@/src/common/components/Container";

const ACCORDION: NSHome.IAccordion[] = [
  {
    id: "1",
    title: "Popular cuisines near me",
    desc: (
      <div className="flex flex-wrap gap-1">
        Bakery food near me . Beverages food near me . Biryani food near me .
        Burger food near me . Chinese food near me . Coffee food near me .
        Continental food near me . Desserts food near me . Ice Cream food near
        me . Maharashtrian food near me . Momos food near me . Mughlai food near
        me . North Indian food near me . Pizza food near me . Rolls food near me
        . Sandwich food near me . Shake food near me . Sichuan food near me .
        South Indian food near me . Street food near me
      </div>
    ),
  },
  {
    id: "2",
    title: "Popular cuisines near me",
    desc: (
      <div className="flex flex-wrap gap-1">
        Bakery food near me . Beverages food near me . Biryani food near me .
        Burger food near me . Chinese food near me . Coffee food near me .
        Continental food near me . Desserts food near me . Ice Cream food near
        me . Maharashtrian food near me . Momos food near me . Mughlai food near
        me . North Indian food near me . Pizza food near me . Rolls food near me
        . Sandwich food near me . Shake food near me . Sichuan food near me .
        South Indian food near me . Street food near me
      </div>
    ),
  },
  {
    id: "3",
    title: "Popular cuisines near me",
    desc: (
      <div className="flex flex-wrap gap-1">
        Bakery food near me . Beverages food near me . Biryani food near me .
        Burger food near me . Chinese food near me . Coffee food near me .
        Continental food near me . Desserts food near me . Ice Cream food near
        me . Maharashtrian food near me . Momos food near me . Mughlai food near
        me . North Indian food near me . Pizza food near me . Rolls food near me
        . Sandwich food near me . Shake food near me . Sichuan food near me .
        South Indian food near me . Street food near me
      </div>
    ),
  },
  {
    id: "4",
    title: "Popular cuisines near me",
    desc: (
      <div className="flex flex-wrap gap-1">
        Bakery food near me . Beverages food near me . Biryani food near me .
        Burger food near me . Chinese food near me . Coffee food near me .
        Continental food near me . Desserts food near me . Ice Cream food near
        me . Maharashtrian food near me . Momos food near me . Mughlai food near
        me . North Indian food near me . Pizza food near me . Rolls food near me
        . Sandwich food near me . Shake food near me . Sichuan food near me .
        South Indian food near me . Street food near me
      </div>
    ),
  },
];

const ExploreOptions = () => {
  return (
    <Container>
      <h1 className="text-4xl">Explore options near me</h1>

      <div className="mt-6 flex flex-col gap-4">
        {ACCORDION.map((e) => (
          <Accordion key={e.id} title={e.title} description={e.desc} />
        ))}
      </div>
    </Container>
  );
};

export default ExploreOptions;
