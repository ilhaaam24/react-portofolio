import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaBootstrap, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6  gap-y-8 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 ">
        <div className="flex justify-center">
          <img src="https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg" alt="Profile" className="rounded-full h-[300px] w-[300px] md:h-[350px] md:w-[350px] lg:h-[450px] lg:w-[450px] object-cover" />
        </div>
        <div className="flex flex-col items-center md:items-start ">
          <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left">About Me</h1>
          <p className="text-lg md:text-2xl text-center md:text-left mt-4 w-3/4">
            Hi, I’m Muhammad Ilham, a passionate web developer currently studying at Universitas Negeri Surabaya. I have a deep interest in web development and am always eager to learn and explore new technologies. My journey in the tech
            world has been both challenging and rewarding, and I thrive on solving problems and creating innovative solutions. Whether it's mastering new frameworks or building dynamic websites, I'm excited about the endless possibilities
            in this field and look forward to making a meaningful impact with my skills.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <p className="text-center text-md md:text-lg">Here are some technologies I've been working with:</p>
        <div className="flex overflow-hidden gap-6">
          <div className="flex animate-loop-scroll space-x-16">
            <ul className="flex flex-wrap justify-center items-center gap-6 mt-4">
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
            </ul>
          </div>
          <div className="">
            <div className="flex animate-loop-scroll space-x-16">
              <ul className="flex flex-wrap justify-center items-center gap-6 mt-4">
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
