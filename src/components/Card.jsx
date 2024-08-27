import React from "react";
import UsaFlag from "../assets/usa-flag.png";
import ButtonGS from "./ButtonGS";

function Card({ info }) {
  return (
    <div className="w-[80%] md:w-[70%] lg:w-full shadow-xl hover:shadow-2xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300 mx-auto mt-16 lg:mt-0">
      <div className="h-[80%]">
        <img
          src={UsaFlag}
          alt="usa flag"
          className="w-[100px] mx-auto mt-[-3rem]"
        />
        <h1 className="sm:text-5xl text-5xl font-bold py-3 text-center">
          {info.time}
        </h1>
        <h3 className="text-xl font-bold py-3 text-center">{info.price}</h3>
        <p className="px-4 text-sm">{info.text}</p>
      </div>
      <ButtonGS text="Start Learning" />
    </div>
  );
}

export default Card;
