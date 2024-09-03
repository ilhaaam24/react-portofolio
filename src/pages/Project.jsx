import React from "react";
import Card from "../components/Card";

const Project = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-16 gap-4 ">
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      <div className="flex flex-wrap justify-center gap-10 w-full max-w-screen-lg">
        {/* Card 1 */}
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
};

export default Project;
