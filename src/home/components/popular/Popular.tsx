"use client";
import PopularBtn from "./PopularBtn";
import React from "react";
import { POPULAR } from "../../utils";
import Container from "@/src/common/components/Container";

const Popular = () => {
  return (
    <Container>
      <h1 className="text-4xl mb-6">
        Popular localities in and around{" "}
        <span className="font-medium">Nagpur</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {POPULAR.map((e) => (
          <PopularBtn key={e.id} {...e} />
        ))}
      </div>
    </Container>
  );
};

export default Popular;
