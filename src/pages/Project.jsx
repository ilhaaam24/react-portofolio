import React from "react";

const Project = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10 gap-4 ">
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      <div className="flex flex-wrap justify-center gap-10 w-full max-w-screen-lg">
        {/* Card 1 */}
        <div className="flex flex-col  bg-white shadow-lg rounded-lg overflow-hidden h-[350px] w-[300px]">
          <img src="https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg" className="w-full h-[250px] object-cover" alt="Project 1" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Project 1</h2>
            <p className="text-gray-600 mt-2">Description for Project 1</p>
          </div>
        </div>
        <div className="flex flex-col  bg-white shadow-lg rounded-lg overflow-hidden h-[350px] w-[300px]">
          <img src="https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg" className="w-full h-[250px] object-cover" alt="Project 1" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Project 1</h2>
            <p className="text-gray-600 mt-2">Description for Project 1</p>
          </div>
        </div>
        <div className="flex flex-col  bg-white shadow-lg rounded-lg overflow-hidden h-[350px] w-[300px]">
          <img src="https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg" className="w-full h-[250px] object-cover" alt="Project 1" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Project 1</h2>
            <p className="text-gray-600 mt-2">Description for Project 1</p>
          </div>
        </div>
        <div className="flex flex-col  bg-white shadow-lg rounded-lg overflow-hidden h-[350px] w-[300px]">
          <img src="https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg" className="w-full h-[250px] object-cover" alt="Project 1" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Project 1</h2>
            <p className="text-gray-600 mt-2">Description for Project 1</p>
          </div>
        </div>
        <div className="flex flex-col  bg-white shadow-lg rounded-lg overflow-hidden h-[350px] w-[300px]">
          <img src="https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg" className="w-full h-[250px] object-cover" alt="Project 1" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Project 1</h2>
            <p className="text-gray-600 mt-2">Description for Project 1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
