'use client';

import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-red-700 to-gray-300 text-transparent bg-clip-text">
            About Me
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I'm a passionate engineer with a creative mindset and a strong eye for detail, specializing in crafting smooth, user-friendly interfaces. I enjoy turning complex ideas into clean, responsive web applications. With strong problem-solving skills and a love for innovation, I'm constantly seeking ways to build meaningful digital experiences that make a real impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection; 