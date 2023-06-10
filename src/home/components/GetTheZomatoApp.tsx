"use client";

import Button from "@/src/common/components/Button";
import InputField from "@/src/common/components/InputField";
import SelectField from "@/src/common/components/SelectField";
import Image from "next/image";
import React, { useState } from "react";

const GetTheZomatoApp = () => {
  const [isEmail, setIsEmail] = useState<boolean>(true);
  const [code, setCode] = useState<string>("+91");

  return (
    <div className="bg-[#fffaf6]  py-10">
      <div className="px-3 md:px-0 max-w-screen-xl flex flex-col md:flex-row justify-center items-center gap-4 m-auto">
        <Image
          src="/home/get_the_zomato_app.png"
          alt="app"
          width={300}
          height={300}
        />
        <div className="max-w-lg flex flex-col justify-center items-center">
          <h1 className="text-4xl font-medium mb-4">Get the Zomato app</h1>
          <p className="text-gray-500 font-light leading-5 text-center md:text-left">
            We will send you a link, open it on your phone to download the app
          </p>

          <div className="flex gap-8 mt-4">
            <label className="cursor-pointer mr-8">
              <input
                checked={isEmail}
                onChange={() => setIsEmail(true)}
                type="radio"
                name="msg_type"
              />{" "}
              Email
            </label>
            <label className="cursor-pointer">
              <input
                checked={!isEmail}
                onChange={() => setIsEmail(false)}
                type="radio"
                name="msg_type"
              />{" "}
              Phone
            </label>
          </div>

          {isEmail ? (
            <div className="flex-col flex md:flex-row items-center gap-2 my-4">
              <InputField placeholder="Your Email" />
              <Button buttonText="Send App Link" className="w-full" />
            </div>
          ) : (
            <div className="flex-col md:flex-row flex gap-2 items-center my-4">
              <div className="flex gap-2 items-center">
                <SelectField
                  value={code}
                  setValue={setCode}
                  className="p-3"
                  options={[
                    {
                      value: "+91",
                      label: "+91",
                    },
                    {
                      value: "+1",
                      label: "+1",
                    },
                    {
                      value: "+44",
                      label: "+44",
                    },
                  ]}
                />
                <InputField placeholder="Your Phone" />
              </div>
              <Button buttonText="Send App Link" className="w-full" />
            </div>
          )}

          <div>
            <p className="text-sm font-light text-gray-500">
              Download app from
            </p>

            <div className="flex gap-3 items-center mt-2">
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
      </div>
    </div>
  );
};

export default GetTheZomatoApp;
