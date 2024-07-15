import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <header className="flex justify-between px-10 py-6 bg-primary">
        <a href="#" className="text-primary">
          Portfolio.
        </a>
        <nav className="hidden md:block">
          <ul className="text-primary flex space-x-4">
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <button
          onClick={() => setToggleMenu(!toggleMenu)}
          className="block md:hidden"
        >
          <Bars3Icon className="text-primary h-6" />
        </button>
      </header>

      {toggleMenu && (
        <nav className="md:hidden px-4 mobile-nav">
          <ul
            onClick={() => setToggleMenu(!toggleMenu)}
            className="flex flex-col text-black py-3 space-y-2 border-b-2"
          >
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default Header;
