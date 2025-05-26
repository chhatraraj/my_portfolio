'use client';

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="home" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-red-700 to-gray-300 text-transparent bg-clip-text">
                Chhatra Neupane
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
              <TypeAnimation
                sequence={[
                  "Computer Engineering Student",
                  1000,
                  "Full Stack Developer",
                  1000,
                  "React Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-red-700"
              />
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            I&apos;m a passionate engineer with a creative mindset and a strong eye for detail, specializing in crafting smooth, user-friendly interfaces. I enjoy turning complex ideas into clean, responsive web applications. With strong problem-solving skills and a love for innovation, I&apos;m constantly seeking ways to build meaningful digital experiences that make a real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://github.com/chhatraraj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              >
                <FaGithub className="mr-2 h-5 w-5" />
                GitHub
              </a>
              <a
                href="/my_cv.pdf"
                download
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              >
                Download CV
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-full h-[450px] rounded-lg overflow-hidden">
              {/* Main Image */}
              <Image
                src="/profile2 .jpg"
                alt="Chhatra Neupane"
                fill
                className="object-cover transition-transform duration-500"
                priority
              />
              {/* Coding Effect Overlay - always visible */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-700/30 to-gray-900/30 backdrop-blur-[1px] transition-all duration-500" />
              {/* Animated Code Lines - always visible */}
              <div className="absolute inset-0 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-4 left-4 text-xs text-red-400 font-mono animate-float bg-black/50 p-2 rounded">
                  <span className="text-gray-400">const</span> developer = <span className="text-yellow-400">new</span> Developer();
                </div>
                <div className="absolute top-12 left-4 text-xs text-red-400 font-mono animate-float-delay-1 bg-black/50 p-2 rounded">
                  developer.<span className="text-blue-400">skills</span> = [<span className="text-green-400">'React'</span>, <span className="text-green-400">'Next.js'</span>];
                </div>
                <div className="absolute bottom-12 right-4 text-xs text-red-400 font-mono animate-float-delay-2 bg-black/50 p-2 rounded">
                  <span className="text-purple-400">async</span> <span className="text-blue-400">function</span> <span className="text-yellow-400">build</span>() {'{'}
                </div>
                <div className="absolute bottom-4 right-4 text-xs text-red-400 font-mono animate-float-delay-3 bg-black/50 p-2 rounded">
                  <span className="text-gray-400">return</span> <span className="text-green-400">'awesome'</span>;
                </div>
              </div>
              {/* Glowing Border Effect */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent transition-all duration-500 shadow-[0_0_15px_rgba(185,28,28,0.3)]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
