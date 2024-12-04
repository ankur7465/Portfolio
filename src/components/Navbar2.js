import React, { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import ThemeToggle from "./theme";

export default function Navbar2() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "Experience", path: "/experience" },
    { id: 3, text: "Projects", path: "/projects" },
    { id: 4, text: "Contact", path: "/contact" },
    { id: 5, text: "About", path: "/about" },
    { id: 6, text: "Certificate", path: "/certificate" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 md:px-10 flex justify-between items-center h-16">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-3 ml-4">
          <img
            src="/a.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full border border-gray-300"
          />
          <h1 className="text-lg font-semibold">Software Engineer</h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-x-7">
          {navItems.map(({ id, text, path }) => (
            <li key={id} className="hover:text-blue-500">
              <Link to={path}>{text}</Link>
            </li>
          ))}
          <ThemeToggle />
        </ul>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenu(!menu)}
        >
          {menu ? (
            <IoMdClose className="text-black text-3xl" />
          ) : (
            <FiAlignJustify className="text-black text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden text-right w-full  text-white gap-5 items-center fixed left-0 top-[75px] transition-transform duration-500 ${
          menu ? "translate-x-0" : "translate-x-[-100%]"
        }`}
      >
        {navItems.map(({ id, text, path }) => (
          <li key={id}>
            <Link
              to={path}
              className="text-white text-xl hover:text-blue-300"
              onClick={() => setMenu(false)} // Close menu on link click
            >
              {text}
            </Link>
          </li>
        ))}
        <ThemeToggle />
      </ul>
    </nav>
  );
}
