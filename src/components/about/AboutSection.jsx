import React from "react";
import Owner from "../../assets/images/image.png";
function AboutSection() {
  return (
    <div className="px-10">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row py-20 gap-40 items-center">
        <div className="relative">
          <div className="h-full overflow-hidden rounded-full">
            <img src={Owner} className="bg-indigo-900 px-3" alt="" />
          </div>
        </div>
        <div className="flex flex-col my-auto gap-3">
          <h1 className="text-indigo-500 font-bold">ABOUT ME</h1>
          <h1 className="text-xl font-medium">BETTER DESIGN</h1>
          <h1 className="text-xl font-medium">BETTER EXPERIENCE</h1>
          <p className="text-gray-400">
            {" "}
            Hello and welcome to my portfolio! I'm Hashan, a Flutter developer
            with over 5 years of experience building high-quality mobile apps
            for a variety of industries.{" "}
          </p>
          <h1 className="font-medium text-gray-400">HTML</h1>
          <div className="bg-gray-200 w-full h-1.5 rounded-md">
            <div className="bg-indigo-600 w-full h-1.5 rounded-md"></div>
          </div>

          <h1 className="font-medium text-gray-400">HTML</h1>
          <div className="bg-gray-200 w-full h-1.5 rounded-md">
            <div className="bg-indigo-600 w-4/6 h-1.5 rounded-md"></div>
          </div>

          <h1 className="font-medium text-gray-400">HTML</h1>
          <div className="bg-gray-200 w-full h-1.5 rounded-md">
            <div className="bg-indigo-600 w-5/6 h-1.5 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
