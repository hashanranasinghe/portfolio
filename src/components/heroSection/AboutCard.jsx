
// AboutCard.jsx
import { motion } from "framer-motion";

function AboutCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        delay: 0.2
      }}
      className="flex flex-col gap-6 p-8 rounded-2xl shadow-2xl absolute bottom-10 left-16 lg:left-2/3 md:left-[50%] sm:left-[25%] bg-white/90 backdrop-blur-sm border border-blue-100 w-[400px] z-10"
    >
      <div className="relative">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
          Hi, I'm Hashan
        </h1>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "60px" }}
          transition={{ delay: 1, duration: 0.5 }}
          className="h-1 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full mt-2"
        />
      </div>
      <p className="text-gray-700 leading-relaxed">
        A skilled Flutter developer known for clear communication
        and delivering on-time, on-budget mobile apps. Visit my portfolio and
        reach out to bring your app ideas to life. Let's create something
        amazing together!
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="self-start px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium shadow-lg hover:shadow-blue-200 transition-all duration-300"
      >
        Get in touch
      </motion.button>
    </motion.div>
  );
}

export default AboutCard;