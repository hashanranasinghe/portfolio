import React from "react";
import ServiceCard from "./ServiceCard";

function ServiceSection() {
  return (
      <div className="container mx-auto">
          <div className="flex flex-col items-center gap-3">
        <h1 className="text-indigo-500 font-bold">SERVICES</h1>
        <h1 className="text-xl">What do I offer?</h1>
        <p className="text-gray-400 text-center w-1/2 ">
          {" "}
          Hello and welcome to my portfolio! I'm Hashan, a Flutter developer
          with over 5 years of experience building high-quality mobile apps for
          a variety of industries.{" "}
        </p>
      </div>
      <div className="flex flex-wrap">
      <ServiceCard/>
      <ServiceCard/>
      <ServiceCard/>
      <ServiceCard/>
      <ServiceCard/>
      <ServiceCard/>
      </div>
    </div>
  );
}

export default ServiceSection;
