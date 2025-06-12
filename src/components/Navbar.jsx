// src/components/Navbar.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Kontainer utama navbar */}
      <div className="flex items-center justify-between px-4 sm:px-6">
        {/* Hamburger Icon (Mobile Only) */}
        <div className="md:hidden pt-2 ml-auto">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-full backdrop-blur-md bg-white/50 border border-gray-200 shadow-md hover:scale-105 transition-all duration-200"
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <X size={22} className="text-[#1e1e1e] transition-transform duration-300 rotate-90" />
            ) : (
              <Menu size={22} className="text-[#1e1e1e] transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex w-full justify-center py-6">
          <ul className="flex justify-center space-x-16 font-quicksand text-base font-light">
            <li><a href="#home" className="text-[#1e1e1e] hover:text-gray-500">Home</a></li>
            <li><a href="#features" className="text-[#1e1e1e] hover:text-gray-500">Features</a></li>
            <li><a href="#menu" className="text-[#1e1e1e] hover:text-gray-500">Menu</a></li>
            <li><a href="#contact" className="text-[#1e1e1e] hover:text-gray-500">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {menuOpen && (
      <div className="md:hidden absolute top-20 right-4 max-w-sm bg-white/50 backdrop-blur-lg rounded-2xl shadow-xl ring-1 ring-white/20 transition-all duration-300">
        <ul className="flex flex-col px-6 py-5 gap-4 font-quicksand text-[15px] font-medium text-[#1e1e1e]">
          <li>
            <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-[#3CB5FF] transition">Home</a>
          </li>
          <li>
            <a href="#features" onClick={() => setMenuOpen(false)} className="hover:text-[#3CB5FF] transition">Features</a>
          </li>
          <li>
            <a href="#menu" onClick={() => setMenuOpen(false)} className="hover:text-[#3CB5FF] transition">Menu</a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-[#3CB5FF] transition">Contact</a>
          </li>
        </ul>
      </div>
    )}
    </nav>
  );
};

export default Navbar;
