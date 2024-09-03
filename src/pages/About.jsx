import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaBootstrap, FaGithub,FaLaravel } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const About = () => {
  return (
    <div className="flex flex-col items-center  md:p-10 gap-16  ">
      <div className="flex-1 flex flex-col items-center  ">
        <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left">About Me</h1>
        <p className="text-sm md:text-xl text-center  mt-4 w-3/4">
          Hi, I’m Muhammad Ilham, a passionate web developer currently studying at Universitas Negeri Surabaya. I have a deep interest in web development and am always eager to learn and explore new technologies. My journey in the tech
          world has been both challenging and rewarding, and I thrive on solving problems and creating innovative solutions. Whether it's mastering new frameworks or building dynamic websites, 
        </p>
      </div>
        <ul className="flex-1 flex flex-wrap justify-center items-center w-3/4 min-w-screen gap-6 mt-4">
          <li className="text-3xl md:text-6xl max-w-none">
            <FaHtml5 />
          </li>
          <li className="text-3xl md:text-6xl max-w-none">
            <FaCss3 />
          </li>
          <li className="text-3xl md:text-6xl max-w-none">
            <FaBootstrap />
          </li>
          <li className="text-3xl md:text-6xl max-w-none">
            <RiTailwindCssFill />
          </li>
          <li className="text-3xl md:text-6xl max-w-none">
            <IoLogoJavascript />
          </li>
          <li className="text-3xl md:text-6xl max-w-none">
            <FaReact />
          </li>
          <li className="text-3xl md:text-6xl max-w-none">
            <FaNodeJs />
          </li>
          <li className="text-3xl md:text-6xl max-w-none">
            <FaGithub />
          </li>
          <li className="text-3xl md:text-6xl max-w-none">
            <FaLaravel />
          </li>
        </ul>
    </div>
  );
};

export default About;
