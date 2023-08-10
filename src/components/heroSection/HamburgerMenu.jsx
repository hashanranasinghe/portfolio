import React, { useState } from "react";

const HamburgerMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleHamburgerClick = () => {
    setMenuVisible(!menuVisible);
    console.log(menuVisible);
  };

  return (
    <>
      <div
        className={`space-y-1 md:hidden cursor-pointer z-20`}
        onClick={handleHamburgerClick}
      >
        <div
          id="hamburger"
          className={`w-6 h-0.5 bg-black ${
            menuVisible ? "bg-white" : "bg-black"
          }`}
        ></div>
        <div
          id="hamburger"
          className={`w-6 h-0.5 bg-black ${
            menuVisible ? "bg-white" : "bg-black"
          }`}
        ></div>
        <div
          id="hamburger"
          className={`w-6 h-0.5 bg-black ${
            menuVisible ? "bg-white" : "bg-black"
          }`}
        ></div>
      </div>
      <ul
        id="menu"
        className={`bg-indigo-900 md:hidden absolute left-0 top-0 w-full p-10 rounded-b-3xl text-white space-y-10 text-center ${
          menuVisible ? "" : "hidden"
        }`}
      >
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About me</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Contact me</a>
        </li>
      </ul>
    </>
  );
};

export default HamburgerMenu;
