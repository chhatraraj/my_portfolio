import React, { useState, useEffect } from "react";
import { CodeIcon } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { smoothScrollTo } from "@/src/smoothScroll";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-3 left-3 right-3 z-50 px-4 lg:px-6 h-14 flex items-center rounded-xl backdrop-blur-md bg-black/40 shadow-lg border border-gray-800">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo / Brand */}
        <a 
          href="#home" 
          className="flex items-center gap-2 group"
          onClick={(e) => {
            e.preventDefault();
            smoothScrollTo('home');
          }}
        >
          <CodeIcon className="h-6 w-6 text-red-600 transition-transform duration-300 group-hover:rotate-12" />
          <span className="text-lg font-bold bg-gradient-to-r from-red-600 to-gray-300 bg-clip-text text-transparent group-hover:brightness-125">
        
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="flex gap-5 sm:gap-6 text-center items-center">
          <a
            href="#projects"
            className="relative text-sm font-medium transition-colors duration-300 hover:text-red-500 after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo('projects');
            }}
          >
            Projects
          </a>
          <a
            href="#skills"
            className="relative text-sm font-medium transition-colors duration-300 hover:text-red-500 after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo('skills');
            }}
          >
            Skills
          </a>
          <a
            href="#contact"
            className="relative text-sm font-medium transition-colors duration-300 hover:text-red-500 after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo('contact');
            }}
          >
            Contact
          </a>

          {/* Dark / Light Mode Toggle */}
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
