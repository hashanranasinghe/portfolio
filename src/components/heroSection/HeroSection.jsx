import My from "../../assets/images/my.png";
import AboutCard from "./AboutCard";
import { motion } from "framer-motion";
import TypingCard from "./TypingCard";

function HeroSection() {
  return (
    <>
      <img
        src={My}
        className="absolute bottom-0 right-0 left-0 mx-auto h-2/3 object-cover"
        alt=""
      />

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,

          type: "spring",
          stiffness: 200,
        }}
        className="hidden  lg:block w-big h-big absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-950
         rounded-full -z-10"
      ></motion.div>

      <TypingCard />

      <AboutCard />
    </>
  );
}

export default HeroSection;
