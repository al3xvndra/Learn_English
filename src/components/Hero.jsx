import React from "react";
import { forwardRef } from "react";
import { ReactTyped } from "react-typed";
import ButtonGS from "./ButtonGS";

const Hero = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-white font-medium p-2 ">Edward Williams</p>
        <h1 className="text-white md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          English teacher
        </h1>
        <div className="flex justify-center items-center py-2">
          <p className="md:text-4xl sm:text-3xl text-xl font-bold">
            Learn English to{" "}
          </p>
          <ReactTyped
            className="md:text-4xl sm:text-3xl text-xl font-bold text-primary pl-2"
            strings={[
              " travel without stress!",
              " make international friends!",
              " understand song lyrics!",
              " discover new cultures!",
              " get a better job!",
              " boost your confidence!",
            ]}
            typeSpeed={50}
            backSpeed={60}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500 py-1">
          Sign up for a free conversation!
        </p>
        <ButtonGS text="Let's go" />
      </div>
    </div>
  );
});

export default Hero;
