import ExploreOptions from "@/src/home/components/ExploreOptions";
import Footer from "@/src/home/components/Footer";
import GetTheZomatoApp from "@/src/home/components/GetTheZomatoApp";
import Collections from "@/src/home/components/collections/Collections";
import Header from "@/src/home/components/header/Header";
import Options from "@/src/home/components/options/Options";
import Popular from "@/src/home/components/popular/Popular";
import React from "react";

const page = () => {
  return (
    <main>
      <Header />
      <Options/>
      <Collections/>
      <Popular/>
      <GetTheZomatoApp/>
      <ExploreOptions/>
      <Footer/>
    </main>
  );
};

export default page;
