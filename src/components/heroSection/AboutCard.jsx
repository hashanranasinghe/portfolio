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
      className="flex-col gap-4 p-6 rounded-md shadow-xl absolute top-80 bottom-0 m-auto right-20 bg-white h-fit w-1/4"
    >
      <h1 className="text-2xl font-bold text-indigo-900">Hi, I`m Hashan</h1>
      <p className="text-gray-600">
        {" "}
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content.
      </p>
      
    </motion.div>
  );
}

export default AboutCard;
