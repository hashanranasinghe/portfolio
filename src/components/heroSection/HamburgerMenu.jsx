// HamburgerMenu.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

const menuVariants = {
  hidden: {
    y: "-100%",
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1
    }
  },
  exit: {
    y: "-100%",
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const itemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const HamburgerMenu = ({ selectedItem, handleItemClick }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleHamburgerClick = () => {
    setMenuVisible(prev => !prev);
  };

  const handleMenuItemClick = (itemName) => {
    setMenuVisible(false);
    handleItemClick(itemName);
  };

  const navigationItems = [
    { id: "home", label: "Home" },
    { id: "project", label: "Projects" },
    { id: "contact", label: "Contact me" },
    { id: "gallery", label: "My Gallery" },
    { id: "resume", label: "Resume" },
  ];

  const downloadPDF = () => {
    setMenuVisible(false);

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
    <>
      <motion.div
        className="md:hidden cursor-pointer z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md"
        onClick={handleHamburgerClick}
        whileTap={{ scale: 0.9 }}
      >
        {menuVisible ? (
          <CloseIcon style={{ color: "#3b82f6" }} />
        ) : (
          <MenuIcon style={{ color: "#3b82f6" }} />
        )}
      </motion.div>

      <AnimatePresence>
        {menuVisible && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-indigo-900 to-blue-800 md:hidden z-40 overflow-hidden flex flex-col items-center justify-center"
          >
            <motion.ul className="flex flex-col items-center justify-center gap-8 text-white w-full">
              {navigationItems.map((item) => (
                <motion.li
                  key={item.id}
                  variants={itemVariants}
                  className={`w-3/4 text-center py-4 px-8 rounded-xl ${
                    selectedItem === item.id
                      ? "bg-white/20 backdrop-blur-sm text-white shadow-lg border border-white/20"
                      : "hover:bg-white/10 transition-all duration-300"
                  }`}
                >
                  <a
                    href={`#${item.id}`}
                    className="flex items-center justify-center text-lg font-medium"
                    onClick={() =>
                      item.id === "resume"
                        ? downloadPDF()
                        : handleMenuItemClick(item.id)
                    }
                  >
                    {item.id === "resume" ? (
                      <>
                        <FileDownloadOutlinedIcon className="mr-2" />
                        {item.label}
                      </>
                    ) : (
                      item.label
                    )}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HamburgerMenu;