import CollectionCard from "./CollectionCard";
import Link from "next/link";
import React from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { COLLECTIONS } from "../../utils";
import Container from "@/src/common/components/Container";

const Collections = () => {
  return (
    <Container>
      <div className="mb-6">
        <h1 className="font-medium text-4xl">Collections</h1>
        <div className="flex justify-between items-center mt-1">
          <p className="hidden md:block md:text-md lg:text-lg text-gray-500">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Nagpur, based on trends
          </p>
          <Link
            href="/"
            className="md:text-md lg:text-lg text-pink-500 flex gap-2 items-center"
          >
            All collections in Nagpur <AiFillCaretRight size={18} />
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {COLLECTIONS.map((e) => (
          <CollectionCard key={e.id} {...e} />
        ))}
      </div>
    </Container>
  );
};

export default Collections;
