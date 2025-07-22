import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";

interface ProjectCardProps {
  className?: string;
  onClick?: () => void;
  title?: string;
  image?: string;
  short?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  className = "",
  onClick,
  title = "Project Title",
  image = "https://via.placeholder.com/300x200/333/555?text=Project+Image",
  short = "Project Short Description",
}) => {
  return (
    <div
      className={`relative w-80  cursor-pointer transition-all duration-300 hover:scale-105 ${className}`}
      onClick={onClick}
    >
      {/* Glassmorphism card container */}
      <div className="relative w-full h-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
        {/* Glass highlight effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10 rounded-2xl"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

        {/* Content layer */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Title */}
          <h3 className="text-realWhite lg:text-lg text-md font-semibold text-center">
            {title}
          </h3>

          {/* Image container */}

          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain"
          />

          {/* Upward arrow button with glassmorphism */}
          <div className="flex flex-row items-end justify-end  mt-5">
            <p className="text-realWhite text-sm font-light">{short}</p>
            <button
              className="bg-orange-500 backdrop-blur-md text-realWhite rounded-full p-3 shadow-lg hover:bg-darkblue-900/80 transition-all duration-300 ease-in-out hover:shadow-xl"
              aria-label="Upward Arrow Button"
            >
              <HiArrowUpRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
