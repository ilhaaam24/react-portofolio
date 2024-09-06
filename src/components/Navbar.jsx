import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="flex justify-between items-center container w-full mx-auto px-16 py-4 fixed top-0 left-0">
      <div className="text-2xl font-bold font-mono">Iam</div>
      <div className="block md:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          {open ? <FaTimes className="hidden" /> : <FaBars />}
        </button>
      </div>
      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-6">
        <li className="lg:ml-4">
          <a href="#about" className="block py-2 px-4 lg:px-0 hover:text-[#485645] hover:scale-105 ease-in-out duration-300">
            About
          </a>
        </li>
        <li className="lg:ml-4">
          <a href="#experience" className="block py-2 px-4 lg:px-0 hover:text-[#485645] hover:scale-105 ease-in-out duration-300">
            Experience
          </a>
        </li>
        <li className="lg:ml-4">
          <a href=" #project" className="block py-2 px-4 lg:px-0 hover:text-[#485645] hover:scale-105 ease-in-out duration-300">
            Project
          </a>
        </li>
        <li className="lg:ml-4">
          <a href="" className="block py-2 px-4 lg:px-0 hover:text-[#485645] hover:scale-105 ease-in-out duration-300">
            Service
          </a>
        </li>
      </ul>
      <div className="hidden md:block">
        <a href="#contact" className=" border border-[#1a2019] rounded-full text-sm py-1 px-3 hover:bg-[#1a2019] hover:text-white">
          Contact
        </a>
      </div>
      {/* Mobile Menu */}
      <ul className={`fixed flex flex-col top-4 right-4 w-1/2 lg:w-1/3 max-h-96 bg-[#3C3D37] text-white rounded-lg py-6 opacity-90 z-10  md:hidden ease-in-out duration-300 ${open ? "translate-x-0" : "hidden"}`}>
        <li className="absolute top-4 right-4">
          <FaTimes className=" text-2xl cursor-pointer animate-rotate" onClick={toggleMenu} />
        </li>
        <li className=" border-[#697565]">
          <a href="#" className="block py-2 px-6 text-left text-lg" onClick={toggleMenu}>
            Home
          </a>
        </li>
        <li className=" border-[#697565]">
          <a href="#about" className="block py-2 px-6 text-lg" onClick={toggleMenu}>
            About
          </a>
        </li>
        <li className=" border-[#697565]">
          <a href="#project" className="block py-2 px-6  text-lg" onClick={toggleMenu}>
            Project
          </a>
        </li>
        <li className=" border-[#697565]">
          <a href="" className="block py-2 px-6 text-lg" onClick={toggleMenu}>
            Service
          </a>
        </li>
        <li className=" border-[#697565]">
          <a href="#contact" className="block py-2 px-6 text-lg" onClick={toggleMenu}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
