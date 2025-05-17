// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-0 w-full z-50">
      <div className="w-full flex justify-center py-6">
        <ul className="flex justify-center space-x-16 font-quicksand text-base font-light">
            <li><a href="#home" className="text-[#1e1e1e] hover:text-gray-500">Home</a></li>
            <li><a href="#features" className="text-[#1e1e1e] hover:text-gray-500">Features</a></li>
            <li><a href="#menu" className="text-[#1e1e1e] hover:text-gray-500">Menu</a></li>
            <li><a href="#contact" className="text-[#1e1e1e] hover:text-gray-500">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};


export default Navbar;
