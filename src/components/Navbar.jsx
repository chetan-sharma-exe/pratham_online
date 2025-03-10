import { useState } from "react";
import TextScroller from "./TextScroller";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="fixed z-100 w-full">
      {/* Text Scroll */}
      <div className="bg-[#081054] h-13 flex items-center gap-10 justify-center z-101">
        <div className="flex w-[90%] gap-10 h-full items-center">
          <TextScroller
            text="Registrations Open for CUET | CLAT | IPMAT 2025 and 2026"
            speed={150}
            direction="left"
            className="font-medium  text-white text-2xl"
          />
          <div className="flex items-center h-full sm:gap-2 justify-between w-full sm:w-auto">
            <button className="bg-amber-50 rounded-sm w-30 h-[80%] text-[#103f6b] font-bold cursor-pointer">
              Pay Online
            </button>
            <button className="bg-amber-50 rounded-sm w-30 h-[80%] text-[#103f6b] font-bold cursor-pointer">
              Register
            </button>
          </div>
        </div>
      </div>
      {/* Navbar */}
      <nav className="bg-white flex sm:gap-10 h-16 items-center justify-around sm:justify-center border-2 font-bold text-[#081054] z-101">
        <img
          className="h-12"
          src="../../public/pratham.png"
          alt="Pratham logo"
        />
        <a className="hidden sm:block">ABOUT</a>
        <a className="hidden sm:block">PREP MODULES</a>
        <a className="hidden sm:block">COURSES</a>
        <a className="hidden sm:block">RESULTS</a>
        <a className="hidden sm:block">BLOG</a>
        <a className="hidden sm:block">CONTACT</a>
        <a className="hidden sm:block">CAREER</a>
        <a className="hidden sm:block">LOGIN</a>
        <a className="hidden sm:block">PARTNERS</a>
        <div
          className="flex sm:hidden flex-col cursor-pointer z-50"
          onClick={toggleMenu}
        >
          <div
            className={`w-6 h-0.5 bg-black my-0.5 transition-all duration-300 ${
              isMenuOpen ? "transform rotate-45 translate-y-1" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-black my-0.5 transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-black my-0.5 transition-all duration-300 ${
              isMenuOpen ? "transform -rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </div>
        <div
          className={`absolute w-full bg-white transition-all duration-500 z-[-1] ${
            isMenuOpen ? "top-29" : "-top-100"
          }`}
        >
          <ul className="flex flex-col items-center">
            <li>
              <a href="#" className="block px-4 py-4">
                ABOUT
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-4">
                PREP MODULES
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-4">
                COURSES
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-4">
                RESULTS
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-4">
                BLOG
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-4">
                CONTACT
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-4">
                CAREER
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-4">
                LOGIN
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-4">
                PARTNERS
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
