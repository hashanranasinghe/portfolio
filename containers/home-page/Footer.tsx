// components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-3 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="mt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} Hashan Ranasinghe. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;