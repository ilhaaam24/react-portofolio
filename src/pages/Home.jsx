import React from "react";

const Home = () => {
  return (
    <div className="flex  flex-col-reverse  py-20 px-6 gap-8 h-auto min-h-screen  lg:flex-row md:px-32 lg:justify-evenly lg:items-center  ">
      <div className="flex-1 flex flex-col justify-center items-start px-4">
        <p className="text-4xl font-bold md:text-5xl">Hey, I'am a</p>
        <h1 className="text-4xl mt-3 font-bold md:text-5xl ">Fullstack Developer</h1>
        <a href="#contact">
          <button className="bg-[#697565] text-white px-4 py-2 rounded-md mt-4 hover:bg-[#8f8f8f]">Hire Me</button>
        </a>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src="https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg" alt="Profile" className="rounded-full h-[300px] w-[300px] md:h-[350px] md:w-[350px] lg:h-[450px] lg:w-[450px] object-cover" />
      </div>
    </div>
  );
};

export default Home;
