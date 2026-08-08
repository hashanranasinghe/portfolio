import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border py-6 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm text-muted">
          &copy; {new Date().getFullYear()} Hashan Ranasinghe. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
