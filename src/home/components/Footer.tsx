"use client";

import Image from "next/image";
import React, { useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import SelectField from "./../../common/components/SelectField";
import Container from "@/src/common/components/Container";

const Footer = () => {
  const [country, setCountry] = useState<string>("in");
  const [language, setLanguage] = useState<string>("en");

  return (
    <footer className="bg-[##f9f9f8]">
      <Container>
        <div
          className="
        flex flex-col mb-10 gap-4
        md:flex-row md:justify-between md:items-center md:gap-0
        "
        >
          <Image
            src="/home/logo_dark.png"
            alt="logo dark"
            width={150}
            height={50}
          />

          <div className="flex items-center gap-4">
            <SelectField
              value={country}
              setValue={setCountry}
              options={[
                {
                  value: "in",
                  label: "India",
                },
                {
                  value: "us",
                  label: "United States",
                },
                {
                  value: "uk",
                  label: "United Kingdom",
                },
              ]}
            />
            <SelectField
              value={language}
              setValue={setLanguage}
              options={[
                {
                  value: "en",
                  label: "English",
                },
                {
                  value: "hi",
                  label: "Hindi",
                },
                {
                  value: "mr",
                  label: "Marathi",
                },
              ]}
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-8 justify-between">
          <div>
            <h1 className="tracking-widest font-medium">ABOUT ZOMATO</h1>
            <ul className="mt-4 flex flex-col gap-2">
              <li className="text-gray-500 font-light">
                <a href="#">Who we are</a>
              </li>
              <li className="text-gray-500 font-light">
                <a href="#">Who we are</a>
              </li>
              <li className="text-gray-500 font-light">
                <a href="#">Who we are</a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="tracking-widest font-medium">ABOUT ZOMATO</h1>
            <ul className="mt-4 flex flex-col gap-2">
              <li className="text-gray-500 font-light">
                <a href="#">Who we are</a>
              </li>
              <li className="text-gray-500 font-light">
                <a href="#">Who we are</a>
              </li>
              <li className="text-gray-500 font-light">
                <a href="#">Who we are</a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="tracking-widest font-medium">FOR RESTAURANTS</h1>
            <ul className="mt-4 flex flex-col gap-2">
              <li className="text-gray-500 font-light">
                <a href="#">Partner With Us</a>
              </li>
              <li className="text-gray-500 font-light">
                <a href="#">Apps For You</a>
              </li>
            </ul>
            <h1 className="mt-6 mb-4 tracking-widest text-sm font-medium">
              FOR ENTERPRISES
            </h1>
            <ul>
              <li className="text-gray-500 font-light">
                <a href="#">Zomato For Enterprise</a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="tracking-widest font-medium">ABOUT ZOMATO</h1>
            <ul className="mt-4 flex flex-col gap-2">
              <li className="text-gray-500 font-light">
                <a href="#">Who we are</a>
              </li>
              <li className="text-gray-500 font-light">
                <a href="#">Who we are</a>
              </li>
              <li className="text-gray-500 font-light">
                <a href="#">Who we are</a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="tracking-widest font-medium">SOCIAL LINKS</h1>
            <div className="flex gap-2 mt-2 mb-4">
              <div className="w-6 h-6 rounded-full bg-black text-white flex justify-center items-center">
                <FaLinkedinIn size={14} />
              </div>
              <div className="w-6 h-6 rounded-full bg-black text-white flex justify-center items-center">
                <AiFillInstagram size={14} />
              </div>
              <div className="w-6 h-6 rounded-full bg-black text-white flex justify-center items-center">
                <FaTwitter size={14} />
              </div>
              <div className="w-6 h-6 rounded-full bg-black text-white flex justify-center items-center">
                <FaYoutube size={14} />
              </div>
              <div className="w-6 h-6 rounded-full bg-black text-white flex justify-center items-center">
                <FaFacebookF size={14} />
              </div>
            </div>
            <div className="flex flex-col gap-3 items-center mt-4">
              <Image
                src="/home/google_play.webp"
                alt="google_play"
                width={150}
                height={50}
              />
              <Image
                src="/home/app_store.webp"
                alt="app_store"
                width={150}
                height={50}
              />
            </div>
          </div>
        </div>

        <hr className="my-4"/>
        <p className="font-light text-sm text-gray-500">
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2008-2023 © Zomato™ Ltd. All
          rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
