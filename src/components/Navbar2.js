import React, { useState } from 'react';
import { FiAlignJustify } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom'; // Import Link
import ThemeToggle from './theme';

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
        <nav className="mt-2 max-w-screen-2xl font-serif container mx-auto px-4 md:px-20 flex justify-between items-center backdrop-brightness-125">
            <div className="flex items-center space-x-2">
                <img src="/a.jpg" alt="Profile" className="w-10 h-10 rounded-full" />
                <h1 className="font-sans font-semibold text-xl cursor-pointer">Software Engineer</h1>
            </div> 

            <div className="relative">
                <ul className="hidden md:flex gap-x-8">
                    {navItems.map(({ id, text, path }) => (
                        <li key={id} className="cursor-pointer hover:bg-[#1624a4] transition duration-300 px-2 py-1 rounded">
                            <Link to={path}>{text}</Link> {/* Use Link here */}
                        </li>
                    ))}
                <ThemeToggle/>
                </ul>
                {/* Dark/Light mode toggle */}
                <button onClick={() => setMenu(!menu)} className="md:hidden">
                    {menu ? <IoMdClose size={24} /> : <FiAlignJustify size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menu && (
                <div className="md:hidden  z-10 font-serif fixed inset-0 bg-gray-800 bg-opacity-80">
                    <ul className="flex flex-col justify-center items-center h-full gap-y-4">
                        {navItems.map(({ id, text, path }) => (
                            <li key={id} className="text-xl justify-center transition duration-300">
                                <Link to={path} className="text-white">{text}</Link> {/* White text on dark background */}
                            </li>
                        ))}
                        <ThemeToggle />
                    </ul>
                     {/* Dark/Light mode toggle in mobile menu */}
                </div>
            )}
        </nav>
    );
}
