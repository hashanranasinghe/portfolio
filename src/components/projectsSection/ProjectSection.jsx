import ProjectCard from "./ProjectCard";

import { motion as m} from "framer-motion";
function ProjectSection() {
const sectionVariant = {
    offscreen: {
      opacity: 0,
      y: "20%",
    },
    onscreen: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.0,
      },
    },
  };
  return (
    <m.div 
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: "some" }}
    variants={sectionVariant}
    className="bg-gray-50 py-20 px-20" id="project">
      <div className="container mx-auto text-xl">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-blue-700 font-bold text-5xl py-10">
            My Projects
          </h1>
          <p className="text-black text-center w-screen lg:px-40  md:px-10 sm:px-10 pt-2">
            {" "}
            Hello and welcome to my portfolio! I`m Hashan, a Flutter developer
            with over 5 years of experience building high-quality mobile apps
            for a variety of industries.{" "}
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-5 pt-5">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </m.div>
  
  );
}

export default ProjectSection;
