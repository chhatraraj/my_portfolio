'use client';

import {
  Card,
  CardHeader,
  CardBody,
} from "@nextui-org/react";
import { FaReact, FaNodeJs, FaTools } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

const SkillsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 rounded-t-lg">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">Skills</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of my recent projects that showcase my skills and expertise.
            </p>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12"
        >
          {/* Frontend */}
          <motion.div variants={itemVariants} className="h-full">
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border border-gray-700 h-full min-h-[280px]">
              <CardHeader className="flex items-center gap-3 pb-4 px-6 pt-6">
                <div className="p-3 rounded-lg bg-blue-500/10">
                  <FaReact className="text-3xl text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold">Frontend</h3>
              </CardHeader>
              <CardBody className="px-6 pb-6">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-3 text-lg">
                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                    React
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                    JavaScript
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                    HTML/CSS
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                    TypeScript
                  </li>
                </ul>
              </CardBody>
            </Card>
          </motion.div>

          {/* Backend */}
          <motion.div variants={itemVariants} className="h-full">
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border border-gray-700 h-full min-h-[280px]">
              <CardHeader className="flex items-center gap-3 pb-4 px-6 pt-6">
                <div className="p-3 rounded-lg bg-green-500/10">
                  <FaNodeJs className="text-3xl text-green-400" />
                </div>
                <h3 className="text-xl font-semibold">Backend</h3>
              </CardHeader>
              <CardBody className="px-6 pb-6">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-3 text-lg">
                    <span className="w-2 h-2 rounded-full bg-green-400"></span>
                    Node.js
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <span className="w-2 h-2 rounded-full bg-green-400"></span>
                    Express
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <span className="w-2 h-2 rounded-full bg-green-400"></span>
                    MongoDB
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <span className="w-2 h-2 rounded-full bg-green-400"></span>
                    PostgreSQL
                  </li>
                </ul>
              </CardBody>
            </Card>
          </motion.div>

          {/* Frameworks */}
          <motion.div variants={itemVariants} className="h-full">
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border border-gray-700 h-full min-h-[280px]">
              <CardHeader className="flex items-center gap-3 pb-4 px-6 pt-6">
                <div className="p-3 rounded-lg bg-purple-500/10">
                  <SiNextdotjs className="text-3xl text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold">Frameworks</h3>
              </CardHeader>
              <CardBody className="px-6 pb-6">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-3 text-lg">
                    <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                    Next.js
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                    React.js
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                    Tailwind CSS
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                    Prisma
                  </li>
                </ul>
              </CardBody>
            </Card>
          </motion.div>

          {/* Tools */}
          <motion.div variants={itemVariants} className="h-full">
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border border-gray-700 h-full min-h-[280px]">
              <CardHeader className="flex items-center gap-3 pb-4 px-6 pt-6">
                <div className="p-3 rounded-lg bg-orange-500/10">
                  <FaTools className="text-3xl text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold">Tools</h3>
              </CardHeader>
              <CardBody className="px-6 pb-6">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-3 text-lg">
                    <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                    Git
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                    GitHub
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                    Figma
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                    Docker
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                    Postman
                  </li>
                </ul>
              </CardBody>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection; 