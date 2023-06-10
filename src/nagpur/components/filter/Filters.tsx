"use client";

import dynamic from "next/dynamic";
import Container from "@/src/common/components/Container";
const Modal = dynamic(() => import("@/src/common/components/Modal").then(module => module.Modal))
import { useState } from "react";
import { CiSliderHorizontal } from "react-icons/ci";
import FilterCard from "./FilterCard";

const Filters = () => {
  const [modal, setModal] = useState(false);
  const [sortBy, setSortBy] = useState("popularity");

  return (
    <Container className="py-4">
      <div className="flex items-center gap-2">
        <FilterCard
          icon={<CiSliderHorizontal size={20} />}
          label="Filters"
          onClick={() => {
            setModal(true);
          }}
        />
        <FilterCard
          label="Rating 4+"
          onClick={() => {
          }}
        />
      </div>
      {modal && (
        <Modal
          title="Filters"
          onClose={() => setModal(false)}
          onSubmit={() => setModal(false)}
        >
          <div className="flex">
            <div className="bg-gray-200">
              <button className="border-l-4 py-4 px-8 border-red-400 text-left bg-white">
                <h1 className="font-medium">Sort by</h1>
                <p className="text-xs text-red-500">{sortBy}</p>
              </button>
            </div>
            <div className="flex flex-col gap-4 px-4 py-8">
              <label className="cursor-pointer">
                <input
                  checked={sortBy === "popularity"}
                  type="radio"
                  name="sortby"
                  onChange={() => {
                    setSortBy("popularity");
                  }}
                />{" "}
                Popularity
              </label>
              <label className="cursor-pointer">
                <input
                  checked={sortBy === "rating"}
                  type="radio"
                  name="sortby"
                  onChange={() => {
                    setSortBy("rating");
                  }}
                />{" "}
                Rating: High to Low
              </label>
              <label className="cursor-pointer">
                <input
                  checked={sortBy === "delivery"}
                  type="radio"
                  name="sortby"
                  onChange={() => {
                    setSortBy("delivery");
                  }}
                />{" "}
                Delivery Time
              </label>
              <label className="cursor-pointer">
                <input
                  checked={sortBy === "cost"}
                  type="radio"
                  name="sortby"
                  onChange={() => {
                    setSortBy("cost");
                  }}
                />{" "}
                Cost: Low to High
              </label>
            </div>
          </div>
        </Modal>
      )}
    </Container>
  );
};

export default Filters;
