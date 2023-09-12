import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion as m } from "framer-motion";
import ProjectModal from "./ProjectModal";
import ProjectData from "../../assets/data/project";
function ProjectSection() {
  const [isShow, setIsShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const handleReadMore = (project) => {
    setSelectedProject(project);
    setIsShow(true);
  };
  const handleOnClose = () => {
    setIsShow(false);
  };

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
      className="bg-gray-50 py-20 px-20"
      id="project"
    >
      <div className="container mx-auto text-xl">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-blue-700 font-bold text-5xl py-10">
            My Projects
          </h1>
          <p className="text-black text-center w-screen lg:px-40  md:px-10 sm:px-10 pt-2">
            {" "}
            Please review the project descriptions to gain insight into each app and the challenges I tackled during development. If you have inquiries or wish to discuss potential projects, kindly contact me. Thank you for visiting my portfolio.{" "}
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-5 pt-5">
          {ProjectData.map((project, index) => {
     
            return (
              <ProjectCard
                key={index}
                handleReadMoreClick={() => handleReadMore(project)}
                title={project.name}
                gitLink={project.link}
                short={project.short}
                image={project.img}
              />
            );
          })}
        </div>
        {isShow && (
          <ProjectModal
            visible={isShow}
            onClose={handleOnClose}
        project={selectedProject}
          />
        )}
      </div>
    </m.div>
  );
}

export default ProjectSection;
