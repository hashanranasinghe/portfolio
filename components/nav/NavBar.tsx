"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Nav } from "@/types/Nav";

const navLinks = [
  { name: "Home", href: "#hero", section: "#hero" },
  { name: "Project", href: "#projects", section: "#projects" },
  { name: "About Me", href: "#about", section: "#about" },
  { name: "Education", href: "#education", section: "#education" },
  { name: "Achivements", href: "#achievements", section: "#achievements" },
  { name: "My Gallery", href: "#gallery", section: "#gallery" },
  { name: "My Blog", href: "#blog", section: "#blog" },
  { name: "Contact", href: "#contact", section: "#contact" },
] satisfies Nav[];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Smooth scroll function
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    section?: string
  ) => {
    // Only handle smooth scrolling for hash links or sections on the same page
    if (href.startsWith("#") || section) {
      e.preventDefault();

      const targetSection = section || href.substring(1);
      const element = document.getElementById(targetSection);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Close mobile menu after clicking
        setIsMenuOpen(false);

        // Update active section immediately
        setActiveSection(targetSection);
      }
    } else {
      // For external links, just close the menu
      setIsMenuOpen(false);
    }
  };

  // Track scroll position and update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.section).filter(Boolean);
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Add smooth scrolling CSS to the document
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const isActiveLink = (link: Nav) => {
    if (link.section) {
      return activeSection === link.section;
    }
    return link.name === "Home" && activeSection === "#hero";
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-5 z-50 bg-black text-white rounded-full w-full max-w-6xl left-1/2 transform -translate-x-1/2 hidden lg:block">
        <div className="mx-auto px-8 flex items-center justify-between py-2">
          {/* Left Links */}
          <div className="flex items-center space-x-6 xl:space-x-10">
            {navLinks.slice(0, 4).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href, item.section)}
                className={`text-sm xl:text-lg font-medium transition-all duration-300 ${
                  isActiveLink(item)
                    ? "bg-orange-500 text-white px-4 xl:px-6 py-1 rounded-full shadow-lg"
                    : "hover:text-orange-500 hover:scale-105"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Centered Logo */}
          <div className="flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="HR Logo"
              width={100}
              height={100}
              className="w-8 h-8 xl:w-10 xl:h-10"
            />
          </div>

          {/* Right Links */}
          <div className="flex items-center space-x-6 xl:space-x-10">
            {navLinks.slice(4).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href, item.section)}
                className={`text-sm xl:text-lg font-medium transition-all duration-300 ${
                  isActiveLink(item)
                    ? "bg-orange-500 text-white px-4 xl:px-6 py-1 rounded-full shadow-lg"
                    : "hover:text-orange-500 hover:scale-105"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-3 left-3 right-3 z-50 bg-black text-white rounded-2xl lg:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="HR Logo"
              width={100}
              height={100}
              className="w-8 h-8"
            />
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="flex flex-col space-y-1 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-2 border-t border-gray-800">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href, item.section)}
                className={`block py-3 text-base font-medium transition-all duration-300 ${
                  isActiveLink(item)
                    ? "bg-orange-500 text-white px-4 py-2 rounded-full mb-2 shadow-lg"
                    : "hover:text-orange-500 hover:pl-2"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Tablet Navigation */}
      <nav className="fixed top-4 left-4 right-4 z-50 bg-black text-white rounded-2xl hidden md:block lg:hidden">
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="HR Logo"
              width={100}
              height={100}
              className="w-9 h-9"
            />
          </div>

          {/* Tablet Links */}
          <div className="flex items-center space-x-4">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href, item.section)}
                className={`text-sm font-medium transition-all duration-300 ${
                  isActiveLink(item)
                    ? "bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg"
                    : "hover:text-orange-500 hover:scale-105"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
