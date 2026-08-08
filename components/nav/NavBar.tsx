"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Nav } from "@/types/Nav";
import ThemeToggle from "@/components/theme/ThemeToggle";

const navLinks = [
  { name: "Home", href: "#hero", section: "hero" },
  { name: "Work", href: "#work", section: "work" },
  { name: "Stack", href: "#stack", section: "stack" },
  { name: "About", href: "#about", section: "about" },
  { name: "Experience", href: "#experience", section: "experience" },
  { name: "Contact", href: "#contact", section: "contact" },
] satisfies Nav[];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const toggleMenu = () => setIsMenuOpen((v) => !v);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    section: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(section);
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].section);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClasses = (link: Nav) =>
    `relative text-sm font-medium transition-colors duration-200 py-1 ${
      activeSection === link.section
        ? "text-orange"
        : "text-foreground/70 hover:text-orange"
    } after:absolute after:left-0 after:-bottom-0.5 after:h-px after:bg-orange after:transition-all after:duration-300 ${
      activeSection === link.section ? "after:w-full" : "after:w-0 hover:after:w-full"
    }`;

  return (
    <>
      {/* Desktop / tablet navigation */}
      <nav className="fixed top-5 z-50 w-full max-w-4xl left-1/2 -translate-x-1/2 hidden md:block px-4">
        <div className="flex items-center justify-between gap-6 bg-surface/80 backdrop-blur-md border border-border rounded-full px-6 py-2.5 shadow-sm">
          <Link
            href="#hero"
            onClick={(e) => handleSmoothScroll(e, "hero")}
            className="font-mono text-xs tracking-widest text-muted"
          >
            HR
          </Link>
          <div className="flex items-center gap-5 lg:gap-8">
            {navLinks.slice(1).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.section)}
                className={linkClasses(item)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile navigation */}
      <nav className="fixed top-3 left-3 right-3 z-50 md:hidden">
        <div className="flex items-center justify-between px-4 py-3 bg-surface/90 backdrop-blur-md border border-border rounded-2xl">
          <Link
            href="#hero"
            onClick={(e) => handleSmoothScroll(e, "hero")}
            className="font-mono text-xs tracking-widest text-muted"
          >
            HR
          </Link>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="flex flex-col space-y-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span
                className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-2 bg-surface/95 backdrop-blur-md border border-border rounded-2xl">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.section)}
                className={`block py-3 text-base font-medium transition-colors duration-200 ${
                  activeSection === item.section
                    ? "text-orange"
                    : "text-foreground/70 hover:text-orange"
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
