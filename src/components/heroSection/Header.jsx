import HamburgerMenu from "../heroSection/HamburgerMenu";

import HeroSection from "./HeroSection";

function Header() {
  return (
    <div className="h-screen overflow-hidden relative  bg-gradient-to-t from-indigo-200">
      <nav className="w-full fixed top-0 z-10 backdrop-blur-md bg-white/50 ...">
        <div className="container mx-auto py-5 flex items-center justify-between">
          <span className="text-2xl font-bold  text-indigo-900">H</span>

          <ul className="hidden md:flex space-x-10 text-gray-600 font-bold text-sm uppercase">
            <li className="hover:text-gray-400">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-gray-400">
              <a href="#">About me</a>
            </li>
            <li className="hover:text-gray-400">
              <a href="#">Projects</a>
            </li>
            <li className="hover:text-gray-400">
              <a href="#">Contact me</a>
            </li>
            <li className="hover:text-gray-400">
              <a href="#">Resume</a>
            </li>
          </ul>

          <HamburgerMenu />
        </div>
      </nav>
      <HeroSection />
    </div>
  );
}

export default Header;
