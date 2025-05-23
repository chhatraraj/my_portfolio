"use client";

import React from 'react';
import Link from "next/link";
import { CodeIcon } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <header className="fixed top-2 left-3 right-3 z-50 px-4 lg:px-6 h-14 flex items-center bg-gray-800 text-white shadow-[0px_1px_3px_0px_#a0aec0]">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <CodeIcon className="h-6 w-6" />
        </Link>
        <nav className="flex gap-5 sm:gap-6 text-center items-center">
          <Link
            href="#projects"
            className="text-sm font-medium transition-transform duration-200 hover:scale-105 hover:text-red-500 underline-offset-4 hover:decoration-red-500"
            prefetch={false}
          >
            Projects
          </Link>
          <Link
            href="#skills"
            className="text-sm font-medium transition-transform duration-200 hover:scale-105 hover:text-red-500 underline-offset-4"
            prefetch={false}
          >
            Skills
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium transition-transform duration-200 hover:scale-105 hover:text-red-500 underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
} 