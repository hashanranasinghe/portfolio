import { motion as m } from "framer-motion";
import Fb from "../assets/images/fb.png";
import Git from "../assets/images/github.png";
import Linkedin from "../assets/images/linkedin.png";
import stack from "../assets/images/stackoverflow.png";

export const SocialMediaBar = () => {
const socialIconVariant = {
  hidden: {
    opacity: 0,
    y: "-100%",
  },
  show: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.5,
    },
  },
};
  return (
    <div className="bottom-0 fixed z-10">
      <m.div
        variants={socialIconVariant}
        initial={"hidden"}
        animate={"show"}
        className="m-4 gap-2 flex flex-col"
      >
        <a
          href="https://www.linkedin.com/in/hashan-ranasinghe"
          target="_blank" rel="noreferrer"
        >
          <m.div
            variants={socialIconVariant}
            className="h-8 w-8 bg-white flex justify-center items-center rounded-full shadow-md cursor-pointer"
          >
            <img
              src={Linkedin}
              width={20}
              height={20}
              alt="liknedin Icon"
              className=""
            />
          </m.div>
        </a>
        <a href="https://www.facebook.com/hashan.ranasinghe.739?mibextid=ZbWKwL" target="_blank" rel="noreferrer">
          <m.div
            variants={socialIconVariant}
            className="h-8 w-8 bg-white flex justify-center items-center rounded-full shadow-md cursor-pointer"
          >
            <img
              src={Fb}
              width={20}
              height={20}
              alt="fb Icon"
              className=""
            />
          </m.div>
        </a>
        <a href="https://github.com/hashanranasinghe" target="_blank" rel="noreferrer">
          <m.div
            variants={socialIconVariant}
            className="h-8 w-8 bg-white flex justify-center items-center rounded-full shadow-md cursor-pointer"
          >
            <img
              src={Git}
              width={20}
              height={20}
              alt="github Icon"
              className=""
            />
          </m.div>
        </a>
        <a href="https://stackoverflow.com/users/19014381/hashan-ranasinghe" target="_blank" rel="noreferrer">
          <m.div
            variants={socialIconVariant}
            className="h-8 w-8 bg-white flex justify-center items-center rounded-full shadow-md cursor-pointer"
          >
            <img
              src={stack}
              width={20}
              height={20}
              alt="stack Icon"
              className=""
            />
          </m.div>
        </a>
      </m.div>
    </div>
  );
};