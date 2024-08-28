import React from "react"
export default function Navbar() {
  return (
    <>
      <nav className=" p-6">
        <div className="container flex justify-between mx-auto items-center">
          <div className="text-white font-bold text-lg">MyLogo</div>
          {/* Navigation List */}
          <ul className="flex space-x-4 text-white  text-xl font-bold gap-10">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}