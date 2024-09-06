import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex  flex-col  py-20 px-6  h-auto min-h-screen justify-evenly  lg:flex-row   lg:justify-center lg:items-center  lg:gap-24 ">
      <div className="flex justify-center items-center ">
        <img src="https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg" alt="Profile" className="rounded-full h-[200px] w-[200px] md:h-[300px] md:w-[300px] lg:h-[350px] lg:w-[350px] object-cover" />
      </div>
      <div className=" flex flex-col justify-center items-center px-4 text-center  gap-3 lg:justify-start ">
        <div className="flex flex-col justify-center items-center gap-1">
          <p className="text-xl  md:text-2xl text-center text-gray-800">Hello, I'm </p>
          <h2 className="text-3xl font-bold md:text-4xl text-black">Muhammad Ilham</h2>
          <h1 className="text-xl md:text-2xl ">Frontend Developer</h1>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <a href="">
            <button className=" flex-1 border border-[#3a4437] text-black px-3 py-2 rounded-full mt-4 w-32 hover:bg-[#1a2019] hover:text-white  text-[13px]">Download CV</button>
          </a>
          <a href="#contact">
            <button className="flex-1 bg-[#3a4437] text-white px-3 py-2 rounded-full mt-4 w-32 hover:bg-[#1a2019] text-[13px]">Contact</button>
          </a>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <a href="">
            <FaGithub size={40} />
          </a>
          <a href="">
            <FaLinkedin size={40} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
