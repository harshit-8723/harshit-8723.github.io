import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { footerLinks } from "../data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-white/10 py-6 text-white">
      <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left side: Icons */}
        <div className="flex items-center gap-6 text-xl">
          <a
            href={footerLinks.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin size={30}/>
          </a>
          <a
            href={footerLinks.email}
            className="hover:text-blue-400 transition"
          >
            <FaEnvelope size={30}/>
          </a>
        </div>

        {/* Right side: Copyright */}
        <div className="text-sm text-gray-400 text-center md:text-right w-full md:w-auto">
          © {currentYear} Harshit Bhatt | All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
