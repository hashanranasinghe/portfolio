import { motion as m } from "framer-motion";
import Fb from "../assets/images/fb.png";
import Git from "../assets/images/github.png";
import Linkedin from "../assets/images/linkedin.png";
import Stack from "../assets/images/stackoverflow.png";

const socialMediaLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/hashan-ranasinghe",
    icon: Linkedin,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/hashan.ranasinghe.739?mibextid=ZbWKwL",
    icon: Fb,
  },
  {
    name: "GitHub",
    url: "https://github.com/hashanranasinghe",
    icon: Git,
  },
  {
    name: "Stack Overflow",
    url: "https://stackoverflow.com/users/19014381/hashan-ranasinghe",
    icon: Stack,
  },
];

const SocialIcon = ({ name, url, icon }) => {
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
    <a href={url} target="_blank" rel="noreferrer">
      <m.div
        variants={socialIconVariant}
        className="h-8 w-8 bg-white flex justify-center items-center rounded-full shadow-md cursor-pointer hover:h-10 hover:w-10 duration-300"
      >
        <img src={icon} width={20} height={20} alt={`${name} Icon`} />
      </m.div>
    </a>
  );
};

export const SocialMediaBar = () => {
  return (
    <div className="bottom-0 fixed z-10">
      <m.div initial={"hidden"} animate={"show"} className="m-4 gap-2 flex flex-col">
        {socialMediaLinks.map((link) => (
          <SocialIcon key={link.name} {...link} />
        ))}
      </m.div>
    </div>
  );
};
