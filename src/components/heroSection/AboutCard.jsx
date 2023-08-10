import React from "react";
import { motion } from "framer-motion";

function AboutCard() {
  return (
    <motion.div
      initial={{ x: 300 }}
      animate={{ x: 0 }}
      transition={{
        duration: 1,
        type: "spring",
        stiffness: 200,
      }}
      className="hidden lg:flex flex-col gap-4 p-6 rounded-md shadow-xl absolute top-20 bottom-0 m-auto right-20 bg-white h-fit w-1/4"
    >
      <h1 className="text-2xl font-bold text-indigo-900">Hi, I'm Hashan</h1>
      <p className="text-gray-600">
        {" "}
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content.
      </p>
      <motion.a
        whileTap={{ scale: 0.9 }}
        href="#contact"
        className="border-cyan-800 text-white text-xl w-fit px-3 py-2 rounded-md font-semibold"
      >
        Contact Me
      </motion.a>
    </motion.div>
  );
}

export default AboutCard;
