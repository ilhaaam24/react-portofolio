import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col-reverse gap-8 h-auto p-8 lg:flex-row md:h-[100vh] md:px-32">
      <div className="flex-1 flex flex-col justify-center items-start px-4">
        <p className="text-4xl font-bold md:text-5xl">Hey, I'am a</p>
        <h1 className="text-4xl mt-3 font-bold md:text-5xl ">Fullstack Developer</h1>
        <button className="bg-[#697565] text-white px-4 py-2 rounded-md mt-4">Hire Me</button>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src="https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg" alt="Profile" className="rounded-full h-[300px] w-[300px] md:h-[350px] md:w-[350px] lg:h-[450px] lg:w-[450px] object-cover" />
      </div>
    </div>
  );
};

export default Home;
