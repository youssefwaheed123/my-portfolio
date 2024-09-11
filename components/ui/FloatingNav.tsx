"use client";
import { navItems } from "@/data";
import Image from "next/image";
import React from "react";

const NavItems = ({ onClick }: { onClick: () => void }) => {
  return (
    <ul className="nav-ul">
      {navItems.map((item, index) => (
        <li key={index} className="nav-li rounded-lg px-2">
          <a href={item.link} className="nav-li_a" onClick={onClick}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header className="px-5 fixed top-0 left-0 right-0 z-50 bg-black-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="#home"
            className="text-neutral-400 font-bold hover:text-white transition colors"
          >
            Welcome!
          </a>
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <Image
              src={`${isOpen ? "/close.svg" : "/menu.svg"}`}
              width={6}
              height={6}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>

          <nav className="hidden sm:flex">
            <NavItems onClick={toggleMenu} />
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems onClick={toggleMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
