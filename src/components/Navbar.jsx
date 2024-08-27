import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = ({ refHome, refOffer, refContact, refAbout }) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full sticky top-0 z-50 bg-black">
      <div className="flex justify-between pl-4 pr-4 items-center h-24 max-w-[1240px] mx-auto text-white">
        <h1 className="w-full text-3xl font-bold text-primary">REACT</h1>
        <ul className="hidden md:flex">
          <li
            onClick={() =>
              refHome.current.scrollIntoView({ behavior: "smooth" })
            }
            className="p-4 hover:text-primary hover:cursor-pointer"
          >
            Home
          </li>
          <li
            onClick={() =>
              refOffer.current.scrollIntoView({ behavior: "smooth" })
            }
            className="p-4 hover:text-primary hover:cursor-pointer"
          >
            Offer
          </li>
          <li
            onClick={() =>
              refContact.current.scrollIntoView({ behavior: "smooth" })
            }
            className="p-4 hover:text-primary hover:cursor-pointer"
          >
            Contact
          </li>
          <li
            onClick={() =>
              refAbout.current.scrollIntoView({ behavior: "smooth" })
            }
            className="p-4 hover:text-primary hover:cursor-pointer"
          >
            About
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose />}
        </div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r ease-in-out duration-500 bg-secondary"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="w-full pl-4 text-3xl font-bold text-[#00df9a] bg-secondary pt-8">
            REACT
          </h1>
          <ul className="pt-24 bg-secondary">
            <li className="p-4 border-b">Home</li>
            <li className="p-4 border-b">Lessons</li>
            <li className="p-4 border-b">Contact</li>
            <li className="p-4">About</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
