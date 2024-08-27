import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] py-16 text-white ml-6 xl:mx-auto  grid md:grid-cols-4 gap-8">
      <div className="md:col-span-2">
        <h1 className="w-full text-3xl font-bold text-primary">REACT</h1>
        <p className="py-4">Ready to Unlock Your Potential?</p>
        <br></br>
        <p>Contact: edward.williams@gmail.com | +1 210 74790</p>
        <p>Location: Warsaw, Poland, (GMT+2) </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaDribbbleSquare size={30} />
          <FaInstagramSquare size={30} />
          <FaGithubSquare size={30} />
          <FaTwitterSquare size={30} />
        </div>
        <p>
          © 2024 Alex. All Rights Reserved. Terms & Conditions | Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Footer;
