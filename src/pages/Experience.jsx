import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaBootstrap, FaGithub, FaLaravel } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";

const Experience = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8  px-2">
      <div className="text-center">
        <p className="text-xl text-gray-600">Explore</p>
        <h1 className="text-3xl font-bold ">My Experience</h1>
      </div>
      {/* Container for Frontend and Backend */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-10 px-4 ">
        {/* Frontend Development */}
        <div className="flex flex-col items-center gap-6 justify-start border-2 border-gray-600 rounded-3xl py-8 px-4 w-full md:w-1/2 min-h-[320px]">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-600">Frontend Development</h1>
          <ul className="flex flex-wrap justify-center items-center gap-12 mt-4 ">
            <li className="text-6xl md:text-6xl">
              <FaHtml5 />
            </li>
            <li className="text-6xl md:text-6xl">
              <FaCss3 />
            </li>
            <li className="text-6xl md:text-6xl">
              <FaBootstrap />
            </li>
            <li className="text-6xl md:text-6xl">
              <RiTailwindCssFill />
            </li>
            <li className="text-6xl md:text-6xl">
              <IoLogoJavascript />
            </li>
            <li className="text-6xl md:text-6xl">
              <FaReact />
            </li>
            
          </ul>
        </div>
        {/* Backend Development */}
        <div className="flex flex-col items-center gap-6  md:justify-start border-2 border-gray-600 rounded-3xl px-4 py-8 w-full md:w-1/2 min-h-[320px]">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-600">Backend Development</h1>
          <ul className="flex flex-wrap justify-center items-center gap-12 mt-4">
            <li className="text-6xl md:text-6xl">
              <FaNodeJs />
            </li>
            <li className="text-6xl md:text-6xl">
              <FaGithub />
            </li>
            <li className="text-6xl md:text-6xl">
              <FaLaravel />
            </li>
            <li className="text-6xl md:text-6xl">
              <SiMysql />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
