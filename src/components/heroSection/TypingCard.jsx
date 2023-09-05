
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
      className="flex flex-col items-center justify-center rounded-lg shadow-xl absolute top-[75px] m-auto bg-white  h-[150px] w-[300px] left-20"
    >
      <div className="flex flex-col text-center text-3xl sm:left-10 md:left-3 lg:left-20 xl:left-30 font-bold">
        <span className="text-black"> I`m </span>

        <span className=" text-blue-700">
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
