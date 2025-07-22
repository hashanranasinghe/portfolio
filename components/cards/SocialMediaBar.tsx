"use client";
import socialData from "@/data/socialData";
import { SocialMedia } from "@/types/SocialMedia";
import { motion as m } from "framer-motion";

const SocialIcon: React.FC<SocialMedia> = ({ name, icon, url }) => {
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
        className="h-8 w-8 bg-realWhite flex justify-center items-center rounded-full shadow-md cursor-pointer hover:h-10 hover:w-10 duration-300"
      >
        <img src={icon} width={20} height={20} alt={`${name} Icon`} />
      </m.div>
    </a>
  );
};

export const SocialMediaBar = () => {
  const socialMediaLinks = socialData;

  return (
    <div className="bottom-0 fixed z-10">
      <m.div
        initial={"hidden"}
        animate={"show"}
        className="m-4 gap-2 flex flex-col"
      >
        {socialMediaLinks.map((link) => (
          <SocialIcon key={link.name} {...link} />
        ))}
      </m.div>
    </div>
  );
};
