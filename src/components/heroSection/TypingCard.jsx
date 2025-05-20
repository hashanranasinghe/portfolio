// TypingCard.jsx
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

function TypingCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
      className="flex flex-col items-center justify-center rounded-2xl shadow-xl absolute top-36 mx-auto bg-white/90 backdrop-blur-sm border border-blue-100 py-8 px-10 w-[350px] left-20 z-10"
    >
      <div className="flex flex-col text-center">
        <span className="text-gray-700 font-medium mb-2 text-xl">I'm</span>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
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
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
        
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "80%" }}
          transition={{ delay: 1, duration: 0.8 }}
          className="h-1 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full mt-4 mx-auto"
        />
        
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#3b82f6" }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium shadow-lg hover:shadow-blue-200 transition-all duration-300"
        >
          Explore Portfolio
        </motion.button>
      </div>
    </motion.div>
  );
}

export default TypingCard;