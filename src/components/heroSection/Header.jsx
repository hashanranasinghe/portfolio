import { useState } from "react";
import HamburgerMenu from "../heroSection/HamburgerMenu";
import HeroSection from "./HeroSection";

function Header() {
  const [selectedItem, setSelectedItem] = useState('home');

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
                <a href={`#${item.id}`} onClick={() => handleItemClick(item.id)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <HamburgerMenu />
        </div>
      </nav>
      <HeroSection />
    </div>
  );
}

export default Header;
