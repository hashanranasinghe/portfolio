import React from "react";
import logo from "../../assets/images/fb.png";
function ServiceCard() {
  return (
    <div className="md:w-1/3 shadow-xl rounded-lg p-5 flex flex-col my-3 md:my-10">
      <img src={logo} className=" w-10" alt="" />
      <h1 className="font-medium text-lg">UI/UX Design</h1>
      <p className="text-gray-400">
        {" "}
        Hello and welcome to my portfolio! I'm Hashan, a Flutter developer with
        over 5 years of experience building high-quality mobile apps for a
        variety of industries.{" "}
      </p>
      <a href="" className="text-sm font-semibold text-indigo-500">Read more</a>
    </div>
  );
}

export default ServiceCard;
