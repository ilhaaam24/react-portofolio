import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="container w-full mx-auto px-16 py-4">
      <nav className="flex justify-between items-center">
        <div className="text-2xl font-bold">Logo</div>
        <div className="block md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10">
          <li className="lg:ml-4">
            <a href="" className="block py-2 px-4 lg:px-0">
              Home
            </a>
          </li>
          <li className="lg:ml-4">
            <a href="" className="block py-2 px-4 lg:px-0">
              About
            </a>
          </li>
          <li className="lg:ml-4">
            <a href="" className="block py-2 px-4 lg:px-0">
              Project
            </a>
          </li>
          <li className="lg:ml-4">
            <a href="" className="block py-2 px-4 lg:px-0">
              Service
            </a>
          </li>
        </ul>
        <button className="hidden md:block border rounded-full py-1 px-3">Contact</button>
        {/* Mobile Menu */}
        <ul className={`fixed top-0 right-0 w-1/2 h-screen bg-[#3C3D37]  py-6  md:hidden ease-in-out duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
          <li className="absolute top-4 right-4">
            <FaTimes className=" text-2xl cursor-pointer" onClick={toggleMenu} />
          </li>
          <li className="border-b border-[#697565]">
            <a href="" className="block py-4 px-6 text-left text-lg" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li className="border-b border-[#697565]">
            <a href="" className="block py-4 px-6 text-lg" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li className="border-b border-[#697565]">
            <a href="" className="block py-4 px-6  text-lg" onClick={toggleMenu}>
              Project
            </a>
          </li>
          <li className="border-b border-[#697565]">
            <a href="" className="block py-4 px-6 text-lg" onClick={toggleMenu}>
              Service
            </a>
          </li>
          <li className="border-b border-[#697565]">
            <a href="" className="block py-4 px-6 text-lg" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
