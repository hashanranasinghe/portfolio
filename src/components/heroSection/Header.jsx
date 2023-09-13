import { useState } from "react";
import HamburgerMenu from "../heroSection/HamburgerMenu";
import HeroSection from "./HeroSection";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { motion, useScroll, useSpring } from "framer-motion";
import "./progress.css";

function Header() {
  const [selectedItem, setSelectedItem] = useState("home");

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  const navigationItems = [
    { id: "home", label: "Home" },
    { id: "project", label: "Projects" },
    { id: "contact", label: "Contact me" },
    { id: "gallery", label: "My Gallery" },
    { id: "resume", label: "Resume" },
  ];

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/drive/u/0/folders/1_XnMiRCJ1DnnyoA-bgKEWBD11aWzr3zx";
    link.target = "_blank";
    link.download = "cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="h-screen overflow-hidden relative bg-gradient-to-t from-indigo-50"
      id="home"
    >
      <nav className="w-full fixed top-0 z-20 backdrop-blur-md bg-white/50 ...">
        <div className="container mx-auto py-5 flex items-center justify-between">
          <span className="text-2xl font-bold text-indigo-900">H</span>
          <ul className="hidden md:flex space-x-10 text-black font-bold text-sm uppercase">
            {navigationItems.map((item) => (
              <li
                key={item.id}
                className={
                  selectedItem === item.id
                    ? "border-solid border-2 border-blue-700 py-1 px-3 rounded-md text-blue-700"
                    : "py-1 px-3"
                }
              >
                <a
                  href={`#${item.id}`}
                  onClick={() =>
                    item.id === "resume"
                      ? downloadPDF()
                      : handleItemClick(item.id)
                  }
                >
                  {item.id === "resume" ? (
                    <>
                      <FileDownloadOutlinedIcon
                        style={{ marginRight: "8px" }}
                      />
                      {item.label}
                    </>
                  ) : (
                    item.label
                  )}
                </a>
              </li>
            ))}
          </ul>
          <HamburgerMenu />
        </div>
        <motion.div
          className="progress-bar bg-gradient-to-r from-white to-blue-700 ... h-1 left-0 right-0 fixed z-20"
          style={{ scaleX }}
        />
      </nav>
      <HeroSection />
    </div>
  );
}

export default Header;
