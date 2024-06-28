import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/icons/logo.svg";
import { HiArrowSmallUp } from "react-icons/hi2";
 
export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
 
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setIsSticky(isScrolled);
    };
 
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
 
  return (
    <div
      style={{ backgroundColor: "#122038" }}
      className={`flex flex-col justify-center ${
        isSticky ? "sticky-header" : ""
      }`}
    >
      <div className="flex justify-center items-center px-16 py-5 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex justify-between gap-5 w-full max-w-[1239px] max-md:flex-wrap max-md:max-w-full">
          <div
            className="flex my-auto text-4xl font-bold text-neutral-700 cursor-pointer"
            style={{ fontFamily: "cursive" }}
          >
            <img src={logo} />
          </div>
          <div className="flex gap-10 items-center text-lg font-medium text-zinc-800 max-md:flex-wrap max-md:max-w-full max-md:hidden">
            <div className="text-white hover:text-black hover:bg-green-400  rounded-xl px-3 py-5 self-stretch my-auto cursor-pointer">
              Home
            </div>
            <div className="text-white hover:text-black hover:bg-green-400  rounded-xl px-3 py-5 self-stretch my-auto cursor-pointer">
              About
            </div>
            <div className="text-white hover:text-black hover:bg-green-400  rounded-xl px-3 py-5 self-stretch my-auto cursor-pointer">
              Solution
            </div>
            <div className="text-white hover:text-black hover:bg-green-400  rounded-xl px-3 py-5 self-stretch my-auto cursor-pointer">
              News & insights
            </div>
            <div className="text-white hover:text-black hover:bg-green-400  rounded-xl px-3 py-5 self-stretch my-auto cursor-pointer">
              Contact Us
            </div>
 
            <div className="flex items-center text-white hover:text-black hover:bg-green-400 rounded-xl px-3 py-5 self-stretch my-auto cursor-pointer">
              Get Started <HiArrowSmallUp className="ml-2 transform rotate-45" />
            </div>
          </div>
          <div className="flex self-center text-white hidden max-md:block">
            {showMenu ? <FaTimes /> : <FaBars />}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
 
