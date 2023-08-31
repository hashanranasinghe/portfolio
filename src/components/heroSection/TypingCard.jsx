
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
function TypingCard() {
  return (
    <motion.div
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.5 },
      }}
      transition={{
        duration: 1,

        type: "spring",
        stiffness: 200,
      }}
      className="flex flex-col items-center justify-center rounded-lg shadow-xl absolute top-1/4 m-auto bg-white h-1/5 w-1/4 left-20"
    >
      <div className="flex flex-col text-center text-sm sm:left-10 sm:text-sm md:left-3 md:text-4xl lg:left-20 xl:left-30 xl:text-3xl font-bold">
        <span className="text-gray-600"> I`m </span>

        <span className=" text-red-500">
          <Typewriter
            words={[
              "Hashan Ranasinghe",
              "APP Developer",
              "App Designer",
              "Web Developer",
              "UI/UX Designer",
            ]}
            loop={100}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </div>
    </motion.div>
  );
}

export default TypingCard;
