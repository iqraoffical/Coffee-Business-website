"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaCartArrowDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi"; // Hamburger icon
import { HiX } from "react-icons/hi"; // Close icon

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu open/close
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <header className="bg-red-500 text-white py-5 flex justify-between items-center px-10 relative z-10">
      <h1 className="text-2xl font-bold">Enjoy Coffee</h1>

      {/* Desktop Navbar */}
      <nav className="hidden md:flex gap-10 text-white font-bold">
        <Link href="/" onClick={closeMenu}>
          Home
        </Link>
        <Link href="/about" onClick={closeMenu}>
          About
        </Link>
        <Link href="/our-services" onClick={closeMenu}>
          Our Services
        </Link>
        <Link href="/latest-products" onClick={closeMenu}>
          Latest Products
        </Link>
        <Link href="/contact" onClick={closeMenu}>
          Contact
        </Link>
        <FaCartArrowDown className="text-white text-xl" />
      </nav>

      {/* Mobile Navbar (Hamburger Menu) */}
      <div className="md:hidden flex items-center">
        <GiHamburgerMenu
          className="text-white text-3xl cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-0 left-0 w-full h-full bg-red-400 p-5 md:hidden z-20`}
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <HiX
            className="text-white text-3xl cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        <nav className="flex flex-col items-center gap-5 text-white font-bold mt-5">
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>
          <Link href="/about" onClick={closeMenu}>
            About
          </Link>
          <Link href="/our-services" onClick={closeMenu}>
            Our Services
          </Link>
          <Link href="/latest-products" onClick={closeMenu}>
            Latest Products
          </Link>
          <Link href="/contact" onClick={closeMenu}>
            Contact
          </Link>
          <FaCartArrowDown className="text-white text-xl" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
