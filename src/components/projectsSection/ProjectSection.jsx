import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion as m } from "framer-motion";
import ProjectModal from "./ProjectModal";
import ProjectData from "../../assets/data/project";
const ProjectSection = () => {
  const [isShow, setIsShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  
  const handleReadMore = (project) => {
    setSelectedProject(project);
    setIsShow(true);
  };
  
  const handleOnClose = () => {
    setIsShow(false);
  };
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20" id="project">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-3">
            PORTFOLIO
          </span>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Explore my projects to see my skills in action. Each project represents unique challenges
            I've tackled. Feel free to reach out if you'd like to discuss any of them in detail.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ProjectData.map((project, index) => (
            <ProjectCard
              key={index}
              handleReadMoreClick={() => handleReadMore(project)}
              title={project.name}
              gitLink={project.link}
              short={project.short}
              image={project.img}
            />
          ))}
        </div>

        {/* Project Modal */}
        {isShow && (
          <ProjectModal
            visible={isShow}
            onClose={handleOnClose}
            project={selectedProject}
          />
        )}
      </div>
    </section>
  );
};


export default ProjectSection;
