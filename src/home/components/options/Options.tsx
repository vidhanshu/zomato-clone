"use client";
import React from "react";
import { OPTIONS } from "../../utils";
import OptionCard from "./OptionCard";
import Container from "@/src/common/components/Container";

const Options = () => {
  return (
    <Container className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {OPTIONS.map((option) => (
        <OptionCard
          key={option.id}
          {...option}
        />
      ))}
    </Container>
  );
};

export default Options;
