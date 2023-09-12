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
      className="flex-col gap-4 p-6 rounded-md shadow-xl absolute bottom-5 left-16 lg:left-2/3 md:left-[50%] sm:left-[25%] h-[210px] w-[350px] bg-white"
    >
      <h1 className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-lg font-bold text-blue-700">
        Hi, I`m Hashan
      </h1>
      <p className="text-gray-600 text-justify pb-6">
        {" "}
        I'm Hashan, a skilled Flutter developer known for clear communication
        and delivering on-time, on-budget mobile apps. Visit my portfolio and
        reach out to bring your app ideas to life. Let's create something
        amazing!
      </p>
    </motion.div>
  );
}

export default AboutCard;
