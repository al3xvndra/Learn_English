import React from "react";
import { forwardRef } from "react";
import Card from "./Card";

const Lessons = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="w-full pb-28 px-4 bg-white">
      <div className=" max-w-[1240px] mx-auto mb-6 sm:mb-20 flex justify-center">
        <h1 className="text-primary text-3xl sm:text-4xl md:text-5xl pt-10 sm:pt-28 font-bold">
          Choose Your Learning Plan
        </h1>
      </div>
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-10">
        <Card
          info={{
            time: "15 min",
            price: "free",
            text: "Get a taste of what learning with me is like with a no-cost, 15-minute videoconversation. Perfect for those who want to see if we’re a good fit before committing to a full lesson.",
          }}
        />
        <Card
          info={{
            time: "1 hour",
            price: "70 zł",
            text: "A comprehensive 60-minute lesson tailored to your level and goals. Whether you need help with grammar, vocabulary, or conversation skills, this session will give you focused practice and valuable feedback.",
          }}
        />
        <Card
          info={{
            time: "Custom",
            price: "Custom",
            text: "Have specific goals in mind? I’ll design a personalized learning plan that fits your unique needs. This option is ideal for exam preparation, business English, or long-term language mastery. Pricing and schedule will be customized to fit your requirements.",
          }}
        />
      </div>
    </div>
  );
});

export default Lessons;
