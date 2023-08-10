import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectSection() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-indigo-500 font-bold">Portfolio</h1>
        <h1 className="text-xl">Works & Projects</h1>
        <p className="text-gray-400 text-center w-1/2 ">
          {" "}
          Hello and welcome to my portfolio! I'm Hashan, a Flutter developer
          with over 5 years of experience building high-quality mobile apps for
          a variety of industries.{" "}
        </p>
      </div>
      <div className="flex flex-wrap justify-between p-5 sm:p-0">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

export default ProjectSection;
